import React from 'react'
import styles from "../components/Footer.module.css"
import {TiDeviceLaptop, TiSocialLinkedin, TiSocialGithubCircular, TiWorld, TiSocialTwitter, TiSocialGithub} from "react-icons/ti"

function Footer() {
  return (
    <>
        <div className = {styles.footer} id="footer">
            <div className = {styles.title}>
            <h1> ALAMINXAB</h1>
            <TiDeviceLaptop size={55} color="#66a6ff"/>
            </div>
            <div className={styles.footer_links}>
                <h4>Contact</h4>
                <a href="https://twitter.com/alaminxab" target="_blank" rel="noreferrer"><p><TiSocialTwitter size={30}/></p></a>
                <a href="https://linkedin.com/in/alaminxab" target="_blank" rel="noreferrer"><p><TiSocialLinkedin size={30}/></p></a>
                <a href="https://github.com/excaliose777" target="_blank" rel="noreferrer"><p><TiSocialGithubCircular size={30}/></p></a>
                <a href="https://excaliose.hashnode.dev" target="_blank" rel="noreferrer"><p><TiWorld size={30}/></p></a>
            </div>
            <div className={styles.footer_links2}>
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