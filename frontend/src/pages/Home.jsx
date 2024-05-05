import { useState } from "react";
// import blocklandbg from "../assets/images/blocklandbg.webp";

const Home = () => {
  const [showLawyers, setShowLawyers] = useState(false);
  const [showBrokers, setShowBrokers] = useState(false);

  return (
    <div>
      <section className="bg-center bg-no-repeat bg-[url('assets/images/blocklandbg.webp')] bg-gray-700 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Find Your Perfect Plot
          </h1>
          <p className="mb-5 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-40">
            Explore prime real estate opportunities where technology,
            innovation, and capital converge for long-term value and economic
            growth. Benefit from our legal services and connect with trusted
            brokers.
          </p>
          <p className="mb-8 text-lg font-bold text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            <i>Start investing today.</i>
          </p>

          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <button
              className={`bg-green-600 rounded-lg p-4 text-white font-bold flex items-center ${
                showLawyers ? "bg-green-700" : ""
              }`}
              onClick={() => setShowLawyers(!showLawyers)}
            >
              View Lawyers
            </button>
            <button
              className={`bg-green-600 rounded-lg p-4 text-white font-bold flex items-center ml-4 ${
                showBrokers ? "bg-green-700" : ""
              }`}
              onClick={() => setShowBrokers(!showBrokers)}
            >
              Brokerage Details
            </button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-10 pt-10">
        {/* <h2 className="text-3xl font-semibold text-gray-800 mb-8">Sections</h2> */}

        {/* Lawyer Services Section */}
        {showLawyers && (
          <div className="mb-8">
            {" "}
            {/* Add margin-bottom for spacing */}
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
              <u> Lawyer Services Section </u>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
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
            <h3 className="text-xl font-bold text-gray-800 mb-4 pt-12 text-center">
              <u> Brokerage Services Section </u>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
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

        {/* Featured Properties column-1 */}

        <h3 className="text-xl font-bold text-gray-800 mb-4 pt-14 text-center">
          <u> Featured Property </u>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
          {/* Section Card 1 - Featured Property Service */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              className="w-full h-48 object-cover object-center"
              src="https://via.placeholder.com/300x200"
              alt="Lawyer Service"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Featured Property
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
                Featured Property
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
                Featured Property
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
                Featured Property
              </h3>
              <p className="text-gray-600">Details about lawyer service.</p>
            </div>
          </div>
          {/* New Services */}
        </div>

        {/* Featured Properties column-2 */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-16">
          {/* Section Card 1 - Featured Property Service */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              className="w-full h-48 object-cover object-center"
              src="https://via.placeholder.com/300x200"
              alt="Lawyer Service"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Featured Property
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
                Featured Property
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
                Featured Property
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
                Featured Property
              </h3>
              <p className="text-gray-600">Details about lawyer service.</p>
            </div>
          </div>
        </div>

        {/* Process of buying Properties at our auction */}
        <div className="pt-16 mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">
            <u>Process of buying Properties at our auction</u>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 mx-auto">
          <div className="text-center">
            <p className="text-5xl font-bold text-red-600">20+</p>
            <p className="text-3xl font-bold pt-3">Years Experience</p>
          </div>

          <div className="text-center">
            <p className="text-5xl font-bold text-red-600">3.5K</p>
            <p className="text-3xl font-bold pt-3">Unit Sold</p>
          </div>

          <div className="text-center">
            <p className="text-5xl font-bold text-red-600">15+</p>
            <p className="text-3xl font-bold pt-3">Acheivement Awards</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
