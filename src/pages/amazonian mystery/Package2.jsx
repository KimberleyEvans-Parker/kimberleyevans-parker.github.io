import React, { useState } from "react";
import CodeInput from "./CodeInput";
import "./styles.css"

function Puzzle(clue, correctAnswer, wait) {
  const [answeredCorrectly, setAnsweredCorrectly] = useState(false);

  return {
    test: ":D",
    clue: clue,
    correctAnswer: correctAnswer,
    wait: wait,
    answeredCorrectly: answeredCorrectly, 
    setAnsweredCorrectly: setAnsweredCorrectly,
  }
}

export default function Package2() {
  
  const puzzles = [
    Puzzle("Puzzle 1!", "123"),
    Puzzle("Puzzle 2", "123", 2000),
    Puzzle("Puzzle 3", "123", 2000),
    Puzzle("Puzzle 4", "123", 2000),
    Puzzle("Puzzle 5", "123", 2000),
  ]

  let animationDelay = 2;

  const getAnimationDelay = () => {
    const animationDelaySeconds = animationDelay.toString() + "s";
    animationDelay += 0.4;
    return animationDelaySeconds;
  };
  
    return (
      <div className="fade left">
        <p>
          I guess the agency certainly put together the right team – 
          you translated the tablet and deciphered the whereabouts of the secret entrance to the lost amazon civilisation! 
          I knew it existed!  No wonder no one has found it if the civilisation lies underground.   
          We’d better get there as fast as we can.  
        </p>
        <i>Open package 2</i>
        <br />
        <br />
          {puzzles.map((puzzle) => {
              return <>{puzzle.test}<CodeInput
                clue={puzzle.clue}
                correctAnswer={puzzle.correctAnswer}
                onCorrectAnswer={puzzle.setAnsweredCorrectly}
                wait={puzzle.wait}
                animationDelay={getAnimationDelay()}
              /></>
            })}
            {puzzles[0].answeredCorrectly && "Yay"}
      </div>
    );
  }
  
  