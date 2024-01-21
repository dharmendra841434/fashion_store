import CustomFooter from "../components/layouts/CustomFooter";
import CustomHeader from "../components/layouts/CustomHeader";
import { store } from "../app/store/store";
import "../styles/globals.css";
import { Provider } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <CustomHeader />
      <Component {...pageProps} />
      <ToastContainer />
      <CustomFooter />
    </Provider>
  );
}

export default MyApp;
