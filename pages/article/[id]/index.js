import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Article = () => {
  const router = useRouter();
  const { id } = router.query;
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
  // console.log(url);
  const [article, setarticle] = useState();
  const fetchApi = async () => {
    const response = await fetch(url);
    // console.log("reeee");
    const responseJson = await response.json();
    setarticle(responseJson);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  // console.log(article.title);
  return (
    <>
      <h1>{}</h1>
      <p>{}</p>
      <h3>{}</h3>
      <br />
      <Link href="/">Volver</Link>
    </>
  );
};

// export const getServerSideProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );
//   const article = await res.json();
//   return {
//     props: {
//       article,
//     },
//   };
// };
export default Article;
