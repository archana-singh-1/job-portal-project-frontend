import  { useEffect, useState } from 'react';
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
        
        const response = await fetch(`https://job-portal-project-theta.vercel.app/api/employer/jobs=${categoryParam}`);
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
    <div>
      <h2>{category ? category.replace('-', ' ').toUpperCase() : 'All Jobs'}</h2>
      
      {loading && <p>Loading jobs...</p>}
      {error && <p>{error}</p>}
      
      <div>
        {jobs.length === 0 ? (
          <p>No jobs available for the selected category.</p>
        ) : (
          <ul>
            {jobs.map((job) => (
              <li key={job._id}>{job.title}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default JobsPage;

















