import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    const [profile, setProfile] = useState('');
    const [location, setLocation] = useState('');
    const [workFromHome, setWorkFromHome] = useState(false);
    const [partTime, setPartTime] = useState(false);
    const [salary, setSalary] = useState(0);
    const [experience, setExperience] = useState('');

    const clearFilters = () => {
        setProfile('');
        setLocation('');
        setWorkFromHome(false);
        setPartTime(false);
        setSalary(0);
        setExperience('');
    };

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

    return (
        <div className="container mx-auto border border-gray-600 rounded-lg p-6 mb-4 h-[700px] flex">
            <div className="w-1/4 border-r border-gray-300 pr-4">
                <h2 className="text-xl font-semibold mb-4">Filters</h2>
                <div className="mb-4">
                    <label className="block font-medium mb-1">Profile</label>
                    <input
                        type="text"
                        placeholder="e.g. Marketing"
                        value={profile}
                        onChange={(e) => setProfile(e.target.value)}
                        className="w-full border border-gray-300 rounded px-2 py-1"
                    />
                </div>

                <div className="mb-4">
                    <label className="block font-medium mb-1">Location</label>
                    <input
                        type="text"
                        placeholder="e.g. Delhi"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full border border-gray-300 rounded px-2 py-1"
                    />
                </div>

                <div className="mb-4">
                    <label className="block font-medium mb-1">Work from home</label>
                    <input
                        type="checkbox"
                        checked={workFromHome}
                        onChange={(e) => setWorkFromHome(e.target.checked)}
                        className="mr-2"
                    />
                    <span>Work from home</span>
                </div>

                <div className="mb-4">
                    <label className="block font-medium mb-1">Part-time</label>
                    <input
                        type="checkbox"
                        checked={partTime}
                        onChange={(e) => setPartTime(e.target.checked)}
                        className="mr-2"
                    />
                    <span>Part-time</span>
                </div>

                <div className="mb-4">
                    <label className="block font-medium mb-1">Full-time</label>
                    <input
                        type="checkbox"
                        checked={partTime}
                        onChange={(e) => setPartTime(e.target.checked)}
                        className="mr-2"
                    />
                    <span>Full-time</span>
                </div>

                <div className="mb-4">
                    <label className="block font-medium mb-1">Annual salary (in lakhs)</label>
                    <input
                        type="range"
                        min="0"
                        max="10"
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                        className="w-full"
                    />
                    <div className="flex justify-between text-sm">
                        <span>0</span>
                        <span>{salary} L</span>
                        <span>10</span>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block font-medium mb-1">Years of experience</label>
                    <select
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                        className="w-full border border-gray-300 rounded px-2 py-1"
                    >
                        <option value="">Select years of experience</option>
                        <option value="0-1">0-1 years</option>
                        <option value="1-3">1-3 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="5+">5+ years</option>
                    </select>
                </div>

                <div className="flex justify-between">
                    <button onClick={clearFilters} className="text-red-500 hover:underline">
                        Clear all
                    </button>
                    <button className="bg-[#483D8B] text-white px-4 py-2 rounded">Search</button>
                </div>
            </div>

            <div className="w-4/4 pl-4">
                <h2 className="text-xl font-semibold mb-4">Job Listings</h2>
                <div className="grid grid-cols-3 gap-4">
                    {jobs.map((job) => (
                        <Link to={`/job/${job.id}`} key={job.id}>
                            <div className="border border-gray-300 p-4 rounded-lg shadow-md p-3">
                                <h3 className="text-lg font-semibold">{job.title}</h3>
                                <p className="text-gray-600 p-2">{job.company}</p>
                                <p className="text-gray-600 p-2">{job.location}</p>
                                <p className="text-gray-600 p-2">{job.experience}</p>
                                <p className="text-gray-600 p-2">{job.salary}</p>
                                <p className="text-gray-600 p-2">{job.posted}</p>
                                <p className="text-green-600 font-semibold">{job.type}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
