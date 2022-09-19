import React from 'react'
import styles from "../components/Technologies.module.css"

function Technologies() {
  return (
    <div className={styles.main} id="tech">
      <h1>III. TECH STACK</h1>
      <p>I&apos;ve worked with a number of Technologies and Tech Stack over time</p>
      <p>My Tech stack include but not limited to...</p>
      <p className={styles.tech}>HTML/CSS/SASS,Tailwind, Javascript[ES6], ReactJs, NextJs, Solidity, Hardhat, EthersJs, OpenZeppelin, The Graph, RainbowKit, WAGMI, Chainlink, Ceramic...</p>
      <p>and some other Libraries and Programming Languages</p>

      <h1>IV. INTERESTED ALREADY?</h1>
      <p>I am currently looking for new Opportunities in order to grow and improve on my skills and tech stack with real world applications and Technologies</p>
      <p>Got a question? or Looking to reach out? Please don&apos;t hesitate </p>
      <button><a href='mailto:alaminxab@gmail.com' target="_blank" rel="noreferrer">SEND AN EMAIL</a></button>
      <button><a href='https://drive.google.com/file/d/1pok_qZTxcZ49Myq2_ySHKlNSvbwViUxW/view?usp=drivesdk' target="_blank" rel="noreferrer">VIEW MY RESUME</a></button>
    </div>
  )
}

export default Technologies