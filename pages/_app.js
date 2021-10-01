import "tailwindcss/tailwind.css";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <header className="container mx-auto bg-gray-700 text-white p-5">
        <div className="flex">
          <h1 className="text-2xl font-black">
            Next JS demo for Web Essentials
          </h1>
          <ul className="flex mx-10">
            <li className="mx-4">
              <Link href="/"><a className="hover:text-green-300">Home</a></Link>
            </li>
            <li className="mx-4">
              <Link href="/about"><a className="hover:text-green-300">About</a></Link>
            </li>
          </ul>
        </div>
      </header>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
