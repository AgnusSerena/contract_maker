import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Sparkles, Lightbulb, TextIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CreateContractPrompt = () => {
  const [prompt, setPrompt] = useState("");
  const [contractText, setContractText] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleGenerate = () => {
    if (!prompt.trim()) {
      alert("Please enter a description for the contract.");
      return;
    }

    setLoading(true);
    setContractText("");
    setTimeout(() => {
      setContractText(
        `📄 Sample AI-Generated Contract:\n\n${prompt}\n\n[Contract clauses and legal text would appear here.]`
      );
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
    
      {/* Header */}
      <section className="pt-28 pb-12 text-center bg-white shadow-inner">
        <Sparkles className="mx-auto text-indigo-600" size={42} />
        <h1 className="text-4xl font-bold mt-4 text-slate-900">
          AI Contract Generator
        </h1>
        <p className="text-gray-600 mt-2 text-lg max-w-2xl mx-auto">
          Write a short description of your contract — the AI will generate a full document for you.
        </p>
      </section>

      {/* Main Section */}
      <main className="max-w-4xl mx-auto w-full px-6 py-12">
        
        {/* Contract Description Input */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-8">
          <label className="block font-medium text-gray-800 text-lg mb-3">
            Contract Description
          </label>

          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g., Write a lease agreement between Suresh (owner) and Ramesh (tenant) for 1 year, ₹15,000/month in Chennai..."
            rows="8"
            className="w-full border border-gray-300 rounded-lg p-4 text-gray-800 focus:border-indigo-500 outline-none resize-none"
          />

          <button
            onClick={handleGenerate}
            disabled={loading}
            className="w-full mt-6 bg-indigo-600 text-white py-3 rounded-lg font-semibold shadow hover:bg-indigo-700 transition"
          >
            {loading ? "Generating..." : "Generate Contract"}
          </button>
        </div>

        {/* Generated Contract */}
        {contractText && (
          <div className="bg-gray-50 border border-gray-300 rounded-2xl p-6 shadow mb-10">
            <h2 className="text-xl font-semibold text-slate-800 mb-3">Generated Contract</h2>
            <pre className="whitespace-pre-wrap text-gray-700 max-h-[320px] overflow-y-auto">
              {contractText}
            </pre>

            <button
              onClick={() => navigate("/edit-contract", { state: { contractText } })} // pass contract to edit screen
              className="mt-6 block w-full bg-white text-indigo-600 border border-indigo-600 px-10 py-3 rounded-xl shadow hover:bg-indigo-50 transition duration-200"
            >
              Edit This Contract
            </button>
          </div>
        )}

        {/* Tips Section (BOTTOM) */}
        <section className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 mb-10">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-900 mb-4">
            <Lightbulb size={20} className="text-indigo-600" />
            Helpful Tips
          </h3>

          <ul className="text-gray-600 text-sm space-y-3 mb-6">
            <li>✓ Include full names and roles</li>
            <li>✓ Mention contract duration and location</li>
            <li>✓ Specify payment or compensation terms</li>
            <li>✓ Add legal jurisdiction (city/state)</li>
          </ul>

          <div className="p-5 bg-indigo-50 rounded-xl text-center shadow-inner">
            <TextIcon size={28} className="text-indigo-700 mx-auto mb-2" />
            <p className="text-indigo-900 font-medium text-sm">
              You’ll be able to review and edit the contract before finalizing it.
            </p>
          </div>
        </section>

      </main>

    </div>
  );
};

export default CreateContractPrompt;
