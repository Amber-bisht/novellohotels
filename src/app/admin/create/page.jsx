import PostForm from '../PostForm'; // Adjust path if needed

export default function CreatePostPage() {
    return (
        <div className="container mx-auto p-8 max-w-4xl">
            <h1 className="text-3xl font-bold mb-8 text-black">Create New Post</h1>
            <PostForm />
        </div>
    );
}
