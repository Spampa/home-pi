"use client"
import { FormEvent } from 'react';
import { useRouter } from 'next/navigation'

//components
import { TextInput } from '@/app/components/textInput';
import { PrimaryButton } from '@/app/components/primaryButton';

//icons
import { UserIcon, LockClosedIcon } from '@heroicons/react/24/solid';

export default function Login() {
    const router = useRouter();

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const username = formData.get('username');
        const password = formData.get('password');

        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify({ username, password })
        });

        if (response.ok) {
            localStorage.setItem('user', await response.text());
            router.push('/')
        } else {
            //TODO: Handle errors
        }
    }


    return (
        <div className="h-screen w-screen flex place-content-center items-center">
            <form
                onSubmit={handleSubmit} className="flex flex-col gap-6 p-6 rounded-md border-2 border-blue-400">
                <h1 className='text-center text-xl font-bold'>HomePi</h1>
                <div className='flex flex-col gap-2'>
                    <TextInput name='username' type='text' label="Username" required={true} icon={<UserIcon />} />
                    <TextInput name='password' type='password' label="Password" required={true} icon={<LockClosedIcon />} />
                </div>
                <PrimaryButton label='Accedi' type='submit' />
            </form>
        </div>
    )
}