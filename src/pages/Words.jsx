import React from "react";
import Words from "../assets/words.json";

function About() {
  const [word1, setWord1] = React.useState(getRandomWord());
  const [word2, setWord2] = React.useState(getRandomWord());
  const [word3, setWord3] = React.useState(getRandomWord());

  function getRandomWord() {
    return Words[Math.floor(Math.random() * Words.length)];
  }

  function regenerate() {
    setWord1(getRandomWord());
    setWord2(getRandomWord());
    setWord3(getRandomWord());
  }

  return (
    <div className="content-container">
      <div className="fade left big-word">{word1}</div>
      <div className="fade left big-word">{word2}</div>
      <div className="fade left big-word">{word3}</div>
      <button className="regenerate" onClick={regenerate}>
        Regenerate
      </button>
    </div>
  );
}

export default About;
