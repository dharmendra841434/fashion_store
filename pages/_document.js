import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html className="">
        <Head>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
        </Head>
        <body className=" font-Montserrat">
          <Main />
          {/* Modal will be mounted here */}
          <div id="modal" />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
