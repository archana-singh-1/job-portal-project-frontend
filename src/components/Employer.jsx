import React from 'react';
import { useLocation } from 'react-router-dom';

const EmployerDashboard = () => {
    const location = useLocation();
    const jobData = location.state?.jobData;

    if (!jobData) {
        return <p className="text-center text-red-500 mt-10">No job data available!</p>;
    }

    return (
        <div className="container mx-auto mt-[80px]">
              <h2 className="text-xl font-bold mb-4 text-center">Job Details</h2>
            <div className="bg-white p-8 rounded-lg shadow-2xl shadow-gray-500/50 max-w-lg mx-auto">
                <p className="text-lg font-semibold pl-3  not-italic  decoration-slate-500">
                    <strong>Job Title:</strong> {jobData.jobTitle}
                </p>
                <p className="text-lg font-semibold pl-3  not-italic  decoration-slate-500">
                    <strong>Salary:</strong> {jobData.salary}
                </p>
                <p className="text-lg font-semibold pl-3  not-italic  decoration-slate-500">
                    <strong>Location:</strong> {jobData.location}
                </p>
                <p className="text-lg font-semibold pl-3  not-italic  decoration-slate-500">
                    <strong>Description:</strong> {jobData.description}
                </p>
            </div>
        </div>
    );
};

export default EmployerDashboard;
