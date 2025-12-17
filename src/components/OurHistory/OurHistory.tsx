import Image from "next/image";
import React from "react";

const OurHistory = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-center p-4">
      <div className="relative w-full h-80 hidden lg:block mb-4">
        <Image
          fill
          alt="Meeting Image"
          className="object-cover rounded-xl"
          src="/about.jpg"
        />
      </div>
      <div className="flex flex-col space-y-6">
        <div>
          <span className="px-3 py-1 text-xs font-bold bg-yellow-100 text-yellow-700 rounded-md">
            OUR HISTORY
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            How It All Started
          </h2>
        </div>
        <div className="space-y-4 text-sm md:text-base">
          <p>
            One fine winter afternoon, a clump of mates casually chilling over
            some delicious coffee, random (but mostly funny) discussions, and
            that's how
            <span className="font-bold"> Zigbee OUTR</span> came into being!
            Originally established as a college's development club for the
            Department of Computer Science and Applications, we've had a very
            humble beginning, with the first team consisting of only about five
            members.
          </p>
          <p>
            There was just one goal, one motto and one vision in the minds of
            the founding team, and that was to converge and propel all those
            brilliantly sharp, witty and creative minds, who, at some point of
            time went adrift in this vast technological desert, into one big
            family.
          </p>
        </div>
        <div className="border-l-4 border-yellow-400 pl-4 py-2 italic text-gray-700">
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

export default OurHistory;
