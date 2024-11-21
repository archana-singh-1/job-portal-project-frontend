import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    const [profile, setProfile] = useState('');
    const [location, setLocation] = useState('');
    const [workFromHome, setWorkFromHome] = useState(false);
    const [partTime, setPartTime] = useState(false);
    const [salary, setSalary] = useState(0);
    const [experience, setExperience] = useState('');
    const [jobs, setJobs] = useState([]);  
    const [filteredJobs, setFilteredJobs] = useState([]);

  
    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch('https://job-portal-project-theta.vercel.app/api/employer/jobs');
                const data = await response.json();
                const limitedData = data.slice(0, 12);  
                setJobs(limitedData);  
                setFilteredJobs(limitedData);  
            } catch (error) {
                console.error('Error fetching jobs:', error);
            }
        };
    
        fetchJobs();
    }, []);

    const clearFilters = () => {
        setProfile('');
        setLocation('');
        setWorkFromHome(false);
        setPartTime(false);
        setSalary(0);
        setExperience('');
        setFilteredJobs(jobs); 
    };

    const handleSearch = () => {
        const normalize = (str) => str.toLowerCase().replace(/\s+/g, ' ').trim();
    
        const filtered = jobs.filter((job) => {
            const normalizedTitle = normalize(job.title);
            const normalizedQuery = normalize(profile);
    
            const meetsProfile = normalizedQuery
                ? normalizedQuery.split(' ').some((word) => normalizedTitle.includes(word))
                : true;
    
            const meetsLocation = location
                ? job.location.toLowerCase().includes(location.toLowerCase())
                : true;
    
            const meetsWorkFromHome = workFromHome
                ? job.location.toLowerCase() === 'work from home'
                : true;
    
            const meetsPartTime = partTime
                ? job.type?.toLowerCase() === 'part-time'
                : true;
    
            const meetsSalary = salary
                ? parseInt(job.salary?.split('-')[0]) <= salary * 10000
                : true;
    
            const meetsExperience = experience
                ? job.experience.toLowerCase().includes(experience.toLowerCase())
                : true;
    
            return (
                meetsProfile &&
                meetsLocation &&
                meetsWorkFromHome &&
                meetsPartTime &&
                meetsSalary &&
                meetsExperience
            );
        });
    
        setFilteredJobs(filtered);
    };
    
    
    return (
        <div className="container mx-auto  rounded-lg p-6 mb-4  flex mt-20 bg-white">
            <div className="w-1/4 border-r border-gray-300 pr-4">
                <h2 className="text-xl font-semibold mb-4">Filters</h2>
                <div className="mb-4">
                    <label className="block font-medium mb-1">Profile</label>
                    <input 
                        type="text"
                        placeholder="e.g. Marketing"
                        value={profile}
                        onChange={(e) => setProfile(e.target.value)}
                        className="w-full border border-gray-300 rounded px-2 py-1 h-14"
                    />
                </div>

                <div className="mb-4">
                    <label className="block font-medium mb-1">Location</label>
                    <input
                        type="text"
                        placeholder="e.g. Delhi"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full border border-gray-300 rounded px-2 py-1 h-14"
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
                        className="w-full border border-gray-300 rounded px-2 py-1 h-14"
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
                    <button onClick={handleSearch} className="bg-[#483D8B] text-white px-4 py-2 rounded">Search</button>
                </div>
            </div>

            <div className="w-3/4 pl-4">
                <h2 className="text-xl font-semibold mb-4  pl-8" >Job Listings</h2>
                <div className="grid grid-cols-3 gap-4 ml-10">
                    {(filteredJobs.length > 0 ? filteredJobs : jobs).map((job) => (
                     <Link to={`/job/${job._id}`} key={job._id}>
                     <div className="border border-gray-300 p-4 rounded-lg shadow-md w-80 h-96">
                         <h3 className="text-lg font-semibold">{job.title}</h3>
                         <p className="text-gray-600">{job.company}</p>
                         <p className="text-gray-600">{job.location}</p>
                         <p className="text-gray-600">{job.experience}</p>
                         <p className="text-gray-600">{job.salary}</p>
                         <p className="text-gray-600">{job.posted}</p>
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
