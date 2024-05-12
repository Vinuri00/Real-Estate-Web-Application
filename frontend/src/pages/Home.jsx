import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
  const [showLawyers, setShowLawyers] = useState(false);
  const [showBrokers, setShowBrokers] = useState(false);
  const [advertisements, setAdvertisements] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/advertisements/get-all")
      .then((response) => response.json())
      .then((data) => setAdvertisements(data.slice(0, 3)))
      .catch((error) => console.error("Error fetching advertisements", error));
  }, []);

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
        {/* Featured Properties Section */}
        <h3 className="text-xl font-bold text-gray-800 mb-4 pt-14 text-center">
          <u> Featured Property </u>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
          {advertisements.map((advertisement) => (
            <div
              key={advertisement._id}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <Carousel
                arrowColor="black"
                dotColor="black"
                showStatus={false}
                className="overflow-hidden rounded-t-lg"
                showThumbs={false}
              >
                {advertisement.images.map((image, index) => (
                  <a href="#" key={index}>
                    <img
                      className="rounded-t-lg object-cover w-full h-64"
                      src={image}
                      alt=""
                    />
                  </a>
                ))}
              </Carousel>

              <div className="p-4">
                <a href="#">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {advertisement.title}
                  </h3>
                </a>

                <p className="text-gray-600">{advertisement.description}</p>

                <div className="text-sm text-black dark:text-black mt-2">
                  Owner Name: {advertisement.ownerName}
                </div>

                <div className="text-sm text-black dark:text-black mt-2">
                  Contact Number: {advertisement.contactNumber}
                </div>

                <div className="text-sm text-black dark:text-black mt-2">
                  Price: {advertisement.price}
                </div>

                <div className="text-sm text-black dark:text-black mt-2">
                  Location: {advertisement.location}
                </div>

                <div className="flex justify-center pt-5">
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 font-medium text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    Read more
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process of buying Properties at our auction */}
        <div className="pt-16 mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">
            <u>Process of buying Properties at our auction</u>
          </h3>
        </div>

        <div className="font-serif grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 mx-auto">
          <div className="text-center hover:scale-125 transition-transform duration-500">
            <p className="text-5xl font-bold text-red-600">20+</p>
            <p className="text-3xl font-bold pt-3">Years Experience</p>
          </div>

          <div className="text-center hover:scale-110 transition-transform duration-500">
            <p className="text-5xl font-bold text-red-600">3.5K</p>
            <p className="text-3xl font-bold pt-3">Unit Sold</p>
          </div>

          <div className="text-center hover:scale-110 transition-transform duration-500">
            <p className="text-5xl font-bold text-red-600">15+</p>
            <p className="text-3xl font-bold pt-3">Acheivement Awards</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
