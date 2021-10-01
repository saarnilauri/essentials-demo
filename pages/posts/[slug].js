import Head from "next/head";
import Image from "next/image";
import fetcher from "../../lib/fetcher";
import { API } from "../../lib/constants";
import PortableText from "../../components/portableText";
import { Figure } from "../../components/Figure";
export async function getStaticPaths() {
  const query = `
  query {
      allPost {
        slug {
          current
        }
      }
    }
  `;

  const data = await fetcher(API, query);

  // [{params: {slug: 'test'}}]
  return {
    paths: data.data.allPost.map((post) => ({
      params: { slug: post.slug.current },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  // Get external data from the file system, API, DB, etc.
  const { slug } = context.params;

  const query = `
  query($slug: String) {
      allPost(where: { slug: { current: { eq: $slug } } }) {
        title
        slug {
          current
        }
        author {
          name
        }
        bodyRaw
        mainImage{
          asset{
            assetId
            altText
            url
          }
        }
      }
    }
  `;

  const data = await fetcher(API, query, { slug });

  // The value of the `props` key will be
  //  passed to the `Post` component
  return {
    props: { params: context.params, data }, //data,
  };
}

export default function Post(props) {
  const post = props.data.data.allPost[0];

  return (
    <div className="container mx-auto">
      <Head>
        <title>Next.js demo - {post.title}</title>
        <meta name="description" content="Next.js demo for Web Essentials" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="m-0 p-6">
        <div className="prose prose-xl">
          <h1>{post.title}</h1>
          <p>By: {post.author.name}</p>

          <Figure image={post.mainImage} />

          <div>
            <PortableText blocks={post.bodyRaw} />
          </div>

          <div className="my-10">
            <pre>{JSON.stringify(post, null, 2)}</pre>
          
        </div>
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
