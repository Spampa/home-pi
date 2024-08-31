import 'server-only'
import { SessionPayload } from './definitions';
import { cookies } from 'next/headers';
import { SignJWT, jwtVerify } from 'jose';

const secret = process.env.SESSION_SECRET || 'defaultSecret';
const encodedKey = new TextEncoder().encode(secret)

export async function encrypt(payload: SessionPayload) {
    return new SignJWT(payload)
    .setProtectedHeader({alg: 'HS256'})
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(encodedKey)
}
    

export async function decrypt(session: string | undefined = ''){
    try{
        const { payload } = await jwtVerify(session, encodedKey, {
            algorithms: ['HS256']
        })
        return payload;
    }
    catch(e){
        console.log('Failed to verify session')
    }
}

export async function createSession(username: string, role: string) {
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);
    const session = await encrypt({ username, role, expiresAt });

    cookies().set('session', session, {
        httpOnly: true,
        secure: true,
        expires: expiresAt,
        sameSite: 'lax',
        path: '/'
    })
}

export async function deleteSession() {
    cookies().delete('session');
}