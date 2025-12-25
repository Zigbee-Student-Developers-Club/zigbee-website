import Link from "next/link";
import React from "react";

import routes from "@/routes";

const Cta: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent">
            Ready to Explore?
          </h2>
          <p className="text-xl text-slate-700 max-w-2xl mx-auto">
            Join hundreds of students building amazing projects and growing
            their skills in our creative tech community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://drive.google.com/file/d/1mZfbLe1yexz8a16PpsF4GouvFGOTCw6I/view?usp=drivesdk"
              target="_blank"
            >
              <button className="cursor-pointer px-8 py-4 bg-white text-purple-600 border-2 border-purple-200 rounded-full font-semibold hover:bg-purple-50 hover:border-purple-300 transition-all duration-300 shadow-md hover:shadow-lg">
                Checkout our latest magazine
              </button>
            </Link>
            <Link href={routes.events}>
              <button className="cursor-pointer px-8 py-4 bg-white text-purple-600 border-2 border-purple-200 rounded-full font-semibold hover:bg-purple-50 hover:border-purple-300 transition-all duration-300 shadow-md hover:shadow-lg">
                View Our Events
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
