import Head from "next/head";

// export const getStaticProps = async () => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?_limit=6`
//   );
//   const articles = await res.json();

//   return {
//     props: {
//       articles,
//     },
//   };
// };

export default function Home() {
  return (
    <div>
      <Head>
        <title>MI Web</title>
        <meta name="keywords" content="web development, programing" />
      </Head>
      <h1>Bienvenido rei</h1>
    </div>
  );
}
