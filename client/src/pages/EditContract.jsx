import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { FileText, Save, MessageSquare } from "lucide-react";

const ViewEditContract = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const initialText =
    state?.contractText ||
    "<h2>Start editing your contract here...</h2><p>Add all necessary clauses, terms, and signatures.</p>";

  const editor = useEditor({
    extensions: [StarterKit],
    content: initialText,
  });

  const handleSave = () => {
    const updatedContent = editor.getHTML();
    console.log("Saved contract:", updatedContent); // hook to backend later
    alert("Contract changes saved successfully!");
  };

  const handleDownload = () => {
    alert("Download as PDF feature coming soon! 📄");
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">

      {/* Main Section */}
      <main className="max-w-5xl mx-auto w-full px-6 py-24">
        <div className="bg-white shadow-sm border border-gray-200 rounded-2xl p-8 mb-12">
          <h1 className="text-3xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <FileText size={28} className="text-indigo-600" />
            View & Edit Contract
          </h1>
          <p className="text-gray-600 mb-8">
            Review and make any necessary changes to your contract. Once finalized, you can download it or consult a lawyer.
          </p>

          {/* Editor */}
          <div className="bg-gray-50 border border-gray-300 rounded-xl shadow-inner p-4 min-h-[350px] overflow-auto">
            <EditorContent editor={editor} className="prose max-w-none" />
          </div>

          {/* Button Group */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button
              onClick={handleSave}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow hover:bg-indigo-700 transition"
            >
              <Save size={20} /> Save Changes
            </button>

            <button
              onClick={handleDownload}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white text-indigo-600 border border-indigo-600 font-medium rounded-lg shadow hover:bg-indigo-50 transition"
            >
              Download PDF
            </button>

            <button
              onClick={() => navigate("/consult")}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg shadow hover:bg-gray-200 transition"
            >
              <MessageSquare size={20} /> Consult a Lawyer
            </button>
          </div>
        </div>
      </main>

    </div>
  );
};

export default ViewEditContract;
