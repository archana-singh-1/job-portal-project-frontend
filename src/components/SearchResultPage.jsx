import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SearchResultsPage = () => {
    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const { search } = useLocation();
    const query = new URLSearchParams(search).get('query');

    // Sample jobs data
    const allJobs = [
        { id: 1, title: 'Python Developer', company: 'Dream Marvel Startups Private Limited', location: 'Work from home' },
        { id: 2, title: 'Frontend Developer', company: 'Tech Innovators Ltd.', location: 'Delhi' },
        { id: 3, title: 'Backend Developer', company: 'Global Tech Co.', location: 'Bangalore' },
        { id: 4, title: 'Web Developer', company: 'Innovation Tech', location: 'Work from home' },
        { id: 5, title: 'Java Developer', company: 'Tech Solutions', location: 'Delhi' },
        // Add more jobs here
    ];

    useEffect(() => {
        if (query) {
            // Normalize query and filter jobs
            const normalizedQuery = query.toLowerCase();
            const filtered = allJobs.filter(job =>
                job.title.toLowerCase().includes(normalizedQuery) || job.location.toLowerCase().includes(normalizedQuery)
            );
            setFilteredJobs(filtered);
        } else {
            setFilteredJobs(allJobs); // If no query, show all jobs
        }
    }, [query]);

    return (
        <div className="container mx-auto py-8">
            <h2 className="text-2xl font-semibold mb-4">Search Results</h2>
            {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                    <div key={job.id} className="border p-4 mb-4 rounded shadow">
                        <h3 className="text-xl">{job.title}</h3>
                        <p>{job.company}</p>
                        <p>{job.location}</p>
                    </div>
                ))
            ) : (
                <p>No jobs found matching "{query}".</p>
            )}
        </div>
    );
};

export default SearchResultsPage;
