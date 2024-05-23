import React from 'react';

function Contact() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-red-600 mb-8">Contact Us</h1>
      <p className="text-lg text-gray-700 mb-8 text-center">
        If you have any questions, suggestions, or would like to get involved, please reach out to us using the form below or via our contact information.
      </p>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            rows="5"
            placeholder="Your message"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Send
          </button>
        </div>
      </form>
      <div className="text-lg text-gray-700 mt-8">
        <h2 className="text-2xl font-semibold text-red-500 mb-4">Our Contact Information</h2>
        <ul className="list-disc list-inside">
          <li>Email: <a href="mailto:contact@bloodconnect.org" className="text-blue-500 underline">contact@bloodconnect.org</a></li>
          <li>Phone: +123-456-7890</li>
          <li>Address: 1234 BloodConnect Lane, City, Country</li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
