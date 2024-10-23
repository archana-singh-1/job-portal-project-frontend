import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          
          <div className="w-full md:w-1/4 mb-4">
            <h5 className="text-lg font-bold mb-2">Internships by Places</h5>
            <ul>
              <li><a href="/internships/india" className="hover:underline">Internship in India</a></li>
              <li><a href="/internships/delhi" className="hover:underline">Internship in Delhi</a></li>
              <li><a href="/internships/bangalore" className="hover:underline">Internship in Bangalore</a></li>
              <li><a href="/internships/hyderabad" className="hover:underline">Internship in Hyderabad</a></li>
              <li><a href="/internships/mumbai" className="hover:underline">Internship in Mumbai</a></li>
              <li><a href="/internships/chennai" className="hover:underline">Internship in Chennai</a></li>
              <li><a href="/internships/gurgaon" className="hover:underline">Internship in Gurgaon</a></li>
              <li><a href="/internships/kolkata" className="hover:underline">Internship in Kolkata</a></li>
              <li><a href="/internships/virtual" className="hover:underline">Virtual internship</a></li>
              <li><a href="/internships/view-all" className="hover:underline">View all internships</a></li>
            </ul>
          </div>

          
          <div className="w-full md:w-1/4 mb-4">
            <h5 className="text-lg font-bold mb-2">Internship by Stream</h5>
            <ul>
              <li><a href="/internships/computer-science" className="hover:underline">Computer Science Internship</a></li>
              <li><a href="/internships/electronics" className="hover:underline">Electronics Internship</a></li>
              <li><a href="/internships/mechanical" className="hover:underline">Mechanical Internship</a></li>
              <li><a href="/internships/civil" className="hover:underline">Civil Internship</a></li>
              <li><a href="/internships/marketing" className="hover:underline">Marketing Internship</a></li>
              <li><a href="/internships/chemical" className="hover:underline">Chemical Internship</a></li>
              <li><a href="/internships/finance" className="hover:underline">Finance Internship</a></li>
              <li><a href="/internships/summer-research" className="hover:underline">Summer Research Fellowship</a></li>
              <li><a href="/internships/campus-ambassador" className="hover:underline">Campus Ambassador Program</a></li>
              <li><a href="/internships/view-all" className="hover:underline">View all internships</a></li>
            </ul>
          </div>

          
          <div className="w-full md:w-1/4 mb-4">
            <h5 className="text-lg font-bold mb-2">Jobs by Places</h5>
            <ul>
              <li><a href="/jobs/delhi" className="hover:underline">Jobs in Delhi</a></li>
              <li><a href="/jobs/mumbai" className="hover:underline">Jobs in Mumbai</a></li>
              <li><a href="/jobs/bangalore" className="hover:underline">Jobs in Bangalore</a></li>
              <li><a href="/jobs/jaipur" className="hover:underline">Jobs in Jaipur</a></li>
              <li><a href="/jobs/kolkata" className="hover:underline">Jobs in Kolkata</a></li>
              <li><a href="/jobs/hyderabad" className="hover:underline">Jobs in Hyderabad</a></li>
              <li><a href="/jobs/pune" className="hover:underline">Jobs in Pune</a></li>
              <li><a href="/jobs/chennai" className="hover:underline">Jobs in Chennai</a></li>
              <li><a href="/jobs/lucknow" className="hover:underline">Jobs in Lucknow</a></li>
              <li><a href="/jobs/view-all" className="hover:underline">View all jobs</a></li>
            </ul>
          </div>

          
          <div className="w-full md:w-1/4 mb-4">
            <h5 className="text-lg font-bold mb-2">Jobs by Stream</h5>
            <ul>
              <li><a href="/jobs/marketing" className="hover:underline">Marketing jobs</a></li>
              <li><a href="/jobs/content-writing" className="hover:underline">Content writing jobs</a></li>
              <li><a href="/jobs/web-development" className="hover:underline">Web development jobs</a></li>
              <li><a href="/jobs/sales" className="hover:underline">Sales jobs</a></li>
              <li><a href="/jobs/finance" className="hover:underline">Finance jobs</a></li>
              <li><a href="/jobs/digital-marketing" className="hover:underline">Digital Marketing jobs</a></li>
              <li><a href="/jobs/computer-science" className="hover:underline">Computer Science jobs</a></li>
              <li><a href="/jobs/graphic-design" className="hover:underline">Graphic Design jobs</a></li>
              <li><a href="/jobs/data-science" className="hover:underline">Data Science jobs</a></li>
              <li><a href="/jobs/view-all" className="hover:underline">View all jobs</a></li>
            </ul>
          </div>
        </div>

     
        <div className="mt-6 border-t border-gray-700 pt-4">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} Internshala. All rights reserved. (Scholiverse Educare Private Limited)
          </p>
          <div className="flex justify-center mt-4 space-x-4">
            <a href="https://twitter.com" className="hover:underline">Twitter</a>
            <a href="https://linkedin.com" className="hover:underline">LinkedIn</a>
            <a href="https://facebook.com" className="hover:underline">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
