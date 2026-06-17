import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function EMICalculator() {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [emi, setEmi] = useState(null);

  const calculateEMI = () => {
    const P = Number(amount);
    const R = Number(rate) / 12 / 100;
    const N = Number(years) * 12;

    const emiValue =
      (P * R * Math.pow(1 + R, N)) /
      (Math.pow(1 + R, N) - 1);

    setEmi(emiValue.toFixed(2));
  };

  return (
    <>
      <Navbar />

      <div className="max-w-xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          EMI Calculator
        </h1>

        <div className="bg-white shadow rounded p-6">
          <input
            type="number"
            placeholder="Loan Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border p-2 w-full mb-4"
          />

          <input
            type="number"
            placeholder="Interest Rate"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="border p-2 w-full mb-4"
          />

          <input
            type="number"
            placeholder="Years"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            className="border p-2 w-full mb-4"
          />

          <button
            onClick={calculateEMI}
            className="bg-blue-600 text-white px-4 py-2 rounded w-full"
          >
            Calculate EMI
          </button>

          {emi && (
            <div className="mt-6 text-center">
              <h2 className="text-2xl font-bold">
                Monthly EMI
              </h2>

              <p className="text-green-600 text-xl">
                ₹ {emi}
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default EMICalculator;