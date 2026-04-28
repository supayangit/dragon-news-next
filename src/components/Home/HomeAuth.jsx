import React from 'react';
import { FaGoogle, FaGithub } from "react-icons/fa";

const HomeAuth = () => {
    return (
        <div className='flex flex-col gap-3 justify-center items-center text-center'>
            <button className='btn font-bold flex justify-center items-center gap-2 border border-gray-300 rounded-box p-2 w-full'><FaGoogle /> Login with Google</button>
            <button className='btn font-bold flex justify-center items-center gap-2 border border-gray-300 rounded-box p-2 w-full'><FaGithub /> Login with Github</button>
        </div>
    );
};

export default HomeAuth;