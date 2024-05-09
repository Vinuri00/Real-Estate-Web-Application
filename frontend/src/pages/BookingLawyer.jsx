import axios, { LAWYER_LOGIN_URL, USER_LOGIN_URL } from "../api/axios";
import { useState } from "react";

const BookingLawyer = () => {
  const [fullname, setUserName] = useState("");
  const [contactnumber, setContactNumber] = useState("");
  const [propertytype, setpropertytype] = useState("");
  const [nicnumber, setNicNumber] = useState("");

  // const handleUserTypeChange = (e) => {
  //   setAccountType(e.target.value);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    // const accountData = {
    //   fullname,
    //   contactnumber,
    // };

    // return console.log({ accountData, accountType });

    // if (accountType === "user") {
    //   try {
    //     const response = await axios.post(USER_LOGIN_URL, accountData);

    //     console.log(response);

    //     if (!response.statusText) throw new Error("Admin Login Failed");

    //     const { token } = await response.data;
    //     document.cookie = `token=${token}; path=/`;
    //   } catch (err) {
    //     console.error(err);
    //   }
    // }

    // if (accountType === "lawyer") {
    //   try {
    //     const response = await axios.post(LAWYER_LOGIN_URL, accountData);

    //     console.log(response);

    //     if (!response.statusText) throw new Error("Lawyer Login Failed");

    //     const { token } = await response.data;
    //     document.cookie = `token=${token}; path=/`;
    //   } catch (err) {
    //     console.error(err);
    //   }
    // }
  };

  return (
    <div className="flex justify-center items-center h-screen -mt-5">
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
              // value={formData.fullname}
              // onChange={handleChange}
              value={fullname}
              onChange={(e) => setUserName(e.target.value)}
              className="bg-green-50 border 
                       border-green-500 
                       text-black
                       dark:text-black
                       placeholder-green-700
                       focus:ring-green-500
                       focus:border-green-700
                       dark:bg-green-100
                       dark:border-green-500
                       text-sm rounded-lg block w-full p-2.5"
              placeholder="fullname"
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
              type="contactnumber"
              id="contactnumber"
              name="contactnumber"
              // value={formData.contactnumber}
              // onChange={handleChange}
              value={contactnumber}
              onChange={(e) => setContactNumber(e.target.value)}
              className="bg-green-50 border 
                       border-green-500 
                       text-black 
                       dark:text-black 
                       placeholder-green-700 
                       focus:ring-green-500 
                       focus:border-green-700 
                       dark:bg-green-100 
                       dark:border-green-500 
                       text-sm rounded-lg block w-full p-2.5"
              placeholder="contactnumber"
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
              type="nicnumber"
              id="nicnumber"
              name="nicnumber"
              // value={formData.nicnumber}
              // onChange={handleChange}
              value={nicnumber}
              onChange={(e) => setNicNumber(e.target.value)}
              className="bg-green-50 border 
                       border-green-500 
                       text-black 
                       dark:text-black 
                       placeholder-green-700 
                       focus:ring-green-500 
                       focus:border-green-700 
                       dark:bg-green-100 
                       dark:border-green-500 
                       text-sm rounded-lg block w-full p-2.5"
              placeholder="nic number"
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
              type="propertytype"
              id="propertytype"
              name="propertytype"
              // value={formData.propertytype}
              // onChange={handleChange}
              value={propertytype}
              onChange={(e) => setpropertytype(e.target.value)}
              className="bg-green-50 border 
                       border-green-500 
                       text-black 
                       dark:text-black 
                       placeholder-green-700 
                       focus:ring-green-500 
                       focus:border-green-700 
                       dark:bg-green-100 
                       dark:border-green-500 
                       text-sm rounded-lg block w-full p-2.5"
              placeholder="propertytype"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full md:w-9/10 bg-green-600 hover:bg-green-900 text-white px-4 py-1.5 rounded mt-8"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingLawyer;
