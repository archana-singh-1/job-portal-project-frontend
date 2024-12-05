// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';

// const JobsPage = () => {
//   const [jobs, setJobs] = useState([]);
//   const [category, setCategory] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const location = useLocation();
  
 
//   useEffect(() => {
//     const params = new URLSearchParams(location.search);
//     const categoryParam = params.get('category');
//     setCategory(categoryParam);

//     const fetchJobs = async () => {
//       setLoading(true);
//       setError('');
      
//       try {
        
//         const response = await fetch(`https://job-portal-project-theta.vercel.app/api/employer/jobs=${categoryParam}`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch jobs');
//         }
//         const data = await response.json();
//         setJobs(data.jobs);  
//       } catch (err) {
//         setError('Error fetching jobs: ' + err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

   
//     if (categoryParam) {
//       fetchJobs();
//     }

//   }, [location.search]);

//   return (
//     <div>
//       <h2>{category ? category.replace('-', ' ').toUpperCase() : 'All Jobs'}</h2>
      
//       {loading && <p>Loading jobs...</p>}
//       {error && <p>{error}</p>}
      
//       <div>
//         {jobs.length === 0 ? (
//           <p>No jobs available for the selected category.</p>
//         ) : (
//           <ul>
//             {jobs.map((job) => (
//               <li key={job._id}>{job.title}</li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default JobsPage;

























import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const JobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const location = useLocation();
  
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get('category');
    setCategory(categoryParam);

    const fetchJobs = async () => {
      setLoading(true);
      setError('');
      
      try {
        const response = await fetch(
          `https://job-portal-project-theta.vercel.app/api/employer/jobs?category=${categoryParam}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch jobs');
        }
        const data = await response.json();
        setJobs(data.jobs);  
      } catch (err) {
        setError('Error fetching jobs: ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    if (categoryParam) {
      fetchJobs();
    }
  }, [location.search]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">
        {category ? category.replace('-', ' ').toUpperCase() : 'All Jobs'}
      </h2>
      
      {loading && <p>Loading jobs...</p>}
      {error && <p className="text-red-500">{error}</p>}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobs.length === 0 ? (
          <p>No jobs available for the selected category.</p>
        ) : (
          jobs.map((job) => (
            <div key={job._id} className="border rounded p-4 shadow-md">
              <h3 className="text-lg font-semibold">{job.title}</h3>
              {/* <p><strong>Company:</strong> {job.company}</p> */}
              {/* <p><strong>Location:</strong> {job.location || 'Not specified'}</p> */}
              <p><strong>Type:</strong> {job.type || job.jobType || 'Not specified'}</p>
              <p><strong>Salary:</strong> {job.salary || 'Not specified'}</p>
              <p><strong>Description:</strong> {job.description || 'No description available'}</p>
              <p><strong>location:</strong> {job.location || 'No location available'}</p>

              
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default JobsPage;
