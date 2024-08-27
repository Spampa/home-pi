import 'server-only'

import { cookies } from 'next/headers'
import { decrypt } from './session'
import { redirect } from 'next/navigation';

export async function verifySession() {
    const cookie = cookies().get('session')?.value;
    const session = await decrypt(cookie);

    if(session?.username && session?.role){
        return { isAuth: true, username: session.username, role: session.role }
    }
    else{
        redirect('/login');
    }
}