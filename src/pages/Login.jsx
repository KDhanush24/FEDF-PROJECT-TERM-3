import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
  if (email === "" || password === "") {
    alert("Please enter Email and Password");
    return;
  }

  navigate("/dashboard");
};
  return (
    <div className="min-h-screen flex">
      {/* Left Section */}
      <div className="w-1/2 bg-blue-600 flex flex-col justify-center items-center text-white px-10">
        <h1 className="text-5xl font-bold mb-6 text-center">
          Loan Application Portal
        </h1>

        <p className="text-lg text-center max-w-md">
          Apply for loans, track applications, calculate EMI and manage
          approvals.
        </p>
      </div>

      {/* Right Section */}
      <div className="w-1/2 bg-gray-100 flex justify-center items-center">
        <div className="bg-white p-10 rounded-2xl shadow-xl w-[450px]">
          <h2 className="text-4xl font-bold text-center mb-8">Login</h2>

          <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 p-4 rounded-lg mb-4"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 p-4 rounded-lg mb-6"
          />

          <button onClick={handleLogin} className="w-full bg-blue-600 text-white p-4 rounded-lg text-lg font-semibold">
            Login
          </button>

          <p className="text-center mt-6 text-gray-600">
            Don't have an account?
            <Link
              to="/signup"
              className="text-blue-600 ml-2 font-medium"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;