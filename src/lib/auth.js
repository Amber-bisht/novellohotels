import { SignJWT, jwtVerify } from 'jose';

const secretKey = process.env.JWT_SECRET;
const key = new TextEncoder().encode(secretKey);

export async function signToken(payload) {
    if (!secretKey) {
        throw new Error('JWT_SECRET is not defined in environment variables');
    }
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('24h') // Token expires in 24 hours
        .sign(key);
}

export async function verifyToken(token) {
    if (!secretKey) {
        throw new Error('JWT_SECRET is not defined in environment variables');
    }
    try {
        const { payload } = await jwtVerify(token, key, {
            algorithms: ['HS256'],
        });
        return payload;
    } catch (error) {
        return null;
    }
}
