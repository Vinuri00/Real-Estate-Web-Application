import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LawyerDetails = () => {
  const [lawyers, setLawyers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/lawyers/get-all-approved")
      .then((response) => response.json())
      .then((data) => setLawyers(data))
      .catch((error) => console.error("Error fetching lawyers", error));
  }, []);

//   const handleSelect = (lawyerId) => {
//     console.log("Selected lawyer ID: ", lawyerId);
//   };

  return (
    <>
      <section className="bg-white dark:bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
          <div className="text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-black">
              Our Team
            </h2>
            <p className="font-light text-justify text-gray-800 lg:mb-16 sm:text-xl dark:text-gray-800">
              Our team of expert real estate lawyers are dedicated to providing
              you with the guidance and support you need for seamless property
              transactions. With their deep knowledge of real estate law and
              years of experience, they are your trusted advisors every step of
              the way. Whether you're buying, selling, or dealing with property
              disputes, our team is here to ensure your interests are protected
              and your transactions are conducted smoothly. Trust our team to
              handle your real estate matters with professionalism and
              expertise.
            </p>
          </div>
          <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
            {lawyers.map((lawyer) => (
              <div
                key={lawyer._id}
                className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-green-950 dark:border-gray-700"
              >
                <a href="#">
                  <img
                    className="w-40 h-40 object-cover rounded-lg sm:rounded-none sm:rounded-l-lg"
                    src={lawyer.image}
                    alt=""
                  />
                </a>
                <div className="p-5 items-center">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">{lawyer.fullName}</a>
                  </h3>
                  <span className="text-gray-500 dark:text-gray-400">
                    {lawyer.companyName}
                  </span>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                    {lawyer.yearsOfExperience} years of experience
                  </p>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                    License Number: {lawyer.licenseNumber}
                  </p>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                    Email: {lawyer.email}
                  </p>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                    Contact Number: {lawyer.contactNumber}
                  </p>
                  <Link
                    to={`/BookingLawyer/${lawyer._id}`}
                    className="md:ml-4 bg-green-600 hover:bg-green-900 text-white px-4 py-1.5 rounded text-sm md:text-base hidden lg:block"
                  >
                    Select
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LawyerDetails;
