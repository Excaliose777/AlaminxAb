import React from 'react'
import styles from "../components/Project.module.css"
import data from "../components/data"
import Listed from './Listed'

function Projects() {

  const List = data.map(items => {
    return <Listed
            key = {items.id}
            {...items}
/>
})


  return (
    <div className={styles.main} id="projects">
      <h1>II. PROJECTS</h1>
      <h3>These are a few of the Projects I have been cooking 👨🏽‍🍳</h3>
      {List}
    </div>
  )
}

export default Projects