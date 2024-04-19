// import {useState} from 'react';
import TeamMemberImage from './TeamMemberImage.jpg'; // Import your team member image

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-700">
          Welcome to our About Us page. Learn more about who we are, what we do, and our mission.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700">
          Our mission is to provide high-quality products/services to our customers and to make a positive impact on the communities we serve.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Our Team</h2>
        <p className="text-lg text-gray-700">
          Meet our dedicated team of professionals who are committed to delivering excellence in everything we do.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-4">
          {/* Team Member Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={TeamMemberImage} alt="Team Member" className="w-full h-56 object-cover object-center" />
            <div className="p-6">
              <h3 className="text-lg font-bold mb-2">John Doe</h3>
              <p className="text-gray-700">CEO</p>
            </div>
          </div>
          {/* Add more team member cards here */}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
