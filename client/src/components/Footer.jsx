import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 py-14 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

        <div>
          <h2 className="text-xl font-bold text-white mb-3">Contract Maker</h2>
          <p className="text-gray-400">
            Create professional contracts effortlessly. Get legal consultation from experienced lawyers.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/create" className="hover:text-white">Create Contract</a></li>
            <li><a href="/consult" className="hover:text-white">Consult Lawyer</a></li>
            <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <ul className="space-y-2 text-gray-400">
            <li>info@contractmaker.com</li>
            <li>+91 9894326579</li>
            <li>123 Legal Street, NY 10001</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <p className="text-gray-400">© 2025 Contract Maker. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

