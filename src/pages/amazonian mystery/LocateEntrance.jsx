import React, { useState } from "react";
import { Link } from "react-router-dom";

import CodeInput from "./CodeInput";
import "./styles.css"

export default function LocateEntrance() {
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
          {foundLocation && 
            <div className="fade left animation-delay-1s"
            style={{
                WebkitAnimationDelay: "1s",
                MozAnimationDelay: "1s",
                OAnimationDelay: "1s",
                MsAnimationDelay: "1s",
                AnimationDelay: "1s",
            }}>
              <p>
                I guess the agency certainly put together the right team – 
                you translated the tablet and deciphered the whereabouts of the secret entrance to the lost amazon civilisation! 
                I knew it existed!  No wonder no one has found it if the civilisation lies underground.   
                We’d better get there as fast as we can.  
              </p>
              <i>Open package 2</i>
              <br />
              <br />
          
              <Link to="AmazonianMystery/OpenEntrance">
                <button className="ancient-stone">
                    Go to part 2
                </button>
              </Link>
            </div>
          }
        </div>
      </div>
    );
  }
  
  