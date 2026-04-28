'use client'
import React from 'react';
import Link from 'next/link';
import { useForm } from "react-hook-form"

const RegisterPage = () => {
    const {register, handleSubmit, formState: {errors}, watch } = useForm();
    const handleRegister = (data) => {
        console.log(data, "data");

    }
    console.log(watch("email"));

    return (
        <div className='h-full space-y-8 flex flex-col items-center justify-center gap-2 bg-white rounded-box p-4'>
            <h1 className="text-2xl font-bold">Register for an account</h1>
            <form className='shadow-sm p-4 rounded-box' onSubmit={handleSubmit(handleRegister)}>
                <div className='space-y-3'>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Name</legend>
                        <input type="text" name="name" className="input" placeholder="Your name" {...register("name", { required: "Name is required" })} />
                        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                        <legend className="fieldset-legend">Photo URL</legend>
                        <input type="text" name="photoUrl" className="input" placeholder="Your photo URL" {...register("photoUrl", { required: "Photo URL is required" })} />
                        {errors.photoUrl && <p className="text-red-500">{errors.photoUrl.message}</p>}
                        <legend className="fieldset-legend">Email</legend>
                        <input type="email" name="email" className="input" placeholder="Your email" {...register("email", { required: "Email is required" })} />
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                        <legend className="fieldset-legend">Password</legend>
                        <input type="password" name="password" className="input" placeholder="Your password" {...register("password", { required: "Password is required" })} />
                        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                    </fieldset>
                    <button className='btn bg-slate-800 text-white w-full'>Register</button>
                </div>
                <p>
                    Already have an account? <Link href="/login" className='text-blue-500'>Login here</Link>
                </p>
            </form>
        </div>
    );
};

export default RegisterPage;