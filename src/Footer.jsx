import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-4">
            <h5 className="text-lg font-bold mb-2">Job Portal</h5>
            <p>Find your dream job with us!</p>
          </div>
          <div className="w-full md:w-1/3 mb-4">
            <h5 className="text-lg font-bold mb-2">Quick Links</h5>
            <ul>
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/jobs" className="hover:underline">Job Listings</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-4">
            <h5 className="text-lg font-bold mb-2">Follow Us</h5>
            <ul className="flex space-x-4">
              <li><a href="https://twitter.com" className="hover:underline">Twitter</a></li>
              <li><a href="https://linkedin.com" className="hover:underline">LinkedIn</a></li>
              <li><a href="https://facebook.com" className="hover:underline">Facebook</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-6 border-t border-gray-700 pt-4">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} Job Portal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
