import axios from 'axios';
import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log({ email, password });

        try {
            const response = await axios.post('http://localhost:4000/user/login', {
                email,
                password
            });
            setMessage(response.data.message);
            setError(null);
            alert('Login successful!');

            const token = response.data.token; 
            if (token) {
                localStorage.setItem('token', token);
            }

        } catch (error) {
            console.log(error);
            setError(error.response?.data?.message || 'Login failed. Please try again.');
            setMessage(null);
            alert('Login failed. Please try again.');
        }
    };

    return (
        <div className="container mx-auto mt-[80px]">
            <h1 className="text-2xl text-center mb-7 font-bold">Login</h1>

            <form onSubmit={handleLogin} className="w-full max-w-lg mx-auto bg-white p-8 rounded-lg shadow-2xl shadow-gray-500/50 h-[400px]">
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Email</label>
                    <input
                        type="email"
                        className="w-full p-4 border border-gray-300 rounded-md"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Password</label>
                    <input
                        type="password"
                        className="w-full p-4 border border-gray-300 rounded-md"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full text-white font-bold py-4 px-5 rounded-md bg-blue-700 transition duration-200 mt-4"
                >
                    Log In
                </button>

                {message && <p className="text-green-500 mt-4">{message}</p>}
                {error && <p className="text-red-500 mt-4">{error}</p>}
            </form>
        </div>
    );
};

export default Login;
