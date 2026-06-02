function Login() {
  return (
    <div className="min-h-screen flex">
      {/* Left Side */}
      <div className="w-1/2 bg-blue-600 flex flex-col justify-center items-center text-white px-10">
        <h1 className="text-6xl font-bold mb-6 text-center">
          Loan Application Portal
        </h1>

        <p className="text-xl text-center max-w-md">
          Apply for loans, track applications, calculate EMI and manage
          approvals.
        </p>
      </div>

      {/* Right Side */}
      <div className="w-1/2 bg-gray-100 flex justify-center items-center">
        <div className="bg-white p-10 rounded-2xl shadow-xl w-[450px]">
          <h2 className="text-4xl font-bold text-center mb-8">Login</h2>

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-400 p-4 rounded-lg mb-5 focus:outline-none focus:border-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-400 p-4 rounded-lg mb-5 focus:outline-none focus:border-blue-500"
          />

          <button className="w-full bg-blue-600 text-white p-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
            Login
          </button>

          <p className="text-center mt-6 text-gray-600">
            Don't have an account?
            <span className="text-blue-600 cursor-pointer ml-2 font-medium">
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;