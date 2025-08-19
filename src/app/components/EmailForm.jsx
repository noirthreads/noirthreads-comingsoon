'use client';

import React, { useState } from 'react';

const EmailForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('Submitting...');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName, email, whatsapp }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Thank you for subscribing! Check your email for a confirmation.');
        setFirstName('');
        setLastName('');
        setEmail('');
        setWhatsapp('');
      } else {
        setMessage(`Error: ${data.error || 'Something went wrong.'}`);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setMessage('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <section className="relative z-10 py-16 px-4">
      <div className="max-w-2xl mx-auto text-center bg-black bg-opacity-70 p-8 rounded-lg shadow-2xl border border-gray-800">
        <h3 className="text-4xl md:text-5xl font-anton text-red-500 mb-6 tracking-wide">Stay Updated</h3>
        <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
          Be the first to know when we drop. Join our mailing list for exclusive updates, early access,
          and a sneak peek into the NoirThreads universe.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 max-w-lg mx-auto">
          <input
            type="text"
            placeholder="First Name"
            className="flex-grow p-4 rounded-full bg-gray-900 border border-gray-700 text-white placeholder-gray-500
                       focus:outline-none focus:ring-3 focus:ring-red-600 focus:border-transparent
                       transition-all duration-300 text-base"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="flex-grow p-4 rounded-full bg-gray-900 border border-gray-700 text-white placeholder-gray-500
                       focus:outline-none focus:ring-3 focus:ring-red-600 focus:border-transparent
                       transition-all duration-300 text-base"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-grow p-4 rounded-full bg-gray-900 border border-gray-700 text-white placeholder-gray-500
                       focus:outline-none focus:ring-3 focus:ring-red-600 focus:border-transparent
                       transition-all duration-300 text-base"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="WhatsApp Number (Optional)"
            className="flex-grow p-4 rounded-full bg-gray-900 border border-gray-700 text-white placeholder-gray-500
                       focus:outline-none focus:ring-3 focus:ring-red-600 focus:border-transparent
                       transition-all duration-300 text-base"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
          />
          <button
            type="submit"
            className="bg-red-700 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-full
                       transition-all duration-300 transform hover:scale-105 text-lg shadow-lg
                       focus:outline-none focus:ring-3 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-black"
          >
            Notify Me
          </button>
        </form>
        {message && (
          <p className="mt-6 text-lg font-semibold text-red-400 bg-gray-900 bg-opacity-70 p-3 rounded-md inline-block animate-fade-in-up">
            {message}
          </p>
        )}
      </div>
    </section>
  );
};

export default EmailForm;