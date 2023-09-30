import { useRef, useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./../../firebase/firebase.config";

const Fogot = () => {
  const [error, setError] = useState(null);
  const emailRef = useRef(null);

  const handleSubmitReset = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;

    sendPasswordResetEmail(auth, email)
      .then(() => alert("check your email"))
      .catch((error) => setError(error.message));
  };

  return (
    <>
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Enter Your Email</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <form onSubmit={handleSubmitReset}>
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="email"
                      ref={emailRef}
                      name="email"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Email address"
                      required
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 -top-3.5 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5  peer-focus:text-sm"
                    >
                      Email Address
                    </label>
                  </div>
                  <p className="text-red-500">{error && error}</p>
                  <div className="relative">
                    <button
                      type="submit"
                      className="bg-blue-500 text-white rounded-md px-2 py-1"
                    >
                      Reset Password
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fogot;
