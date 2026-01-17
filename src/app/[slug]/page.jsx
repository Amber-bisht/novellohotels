import dbConnect from '@/lib/db';
import Post from '@/models/Post';
import { notFound } from 'next/navigation';
import parse from 'html-react-parser';
import Image from 'next/image';

// Force static generation for known paths, allow on-demand for others (ISR/SSR hybrid effect)
export const dynamicParams = true;
// export const revalidate = 60; // Removed for On-Demand Revalidation

export async function generateStaticParams() {
    await dbConnect();
    try {
        const posts = await Post.find({}, 'slug');
        return posts.map((post) => ({
            slug: post.slug,
        }));
    } catch (error) {
        console.error('Error fetching slugs for static params:', error);
        return [];
    }
}

export async function generateMetadata({ params }) {
    await dbConnect();
    const { slug } = await params;

    const post = await Post.findOne({ slug });

    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    return {
        title: `${post.title} | Novello Hotels`,
        description: post.content.substring(0, 160).replace(/<[^>]*>?/gm, ''), // Strip HTML for meta desc
        openGraph: {
            images: post.image ? [post.image] : [],
        }
    };
}

export default async function BlogPostPage({ params }) {
    await dbConnect();
    // Await params as required in Next.js 15
    const { slug } = await params;

    const post = await Post.findOne({ slug });

    if (!post) {
        notFound();
    }

    return (
        <article className="container mx-auto max-w-4xl py-12 px-6">
            {/* Use a wrapper to apply styles to the HTML content from the editor */}
            {post.image && (
                <div className="mb-8 w-full h-[400px] relative rounded-xl overflow-hidden shadow-lg">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            )}

            <header className="mb-8 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">{post.title}</h1>
                <p className="text-gray-500">
                    Published on {new Date(post.createdAt).toLocaleDateString()}
                </p>
            </header>

            <div className="prose prose-lg max-w-none text-gray-800">
                {parse(post.content)}
            </div>
        </article>
    );
}
