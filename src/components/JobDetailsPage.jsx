import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const JobDetails = () => {
    const { jobId } = useParams();
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [resume, setResume] = useState(null);  
    const [details, setDetails] = useState('');  
    const [hireReason, setHireReason] = useState(''); 
    const [isModalOpen, setIsModalOpen] = useState(false); 

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

    const handleResumeChange = (event) => {
        setResume(event.target.files[0]);
    };

    const handleDetailsChange = (event) => {
        setDetails(event.target.value);
    };

    const handleHireReasonChange = (event) => {
        setHireReason(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

       
        const formData = new FormData();
        formData.append('resume', resume);
        formData.append('details', details);
        formData.append('hireReason', hireReason);

        
        console.log('Form Data:', formData);

        alert('Application submitted successfully!');
        setIsModalOpen(false); 
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    if (loading) {
        return <p className="text-blue-500 text-center mt-8">Loading job details...</p>;
    }

    if (error) {
        return <p className="text-red-500 text-center mt-8">{error}</p>;
    }

    if (!job) {
        return <p className="text-gray-500 text-center mt-8">No job details available.</p>;
    }

    return (
        <div className="mx-auto py-8 px-4 w-[700px] h-[400px] mt-[120px]">
            <div className="bg-white rounded-lg shadow-lg p-6 h-full overflow-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">{job.title}</h1>
                <h2 className="text-xl text-gray-600 mb-2">Employer: {job.employerId?.name || "N/A"}</h2>
                <p className="text-gray-700 mb-4">{job.description}</p>
                <p className="text-lg font-semibold text-green-600">Salary: {job.salary || "Not specified"}</p>
                
                <button 
                    onClick={openModal} 
                    className="mt-4 py-2 px-4 bg-blue-500 text-white font-bold rounded-md"
                >
                    Apply Now
                </button>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-[500px]">
                        <h2 className="text-2xl font-bold mb-4">Job Application</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="mb-4">
                                <label htmlFor="resume" className="block text-gray-700">Upload Your Resume:</label>
                                <input 
                                    type="file" 
                                    id="resume" 
                                    onChange={handleResumeChange} 
                                    className="w-full mt-2 p-2 border rounded-md"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="details" className="block text-gray-700">Additional Details (Cover Letter, etc.):</label>
                                <textarea 
                                    id="details"
                                    value={details}
                                    onChange={handleDetailsChange}
                                    className="w-full mt-2 p-2 border rounded-md"
                                    rows="4"
                                ></textarea>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="hireReason" className="block text-gray-700">Why should we hire you?</label>
                                <textarea 
                                    id="hireReason"
                                    value={hireReason}
                                    onChange={handleHireReasonChange}
                                    className="w-full mt-2 p-2 border rounded-md"
                                    rows="4"
                                ></textarea>
                            </div>

                            <div className="flex justify-between">
                                <button 
                                    type="submit" 
                                    className="py-2 px-4 bg-blue-500 text-white font-bold rounded-md"
                                >
                                    Submit Application
                                </button>
                                <button 
                                    type="button" 
                                    onClick={closeModal} 
                                    className="py-2 px-4 bg-gray-500 text-white font-bold rounded-md"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default JobDetails;
