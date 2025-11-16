

// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="fixed top-0 w-full z-50 bg-white/50 backdrop-blur-xl border-b border-white/40 shadow-lg">
//       <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
//         <h1 className="text-3xl font-bold text-indigo-700">Contract Maker</h1>
//         <div className="flex gap-8 text-lg">
//           <Link to="/" className="text-gray-800 hover:text-indigo-700 transition">Home</Link>
//           <Link to="/create" className="text-gray-800 hover:text-indigo-700 transition">Create Contract</Link>
//           <Link to="/consult" className="text-gray-800 hover:text-indigo-700 transition">Consult Lawyer</Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-slate-900">
          ContractMaker
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink
            to="/"
            className="text-gray-700 hover:text-indigo-600 transition"
          >
            Home
          </NavLink>
          <NavLink
            to="/create"
            className="text-gray-700 hover:text-indigo-600 transition"
          >
            Create Contract
          </NavLink>
          <NavLink
            to="/consult"
            className="text-gray-700 hover:text-indigo-600 transition"
          >
            Consult Lawyer
          </NavLink>

          {/* CTA Button */}
          <Link
            to="/create"
            className="ml-4 bg-indigo-600 text-white font-medium px-5 py-2.5 rounded-lg shadow hover:bg-indigo-700 transition"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile toggle icon or drawer component could be added here */}
      </div>
    </nav>
  );
};

export default Navbar;
