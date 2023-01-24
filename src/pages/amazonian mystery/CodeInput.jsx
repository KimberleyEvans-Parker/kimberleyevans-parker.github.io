import React, { useState } from "react";

export default function CodeInput(props) {
    const [answer, setAnswer] = useState("")
    const [shake, setShake] = useState(false)

    const handleChange = (event) => {
        setAnswer(event.target.value)
    }

    const checkAnswer = (answer) => {
        if (answer === props.correctAnswer) {
            props.onCorrectAnswer(true)
            return
        }
        setShake(true)
        setTimeout(endShake, props.wait || 1000)
    }

    function endShake() {
        setShake(false)
    }

    const handleClick = () => {
        checkAnswer(answer)
    }

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            checkAnswer(answer)
        }
    }
  
    return (
        <div>
            <p>{props.clue}</p>
            <input
                type="text"
                id="message"
                name="message"
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                value={answer}
                autoComplete="off"
            />

            <button 
                onClick={handleClick} 
                className={`ancient-stone ${shake ? "shake" : ""}`}
            >
                Check Answer
            </button>
        </div>
    );
}
  
  