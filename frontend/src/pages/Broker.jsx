import { useState, useEffect } from "react";

const Broker = () => {
  const [brokers, setBrokers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/brokers/get-all")
      .then((response) => response.json())
      .then((data) => setBrokers(data))
      .catch((error) => console.error("Error fetching brokers", error));
  }, []);

  return (
    <div className="px-28">
      {/* Broker Row - 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-14">
        {brokers.map((broker) => (
          <div
            key={broker._id}
            className="w-full max-w-sm rounded-lg shadow-md
                  bg-black border
                  border-gray-200 
                  dark:bg-white
                  dark:hover:bg-green-100"
          >
            <div className="flex flex-col justify-between items-center h-full pb-16 pt-10">
              <img
                className="w-32 h-32 mb-3 rounded-full shadow-2xl"
                style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.4)" }}
                // src={broker.image}
                src= "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710806400&semt=sph"
                alt={broker.fullName}
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-black mt-2">
                {broker.fullName}
              </h5>
              <span className="text-sm text-black dark:text-black mt-2">
                Email: {broker.email}
              </span>
              <span className="text-sm text-black mt-2">
                Contact: {broker.contactNumber}
              </span>
              <span className="text-sm text-black mt-2">
                Address: {broker.address}
              </span>
              <span className="text-sm text-black mt-2">
                City: {broker.city}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Broker;
