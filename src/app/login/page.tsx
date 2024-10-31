'use client'
import { useUserContext } from '@/context/Provider';
import { IUserData } from '@/types/type';
import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react';

const LoginPage = () => {
    const { setUserData } = useUserContext();
    const [isLogin, setIsLogin] = useState(true);
    const toggleForm = () => setIsLogin(!isLogin);
    const [formData, setFormData] = useState<IUserData>({
        first_name: '',
        second_name: '',
        email: '',
        password: '',
    });

    const router = useRouter();

    const handleSignUpForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const existingData = JSON.parse(localStorage.getItem("Users Data") || "[]");
        const updatedData = [...existingData, formData];
        localStorage.setItem("Users Data", JSON.stringify(updatedData));
        setIsLogin(true)
        setFormData({});
    }

    const handleLogInForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const existingData = JSON.parse(localStorage.getItem("Users Data") || "[]");
        const user = existingData.find(
            (u: IUserData) => u.email === formData.email && u.password === formData.password
        );
        if (user) {
            // console.log("User logged in:", user);
            setFormData({});
            setUserData(user);
            router.push('/');
        } else {
            alert("Invalid email or password");
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-[93vh] bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-center text-gray-700">
                    {isLogin ? 'Login' : 'Sign Up'}
                </h2>

                {isLogin ? (
                    <form className="space-y-4" onSubmit={handleLogInForm}>
                        <div>
                            <label className="block text-sm font-medium text-gray-600">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-cta"
                                name='email'
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600">Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-cta"
                                name='password'
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            />
                        </div>
                        <button type='submit' className="w-full py-2 text-white bg-cta rounded-md hover:bg-ctaHover">
                            Login
                        </button>
                    </form>
                ) : (
                    <form className="space-y-4" onSubmit={handleSignUpForm}>
                        <div>
                            <label className="block text-sm font-medium text-gray-600">First Name</label>
                            <input
                                type="text"
                                placeholder="Enter your first name"
                                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-cta"
                                name='first_name'
                                value={formData?.first_name}
                                onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600">Last Name</label>
                            <input
                                type="text"
                                placeholder="Enter your last name"
                                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-cta"
                                name='second_name'
                                value={formData.second_name}
                                onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-cta"
                                name='email'
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600">Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-cta"
                                name='password'
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                            />
                        </div>

                        <button type='submit' className="w-full py-2 text-white bg-cta rounded-md hover:bg-ctaHover">
                            Sign Up
                        </button>
                    </form>
                )}

                <div className="text-center">
                    <p className="text-sm text-gray-600">
                        {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
                        <button
                            onClick={toggleForm}
                            className="text-cta hover:underline focus:outline-none"
                        >
                            {isLogin ? 'Sign Up' : 'Login'}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
