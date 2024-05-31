import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h1 className={`text-center ${inter.className}`}>
        Welcome to my blog site
      </h1>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label
            htmlFor="blog-title"
            className="block text-sm font-medium text-gray-700"
          >
            Blog Title
          </label>
          <input
            type="text"
            id="blog-title"
            name="blog-title"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your blog title"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="blog-content"
            className="block text-sm font-medium text-gray-700"
          >
            Blog Content
          </label>
          <textarea
            id="blog-content"
            name="blog-content"
            rows={4}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Write your blog content here"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full"
        >
          Submit
        </button>
      </form>
    </>
  );
}
