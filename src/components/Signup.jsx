// import axios from 'axios';
// import  { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Signup = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [role, setRole] = useState('');
//     const [message, setMessage] = useState(null);
//     const [error, setError] = useState(null);

//     const navigate = useNavigate(); // Hook for navigation

//     const handleSignup = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('https://job-portal-project-theta.vercel.app/user/signup', {
//                 name,
//                 email,
//                 password,
//                 role
//             });
//             setMessage(response.data.message);
//             setError(null);

//             alert('Signup successful!');

//             if (role === 'Employer') {
//                 navigate('/login'); // Redirect to login page for Employers
//             } else {
//                 alert('You can now log in as a Job Seeker!');
//             }
//         } catch (error) {
//             setError(error.response?.data?.message || 'An error occurred. Please try again.');
//             setMessage(null);
//             alert('Signup failed. Please try again.');
//         }
//     };

//     return (
//         <div className="container mx-auto mt-[80px]">
//             <h1 className="text-2xl text-center mb-7 font-bold">Signup</h1>

//             <form onSubmit={handleSignup} className="w-full max-w-lg mx-auto bg-white p-8 rounded-lg shadow-2xl shadow-gray-500/50 h-[600px]">
//                 <div className="mb-4">
//                     <label className="block text-gray-700 font-bold mb-2">Name</label>
//                     <input
//                         type="text"
//                         className="w-full p-4 border border-gray-300 rounded-md"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         placeholder="Enter your name"
//                         required
//                     />
//                 </div>

//                 <div className="mb-4">
//                     <label className="block text-gray-700 font-bold mb-2">Email</label>
//                     <input
//                         type="email"
//                         className="w-full p-4 border border-gray-300 rounded-md"
//                         placeholder="Enter your email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                     />
//                 </div>

//                 <div className="mb-4">
//                     <label className="block text-gray-700 font-bold mb-2">Password</label>
//                     <input
//                         type="password"
//                         className="w-full p-4 border border-gray-300 rounded-md"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         placeholder="Enter your password"
//                         required
//                     />
//                 </div>

//                 <div className="mb-4">
//                     <label className="block text-gray-700 font-bold mb-2">Role</label>
//                     <select
//                         className="w-full p-4 border border-gray-300 rounded-md"
//                         value={role}
//                         onChange={(e) => setRole(e.target.value)}
//                         required
//                     >
//                         <option value="">Select Role</option>
//                         <option value="Job Seeker">Job Seeker</option>
//                         <option value="Employer">Employer</option>
//                     </select>
//                 </div>

//                 <button
//                     type="submit"
//                     className="w-full text-white font-bold py-4 px-5 rounded-md bg-blue-700 transition duration-200 mt-4"
//                 >
//                     Sign Up
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default Signup;


























import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate(); // For navigation

    const handleSignup = async (e) => {
        e.preventDefault();
        setLoading(true); // Show spinner while submitting
        try {
            const response = await axios.post('https://job-portal-project-theta.vercel.app/user/signup', {
                name,
                email,
                password,
                role,
            });

            // Success case
            setMessage(response.data.message);
            setError(null);
            setLoading(false);

            alert('Signup successful!');
            if (role === 'Employer') {
                navigate('/login'); // Redirect Employer to login
            } else {
                alert('You can now log in as a Job Seeker!');
            }
        } catch (err) {
            // Error case
            console.error("Error during signup:", err);
            setError(err.response?.data?.message || 'An error occurred. Please try again.');
            setMessage(null);
            setLoading(false);

            alert('Signup failed. Please try again.');
        }
    };

    return (
        <div className="container mx-auto mt-[80px]">
            <h1 className="text-2xl text-center mb-7 font-bold">Signup</h1>

            {/* Display error or success message */}
            {error && (
                <div className="text-red-500 text-center font-medium mb-4">
                    {error}
                </div>
            )}
            {message && (
                <div className="text-green-500 text-center font-medium mb-4">
                    {message}
                </div>
            )}

            <form onSubmit={handleSignup} className="w-full max-w-lg mx-auto bg-white p-8 rounded-lg shadow-2xl shadow-gray-500/50 h-[600px]">
                {/* Name Field */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Name</label>
                    <input
                        type="text"
                        className="w-full p-4 border border-gray-300 rounded-md"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        required
                    />
                </div>

                {/* Email Field */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Email</label>
                    <input
                        type="email"
                        className="w-full p-4 border border-gray-300 rounded-md"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                {/* Password Field */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Password</label>
                    <input
                        type="password"
                        className="w-full p-4 border border-gray-300 rounded-md"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                    />
                </div>

                {/* Role Selector */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Role</label>
                    <select
                        className="w-full p-4 border border-gray-300 rounded-md"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        required
                    >
                        <option value="">Select Role</option>
                        <option value="Job Seeker">Job Seeker</option>
                        <option value="Employer">Employer</option>
                    </select>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className={`w-full text-white font-bold py-4 px-5 rounded-md ${
                        loading ? 'bg-gray-400' : 'bg-blue-700'
                    } transition duration-200 mt-4`}
                    disabled={loading}
                >
                    {loading ? 'Signing Up...' : 'Sign Up'}
                </button>
            </form>
        </div>
    );
};

export default Signup;
