import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-8 text-white text-center text-sm">
      <div className="max-w-6xl mx-auto px-4">
        <p>&copy; NoirThreads 2025. All rights reserved.</p>
        {/* Optional: Secondary links */}
        {/* <p className="mt-2">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
          <span className="mx-2">|</span>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
        </p> */}
      </div>
    </footer>
  );
};

export default Footer;