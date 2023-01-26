import React, { useState } from "react";
import CodeInput from "./CodeInput";
import Package2 from "./Package2";
import "./styles.css"

export default function AmazonianMystery() {
    const [foundLocation, setFoundLocation] = useState(false);
  
    return (
      <div className="amazonian-background">
        <div className="content-container container-no-nav">
          <h1>Find the Ancient Amazon Civillisation</h1>
          <CodeInput 
            clue="Enter the loaction of the entrance to the lost Civillisation in the format 'X.Y'"
            correctAnswer="123" 
            onCorrectAnswer={setFoundLocation}
            wait={2000}
          />
          {foundLocation && <Package2 />}
        </div>
      </div>
    );
  }
  
  