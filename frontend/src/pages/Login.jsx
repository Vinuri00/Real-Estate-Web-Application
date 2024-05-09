import axios, { LAWYER_LOGIN_URL, USER_LOGIN_URL } from "../api/axios";
import { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [accountType, setAccountType] = useState("user");

  const handleUserTypeChange = (e) => {
    setAccountType(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const accountData = {
      userName,
      password,
    };

    // return console.log({ accountData, accountType });

    if (accountType === "user") {
      try {
        const response = await axios.post(USER_LOGIN_URL, accountData);

        console.log(response);

        if (!response.statusText) throw new Error("Admin Login Failed");

        const { token } = await response.data;
        console.log(token);
        Cookies.set("token", token);
        navigate("/");
      } catch (err) {
        console.error(err);
      }
    }

    if (accountType === "lawyer") {
      try {
        const response = await axios.post(LAWYER_LOGIN_URL, accountData);

        console.log(response);

        if (!response.statusText) throw new Error("Lawyer Login Failed");

        const { token } = await response.data;
        console.log(token);
        Cookies.set("token", token);
        navigate("/");
      } catch (err) {
        console.error(err);
      }
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
              // value={formData.username}
              // onChange={handleChange}
              value={userName}
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
              // value={formData.password}
              // onChange={handleChange}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              value={accountType}
              onChange={handleUserTypeChange}
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

          {/* {errors.message && (
            <div className="text-red-500 font-semibold text-sm">
              {errors.message}
            </div>
          )} */}

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full md:w-9/10 bg-green-600 hover:bg-green-900 text-white px-4 py-1.5 rounded mt-8"
            >
              Login
            </button>
          </div>

          <div className="mt-4 text-center">
            If you do not have an account? &nbsp;
            {/* <Link
            to="/login"
            className="md:ml-4 bg-green-600 hover:bg-green-900 text-white px-4 py-1.5 rounded"
          >
            Login here
          </Link> */}
            <a href="/register" className="text-green-600 hover:underline">
              Register here
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
