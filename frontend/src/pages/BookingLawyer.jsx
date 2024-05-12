import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Cookies from "js-cookie";

const BookingLawyer = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [fullname, setFullName] = useState("");
  const [contactnumber, setContactNumber] = useState("");
  const [nicnumber, setNicNumber] = useState("");
  const [email, setEmail] = useState("");
  const [propertytype, setPropertyType] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [lawyer, setLawyers] = useState();


  const { lawyerId } = params;

  useEffect(() => {
    const token = Cookies.get("token");

    if (!token) {
      navigate("/login");
      return;
    }

    /* const validateToken = async () => {
      try {
        const res = await axios.get(ADMIN_PROTECTED_URL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.statusText) throw new Error("Not Authorized");
      } catch (error) {
        console.error(error);
        navigate("/auth/sign-in");
      }
    };

    validateToken(); */
  }, [navigate]);

  useEffect(() => {
    fetch(`http://localhost:3000/lawyers/get-one/${lawyerId}`)
      .then((response) => response.json())
      .then((data) => setLawyers(data))
      .catch((error) => console.error("Error fetching lawyers", error));
  }, [lawyerId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(fullname, contactnumber, nicnumber, email, propertytype, selectedDate, lawyer)
    
  };

  console.log(lawyer);

  return (
    <div className="flex justify-center items-center h-screen mt-5">
      <div className="bg-white p-8 rounded shadow-2xl w-1/2">
        <h2 className="text-2xl font-bold text-center">Book A Lawyer</h2>

        <form onSubmit={handleSubmit} className="space-y-4 mt-5">
          <div className="mb-5">
            <label
              htmlFor="fullname"
              className="block mb-2 font-medium text-green-800"
            >
              Enter Your Full Name
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={fullname}
              onChange={(e) => setFullName(e.target.value)}
              className="bg-green-50 border border-green-500 text-black placeholder-green-700 focus:ring-green-500 focus:border-green-700 text-sm rounded-lg block w-full p-2.5"
              placeholder="Full Name"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="contactnumber"
              className="block mb-2 font-medium text-green-800"
            >
              Your Contact Number
            </label>
            <input
              type="text"
              id="contactnumber"
              name="contactnumber"
              value={contactnumber}
              onChange={(e) => setContactNumber(e.target.value)}
              className="bg-green-50 border border-green-500 text-black placeholder-green-700 focus:ring-green-500 focus:border-green-700 text-sm rounded-lg block w-full p-2.5"
              placeholder="Contact Number"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="nicnumber"
              className="block mb-2 font-medium text-green-800"
            >
              Your NIC Number
            </label>
            <input
              type="text"
              id="nicnumber"
              name="nicnumber"
              value={nicnumber}
              onChange={(e) => setNicNumber(e.target.value)}
              className="bg-green-50 border border-green-500 text-black placeholder-green-700 focus:ring-green-500 focus:border-green-700 text-sm rounded-lg block w-full p-2.5"
              placeholder="NIC Number"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 font-medium text-green-800"
            >
              Enter your Email Address
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-green-50 border border-green-500 text-black placeholder-green-700 focus:ring-green-500 focus:border-green-700 text-sm rounded-lg block w-full p-2.5"
              placeholder="Email Address"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="propertytype"
              className="block mb-2 font-medium text-green-800"
            >
              Property Type
            </label>
            <input
              type="text"
              id="propertytype"
              name="propertytype"
              value={propertytype}
              onChange={(e) => setPropertyType(e.target.value)}
              className="bg-green-50 border border-green-500 text-black placeholder-green-700 focus:ring-green-500 focus:border-green-700 text-sm rounded-lg block w-full p-2.5"
              placeholder="Property Type"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="date"
              className="block mb-2 font-medium text-green-800"
            >
              Date
            </label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              className="bg-green-50 border border-green-500 text-black placeholder-green-700 focus:ring-green-500 focus:border-green-700 text-sm rounded-lg block w-full p-2.5"
              placeholderText="Select Date"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full md:w-9/10 bg-green-600 hover:bg-green-900 text-white px-4 py-1.5 rounded mt-8"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>

      <div className="w-20"></div>

      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-green-950 dark:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-lg"
            src={lawyer?.image || "https://via.placeholder.com/400"}
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {lawyer?.name || "Lawyer Name"}
            </h5>
          </a>
          <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Company Name: {lawyer?.companyName || "Company Name"}
          </div>
          <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {lawyer?.yearsOfExperience || "Years Of Experience"} Years Of
            Experience
          </div>
          <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            License Number: {lawyer?.licenseNumber || "License Number"}
          </div>
          <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Email: {lawyer?.email || "email"}
          </div>
          <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Contact Number: {lawyer?.contactNumber || "Contact Number"}
          </div>
          <a
            href="/LaweyerDetails"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Change the Lawyer
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
  );
};

export default BookingLawyer;
