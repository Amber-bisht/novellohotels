import dbConnect from '@/lib/db';
import Post from '@/models/Post';
import { NextResponse } from 'next/server';
import slugify from 'slugify';
import { cookies } from 'next/headers';
import { verifyToken } from '@/lib/auth';
import { revalidatePath } from 'next/cache';

export async function GET(request, { params }) {
    await dbConnect();
    const { id } = await params;

    try {
        const post = await Post.findById(id);
        if (!post) {
            return NextResponse.json({ success: false, error: 'Post not found' }, { status: 404 });
        }
        return NextResponse.json({ success: true, data: post });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}

export async function PUT(request, { params }) {
    await dbConnect();

    const cookieStore = await cookies();
    const token = cookieStore.get('admin_token')?.value;

    if (!token) {
        return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    const payload = await verifyToken(token);
    if (!payload || payload.role !== 'admin') {
        return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;

    try {
        const body = await request.json();

        // If title is being updated but not slug, maybe we should update slug too? 
        // Usually changing slug breaks SEO, so let's only update slug if explicitly asked or if it's a new draft.
        // For now, let's keep it simple: if slug is provided, update it.
        if (body.slug) {
            body.slug = slugify(body.slug, { lower: true, strict: true });
            // Check for duplicate slug excluding current post
            const existingPost = await Post.findOne({ slug: body.slug, _id: { $ne: id } });
            if (existingPost) {
                return NextResponse.json({ success: false, error: 'Slug already exists' }, { status: 400 });
            }
        }

        const post = await Post.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        });

        if (!post) {
            return NextResponse.json({ success: false, error: 'Post not found' }, { status: 404 });
        }

        // On-demand revalidation
        revalidatePath(`/${post.slug}`);
        revalidatePath('/');

        return NextResponse.json({ success: true, data: post });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}

export async function DELETE(request, { params }) {
    await dbConnect();

    const cookieStore = await cookies();
    const token = cookieStore.get('admin_token')?.value;

    if (!token) {
        return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    const payload = await verifyToken(token);
    if (!payload || payload.role !== 'admin') {
        return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;

    try {
        const deletedPost = await Post.deleteOne({ _id: id });
        if (!deletedPost) {
            return NextResponse.json({ success: false, error: 'Post not found' }, { status: 404 });
        }

        // On-demand revalidation
        revalidatePath('/');
        // Note: We can't easily revalidate the deleted page itself (and it shouldn't exist ideally), 
        // but revalidating list is key.

        return NextResponse.json({ success: true, data: {} });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}
