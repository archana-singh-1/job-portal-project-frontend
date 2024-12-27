import React from 'react';
import { useJobs } from './JobContext.js'; // Import the useJobs hook

const EmployerDashboard = () => {
    const { jobList } = useJobs();  // Get the jobList from context

    if (jobList.length === 0) {
        return <p className="text-center text-red-500 mt-10">No job data available!</p>;
    }

    return (
        <div className="container mx-auto mt-[80px]">
            <h2 className="text-xl font-bold mb-4 text-center">Job Details</h2>
            {jobList.map((job, index) => (
                <div
                    key={index}
                    className="bg-white p-8 rounded-lg shadow-2xl shadow-gray-500/50 max-w-lg mx-auto mb-6"
                >
                    <p className="text-lg font-semibold pl-3 not-italic decoration-slate-500">
                        <strong>Job Title:</strong> {job.jobTitle}
                    </p>
                    <p className="text-lg font-semibold pl-3 not-italic decoration-slate-500">
                        <strong>Salary:</strong> {job.salary}
                    </p>
                    <p className="text-lg font-semibold pl-3 not-italic decoration-slate-500">
                        <strong>Location:</strong> {job.location}
                    </p>
                    <p className="text-lg font-semibold pl-3 not-italic decoration-slate-500">
                        <strong>Description:</strong> {job.description}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default EmployerDashboard;
