import { FileText, Download } from 'lucide-react';

export default function Resume() {
  return (
    <section id="resume" className="py-20 px-6 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Resume
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"></div>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Download my latest resume or view it online.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="/Divya-Patle-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <FileText className="w-5 h-5" />
            View Resume
          </a>
          <a
            href="/Divya-Patle-Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-purple-600 text-purple-600 font-semibold rounded-xl hover:bg-purple-50 dark:hover:bg-gray-800 transition-all duration-300"
          >
            <Download className="w-5 h-5" />
            Download PDF
          </a>
        </div>
      </div>
    </section>
  );
} 