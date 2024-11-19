import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const JobDetails = () => {
    const { jobId } = useParams(); 
    const [job, setJob] = useState(null); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 

    useEffect(() => {
        const fetchJobDetails = async () => {
            try {
                setLoading(true); 
                const response = await fetch(`https://job-portal-project-theta.vercel.app/api/employer/jobs/${jobId}`);
                
                if (!response.ok) {
                    throw new Error(`Failed to fetch job details. Status code: ${response.status}`);
                }

                const data = await response.json(); 
                setJob(data); 
            } catch (error) {
                console.error("Error fetching job details:", error.message);
                setError("Could not load job details. Please try again later.");
            } finally {
                setLoading(false); 
            }
        };

        fetchJobDetails();
    }, [jobId]); 

    if (loading) {
        return <p>Loading job details...</p>; 
    }

    if (error) {
        return <p>{error}</p>; 
    }

    if (!job) {
        return <p>No job details available.</p>;
    }

    return (
        <div>
            <h1>{job.title}</h1>
            <h2>Employer: {job.employerId?.name}</h2>
            <p>{job.description}</p>
        </div>
    );
};

export default JobDetails;



