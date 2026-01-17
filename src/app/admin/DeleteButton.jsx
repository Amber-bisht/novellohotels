'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function DeleteButton({ id }) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleDelete = async () => {
        if (!confirm('Are you sure you want to delete this post?')) return;

        setLoading(true);
        try {
            const res = await fetch(`/api/posts/${id}`, {
                method: 'DELETE',
            });

            if (res.ok) {
                router.refresh(); // Refresh (re-fetch) the server component
            } else {
                alert('Failed to delete post');
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <button
            onClick={handleDelete}
            disabled={loading}
            className="text-red-600 hover:text-red-900 disabled:opacity-50"
        >
            {loading ? 'Deleting...' : 'Delete'}
        </button>
    );
}
