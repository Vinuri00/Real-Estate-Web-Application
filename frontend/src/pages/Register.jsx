import { useState } from "react";
import { validateRegister } from "../utils/RegisterVal";
import axios, { LAWYERS_REGISTER, USER_REGISTER } from "../api/axios";

const Register = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    email: "",
    contactNumber: "",
    password: "",
    accountType: "accountType",
    companyName: "",
    licenseNumber: "",
    yearsOfExperience: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let errorMessage = "";

    errorMessage = validateRegister(name, value);

    setErrors({ ...errors, [name]: errorMessage });
    setFormData({ ...formData, [name]: value });
  };

  // connection of the lawyer registration form to the backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.accountType === "user") {
      const userData = {
        fullName: formData.fullName,
        userName: formData.userName,
        email: formData.email,
        contactNumber: formData.contactNumber,
        password: formData.password,
      };

      try {
        const response = await axios.post(USER_REGISTER, userData);
        console.log(response.data);
        setSuccessMessage("User Registration successful");
      } catch (error) {
        console.log(error);
      }
    }

    if (formData.accountType === "lawyer") {
      const lawyerData = {
        fullName: formData.fullName,
        userName: formData.userName,
        email: formData.email,
        contactNumber: formData.contactNumber,
        password: formData.password,
        companyName: formData.companyName,
        licenseNumber: formData.licenseNumber,
        yearsOfExperience: formData.yearsOfExperience,
      };

      console.log(lawyerData);

      try {
        const response = await axios.post(LAWYERS_REGISTER, lawyerData);

        console.log(response.data);

        setSuccessMessage("User Registration successful");
      } catch (error) {
        console.error(error);
        setErrors({ message: "Invalid credentials" });
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen mt-16">
      <div className="bg-white p-8 rounded shadow-2xl w-full md:w-2/3">
        <h2 className="text-2xl font-bold text-center mb-5">
          {/* top spacing -> mb-9 */}
          Create an Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* <div>
            {errors}
          </div> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <div className="mb-5">
              <label
                htmlFor="fullname"
                className="block mb-4 font-medium text-green-800"
                // className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
              >
                Your Full Name
              </label>
              <input
                type="text"
                id="fullname"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="
                        bg-green-50 border
                        border-green-500 
                        text-black 
                        dark:text-black 
                        placeholder-green-700 
                        dark:placeholder-green-500 
                        focus:ring-green-500 
                        focus:border-green-700 
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
                htmlFor="username"
                className="block mb-4 font-medium text-green-800"
              >
                Add your Username
              </label>

              <input
                type="text"
                id="userName"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                className="
                        bg-green-50 border
                        border-green-500 
                        text-black 
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
                htmlFor="email"
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
                className="
                        bg-green-50 border
                        border-green-500 
                        text-black 
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

            {/* Contact Number */}
            <div className="mb-5">
              <label
                htmlFor="contactNumber"
                className="block mb-4 font-medium text-green-800"
              >
                Your Contact Number
              </label>
              <input
                type="text"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                className="
                        bg-green-50 border
                        border-green-500 
                        text-black 
                        dark:text-black 
                        placeholder-green-700 
                        dark:placeholder-green-500 
                        focus:ring-green-500 
                        focus:border-green-700 
                        dark:bg-green-100 
                        dark:border-green-500
                        text-sm rounded-lg block w-full p-2.5"
                placeholder="+94 711 234 567"
              />
            </div>

            {/* Password */}
            <div className="mb-5">
              <label
                htmlFor="password"
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
                className="
                        bg-green-50 border
                        border-green-500 
                        text-black 
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
                id="accountType"
                value={formData.accountType}
                onChange={handleChange}
                className="
                        bg-green-50 border
                        border-green-500 
                        text-black 
                        dark:text-black 
                        placeholder-green-700 
                        dark:placeholder-green-500 
                        focus:ring-green-500 
                        focus:border-green-700 
                        dark:bg-green-100 
                        dark:border-green-500
                        text-sm rounded-lg block w-full p-2.5"
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
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="
                        bg-green-50 border
                        border-green-500 
                        text-black 
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
                  name="licenseNumber"
                  value={formData.licenseNumber}
                  onChange={handleChange}
                  className="
                        bg-green-50 border
                        border-green-500 
                        text-black 
                        dark:text-black 
                        placeholder-green-700 
                        dark:placeholder-green-500 
                        focus:ring-green-500 
                        focus:border-green-700 
                        dark:bg-green-100 
                        dark:border-green-500
                        text-sm rounded-lg block w-full p-2.5"
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
                  name="yearsOfExperience"
                  value={formData.yearsOfExperience}
                  onChange={handleChange}
                  className="
                        bg-green-50 border
                        border-green-500 
                        text-black 
                        dark:text-black 
                        placeholder-green-700 
                        dark:placeholder-green-500 
                        focus:ring-green-500 
                        focus:border-green-700 
                        dark:bg-green-100 
                        dark:border-green-500
                        text-sm rounded-lg block w-full p-2.5"
                  placeholder="Years of Experience"
                />
              </div>
            </>
          )}

          {successMessage && (
            <div className="text-green-600">{successMessage}</div>
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
