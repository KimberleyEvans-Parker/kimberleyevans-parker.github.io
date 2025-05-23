import React, { useState } from "react";

interface CodeInputProps {
    correctAnswer: string | any[];
    onCorrectAnswer: (arg0: boolean) => void;
    wait?: number;
    animationDelay?: string;
    clue: string;
}

export const CodeInput = ({ 
    correctAnswer,
    onCorrectAnswer,
    wait,
    animationDelay,
    clue,
}: CodeInputProps
) => {
    const [answer, setAnswer] = useState("")
    const [shake, setShake] = useState(false)
    const [answerCorrect, setCorrectAnswer] = useState(false)

    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setAnswer(event.target.value)
    }

    const isAnswerCorrect = (answer: string) => {
        let answers = answer.split(",")
        for(var i = 0, size = answers.length; i < size ; i++){
            answers[i] = answers[i].toLowerCase().trim();
         }
        if (answers.length !== correctAnswer.length) return false
        for (const item of correctAnswer) {
            if (!answers.includes(item)) return false
        }
        return true
    }

    const checkAnswer = (answer: string) => {
        if (isAnswerCorrect(answer)) {
            onCorrectAnswer(true)
            setCorrectAnswer(true)
            return
        }
        setShake(true)
        setTimeout(endShake, wait || 1000)
    }

    const endShake = () => {
        setShake(false)
    }

    const handleClick = () => {
        checkAnswer(answer)
    }

    const handleKeyDown = (event: { key: string; }) => {
        if (event.key === "Enter") {
            checkAnswer(answer)
        }
    }
  
    return (
        <div
            className="fade left amazonian-code-input"
            style={{
                WebkitAnimationDelay: animationDelay,
                MozAnimationDelay: animationDelay,
                OAnimationDelay: animationDelay,
                animationDelay: animationDelay,
            }}
        >
            <p className="amazonian-clue">{clue}</p>
            <input
                type="text"
                id={clue}
                name={clue}
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

            {answerCorrect && <p className="bounce">Correct!</p>}
        </div>
    );
}
  
  