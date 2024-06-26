import { Input, Button, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios, { LAWYER_LOGIN } from "@/api/axios";
import { jwtDecode } from "jwt-decode";
import Swal from "sweetalert2";
import { validateLogin } from "@/validations/login";


export function SignIn() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateLogin(userName, password)) return;

    try {
      const response = await axios.post(
        LAWYER_LOGIN,
        JSON.stringify({ userName, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        },
      );

      console.log(response);

      if (!response.statusText) throw new Error("Lawyer Login Failed");

      const { token } = await response.data;
      document.cookie = `token=${token}; path=/`;

      const decodedToken = jwtDecode(token);

      Swal.fire({
        title: "GreenLands Lawyer Panel",
        text: `Welcome back Lawyer ${decodedToken.lawyerName}!`,
        icon: "success",
      }).then(() => {
        navigate("/dashboard/home");
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="m-8 flex gap-4">
      <div className="mt-48 w-full lg:w-3/5">
        <div className="text-center">
          <Typography variant="h2" className="mb-4 font-bold">
            Lawyer Sign In
          </Typography>
          <Typography
            variant="paragraph"
            color="blue-gray"
            className="text-lg font-normal"
          >
            Enter your username and password to Sign In.
          </Typography>
        </div>
        <form
          className="mx-auto mb-2 mt-8 w-80 max-w-screen-lg lg:w-1/2"
          onSubmit={handleSubmit}
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              variant="small"
              color="blue-gray"
              className="-mb-3 font-medium"
            >
              Your username
            </Typography>
            <Input
              size="lg"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography
              variant="small"
              color="blue-gray"
              className="-mb-3 font-medium"
            >
              Password
            </Typography>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <Button className="mt-6" fullWidth type="submit">
            Sign In
          </Button>
        </form>
      </div>
      <div className="hidden h-full w-2/5 lg:block">
        <img
          src="/img/pattern.png"
          className="h-screen w-full rounded-3xl object-cover"
          alt={"Sign in image"}
        />
      </div>
    </section>
  );
}

export default SignIn;
