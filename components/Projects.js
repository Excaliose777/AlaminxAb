import React from 'react'
import styles from "../components/Project.module.css"
import {FcBinoculars} from "react-icons/fc"
import {GoCode, GoEye} from "react-icons/Go"

function Projects() {
  return (
    <div className={styles.main} id="projects">
      <h1>II. Projects</h1>
      <h3>These are a few of the Projects I have been cooking 👨🏽‍🍳</h3>
      <div className={styles.projectContainer}>
        <div className={styles.projects}>
          <h2>EXC DEX</h2>
          <h4>NextJs Hardhat Solidity Chainlink RainbowKit</h4>
          <p>A Hackathon Project built on Polygon Testnet using Solidity Smart Contract as backend. The Idea behind the project was to have users exchange their tokens for the Native EXC tokens in order to access the available games</p>
          <a href='https://polygon-hackathon-xi.vercel.app' target="_blank"><p>Link <FcBinoculars className={styles.codeIcon} size={20}/></p></a>
          <a href='https://github.com/Excaliose777/Polygon-Hackathon' target="_blank"><p>Code <GoCode className={styles.codeIcon} size={20}/></p></a>
        </div>
        <div className={styles.projects}>
          <h2>EXC NFT</h2>
          <h4>NextJs CSS Javascript IPFS Solidity EthersJs</h4>
          <p>A personal project where users join a Whitelist and gain the opportunity to mint NFTs stored on IPFS using Pinata. </p>
          <a href='https://exc-project.vercel.app' target="_blank"><p>Link <FcBinoculars className={styles.codeIcon} size={20}/></p></a>
          <a href='https://github.com/excaliose777/exc-project' target="_blank"><p>Code <GoCode className={styles.codeIcon} size={20}/></p></a>
        </div>
      </div>
      <div className={styles.projectContainer}>
        <div className={styles.projects}>
          <h2>RandomWinner Game</h2>
          <h4>NextJs Hardhat Solidity GraphQL The Graph Chainlink</h4>
          <p>A RandomWinner Game built using Chainlink to determine an unbiased Random Winner. Using The Graph Indexing for a Chainlink VRF Game</p>
          <a href='https://the-graph-test.vercel.app' target="_blank"><p>Link <FcBinoculars className={styles.codeIcon} size={20}/></p></a>
          <a href='https://github.com/excaliose777/The-Graph-Test' target="_blank"><p>Code <GoCode className={styles.codeIcon} size={20}/></p></a>
        </div>
        <div className={styles.projects}>
          <h2>EXC DAO</h2>
          <h4>NextJs CSS Javascript Solidity EthersJs</h4>
          <p>A Decentralized Autonomous Organization built on the Rinkeby Testnet. This project references the Smart Contract of previous projects; wherein only allows holders of a particular NFT and Token participate in voting</p>
          <a href='https://dao-bay.vercel.app' target="_blank"><p>Link <FcBinoculars className={styles.codeIcon} size={20}/></p></a>
          <a href='https://github.com/excaliose777/DAO' target="_blank"><p>Code <GoCode className={styles.codeIcon} size={20}/></p></a>
        </div>
      </div>
    </div>
  )
}

export default Projects