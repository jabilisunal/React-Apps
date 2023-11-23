import React from "react";
import Card from "../Card/Index";
import "./Index.css";

const Cards = () => {
  const styledButton = {
    // width:"100px",
    backgroundColor: "red",
    color: "white",
    border: "none",
    margin: "20px",
    padding: "10px 20px",
    fontSize: "20px",
    cursor: "pointer",
  };

    const logger = (params) => {
      console.log(params);
    };

  return (
    <div className="cards">
      {/* <button onClick={()=>logger("this is params")}  style={styledButton} >Clicked</button> */}
      <Card
        logparams="First button clicked"
        logger={logger}
        title="Built for developers"
        textColor="red"
        buttonTxt="Reset"
        subtitle="Here is text 1 lorem ipsum lorem ipsum lorem ipsum"
        bckImg="https://images.pexels.com/photos/18797959/pexels-photo-18797959/free-photo-of-people-on-a-railway-station-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
      />
      <Card
        logparams="Second button clicked"
        logger={logger}
        title="Mountains"
        textColor="green"
        buttonTxt="Change"
        subtitle="Here is text 2 lorem ipsum lorem ipsum"
        bckImg="https://images.pexels.com/photos/18274746/pexels-photo-18274746/free-photo-of-barren-mountains-landscape.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
      />
      <Card
        logparams="Third button clicked"
        logger={logger}
        title="Modern responsive design"
        textColor="hotpink"
        buttonTxt="Popup"
        subtitle="Here is text 3 lorem ipsum lorem ipsum"
        bckImg="https://images.pexels.com/photos/19151998/pexels-photo-19151998/free-photo-of-tuscany-italy.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
      />
      <Card
        logger={logger}
        logparams={"Aqua button clicked"}
        title="Modern responsive design"
        textColor="aqua"
        buttonTxt="Aler"
        subtitle="Here is text 4 lorem ipsum lorem ipsum"
        bckImg="https://images.pexels.com/photos/19151998/pexels-photo-19151998/free-photo-of-tuscany-italy.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
      />
      <Card
        logger={logger}
        logparams="Last button clicked"

        title="Modern responsive design"
        textColor="aqua"
        buttonTxt="Aler"
        subtitle="Here is text 4 lorem ipsum lorem ipsum"
        bckImg="https://images.pexels.com/photos/19151998/pexels-photo-19151998/free-photo-of-tuscany-italy.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
      />
      {/* <Card />
      <Card /> */}
    </div>
  );
};

export default Cards;
