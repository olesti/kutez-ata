/* eslint-disable react/jsx-no-undef */
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Products from "./pages/Products";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Login from "./component/Login";
function App() {
  return (
    <>

      <Login/>
      <Navbar />
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Products />
      <Footer />
    </>
  );
}

export default App;
