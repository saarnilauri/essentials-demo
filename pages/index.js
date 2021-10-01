import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import fetcher from "../lib/fetcher";
import { API } from "../lib/constants";
export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.

  const query = `
      query {
        allPost {
          title
          slug {
            current
          }
          author {
            name
          }
          
        }
      }
      `;
  const data = await fetcher(API, query);

  return {
    props: { data: data.data }, //data,
  };
}

export default function Home(props) {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Next.js demo</title>
        <meta name="description" content="Next.js demo for Web Essentials" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="m-0 p-6 prose">
        <h1 className="text-3xl font-bold m-y5">Welcome to Next.js demo</h1>

        <ul>
          {props.data.allPost.map((post) => (
            <li>
              <Link href={`/posts/${post.slug.current}`}>{post.title}</Link>
            </li>
          ))}
        </ul>

        <div className="my-10">
          <pre>{JSON.stringify(props, null, 2)}</pre>
        </div>
      </main>

      <footer className="bg-gray-500 p-5">
        <span className="m-5">
          <Image
            src="/nextjs-logo.svg"
            alt="Next.js Logo"
            width={207}
            height={124}
          />
        </span>
      </footer>
    </div>
  );
}
