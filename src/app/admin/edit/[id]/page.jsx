import dbConnect from '@/lib/db';
import Post from '@/models/Post';
import PostForm from '../../PostForm';
import { notFound } from 'next/navigation';

export default async function EditPostPage({ params }) {
    await dbConnect();
    const { id } = await params;

    let post = null;
    try {
        post = await Post.findById(id);
    } catch (e) {
        // Handle invalid ID format
    }

    if (!post) {
        notFound();
    }

    // Convert to plain object to avoid warning about parsing Mongoose object
    const postData = JSON.parse(JSON.stringify(post));

    return (
        <div className="container mx-auto p-8 max-w-4xl">
            <h1 className="text-3xl font-bold mb-8 text-black">Edit Post</h1>
            <PostForm initialData={postData} />
        </div>
    );
}
