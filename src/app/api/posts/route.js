import dbConnect from '@/lib/db';
import Post from '@/models/Post';
import { NextResponse } from 'next/server';
import slugify from 'slugify';
import { cookies } from 'next/headers';
import { verifyToken } from '@/lib/auth';
import { revalidatePath } from 'next/cache';

export async function GET() {
    await dbConnect();

    try {
        const posts = await Post.find({}).sort({ createdAt: -1 });
        return NextResponse.json({ success: true, data: posts });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}

export async function POST(request) {
    await dbConnect();

    const cookieStore = await cookies();
    const token = cookieStore.get('admin_token')?.value;

    // Simple check for presence first, then verification
    if (!token) {
        return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    const payload = await verifyToken(token);
    if (!payload || payload.role !== 'admin') {
        return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const body = await request.json();

        // Auto-generate slug if not provided, or ensure provided slug is slugified
        let slug = body.slug;
        if (!slug && body.title) {
            slug = slugify(body.title, { lower: true, strict: true });
        } else if (slug) {
            slug = slugify(slug, { lower: true, strict: true });
        }

        // Check for duplicate slug
        const existingPost = await Post.findOne({ slug });
        if (existingPost) {
            // Append a random number or timestamp to make it unique
            slug = `${slug}-${Date.now()}`;
        }

        const post = await Post.create({ ...body, slug });

        // On-demand revalidation
        revalidatePath('/[slug]', 'page'); // Revalidate all blog posts
        revalidatePath('/'); // Revalidate home/list if applicable

        return NextResponse.json({ success: true, data: post }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}
