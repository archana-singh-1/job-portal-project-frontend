// import React, { useState } from 'react';
// import axios from 'axios';

// const JobPosting = () => {
//     const [jobTitle, setJobTitle] = useState('');
//     const [salary, setSalary] = useState('');
//     const [location, setLocation] = useState('');
//     const [description, setDescription] = useState('');
//     const [message, setMessage] = useState(null);
//     const [error, setError] = useState(null);

//     const handleJobPost = async (e) => {
//         e.preventDefault();

//         try {
//             const token = localStorage.getItem('token'); 
//             if (!token) {
//                 alert('Please log in to post a job.');
//                 return;
//             }

//             const response = await axios.post(
//                 'https://job-portal-project-theta.vercel.app/api/employer/jobs',
//                 { jobTitle, salary, location, description },
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`, 
//                     },
//                 }
//             );

//             setMessage('Job posted successfully!');
//             setError(null);
          
//             setJobTitle('');
//             setSalary('');
//             setLocation('');
//             setDescription('');
//         } catch (error) {
//             setError(
//                 error.response?.data?.message || 'Failed to post job. Please try again.'
//             );
//             setMessage(null);
//         }
//     };

//     return (
//         <div className="container mx-auto mt-[80px]">
//             <h1 className="text-2xl text-center mb-7 font-bold">Post a Job</h1>
//             <form
//                 onSubmit={handleJobPost}
//                 className="w-full max-w-lg mx-auto bg-white p-8 rounded-lg shadow-2xl shadow-gray-500/50"
//             >
//                 <div className="mb-4">
//                     <label className="block text-gray-700 font-bold mb-2">Job Title</label>
//                     <input
//                         type="text"
//                         className="w-full p-4 border border-gray-300 rounded-md"
//                         value={jobTitle}
//                         onChange={(e) => setJobTitle(e.target.value)}
//                         placeholder="Enter job title"
//                         required
//                     />
//                 </div>

//                 <div className="mb-4">
//                     <label className="block text-gray-700 font-bold mb-2">Salary</label>
//                     <input
//                         type="text"
//                         className="w-full p-4 border border-gray-300 rounded-md"
//                         value={salary}
//                         onChange={(e) => setSalary(e.target.value)}
//                         placeholder="Enter salary"
//                         required
//                     />
//                 </div>

//                 <div className="mb-4">
//                     <label className="block text-gray-700 font-bold mb-2">Location</label>
//                     <input
//                         type="text"
//                         className="w-full p-4 border border-gray-300 rounded-md"
//                         value={location}
//                         onChange={(e) => setLocation(e.target.value)}
//                         placeholder="Enter location"
//                         required
//                     />
//                 </div>

//                 <div className="mb-4">
//                     <label className="block text-gray-700 font-bold mb-2">Description</label>
//                     <textarea
//                         className="w-full p-4 border border-gray-300 rounded-md"
//                         value={description}
//                         onChange={(e) => setDescription(e.target.value)}
//                         placeholder="Enter job description"
//                         required
//                     />
//                 </div>

//                 <button
//                     type="submit"
//                     className="w-full text-white font-bold py-4 px-5 rounded-md bg-blue-700 transition duration-200 mt-4"
//                 >
//                     Post Job
//                 </button>

//                 {message && <p className="text-green-500 mt-4">{message}</p>}
//                 {error && <p className="text-red-500 mt-4">{error}</p>}
//             </form>
//         </div>
//     );
// };

// export default JobPosting;

















import  { useState } from 'react';
import axios from 'axios';

const JobPosting = () => {
    const [title, setTitle] = useState('');
    const [salary, setSalary] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [jobType, setJobType] = useState('Full-Time'); // Default job type
    const [skills, setSkills] = useState(''); // Skills as a comma-separated string
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);

    const handleJobPost = async (e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem('token'); 
            if (!token) {
                alert('Please log in to post a job.');
                return;
            }

            const employerId = "67569cfbfa35792d915b57f7"; // Replace with the actual employerId or fetch it dynamically

            const response = await axios.post(
                'https://job-portal-project-theta.vercel.app/api/employer/jobs',
                {
                    title,
                    description,
                    employerId,
                    location,
                    salary,
                    jobType,
                    skills: skills.split(',').map(skill => skill.trim()), // Convert comma-separated string to array
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`, 
                    },
                }
            );
            console.log('Server response:', response.data);

            setMessage('Job posted successfully!');
            setError(null);

            // Reset form
            setTitle('');
            setSalary('');
            setLocation('');
            setDescription('');
            setJobType('Full-Time');
            setSkills('');
        } catch (error) {
            setError(
                error.response?.data?.error || 'Failed to post job. Please try again.'
            );
            setMessage(null);
        }
    };

    return (
        <div className="container mx-auto mt-[80px]">
            <h1 className="text-2xl text-center mb-7 font-bold">Post a Job</h1>
            <form
                onSubmit={handleJobPost}
                className="w-full max-w-lg mx-auto bg-white p-8 rounded-lg shadow-2xl shadow-gray-500/50"
            >
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Job Title</label>
                    <input
                        type="text"
                        className="w-full p-4 border border-gray-300 rounded-md"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter job title"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Salary</label>
                    <input
                        type="text"
                        className="w-full p-4 border border-gray-300 rounded-md"
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                        placeholder="Enter salary"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Location</label>
                    <input
                        type="text"
                        className="w-full p-4 border border-gray-300 rounded-md"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Enter location"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Description</label>
                    <textarea
                        className="w-full p-4 border border-gray-300 rounded-md"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter job description"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Job Type</label>
                    <select
                        className="w-full p-4 border border-gray-300 rounded-md"
                        value={jobType}
                        onChange={(e) => setJobType(e.target.value)}
                        required
                    >
                        <option value="Full-Time">Full-Time</option>
                        <option value="Part-Time">Part-Time</option>
                        <option value="Contract">Contract</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Skills (comma-separated)</label>
                    <input
                        type="text"
                        className="w-full p-4 border border-gray-300 rounded-md"
                        value={skills}
                        onChange={(e) => setSkills(e.target.value)}
                        placeholder="Enter skills, e.g., React, Node.js"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full text-white font-bold py-4 px-5 rounded-md bg-blue-700 transition duration-200 mt-4"
                >
                    Post Job
                </button>

                {message && <p className="text-green-500 mt-4">{message}</p>}
                {error && <p className="text-red-500 mt-4">{error}</p>}
            </form>
        </div>
    );
};

export default JobPosting;
