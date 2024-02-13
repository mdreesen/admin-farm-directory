'use client';
import { useEffect, useState } from 'react';

export default function LocationMessage() {

    const [isMessage, setIsMessage] = useState(false)

    useEffect(() => {
        const localStorageLocationEnabled = localStorage.getItem("Location Enabled") === 'true';
        setIsMessage(localStorageLocationEnabled)
    }, []);

    return !isMessage && <span className="flex text-black text-center">Location is disabled, enable for better search results.</span>
}
