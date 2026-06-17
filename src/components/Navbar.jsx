import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between">
      <h1 className="text-2xl font-bold">SmartLoan</h1>

      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/loans">Loans</Link>
        <Link to="/emi-calculator">EMI</Link>
        <Link to="/eligibility">Eligibility</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;