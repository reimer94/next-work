import Head from "next/head";
import React, { useState, useEffect } from "react";
import ArticleList from "../components/ArticleList";

export default function Home() {
  const url = "https://jsonplaceholder.typicode.com/posts?_limit=6";
  const [articles, setarticles] = useState();
  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJson = await response.json();
    setarticles(responseJson);
  };
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div>
      <Head>
        <title>Mi Web</title>
        <meta name="keywords" content="web development, programing" />
      </Head>
      <ArticleList articles={articles} />
    </div>
  );
}
