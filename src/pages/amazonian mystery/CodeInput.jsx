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
        <div
            className="fade left amazonian-code-input"
            style={{
                WebkitAnimationDelay: props.animationDelay,
                MozAnimationDelay: props.animationDelay,
                OAnimationDelay: props.animationDelay,
                MsAnimationDelay: props.animationDelay,
                AnimationDelay: props.animationDelay,
            }}
        >
            <p className="amazonian-clue">{props.clue}</p>
            <input
                type="text"
                id={props.clue}
                name={props.clue}
                title="clue input"
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                value={answer}
                autoComplete="off"
                className="amazonian-input"
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
  
  