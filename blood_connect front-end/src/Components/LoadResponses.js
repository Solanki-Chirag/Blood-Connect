import React, { useEffect, useState } from 'react';

const LoadResponses = () => {
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    const fetchResponses = async () => {
      try {
        const response = await fetch("http://localhost:3500/loadResponses", {
          method: "GET",
          credentials: "include"
        });
        const data = await response.json();
        setResponses(data);
      } catch (error) {
        console.error('Error fetching responses:', error);
      }
    };

    fetchResponses();
  }, []);

  return (
    <div className="p-4 sm:ml-64 mt-20">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800 shadow-md rounded">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Patient ID</th>
              <th className="py-3 px-6 text-left">Patient Name</th>
              <th className="py-3 px-6 text-left">Donor ID</th>
              <th className="py-3 px-6 text-left">Donor Name</th>
              <th className="py-3 px-6 text-left">Last Date</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 dark:text-gray-300 text-sm font-light">
            {responses.map((response) => (
              <tr key={response.patientId} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
                <td className="py-3 px-6 text-left whitespace-nowrap">{response.patientId}</td>
                <td className="py-3 px-6 text-left">{response.patientName}</td>
                <td className="py-3 px-6 text-left">{response.donorId}</td>
                <td className="py-3 px-6 text-left">{response.donorName}</td>
                <td className="py-3 px-6 text-left">{new Date(response.lastDate).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LoadResponses;
