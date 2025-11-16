import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FileText, Shield, Clock, Users } from "lucide-react";

const Home = () => {
  const icons = [FileText, Shield, Clock, Users];

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col">
      

      {/* Hero Section */}
      <section className="pt-40 pb-24 text-center bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-md rounded-3xl shadow-lg border border-gray-200 px-8 py-16">
          <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Create Professional <br />
            <span className="text-indigo-600">Legal Contracts in Minutes</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12 leading-relaxed">
            Generate legally binding contracts with ease. Choose a template, customize it,
            and get legal consultation — all in one place.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              to="/create"
              className="bg-indigo-600 text-white font-semibold px-8 py-4 rounded-xl shadow hover:bg-indigo-700 transition"
            >
              Start Creating
            </Link>
            <Link
              to="/consult"
              className="bg-white text-indigo-700 border border-indigo-600 font-semibold px-8 py-4 rounded-xl shadow hover:bg-indigo-50 transition"
            >
              Consult Lawyer
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50">
        <h2 className="text-center text-3xl font-bold text-slate-900 mb-6">
          Why Choose <span className="text-indigo-600">Contract Maker</span>
        </h2>

        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-16">
          All the tools and features you need to create legally sound contracts with confidence.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto px-6">
          {[
            {
              title: "Professional Templates",
              desc: "Legally verified templates for all kinds of business and personal contracts.",
            },
            {
              title: "Legal Compliance",
              desc: "All contracts follow the latest legal standards and best practices.",
            },
            {
              title: "Quick Generation",
              desc: "Generate complete contracts in minutes using smart automation.",
            },
            {
              title: "Expert Consultation",
              desc: "Consult certified lawyers for personalized legal support.",
            },
          ].map((item, i) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                className="p-8 bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition"
              >
                <div className="w-14 h-14 flex items-center justify-center mx-auto mb-4 text-indigo-600 bg-indigo-50 rounded-full">
                  <Icon size={36} />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 text-center bg-white">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">
          How It <span className="text-indigo-600">Works</span>
        </h2>

        <p className="text-gray-700 max-w-3xl mx-auto mb-16">
          Follow these simple steps to create and download your contract.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12 max-w-5xl mx-auto px-6">
          {[
            { num: "01", text: "Choose Contract Type" },
            { num: "02", text: "Enter Required Details" },
            { num: "03", text: "Review & Sign" },
          ].map((step) => (
            <div
              key={step.num}
              className="flex flex-col items-center bg-gray-50 p-12 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition w-72"
            >
              <span className="text-4xl font-extrabold text-indigo-600 mb-5">{step.num}</span>
              <p className="text-gray-800 text-lg leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>

        {/* <div className="mt-12">
          <Link
            to="/create"
            className="inline-block bg-indigo-600 text-white font-semibold px-12 py-4 rounded-xl shadow hover:bg-indigo-700 transition"
          >
            Get Started Now
          </Link>
        </div> */}
      </section>

    </div>
  );
};

export default Home;
 