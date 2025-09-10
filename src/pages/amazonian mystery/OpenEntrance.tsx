import { useState } from "react"
import { Link } from "react-router-dom"
import { CodeInput } from "./CodeInput"
import "./styles.css"

const Puzzle = (clue: string, correctAnswer: string[], wait?: number) => {
  const [answeredCorrectly, setAnsweredCorrectly] = useState(false)

  return {
    clue: clue,
    correctAnswer: correctAnswer,
    wait: wait,
    answeredCorrectly: answeredCorrectly, 
    setAnsweredCorrectly: setAnsweredCorrectly,
  }
}

export const OpenEntrance = () => {
  
  const puzzles = [
    Puzzle("Puzzle 1", ["240"]),
    Puzzle("Puzzle 2", ["anaconda", "jaguar", "monkey"]),
    Puzzle("Puzzle 3", ["276"]),
    Puzzle("Puzzle 4", ["tree"]),
    Puzzle("Puzzle 5", ["8437"]),
    Puzzle("Puzzle 6", ["blade"]),
  ]

  const isAnsweredCorrectly = (puzzle: { answeredCorrectly: any }) => {
    return puzzle.answeredCorrectly
  }

  let animationDelay = 2

  const getAnimationDelay = () => {
    const animationDelaySeconds = animationDelay.toString() + "s"
    animationDelay += (2 - animationDelay) / 5
    return animationDelaySeconds
  }
  
    return (
      <div className="amazonian-background">
        <div className="content-container container-no-nav">
          <h1>The Amazon Entrance</h1>
          <div className="fade left">
            <p>
              After hacking your way through the heart of the Amazon and coming to the specified coordinates, 
              you find some old stone doors – these must be the entrance to the underground city!  
              Unfortunately, the doors are sealed shut.  On the front, are five small gouges, 
              which look like they used to hold something important and around are {puzzles.length} pillars, 
              each with their own puzzle on it.  
            </p>
            <p>
              James Bush refuses to let you blow up the entrance – 
              and besides, you don’t have any C4 with you anyway.  
            </p>
            <p>
              Some members of the team complain about the number of mosquito bites they’ve received – 
              one person even swears they got bitten by something else, but at least your team has food to eat 
              and are on the verge of one of the biggest discoveries of your lives.  
            </p>
            <p>
              Around the area are a series of clues, which James Bush has translated for you using the code you 
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
          
              <Link to="GetArtefact">
                <button className="ancient-stone">
                    Enter ruins
                </button>
              </Link>
            </div>
            }
        </div>
      </div>
    )
  }
  
  