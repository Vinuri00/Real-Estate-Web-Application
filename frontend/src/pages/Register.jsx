import { useState } from "react";
import axios from "axios";
import { validateRegister } from "../utils/RegisterVal";
// import { Link } from "react-router-dom";
// import { useToast, immediateToast } from "izitoast-react";
// import "izitoast-react/dist/iziToast.css";

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

    errorMessage = validateRegister(name, value);

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
      <div className="bg-white p-8 rounded shadow-2xl w-2/3">
        <h2 className="text-2xl font-bold text-center">
          {/* top spacing -> mb-9 */}
          Create an Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-0 mt-5">
          {/* <div>
            {errors}
          </div> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

            {/* Username */}
            <div className="mb-5">
              <label
                htmlFor="username-success"
                className="block mb-4 font-medium text-green-800"
              >
                Add your Username
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
                placeholder="Username"
              />
            </div>

            {/* Email */}
            <div className="mb-5">
              <label
                htmlFor="email-success"
                className="block mb-4 font-medium text-green-800"
              >
                Your Email
              </label>

              <input
                type="email"
                id="email-success"
                className="bg-green-50 border border-green-500 text-black 
              dark:text-black 
              placeholder-green-700 
              dark:placeholder-green-500 
              focus:ring-green-500 focus:border-green-700 
              dark:bg-green-100 
              dark:border-green-500
              text-sm rounded-lg block w-full p-2.5"
                placeholder="Email Address"
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

            {/* Password */}
            <div className="mb-5">
              <label
                htmlFor="address-success"
                className="block mb-4 font-medium text-green-800"
              >
                Your Password
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
                placeholder="Enter your Password"
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
                {/* <option value="investor">Investor</option> */}
                {/* <option value="seller">Seller</option> */}
                <option value="user">User</option>
                <option value="lawyer">Lawyer</option>
                {/* <option value="broker">Broker</option> */}
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
          Already have an account? &nbsp;
          {/* <Link
            to="/login"
            className="md:ml-4 bg-green-600 hover:bg-green-900 text-white px-4 py-1.5 rounded"
          >
            Login here
          </Link> */}
          <a href="/login" className="text-green-600 hover:underline">
            Login here
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
