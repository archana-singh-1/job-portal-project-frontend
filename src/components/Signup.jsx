import React from 'react';

const Signup = () => {
    return (
        <div className="container mx-auto mt-40">
            <h1 className="text-2xl text-center mb-7 font-bold">Signup</h1>

            <form className="w-full max-w-lg mx-auto bg-white p-8 rounded-lg shadow-2xl shadow-gray-500/50 h-[500px]"> 
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Name</label>
                    <input
                        type="text"
                        className="w-full p-4 border border-gray-300 rounded-md"
                        placeholder="Enter your name"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Email</label>
                    <input
                        type="email"
                        className="w-full p-4 border border-gray-300 rounded-md"
                        placeholder="Enter your email"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Password</label>
                    <input
                        type="password"
                        className="w-full p-4 border border-gray-300 rounded-md"
                        placeholder="Enter your password"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full text-white font-bold py-4 px-5 rounded-md bg-blue-700 transition duration-200 mt-4"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default Signup;
