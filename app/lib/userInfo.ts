'use client'

export function userInfo() {
    if (typeof window !== "undefined") { 
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null
    }
}