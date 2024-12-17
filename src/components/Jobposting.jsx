import React, { useState } from 'react';
import axios from 'axios';

const JobPosting = () => {
    const [jobTitle, setJobTitle] = useState('');
    const [salary, setSalary] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);

    const handleJobPost = async (e) => {
        e.preventDefault();
    
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                alert('Please log in to post a job.');
                return;
            }
    
            const jobData = { jobTitle, salary, location, description };
            console.log('Sending job data:', jobData);
    
            const response = await axios.post(
                'https://job-portal-project-theta.vercel.app/api/employer/jobs',
                jobData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
    
            console.log('API Response:', response.data);
            setMessage('Job posted successfully!');
            setError(null);
            setJobTitle('');
            setSalary('');
            setLocation('');
            setDescription('');
        } catch (error) {
            console.error('Error posting job:', error.response || error);
            setError(
                error.response?.data?.message || 'Failed to post job. Please try again.'
            );
            setMessage(null);
        }
    };
    
    return (
        <div className="container mx-auto mt-[80px]">
            <h1 className="text-2xl text-center mb-7 font-bold">Post a Job</h1>
            <form
                onSubmit={handleJobPost}
                className="w-full max-w-lg mx-auto bg-white p-8 rounded-lg shadow-2xl shadow-gray-500/50"
            >
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Job Title</label>
                    <input
                        type="text"
                        className="w-full p-4 border border-gray-300 rounded-md"
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                        placeholder="Enter job title"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Salary</label>
                    <input
                        type="text"
                        className="w-full p-4 border border-gray-300 rounded-md"
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                        placeholder="Enter salary"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Location</label>
                    <input
                        type="text"
                        className="w-full p-4 border border-gray-300 rounded-md"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Enter location"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Description</label>
                    <textarea
                        className="w-full p-4 border border-gray-300 rounded-md"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter job description"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full text-white font-bold py-4 px-5 rounded-md bg-blue-700 transition duration-200 mt-4"
                >
                    Post Job
                </button>

                {message && <p className="text-green-500 mt-4">{message}</p>}
                {error && <p className="text-red-500 mt-4">{error}</p>}
            </form>
        </div>
    );
};

export default JobPosting;
