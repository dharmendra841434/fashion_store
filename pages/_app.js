import CustomFooter from "../components/layouts/CustomFooter";
import CustomHeader from "../components/layouts/CustomHeader";
import { store } from "../app/store/store";
import "../styles/globals.css";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <CustomHeader />
      <Component {...pageProps} />
      <CustomFooter />
    </Provider>
  );
}

export default MyApp;
