import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const SearchResultsPage = () => {
    const [jobs, setJobs] = useState([]); 
    const [filteredJobs, setFilteredJobs] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 
    const { search } = useLocation(); 
    const query = new URLSearchParams(search).get('query'); 

    useEffect(() => {
        const fetchJobs = async () => {
            setLoading(true);
            setError(null); 

            try {
                console.log("Fetching jobs..."); 
                const response = await axios.get('https://job-portal-project-theta.vercel.app/api/employer/jobs');

                console.log("API Response: ", response.data); 
                setJobs(response.data); 
            } catch (err) {
                console.error("Error fetching jobs: ", err); 
                setError('Failed to fetch jobs. Please try again.');
            } finally {
                setLoading(false); 
            }
        };

        fetchJobs();
    }, []);

    useEffect(() => {
        if (query && jobs.length > 0) {
            const normalizedQuery = query.toLowerCase();
            const filtered = jobs.filter(job =>
                (job.title && job.title.toLowerCase().includes(normalizedQuery)) ||
                (job.location && job.location.toLowerCase().includes(normalizedQuery))
            );
            setFilteredJobs(filtered);
            console.log("Filtered Jobs: ", filtered); 
        } else if (!query) {
            setFilteredJobs([]); 
        } else {
            setFilteredJobs([]); 
        }
    }, [query, jobs]);

    return (
        <div className="container mx-auto py-8 w-[500px]">
            <h2 className="text-2xl font-semibold mb-4">Search Results</h2>

            {loading && <p className="text-blue-500">Loading jobs...</p>}

            {error && <p className="text-red-500">{error}</p>}
            {!loading && !error && filteredJobs.length === 0 && (
                <p>No jobs found matching "{query}".</p>
            )}

            {!loading && !error && filteredJobs.length > 0 && (
                <div>
                    {filteredJobs.map((job) => (
                        <div key={job.id} className="border p-4 mb-4 rounded shadow h-[400px]" >
                            <h3 className="text-xl font-bold">{job.title}</h3>
                            <p>{job.company}</p>
                            <p>{job.location}</p>
                            <p>{job.salary}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchResultsPage;


