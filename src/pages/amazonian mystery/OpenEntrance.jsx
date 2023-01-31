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

export default function OpenEntrance() {
  
  const puzzles = [
    Puzzle("Puzzle 1", ["1","2","3"]),
    Puzzle("Puzzle 2", ["123"], 2000),
    Puzzle("Puzzle 3", ["123"], 2000),
    Puzzle("Puzzle 4", ["123"], 2000),
    Puzzle("Puzzle 5", ["123"], 2000),
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
              After hacking your way through the heart of the Amazon and coming to the specified coordinates, 
              you find some old stone doors – these must be the entrance to the underground city!  
              Unfortunately, the doors are sealed shut.  On the front, are five small gouges, 
              which look like they used to hold something important and around are five pillars, 
              each with their own puzzle on it.  
            </p>
            <p>
              John Smith refuses to let you blow up the entrance – 
              and besides, you don’t have any C4 with you anyway.  
            </p>
            <p>
              Some members of the team complain about the number of mosquito bites they’ve received – 
              one person even swears they got bitten by something else, but at least your team has food to eat 
              and are on the verge of one of the biggest discoveries of your lives.  
            </p>
            <p>
              Around the area are a series of clues, which John Smith has translated for you using the code you 
              cracked earlier.  You just need to solve the clues to get into the ancient city.  
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
                    Enter ruins
                </button>
              </Link>
            </div>
            }
        </div>
      </div>
    );
  }
  
  