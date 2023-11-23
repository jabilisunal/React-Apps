import React from "react";
import "./App.css";
import Header from "./components/header/Index";
import Card from "./components/Card/Index";
import Cards from "./components/Cards/Index";
import Footer from "./components/Footer/Index";

const App = () => {
  const myDesign = {
    color: "red",
    backgroundColor: "blue",
    height: "200px",
    width: "200px",
    fontSize: "50px",
  };
  const myDivFlex ={
    display:"flex",
    flexWrap:"wrap"

  }
  return (
    <React.Fragment>
      {/* <Header/> */}
      <main>
        <main style={myDivFlex}>
         <Cards/>
        </main>
        <Footer/>
      </main>

      {/* <h1 style={{ color: "red", backgroundColor: "green" }}>Salam</h1>
      <p style={myDesign}>Hello world</p> */}
    </React.Fragment>
  );
};

export default App;
