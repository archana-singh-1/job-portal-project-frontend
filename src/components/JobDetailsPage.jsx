import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const JobDetailPage = () => {
    const { jobId } = useParams();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [resume, setResume] = useState(null);
    const [details, setDetails] = useState({ name: '', email: '', answer: '' });
    const [job, setJob] = useState(null);

    useEffect(() => {
        if (jobId) {  
            const fetchJobDetails = async () => {
                try {
                    const response = await fetch(`https://job-portal-project-theta.vercel.app/api/employer/jobs/${jobId}`);
                    if (!response.ok) throw new Error("Network response was not ok");
                    const data = await response.json();
                    console.log("Fetched Job Details:", data);  
                    setJob(data);
                } catch (error) {
                    console.error("Error fetching job details:", error);
                }
            };
    
            fetchJobDetails();
        }
    }, [jobId]);

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
                    <h1 className="text-2xl font-semibold">{job.title || "Title not available"}</h1>
                    <p>{job.employerId?.name || "Employer information not available"}</p>
                    <p className="mt-4">{job.description || "Description not available"}</p>
                    <button
                        onClick={handleApplyClick}
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Apply Now
                    </button>
                </div>
            ) : (
                <p>Loading job details...</p>
            )}

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
                        <h2 className="text-xl font-semibold mb-4">Apply for {job?.title}</h2>
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
