import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-center px-4 py-8 animate-fade-in-up">
      <div className="relative w-full h-80 hidden lg:block mb-4 mr-4 group">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-xl" />
        <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
          <Image
            fill
            alt="Meeting Image"
            className="object-cover"
            src="/about.jpg"
          />
        </div>
      </div>
      <div className="flex flex-col space-y-5">
        <div>
          <span className="px-3 py-1 text-xs font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-md shadow-lg">
            OUR HISTORY
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent">
            How It All Started
          </h2>
        </div>
        <div className="space-y-4 text-sm md:text-base text-slate-700">
          <p>
            One fine winter afternoon, a clump of mates casually chilling over
            some delicious coffee, random (but mostly funny) discussions, and
            that's how
            <span className="font-bold text-purple-700"> Zigbee OUTR</span> came
            into being! Originally established as a college's development club
            for the Department of Computer Science and Applications, we've had a
            very humble beginning, with the first team consisting of only about
            five members.
          </p>
          <p>
            There was just one goal, one motto and one vision in the minds of
            the founding team, and that was to converge and propel all those
            brilliantly sharp, witty and creative minds, who, at some point of
            time went adrift in this vast technological desert, into one big
            family.
          </p>
        </div>
        <div className="border-l-4 border-yellow-400 bg-gradient-to-r from-yellow-50 to-orange-50 pl-4 py-2 italic text-slate-700 rounded-r-lg">
          <p className="text-sm sm:text-base">
            "To infinity and beyond! We will only continue to grow in this
            endeavor to assist and promote students to explore and witness new
            horizons."
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
