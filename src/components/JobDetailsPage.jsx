import React from 'react';
import { useParams } from 'react-router-dom';

const JobDetailPage = () => {
    const { jobId } = useParams();

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
            description: 'Python Developer job details here...',
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
            description: 'Frontend Developer job details here...',
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

    return (
        <div className="container mx-auto p-6">
            {job ? (
                <div className="border border-gray-300 p-4 rounded-lg shadow-md">
                    <h1 className="text-2xl font-semibold">{job.title}</h1>
                    <p>{job.company}</p>
                    <p>{job.location}</p>
                    <p>{job.experience}</p>
                    <p>{job.salary}</p>
                    <p>{job.posted}</p>
                    <p className="text-green-600 font-semibold">{job.type}</p>
                    <p className="mt-4">{job.description}</p>
                </div>
            ) : (
                <p>Job not found.</p>
            )}
        </div>
    );
};

export default JobDetailPage;
