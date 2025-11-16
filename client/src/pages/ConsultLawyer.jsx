import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FileText, MessageCircle, Send, Filter } from "lucide-react";

const mockLawyers = [
  { id: 1, name: "Priya Sharma", specialization: "Contract Law", experience: "8 years", location: "Delhi" },
  { id: 2, name: "Rohit Mehta", specialization: "Corporate Law", experience: "6 years", location: "Mumbai" },
  { id: 3, name: "Ananya Gupta", specialization: "Intellectual Property", experience: "10 years", location: "Bangalore" },
];

const ConsultLawyer = () => {
  const [contractText, setContractText] = useState("");
  const [lawyerFilter, setLawyerFilter] = useState("");
  const [aiQuery, setAiQuery] = useState("");
  const [aiResponse, setAiResponse] = useState("");

  const handleAskAI = () => {
    if (!aiQuery.trim()) {
      alert("Please enter a valid question or clause.");
      return;
    }
    setAiResponse(
      `🤖 AI Lawyer:\n\n"${aiQuery}"\n\n🟣 Explanation: This clause likely means that the parties agree to... (Mock response — connect Gemini/OpenAI here).`
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
 
      <main className="max-w-6xl mx-auto w-full px-6 py-20">
        <h1 className="text-3xl font-bold text-slate-900 text-center mb-10">Consult a Lawyer</h1>

        {/* Contract Input */}
        <section className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 mb-12">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FileText className="text-indigo-600" size={24} />
            Upload or Paste Your Contract
          </h2>
          <textarea
            value={contractText}
            onChange={(e) => setContractText(e.target.value)}
            placeholder="Paste your contract here or upload a file (feature coming soon)..."
            rows="6"
            className="w-full border border-gray-300 rounded-lg p-4 text-gray-800 focus:border-indigo-500 outline-none"
          />
        </section>

        {/* Lawyer Finder Section */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-slate-900">Find a Lawyer</h2>
            <Filter className="text-gray-500" size={20} />
          </div>

          <input
            type="text"
            placeholder="Filter by specialization (e.g. Corporate Law)"
            value={lawyerFilter}
            onChange={(e) => setLawyerFilter(e.target.value.toLowerCase())}
            className="w-full border border-gray-300 rounded-md p-3 mb-6 focus:border-indigo-500 outline-none"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockLawyers
              .filter((lawyer) =>
                lawyer.specialization.toLowerCase().includes(lawyerFilter)
              )
              .map((lawyer) => (
                <div
                  key={lawyer.id}
                  className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition"
                >
                  <h3 className="font-semibold text-lg text-slate-900">{lawyer.name}</h3>
                  <p className="text-gray-600 text-sm">{lawyer.specialization}</p>
                  <p className="text-gray-500 text-sm">{lawyer.experience}</p>
                  <p className="text-gray-500 text-sm mb-4">{lawyer.location}</p>
                  <button className="w-full bg-indigo-600 text-white py-2 rounded-lg shadow hover:bg-indigo-700 transition">
                    Connect
                  </button>
                </div>
              ))}
          </div>
        </section>

        {/* AI Clause Explanation */}
        <section className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 mb-12">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <MessageCircle className="text-indigo-600" size={24} /> Ask the AI Lawyer
          </h2>
          <textarea
            value={aiQuery}
            onChange={(e) => setAiQuery(e.target.value)}
            placeholder='Example: “Explain the confidentiality clause in simple terms”'
            rows="3"
            className="w-full border border-gray-300 rounded-lg p-4 text-gray-800 focus:border-indigo-500 outline-none resize-none"
          />

          <button
            onClick={handleAskAI}
            className="mt-4 inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-3 rounded-lg shadow hover:bg-indigo-700 transition"
          >
            <Send size={18} /> Ask AI
          </button>

          {aiResponse && (
            <div className="mt-5 p-4 bg-indigo-50 border border-indigo-200 rounded-lg text-indigo-900 whitespace-pre-line text-sm">
              {aiResponse}
            </div>
          )}
        </section>

        {/* Schedule Call */}
        <button className="w-full bg-indigo-600 text-white py-4 rounded-xl font-medium shadow hover:bg-indigo-700 transition mb-20">
          Schedule Full Consultation
        </button>
      </main>

    </div>
  );
};

export default ConsultLawyer;
