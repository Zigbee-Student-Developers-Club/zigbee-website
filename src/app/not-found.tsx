"use client";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6 mx-auto">
      <div className="relative w-60 h-40 mb-4">
        <Image
          fill
          alt="404_NotFound"
          className="object-contain"
          src="/404_face.png"
        />
      </div>
      <div className="text-center md:text-left">
        <h1 className="text-2xl font-semibold mb-2">Page Not Found</h1>
        <p className="text-gray-500 mb-6">
          Sorry, but we can&apos;t find the page you are looking for...
        </p>
        <Link
          className="border-1 shadow-md px-6 py-2 rounded-md text-white font-bold bg-green-600 hover:bg-green-500"
          href="/"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
