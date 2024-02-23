import Head from "next/head";
import React from "react";

const SeoHeadTags = ({ title, Url, description, keyword }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="canonical" href={Url} />
        <meta name="description" content={description} />
        <meta name="keywords" content={keyword} />
      </Head>
    </>
  );
};

export default SeoHeadTags;
