// Home.js

import React, { useState } from "react";

const Home = () => {
  const [showLawyers, setShowLawyers] = useState(false);
  const [showBrokers, setShowBrokers] = useState(false);

  return (
    <div>
      <div className="relative bg-gray-800 h-screen">
        <img
          className="w-full h-full object-cover brightness-50"
          src="/src/assets/images/blocklandbg.jpg"
          alt="Background"
          style={{ filter: "brightness(30%" }}
        />
        
        <div className="absolute inset-0 flex justify-center items-center flex-col">
          <div className="text-center mb-8">

            <h1 className="text-4xl font-bold text-white mb-4">
              Welcome to Our Website
            </h1>
            
            <div className="flex justify-center mb-4">
              <div className="border-green-600 border rounded-lg p-4 mr-4 text-white font-bold flex items-center">
                <input
                  type="checkbox"
                  className="mr-2 bg-green-600 w-5 h-5"
                  checked={showLawyers}
                  onChange={() => setShowLawyers(!showLawyers)}
                />
                <label className="select-none">Lawyer Services</label>
              </div>

              <div className="border-green-600 border rounded-lg p-4 text-white font-bold flex items-center">
                <input
                  type="checkbox"
                  className="mr-2 bg-green-600 w-5 h-5"
                  checked={showBrokers}
                  onChange={() => setShowBrokers(!showBrokers)}
                />
                <label className="select-none">Brokerage Services</label>
              </div>
            </div>
          </div>

          <button className="bg-green-600 hover:bg-green-900 text-white font-bold py-2 px-4 rounded mb-4">
            Learn More
          </button>
        </div>
      </div>

      <div className="container mx-auto px-10 pt-16">
        {/* <h2 className="text-3xl font-semibold text-gray-800 mb-8">Sections</h2> */}

        {/* Lawyer Services Section */}
        {showLawyers && (
          <div className="mb-8">
            {" "}
            {/* Add margin-bottom for spacing */}
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Lawyer Services Section
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Section Card 1 - Lawyer Service */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  className="w-full h-48 object-cover object-center"
                  src="https://via.placeholder.com/300x200"
                  alt="Lawyer Service"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Lawyer Service
                  </h3>
                  <p className="text-gray-600">Details about lawyer service.</p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  className="w-full h-48 object-cover object-center"
                  src="https://via.placeholder.com/300x200"
                  alt="Lawyer Service"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Lawyer Service
                  </h3>
                  <p className="text-gray-600">Details about lawyer service.</p>
                </div>
              </div>
              {/* New Services */}
            </div>
          </div>
        )}

        {/* Brokerage Services Section */}
        {showBrokers && (
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Brokerage Services Section
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Section Card 2 - Brokerage Service */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  className="w-full h-48 object-cover object-center"
                  src="https://via.placeholder.com/300x200"
                  alt="Brokerage Service"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Brokerage Service
                  </h3>
                  <p className="text-gray-600">
                    Details about brokerage service.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  className="w-full h-48 object-cover object-center"
                  src="https://via.placeholder.com/300x200"
                  alt="Brokerage Service"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Brokerage Service
                  </h3>
                  <p className="text-gray-600">
                    Details about brokerage service.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  className="w-full h-48 object-cover object-center"
                  src="https://via.placeholder.com/300x200"
                  alt="Brokerage Service"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Brokerage Service
                  </h3>
                  <p className="text-gray-600">
                    Details about brokerage service.
                  </p>
                </div>
              </div>
              {/* New Services */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
