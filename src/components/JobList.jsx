// JobList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const JobList = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch('https://job-portal-project-theta.vercel.app/api/employer/jobs');
                const data = await response.json();
                setJobs(data); // Assuming data is an array of jobs
            } catch (error) {
                console.error('Error fetching jobs:', error);
            }
        };

        fetchJobs();
    }, []);

    return (
        <div className="job-list">
            {jobs.map((job) => (
                <div key={job.id} className="job-item">
                    <h2>{job.title}</h2>
                    <p>{job.description}</p>
                    <Link to={`/job/${job.id}`} className="view-job-link">
                        View Job
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default JobList;
