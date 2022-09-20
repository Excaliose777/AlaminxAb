import React from 'react'
import {FcBinoculars} from "react-icons/fc"
import styles from "../components/List.module.css"
import {GoCode} from "react-icons/go"

function Listed(props) {
  return (
    <div>
        <div className={styles.projectContainer}>
        <div className={styles.projects}>
          <h2>{props.title}</h2>
          <h4>{props.stack}</h4>
          <p>{props.desc}</p>
          <div className={styles.projectLinks}>
            <a href={props.live} target="_blank" rel="noreferrer"><p>Link <FcBinoculars className={styles.codeIcon} size={20}/></p></a>
            <a href={props.github} target="_blank" rel="noreferrer"><p>Code <GoCode className={styles.codeIcon} size={20}/></p></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Listed