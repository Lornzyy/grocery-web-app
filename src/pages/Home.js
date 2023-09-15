import React from "react";
import img from "../images/grocery-hub-logo.jpg";
import "../home.css";
import Footer from "../components/Footer"


function Home(){
    return (
      <>
        <div className="home--info">
          <h1>Grocery Hub</h1>
          <p>
            Groceries sold here are a variety from dairy, vegetables, fruits,
            and meat products.
          </p>
        </div>
        <div className="image--scroller">
          <img src={img} alt="grocery" />
          <img src={img} alt="grocery" />
          <img src={img} alt="grocery" />
          <img src={img} alt="grocery" />
        </div>

        <Footer />
      </>
    );
}

export default Home;