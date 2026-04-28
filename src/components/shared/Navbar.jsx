import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import UserIcon from '../../assets/user.png';

const Navbar = () => {
    return (
        <div className="relative flex items-center">
            <div className="absolute left-1/2 -translate-x-1/2 flex gap-4">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </div>
            <button className="ml-auto btn font-bold flex justify-center items-center gap-2 border border-gray-300 rounded-box p-3"> 
                <Image src={UserIcon} width={32} height={32} alt="User" className=""></Image>
                <Link href="/login">Log In</Link>
            </button>
        </div>
    );
};

export default Navbar;