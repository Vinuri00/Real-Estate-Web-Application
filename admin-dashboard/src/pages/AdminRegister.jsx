import { useState } from "react";
import axios from "axios";
import { validateRegister } from "../utils/RegisterVal";


const AdminRegister = () => {
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

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded shadow-2xl w-2/4">
        <h2 className="text-2xl font-bold text-center">
          {/* top spacing -> mb-9 */}
          Create an Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-0 mt-5">
          {/* <div>
            {errors}
          </div> */}
          <div className="grid grid-cols-1">
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
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
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
              {errors.fullName && <p className="text-red-500">{errors.fullName}</p>}
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
                type="username"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
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
              {errors.username && <p className="text-red-500">{errors.username}</p>}  
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
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
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
              {errors.email && <p className="text-red-500">{errors.email}</p>}
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
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
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
              {errors.password && <p className="text-red-500">{errors.password}</p>}
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full md:w-9/10 bg-green-600 hover:bg-green-900 text-white px-4 py-1.5 rounded mt-5"
            >
              Create Account
            </button>
          </div>
        </form>

        {/* Login Link */}
        <div className="mt-4 text-center">
          Already have an account? &nbsp;
          <a href="/login" className="text-green-600 hover:underline">
            Login here
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdminRegister;
