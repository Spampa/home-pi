"use client"

import React from "react"
import { FormEvent, useState, useEffect } from 'react';

import { TextInput } from "./textInput"
import { PencilSquareIcon, XCircleIcon, LockClosedIcon, CheckCircleIcon } from "@heroicons/react/24/solid"
import { IconButton } from "./buttons/iconButton"
import { PrimaryButton } from "./buttons/primaryButton"
import { PrimarySelect } from "./select";

interface UserModalProps {
    isOpen: boolean
    closeModal: () => void
}

export const UserModal: React.FC<UserModalProps> = ({ isOpen, closeModal }) => {

    const [roles, setRoles] = useState([]);

    //fetching roles
    useEffect(() => {
        fetch('/api/roles')
            .then(response => response.json())
            .then(data => setRoles(data))
    }, [])

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const username = formData.get('username');
        const password = formData.get('password');
        const checkPassword = formData.get('checkPassword');
        const role = formData.get('role');

        if (password !== checkPassword) {
            //TODO: add banner
            return console.log('Password dismatch')
        }
        const response = await fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(
                {
                    username, 
                    password, 
                    role
                }
            )
        });
        if(response.ok){
            closeModal();
        }
    }

    if (isOpen) {
        return (
            <div
                className="absolute top-0 h-screen flex items-center place-content-center w-screen bg-black bg-opacity-65"
            >
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col items-center place-content-between gap-3 p-3 bg-orange-900 rounded-md shadow-md h-2/5 m-5 w-full md:w-1/2 xl:w-1/3"
                >
                    <div className="flex flex-row place-content-between w-full align-middle">
                        <h2 className="text-xl font-semibold">New User</h2>
                        <IconButton action={closeModal} icon={<XCircleIcon />} />
                    </div>
                    <div className="w-full flex flex-col gap-2 ">
                        <TextInput name="username" label="Username" type="text" icon={<PencilSquareIcon />} required={true} />
                        <PrimarySelect name="role" label="Select Role" elements={roles} />
                        <TextInput name="password" label="Password" type="password" icon={<LockClosedIcon />} required={true} />
                        <TextInput name="checkPassword" label="Repeat Password" type="password" icon={<CheckCircleIcon />} required={true} />
                    </div>
                    <PrimaryButton label="Crea" type='submit' />
                </form>
            </div>
        )
    }
}