import CustomFooter from "../components/layouts/CustomFooter";
import CustomHeader from "../components/layouts/CustomHeader";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CustomHeader />
      <Component {...pageProps} />
      <CustomFooter />
    </>
  );
}

export default MyApp;
