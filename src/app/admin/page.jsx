import Link from 'next/link';
import dbConnect from '@/lib/db';
import Post from '@/models/Post';
import DeleteButton from './DeleteButton';
import LogoutButton from './LogoutButton';

export const dynamic = 'force-dynamic'; // Admin page should always be fresh

export default async function AdminPage() {
    await dbConnect();
    const posts = await Post.find({}).sort({ createdAt: -1 });

    return (
        <div className="container mx-auto p-8 max-w-5xl text-black mt-24">
            <div className="flex justify-between items-center mb-8 border-b pb-4">
                <h1 className="text-3xl font-bold">Blog Admin</h1>
                <LogoutButton />
            </div>

            <div className="mb-6">
                <Link
                    href="/admin/create"
                    className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors inline-block"
                >
                    Create New Post
                </Link>
            </div>

            <div className="bg-white shadow rounded-lg overflow-hidden border">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Slug</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {posts.map((post) => (
                            <tr key={post._id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-900">{post.title}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-500">{post.slug}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-500">
                                        {new Date(post.createdAt).toLocaleDateString()}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <Link href={`/admin/edit/${post._id}`} className="text-indigo-600 hover:text-indigo-900 mr-4">
                                        Edit
                                    </Link>
                                    <DeleteButton id={post._id.toString()} />
                                </td>
                            </tr>
                        ))}
                        {posts.length === 0 && (
                            <tr>
                                <td colSpan="4" className="px-6 py-4 text-center text-gray-500">
                                    No posts found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
