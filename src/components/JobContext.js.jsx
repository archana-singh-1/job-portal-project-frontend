import React, { createContext, useState, useContext } from 'react';

const JobContext = createContext();

export const useJobs = () => useContext(JobContext);

export const JobProvider = ({ children }) => {
    const [jobList, setJobList] = useState([]);

    const addJob = (newJob) => {
        setJobList((prevJobs) => [...prevJobs, newJob]);
    };

    return (
        <JobContext.Provider value={{ jobList, addJob }}>
            {children}
        </JobContext.Provider>
    );
};
