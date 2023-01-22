import React, { useState } from "react";
import CodeInput from "./CodeInput";
import "./styles.css"

export default function AmazonianMystery() {
    const [correctlyGuessed, setcorrectlyGuessed] = useState(false);
  
    return (
      <div className="amazonian-background">
        <h1>Find the Ancient Amazon Civillisation</h1>
        <CodeInput 
          clue="Enter the loaction of the entrance to the lost Civillisation"
          correctAnswer="123" 
          onCorrectAnswer={setcorrectlyGuessed}
          wait={2000}
        />
        {correctlyGuessed && "That's right!"}
      </div>
    );
  }
  
  