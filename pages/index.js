import Head from 'next/head'
import styles from '../styles/Home.module.css'
import About from '../components/About'
import Technologies from '../components/Technologies'
import Projects from '../components/Projects'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
    <div className={styles.container}>
      <Head>
        <title>AlaminxAb portfolio</title>
        <meta name="description" content="AlaminxAb Portfolio" />
        <link rel="icon" href="/laptop.png" />
      </Head>

      <div className={styles.main}>
        <div>
          <div className={styles.header}>
            <h2>AXAB</h2>
            <div className={styles.headerOptions}>
              <h4><a href='#about'>ABOUT</a></h4>
              <h4><a href='#projects'>PROJECTS</a></h4>
              <h4><a href='#tech'>TECH STACK</a></h4>
              <h4><a href='#footer'>CONTACT</a></h4>
            </div>
          </div>
          <div className={styles.mainBody}>
            <div>
              <h1>HELLO, I&apos;M ALAMIN ABUBAKAR AND I&apos;M A FRONTEND DEVELOPER</h1>
              <h2>👋 A Front-End Dev with specialization in Blockchain Development and also a Technical Writer</h2>
              <p>On a mission to fully transition into a Full Stack Blockchain Developer</p>
              <p>Please leave a feedback too, that will be appreciated</p>
              <button><a href='#footer'>CONTACT</a></button>
              <button><a href='#about'>LEARN MORE</a></button>
            </div>
            <div className={styles.imageContainer}>
                <div className={styles.containerImg}>
                  <img src='/me.jpg'></img>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <About/>
    <Projects/>
    <Technologies/>
    <Footer/>
    </>
  )
}
