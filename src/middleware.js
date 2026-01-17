import { NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';

export async function middleware(request) {
    const path = request.nextUrl.pathname;

    // Define paths that are protected
    // We protect /admin and all subpaths EXCEPT /admin/login
    if (path.startsWith('/admin') && path !== '/admin/login') {
        const token = request.cookies.get('admin_token')?.value;

        if (!token) {
            return NextResponse.redirect(new URL('/admin/login', request.url));
        }

        const payload = await verifyToken(token);
        if (!payload) {
            // Token invalid or expired
            const response = NextResponse.redirect(new URL('/admin/login', request.url));
            response.cookies.delete('admin_token');
            return response;
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/admin/:path*',
};
