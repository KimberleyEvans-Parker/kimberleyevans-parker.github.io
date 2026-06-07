import React from "react"
import WordList from "../../assets/words.json"

import styles from "./words.module.css"

export const Words = () => {

  const getRandomWord = () => {
    return WordList[Math.floor(Math.random() * WordList.length)]
  }

  const regenerate = () => {
    setWord1(getRandomWord())
    setWord2(getRandomWord())
    setWord3(getRandomWord())
  }
  const [word1, setWord1] = React.useState(getRandomWord())
  const [word2, setWord2] = React.useState(getRandomWord())
  const [word3, setWord3] = React.useState(getRandomWord())

  return (
    <div className="content-container">
      <div className={`fade left ${styles['big-word']}`}>{word1}</div>
      <div className={`fade left ${styles['big-word']}`}>{word2}</div>
      <div className={`fade left ${styles['big-word']}`}>{word3}</div>
      <button className={styles.regenerate} onClick={regenerate}>
        Regenerate
      </button>
    </div>
  )
}
