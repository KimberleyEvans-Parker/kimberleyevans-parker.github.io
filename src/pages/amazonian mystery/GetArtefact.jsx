import React, { useState } from "react";
import { Link } from "react-router-dom";
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

export default function GetArtefact() {
  
  const puzzles = [
    Puzzle("Puzzle 1", ["1","2","3"]),
    Puzzle("Puzzle 2", ["123"], 2000),
    Puzzle("Puzzle 3", ["123"], 2000),
  ]

  function isAnsweredCorrectly(puzzle) {
    return puzzle.answeredCorrectly
  }

  let animationDelay = 2;

  const getAnimationDelay = () => {
    const animationDelaySeconds = animationDelay.toString() + "s";
    animationDelay += 0.4;
    return animationDelaySeconds;
  };
  
    return (
      <div className="amazonian-background">
        <div className="content-container container-no-nav">
          <h1>The Amazon Entrance</h1>
          <div className="fade left">
            <p>
              You have solved the puzzles and deemed yourselves worthy of entering the city.  
              The stone gate slides open and you enter the ruins, 
              revealing a a vast underground city waiting to be explored.  
            </p>
            <p>
              Just inside the entrance, stands a pedestal.  On it is an artefact inlaid with gemstones.  
              If you could find the correct combination to unlock this artefact, 
              you could bring it back with you to show the world of your discovery! 
            </p>
            <p>
              One the side are {puzzles.length} lock combinations.  Now it’s just a matter of finding the right code…
            </p>
          </div>
          {puzzles.map((puzzle) => {
              return <CodeInput
                clue={puzzle.clue}
                correctAnswer={puzzle.correctAnswer}
                onCorrectAnswer={puzzle.setAnsweredCorrectly}
                wait={puzzle.wait}
                animationDelay={getAnimationDelay()}
              />
            })}
            {puzzles.every(isAnsweredCorrectly) && 
            <div>
              <p>
                You have sucessfully completed all the puzzles
              </p>
          
              <Link to="SolvedMystery">
                <button className="ancient-stone">
                    Get Artefact
                </button>
              </Link>
            </div>
            }
        </div>
      </div>
    );
  }
  
  