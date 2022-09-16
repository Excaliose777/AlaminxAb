import React from 'react'
import styles from "../components/Footer.module.css"

function Footer() {
  return (
    <>
        <div className = {styles.footer} id="footer">
            <div className = {styles.title}>
            <h1> ALAMINXAB</h1>
            </div>
            <div className={styles.footer_links}>
                <h4>Contact</h4>
                <a href="https://twitter.com/alaminxab" target="_blank" rel="noreferrer"><p>Twitter</p></a>
                <a href="https://linkedin.com/in/alaminxab" target="_blank" rel="noreferrer"><p>LinkedIn</p></a>
                <a href="https://github.com/excaliose777" target="_blank" rel="noreferrer"><p>GitHub</p></a>
                <a href="https://excaliose.hashnode.dev" target="_blank" rel="noreferrer"><p>Blog</p></a>
            </div>
            <div className={styles.footer_links}>
                <h4>More</h4>
                <p><a href='#about'>About</a></p>
                <p><a href='#projects'>Projects</a></p>
                <p><a href='#tech'>Technologies</a></p>
                <p><a href='#footer'>Contact</a></p>
            </div>
            
        </div>
        <div className={styles.copyright}>
            <p>@2022 Made by Excaliose. All rights reserved.</p>
        </div>
    </>
  )
}

export default Footer