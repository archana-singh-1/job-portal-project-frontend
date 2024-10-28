import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Logout = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            const token = localStorage.getItem('token'); 
            if (!token) {
                console.error('No token found'); 
                return; 
            }

            const response = await axios.post('http://localhost:4000/user/logout', {}, {
                headers: {
                    Authorization: `Bearer ${token}` 
                }
            });
            console.log('Logout response:', response.data); 

            localStorage.removeItem('token');
            localStorage.removeItem('user');
            setIsLoggedIn(false); 
            navigate('/login'); 
        } catch (error) {
            console.error('Logout error:', error); 
            alert('Logout failed. Please try again.');
        }
    };

    const handleCancel = () => {
        navigate('/');
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
                <h2 className="text-center text-3xl font-semibold text-gray-800 mb-6">Logout Confirmation</h2>
                <p className="text-gray-600 text-center mb-6">Are you sure you want to log out? You will need to log in again to access your account.</p>
                <div className="flex justify-between">
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 ease-in-out"
                    >
                        Yes, Log Out
                    </button>
                    <button
                        onClick={handleCancel}
                        className="bg-gray-300 hover:bg-gray-400 text-black font-semibold py-2 px-4 rounded-lg transition duration-200 ease-in-out"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div >
    );
};

export default Logout;