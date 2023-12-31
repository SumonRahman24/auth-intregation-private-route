import { BsEyeSlash, BsEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { sendEmailVerification, updateProfile } from "firebase/auth";

import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const [user, setUser] = useState(null);
  const [showPassword, setPassword] = useState(false);
  const [error, setError] = useState(null);
  console.log(user);

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // const username = e.target.username.value;

    const termAccepted = e.target.terms.checked;

    if (!termAccepted) {
      setError("Please Accept our terms and condition");
      return;
    } else if (password.length < 6) {
      setError("Password must have 6 character");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError("give atleast one Character");
      return;
    }

    createUser(email, password)
      .then((result) => {
        setUser(result);

        updateProfile(result.user, {});

        sendEmailVerification(result.user).then(() =>
          alert("Please Check Your Email")
        );
      })
      .catch((error) => setError(error.message));
    e.target.reset();

    setError(null);
  };

  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>

      <div className="bg-gray-100 flex h-screen  items-center  justify-center px-4 sm:px-6  lg:px-8">
        <div className="w-full -mt-24 max-w-md space-y-8">
          <div className="bg-white shadow-md rounded-md p-6">
            <img
              className="mx-auto h-12 w-auto"
              src="https://www.svgrepo.com/show/499664/user-happy.svg"
              alt=""
            />

            <h2 className="my-3 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign up for Account
            </h2>

            <form onSubmit={handleRegisterSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="new-password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <div className="mt-1">
                  <input
                    name="username"
                    type="text"
                    required
                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    name="email"
                    type="email"
                    // autoComplete="email-address"
                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1 relative">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="password"
                    required
                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                  />
                  <span
                    className="absolute top-4 right-4"
                    onClick={() => setPassword(!showPassword)}
                  >
                    {showPassword ? <BsEyeSlash /> : <BsEyeFill />}
                  </span>
                </div>
              </div>
              <div className="space-x-1">
                <input type="checkbox" id="terms" name="terms" />
                <label htmlFor="terms">
                  Accept our{" "}
                  <Link className="underline hover:text-green-500">
                    Terms and Condition
                  </Link>
                </label>
              </div>
              <div>{error && <p className="text-red-400 ">{error}</p>}</div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-sky-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
                >
                  Register Account
                </button>
              </div>
              <p>
                Already have an account?{" "}
                <Link className="text-blue-400 underline" to={"/login"}>
                  Login
                </Link>{" "}
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
