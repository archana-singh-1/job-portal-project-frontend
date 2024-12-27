import React from 'react';
import { useJobs } from './JobContext.js'; 

const EmployerDashboard = () => {
    const { jobList } = useJobs();  

    if (jobList.length === 0) {
        return <p className="text-center text-red-500 mt-10">No job data available!</p>;
    }

    return (
        <div className="container mx-auto mt-[80px]">
            <h2 className="text-xl font-bold mb-4 text-center">Job Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobList.map((job, index) => (
                    <div
                        key={index}
                        className="bg-white p-8 rounded-lg shadow-2xl shadow-gray-500/50"
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
        </div>
    );
};

export default EmployerDashboard;

