import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 p-8 z-10 ">
      <nav className="flex  justify-center items-center mx-auto  ">
        <h1 className="text-white text-3xl font-thin uppercase tracking-widest ">NoirThreads</h1>
        {/* Optional: Minimal navigation can go here */}
        {/* <ul className="flex space-x-4">
          <li><a href="#" className="text-white hover:text-red-500 transition-colors">Home</a></li>
          <li><a href="#" className="text-white hover:text-red-500 transition-colors">About</a></li>
          <li><a href="#" className="text-white hover:text-red-500 transition-colors">Notify Me</a></li>
        </ul> */}
      </nav>
    </header>
  );
};

export default Header;
