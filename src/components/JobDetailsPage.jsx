import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const JobDetailPage = () => {
    const { jobId } = useParams();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [resume, setResume] = useState(null);
    const [details, setDetails] = useState({ name: '', email: '', answer: '' });

    const jobs = [
        {
            id: 1,
            title: 'Python Developer',
            company: 'Dream Marvel Startups Private Limited',
            location: 'Work from home',
            experience: '0 years',
            salary: '$ 20,000 - 40,000',
            posted: 'Just now',
            type: 'Fresher Job',
        },
        {
            id: 2,
            title: 'Frontend Developer',
            company: 'Tech Innovators Ltd.',
            location: 'Delhi',
            experience: '1-2 years',
            salary: '$ 30,000 - 50,000',
            posted: '1 day ago',
            type: 'Full-time',
        },
        {
            id: 3,
            title: 'Backend Developer',
            company: 'Startup Hub Solutions',
            location: 'Mumbai',
            experience: '1 year',
            salary: '$ 25,000 - 45,000',
            posted: '2 days ago',
            type: 'Full-time',
        },
        {   id: 4,
            title: 'React Developer',
            company: 'Bright Tech',
            location: 'Work from home',
            experience: '0-1 year',
            salary: '$ 22,000 - 42,000',
            posted: 'Just now',
            type: 'Fresher Job',
        },
        {   id: 5,
            title: 'UI/UX Designer',
            company: 'Creative Labs',
            location: 'Bangalore',
            experience: '2-3 years',
            salary: '$ 35,000 - 55,000',
            posted: '3 days ago',
            type: 'Full-time',
        },
        {   id: 6,
            title: 'DevOps Engineer',
            company: 'OpsPro Solutions',
            location: 'Hyderabad',
            experience: '3-5 years',
            salary: '$ 40,000 - 60,000',
            posted: '4 days ago',
            type: 'Full-time',
        },

    ];

    const job = jobs.find((job) => job.id === parseInt(jobId));

    const handleApplyClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleInputChange = (e) => {
        setDetails({
            ...details,
            [e.target.name]: e.target.value,
        });
    };

    const handleFileChange = (e) => {
        setResume(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted Application:', details, resume);
        setIsModalOpen(false);
        alert('Application submitted successfully!');
    };

    return (
        <div className="md:container md:mx-auto flex justify-center mt-10 mb-10">
            {job ? (
               <div className="border border-gray-300 p-4 rounded-lg shadow-md w-[700px] text-center">
                    <h1 className="text-2xl font-semibold">{job.title}</h1>
                    <p 	className="text-align: center;">{job.company}</p>
                    <p>{job.location}</p>
                    <p>{job.experience}</p>
                    <p>{job.salary}</p>
                    <p>{job.posted}</p>
                    <p className="text-green-600 font-semibold">{job.type}</p>
                    <p className="mt-4">{job.description}</p>
                    <button
                        onClick={handleApplyClick}
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Apply Now
                    </button>
                </div>
            ) : (
                <p>Job not found.</p>
            )}

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
                        <h2 className="text-xl font-semibold mb-4">Apply for {job.title}</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block font-medium mb-1">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={details.name}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 rounded px-2 py-1"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block font-medium mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={details.email}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 rounded px-2 py-1"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block font-medium mb-1">Upload Resume</label>
                                <input
                                    type="file"
                                    onChange={handleFileChange}
                                    className="w-full border border-gray-300 rounded px-2 py-1"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block font-medium mb-1">Why should we hire you?</label>
                                <textarea
                                    name="answer"
                                    value={details.answer}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 rounded px-2 py-1"
                                    rows="4"
                                    required
                                />
                            </div>

                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={handleCloseModal}
                                    className="text-red-500 mr-4"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-4 py-2 rounded"
                                >
                                    Submit Application
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default JobDetailPage;
