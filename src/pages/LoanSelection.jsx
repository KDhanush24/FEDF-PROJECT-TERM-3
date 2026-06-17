import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function LoanSelection() {
  const loans = [
    {
      name: "Personal Loan",
      rate: "10%",
    },
    {
      name: "Home Loan",
      rate: "8%",
    },
    {
      name: "Car Loan",
      rate: "9%",
    },
    {
      name: "Education Loan",
      rate: "7%",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Loan Selection
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          {loans.map((loan, index) => (
            <div
              key={index}
              className="bg-white shadow rounded p-6"
            >
              <h2 className="text-2xl font-bold">
                {loan.name}
              </h2>

              <p className="mt-2">
                Interest Rate: {loan.rate}
              </p>

              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
                Apply
              </button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default LoanSelection;