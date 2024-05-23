import React from 'react';

function About() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-red-600 mb-8">About BloodConnect</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-red-500 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700">
          BloodConnect is dedicated to bridging the gap between blood donors and those in need. Our mission is to ensure that no life is lost due to the unavailability of blood. We strive to create a robust network of voluntary blood donors who are always ready to give the gift of life.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-red-500 mb-4">Who We Are</h2>
        <p className="text-lg text-gray-700">
          We are a team of passionate individuals committed to saving lives by promoting blood donation. Our platform connects donors with patients in urgent need of blood, making the donation process seamless and efficient. BloodConnect leverages technology to create a reliable and responsive network, ensuring that blood is available whenever and wherever it is needed.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-red-500 mb-4">What We Do</h2>
        <p className="text-lg text-gray-700">
          BloodConnect organizes blood donation camps, awareness drives, and educational programs to encourage more people to become regular blood donors. We collaborate with hospitals, NGOs, and community organizations to amplify our reach and impact. Our platform also provides information on the importance of blood donation, donor eligibility, and the donation process.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-red-500 mb-4">Contact Us</h2>
        <p className="text-lg text-gray-700 mb-4">
          If you have any questions, suggestions, or would like to get involved, please reach out to us at:
        </p>
        <ul className="text-lg text-gray-700 list-disc list-inside">
          <li>Email: <a href="mailto:contact@bloodconnect.org" className="text-blue-500 underline">contact@bloodconnect.org</a></li>
          <li>Phone: +123-456-7890</li>
          <li>Address: 1234 BloodConnect Lane, City, Country</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
