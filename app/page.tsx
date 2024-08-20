"use client"

import { TextInput } from '@/components/textInput';
import { PrimaryButton } from '@/components/primaryButton';

//icons
import { UserIcon, LockClosedIcon } from '@heroicons/react/24/solid';

export default function Login() {
    return(
        <div className="h-screen w-screen flex place-content-center items-center">
            <div className="flex flex-col gap-6 p-6 rounded-md border-2 border-blue-400">
                <h1 className='text-center text-xl font-bold'>HomePi</h1>
                <div className='flex flex-col gap-2'>
                    <TextInput type='text' label="Username" icon={<UserIcon />} />
                    <TextInput type='password' label="Password" icon={<LockClosedIcon />} />
                </div>
                <PrimaryButton label='Accedi' action={() => {console.log("Accesso")}} />
            </div>
        </div>
    )
}