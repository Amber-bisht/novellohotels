'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import 'react-quill-new/dist/quill.snow.css'; // Import styles

// Dynamic import for ReactQuill to avoid SSR issues
const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

export default function PostForm({ initialData = null }) {
    const router = useRouter();
    const [formData, setFormData] = useState({
        title: initialData?.title || '',
        slug: initialData?.slug || '',
        image: initialData?.image || '',
        content: initialData?.content || '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleContentChange = (content) => {
        setFormData((prev) => ({ ...prev, content }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const url = initialData
                ? `/api/posts/${initialData._id}`
                : '/api/posts';
            const method = initialData ? 'PUT' : 'POST';

            const res = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || 'Something went wrong');
            }

            router.push('/admin');
            router.refresh();
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow border text-black">
            {error && (
                <div className="bg-red-50 text-red-500 p-4 rounded mb-4">
                    {error}
                </div>
            )}

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Slug (Optional - auto-generated from title if empty)</label>
                <input
                    type="text"
                    name="slug"
                    value={formData.slug}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="my-blog-post-slug"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Cover Image URL</label>
                <input
                    type="text"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="https://example.com/image.jpg"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                <div className="h-64 mb-12">
                    <ReactQuill
                        theme="snow"
                        value={formData.content}
                        onChange={handleContentChange}
                        className="h-full"
                    />
                </div>
            </div>

            <div className="flex justify-end pt-6">
                <button
                    type="button"
                    onClick={() => router.back()}
                    className="mr-4 px-4 py-2 text-gray-600 hover:text-gray-900"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 disabled:opacity-50"
                >
                    {loading ? 'Saving...' : (initialData ? 'Update Post' : 'Create Post')}
                </button>
            </div>
        </form>
    );
}
