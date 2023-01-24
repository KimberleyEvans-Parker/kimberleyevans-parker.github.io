import React, { useState } from "react";
import CodeInput from "./CodeInput";
import "./styles.css"

export default function Package2() {
    const [foundLocation, setFoundLocation] = useState(false);
  
    return (
      <div className="fade left">
        <p>
          I guess the agency certainly put together the right team – 
          you translated the tablet and deciphered the whereabouts of the secret entrance to the lost amazon civilisation! 
          I knew it existed!  No wonder no one has found it if the civilisation lies underground.   
          We’d better get there as fast as we can.  
        </p>
        <i>Open package 2</i>
      </div>
    );
  }
  
  