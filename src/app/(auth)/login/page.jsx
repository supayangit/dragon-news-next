'use client'
import React from 'react';
import Link from 'next/link';
import { useForm } from "react-hook-form"

const LoginPage = () => {
    const {register, handleSubmit, formState: {errors}, watch } = useForm();
    const handleLogin = (data) => {
        console.log(data, "data");

    }
    console.log(watch("email"));

    return (
        <div className='h-full space-y-8 flex flex-col items-center justify-center gap-2 bg-white rounded-box p-4'>
            <h1 className="text-2xl font-bold">Login with your account</h1>
            <form className='shadow-sm p-4 rounded-box' onSubmit={handleSubmit(handleLogin)}>
                <div className='space-y-3'>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email</legend>
                        <input type="email" name="email" className="input" placeholder="your email" {...register("email", { required: "Email is required" })} />
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                        <legend className="fieldset-legend">Password</legend>
                        <input type="password" name="password" className="input" placeholder="your password" {...register("password", { required: "Password is required" })} />
                        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                    </fieldset>
                    <button className='btn bg-slate-800 text-white w-full'>Login</button>
                </div>
                <p>
                    Don&apos;t have an account? <Link href="/register" className='text-blue-500'>Register here</Link>
                </p>
            </form>
        </div>
    );
};

export default LoginPage;