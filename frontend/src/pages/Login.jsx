import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/login", formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
      setErrors({ message: "Invalid credentials"});
    }
  };

  return (
    <div className="flex justify-center items-center h-screen -mt-5">
      <div className="bg-white p-8 rounded shadow-2xl w-1/2">
        <h2 className="text-2xl font-bold text-center">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4 mt-5">
          <div className="mb-5">
            <label
              htmlFor="username"
              className="block mb-2 front-medium text-green-800"
            >
              Username
            </label>

            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
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
              placeholder="Username"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 font-medium text-green-800"
            >
              Password
            </label>

            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
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
              placeholder="Password"
            />
          </div>

          {errors.message && (
            <div className="text-red-500 font-semibold text-sm">
              {errors.message}
            </div>
          )}

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

export default Login;
