import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <Navbar />

      <div className="bg-blue-100 min-h-screen">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h1 className="text-5xl font-bold text-blue-700">
            SmartLoan Portal
          </h1>

          <p className="mt-6 text-lg text-gray-700">
            Apply for loans, calculate EMI, check eligibility and track
            applications easily.
          </p>

          <div className="mt-8 space-x-4">
            <Link
              to="/loans"
              className="bg-blue-600 text-white px-6 py-3 rounded"
            >
              Explore Loans
            </Link>

            <Link
              to="/emi-calculator"
              className="bg-green-600 text-white px-6 py-3 rounded"
            >
              Calculate EMI
            </Link>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 px-6 pb-16">
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-bold">Personal Loan</h2>
            <p>Interest Rate: 10%</p>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-bold">Home Loan</h2>
            <p>Interest Rate: 8%</p>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-bold">Car Loan</h2>
            <p>Interest Rate: 9%</p>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-bold">Education Loan</h2>
            <p>Interest Rate: 7%</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default LandingPage;