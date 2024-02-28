// const Register = () => {
//   return (
//     <>
//       <div>This is the register page</div>
//     </>
//   );
// };

// export default Register;

import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    accountType: "accountType",
    companyName: "",
    licenseNumber: "",
    yearsOfExperience: "",
    areaOfExpertise: "",
  });

  // ----------------------------------------- JavaScript Vaalidation ---------------------------------------------

  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    let errorMessage = "";

    switch (name) {
      case "fullName":
        if (value.trim() === "") {
          errorMessage = "Full Name is required!";
        }
        break;

      case "email":
        if (!/\S+@\S+.\S+/.test(value)) {
          errorMessage = "Email is not valid!";
        }
        break;

      case "password":
        if (
          value.length < 6 ||
          !/[A-Z]/.test(value) ||
          !/[!@#$%^&*]/.test(value)
        ) {
          errorMessage =
            "Password must be at least 6 characters! include: \n Should include at least one capital letter! \n Should include at least one symbol!";
        }
        break;

      case "phone":
        if (!/^\+\d{1,3} \d{3} \d{3} \d{3}$/.test(value)) {
          errorMessage = "Phone number is not valid";
        }
        break;

      case "address":
        if (value.trim() === "") {
          errorMessage = "Address is required";
        }
        break;

      case "companyName":
        if (value.trim() === "") {
          errorMessage = "Company Name is required";
        }
        break;

      case "licenseNumber":
        if (value.trim() === "") {
          errorMessage = "License Number is required";
        }
        break;

      case "yearsOfExperience":
        if (value.trim() === "") {
          errorMessage = "Years of Experience is required";
        }
        break;

      case "areaOfExpertise":
        if (value.trim() === "") {
          errorMessage = "Area of Expertise is required";
        }
        break;

      default:
        break;
    }

    setErrors({ ...errors, [name]: errorMessage });
    setFormData({ ...formData, [name]: value });
    // setFormData({ ...formData, [e.target.name]: e.target.value });
    // setFormData({ ...formData, [name]: value, ["${name}Error"]: errorMessage });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/register", formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // ----------------------------------------- JavaScript Vaalidation ---------------------------------------------

  // const handleChange = (e) => {
  //   const { name, value } = ee.target;
  //   let errorMessage = "";

  //   switch (name) {
  //     case "fullName":
  //       if (value.trim() === "") {
  //         errorMessage = "Full Name is required";
  //       }

  //       setFormData({ ...formData, [name]: value, ['${name}Error']: errorMessage});
  //   };
  // }

  // --------------------------------------------------------------------------------------------------------------

  return (
    <div className="flex justify-center items-center h-screen mt-16">
      <div className="bg-white p-8 rounded shadow-2xl w-1/2">
        <h2 className="text-2xl font-bold text-center">
          {/* top spacing -> mb-9 */}
          Create an Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-0 mt-5">
          <div className="grid grid-cols-2 gap-4">
            {/* Name */}
            <div className="mb-5">
              <label
                htmlFor="username-success"
                className="block mb-4 font-medium text-green-800"
                // className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
              >
                Your Name
              </label>
              <input
                type="text"
                id="username-success"
                className="bg-green-50 border border-green-500 text-black 
              dark:text-black 
              placeholder-green-700 
              dark:placeholder-green-500 
              focus:ring-green-500 focus:border-green-700 
              dark:bg-green-100 
              dark:border-green-500
              text-sm rounded-lg block w-full p-2.5"
                placeholder="Bonnie Green"
              />

              {/* <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="input"
            required
          /> */}
            </div>

            {/* Email */}
            <div className="mb-5">
              <label
                htmlFor="username-success"
                className="block mb-4 font-medium text-green-800"
              >
                Your Email
              </label>

              <input
                type="email"
                id="emai-success"
                className="bg-green-50 border border-green-500 text-black 
              dark:text-black 
              placeholder-green-700 
              dark:placeholder-green-500
              focus:ring-green-500 
              focus:border-green-700 
              dark:bg-green-100 
              dark:border-green-500
              text-sm rounded-lg block w-full p-2.5"
                placeholder="Email Address"
              />
            </div>

            {/* Password */}
            <div className="mb-5">
              <label
                htmlFor="username-success"
                className="block mb-4 font-medium text-green-800"
              >
                Your Password
              </label>

              <input
                type="password"
                id="password-success"
                className="bg-green-50 border border-green-500 text-black 
              dark:text-black 
              placeholder-green-700 
              dark:placeholder-green-500 
              focus:ring-green-500 focus:border-green-700 
              dark:bg-green-100 
              dark:border-green-500
              text-sm rounded-lg block w-full p-2.5"
                placeholder="Enter a strong password"
              />
            </div>

            {/* Phone Number */}
            <div className="mb-5">
              <label
                htmlFor="phonenumber-success"
                className="block mb-4 font-medium text-green-800"
              >
                Your Phone Number
              </label>
              <input
                type="text"
                id="phonenumber-success"
                className="bg-green-50 border border-green-500 text-black 
              dark:text-black 
              placeholder-green-700 
              dark:placeholder-green-500 
              focus:ring-green-500 focus:border-green-700 
              dark:bg-green-100 
              dark:border-green-500
              text-sm rounded-lg block w-full p-2.5"
                placeholder="+94 711 234 567"
              />
            </div>

            {/* Address */}
            <div className="mb-5">
              <label
                htmlFor="address-success"
                className="block mb-4 font-medium text-green-800"
              >
                Your Address
              </label>

              <input
                type="address"
                id="address-success"
                className="bg-green-50 border border-green-500 text-black 
              dark:text-black 
              placeholder-green-700 
              dark:placeholder-green-500
              focus:ring-green-500 
              focus:border-green-700 
              dark:bg-green-100 
              dark:border-green-500
              text-sm rounded-lg block w-full p-2.5"
                placeholder="Address"
              />
            </div>

            {/* Account type */}
            <div>
              <label
                htmlFor="accountType"
                className="block mb-4 font-medium text-green-800"
              >
                Account Type
              </label>

              <select
                name="accountType"
                className="bg-green-50 border border-green-500 text-black 
              dark:text-black 
              placeholder-green-700 
              dark:placeholder-green-500
              focus:ring-green-500 
              focus:border-green-700 
              dark:bg-green-100 
              dark:border-green-500
              text-sm rounded-lg block w-full p-2.5"
                value={formData.accountType}
                onChange={handleChange}
              >
                <option value="accountType" className="">
                  Select the account type that you need
                </option>
                <option value="investor">Investor</option>
                <option value="seller">Seller</option>
                <option value="lawyer">Lawyer</option>
                <option value="broker">Broker</option>
              </select>
            </div>
          </div>

          {/* -----------------------Register details according to the account type ------------------------------------------------------------------------------------ */}

          {formData.accountType === "lawyer" && (
            <>
              {/* Company Name */}
              <div className="mb-5">
                <label
                  htmlFor="companyName"
                  className="block mb-4 font-medium text-green-800"
                >
                  Your Company Name
                </label>

                <input
                  type="companyName"
                  id="companyName"
                  className="bg-green-50 border border-green-500 text-black 
                  dark:text-black 
                  placeholder-green-700 
                  dark:placeholder-green-500
                  focus:ring-green-500 
                  focus:border-green-700 
                  dark:bg-green-100 
                  dark:border-green-500
                  text-sm rounded-lg block w-full p-2.5"
                  placeholder="Company Name"
                />
              </div>

              {/* License Number */}
              <div className="mb-5">
                <label
                  htmlFor="licenseNumber"
                  className="block mt-4 font-medium text-green-800"
                >
                  License Number
                </label>

                <input
                  type="licenseNumber"
                  id="licenseNumber"
                  className="bg-green-50 border border-green-500 text-black 
                  dark:text-black 
                  placeholder-green-700 
                  dark:placeholder-green-500
                  focus:ring-green-500 
                  focus:border-green-700 
                  dark:bg-green-100 
                  dark:border-green-500
                  text-sm rounded-lg block w-full p-2.5 mt-4"
                  placeholder="License Number"
                />
              </div>

              {/* Years of Experience */}
              <div className="mb-5">
                <label
                  htmlFor="yearsOfExperience"
                  className="block mt-4 font-medium text-green-800"
                >
                  Years of Experience
                </label>

                <input
                  type="yearsOfExperience"
                  id="yearsOfExperience"
                  className="bg-green-50 border border-green-500 text-black 
                  dark:text-black 
                  placeholder-green-700 
                  dark:placeholder-green-500
                  focus:ring-green-500 
                  focus:border-green-700 
                  dark:bg-green-100 
                  dark:border-green-500
                  text-sm rounded-lg block w-full p-2.5 mt-4"
                  placeholder="Years of Experience"
                />
              </div>
            </>
          )}

          {formData.accountType === "investor" && (
            // Area Of Expertise
            <div className="mb-5">
              <label
                htmlFor="areaOfExpertise"
                className="block mb-4 font-medium text-green-800"
              >
                Area Of Expertise
              </label>

              <input
                type="areaOfExpertise"
                id="areaOfExpertise"
                className="bg-green-50 border border-green-500 text-black 
                  dark:text-black 
                  placeholder-green-700 
                  dark:placeholder-green-500
                  focus:ring-green-500 
                  focus:border-green-700 
                  dark:bg-green-100 
                  dark:border-green-500
                  text-sm rounded-lg block w-full p-2.5"
                placeholder="Area Of Expertise"
              />
            </div>
          )}

          {/* <button type="submit" className="btn">
            Create Account
          </button> */}

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full md:w-9/10 bg-green-600 hover:bg-green-900 text-white px-4 py-1.5 rounded mt-8"
            >
              Create Account
            </button>
          </div>
        </form>

        {/* Login Link */}
        <div className="mt-4 text-center">
          Already have an account?
          &nbsp;
          <a href="/login" className="text-green-600 hover:underline">
            Login here
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
