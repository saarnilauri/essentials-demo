import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import fetcher from "../lib/fetcher";
import {API} from "../lib/constants"

export default function About() {
  return (
    <div className="container mx-auto">
      <Head>
        <title>About Next.js demo</title>
        <meta name="description" content="This is Next.js demo for Web Essentials" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="m-0 p-6 prose">
        <h1 className="text-3xl font-bold my-5">About the demo</h1>

        <p>This is a about page</p>
        
      </main>

      <footer className="bg-gray-500 p-5">
        <span className="m-5">
          <Image src="/nextjs-logo.svg" alt="Next.js Logo" width={207} height={124} />
        </span>
      </footer>
    </div>
  );
}
