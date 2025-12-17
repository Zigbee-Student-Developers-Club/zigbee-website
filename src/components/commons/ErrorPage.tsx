import Link from "next/link";
import { FaCircle } from "react-icons/fa";

interface ErrorPageProps {
  statusCode: number;
  title: string;
  description?: string;
}

const ErrorPage = ({
  statusCode = 500,
  title = "Something went wrong",
  description = "An unexpected error occurred.",
}: ErrorPageProps) => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6 mx-auto">
      <div className="border-4 border-gray-700 rounded-xl w-64">
        <div className="flex gap-2 px-3 py-2 border-b-4 border-gray-700">
          <FaCircle className="text-gray-700 text-xs" />
          <FaCircle className="text-gray-700 text-xs" />
          <FaCircle className="text-gray-700 text-xs" />
        </div>
        <div className="py-12 text-center text-6xl font-bold text-gray-700">
          &#123;{statusCode}&#125;
        </div>
      </div>
      <div className="text-center md:text-left">
        <h1 className="text-2xl font-semibold mb-2">{title}</h1>
        <p className="text-gray-500 mb-6">{description}</p>
        <Link
          className="border shadow-md px-6 py-2 rounded-md text-white font-bold bg-green-600 hover:bg-green-500"
          href="/"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
