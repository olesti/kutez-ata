import React from "react";
import "./style.css";
//import { FaShoppingBasket, FaRegCreditCard } from "react-icons/fa";
import { FaFileArchive } from "react-icons/fa";
import { toast } from "react-toastify";
import ImageGallery from 'react-image-gallery';
import t1 from "../img/t-1.jpg";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPDZMCvJYzrgZOAmFt5NOMAECT0_--PF0",
  authDomain: "deneme-1b2d8.firebaseapp.com",
  projectId: "deneme-1b2d8",
  storageBucket: "deneme-1b2d8.appspot.com",
  messagingSenderId: "1080043745498",
  appId: "1:1080043745498:web:49a391775a5ebd3eb135e3",
  measurementId: "G-B603QNFR4W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 
function Card(props) {
  console.log(props);

  const notifyBasket = () =>
  
    toast("Added Basket!", {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      
    },window.open('https://dosya.co/j26riljkj4b9/kutezpanel.rhp.html', '_blank', 'noopener,noreferrer'));

   
   // eslint-disable-next-line no-lone-blocks
   { /*const notifyCheckout = () =>
    toast("Go to Checkout Process!", {
      position: "bottom-center",
      autoClose: 400,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });*/}

    const images = [
      {
        original:t1,
      }
    ];
    
  return (
    <>
      <div className="col-lg-4 col-xl-4 col-md-6 col-sm-6  mt-4">
        <div className="card">
          <div className="card-body">
            <ImageGallery items={images} />
            <div className="about">
              <h4 className="mt-3">{props.name}</h4>
              <p>{props.about}</p>

               {/* <div className="product-size mt-1">
                <div className="size s">S</div>
                <div className="size m">M</div>
                <div className="size l">L</div>
              </div>
              <div className="product-color mt-2">
                <div className="color black"></div>
                <div className="color blue"></div>
                <div className="color white"></div>
              </div>
            <h4 className="price mt-3">{props.price} $</h4>*/}
              <div className="flex-container">
                <button className="button" onClick={notifyBasket}>
                  Download Zip{" "}
                  <FaFileArchive
                    style={{ marginBottom: "2px", marginLeft: "10px" }}
                  />
                 
                </button>
                
               {/* <button className="button"
                  onClick={notifyCheckout}>
                  Checkout{" "}
                  <FaRegCreditCard
                    style={{ marginBottom: "2px", marginLeft: "10px" }}
                  />
  </button>*/}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
