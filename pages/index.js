import Head from 'next/head'
import Image from 'next/image'

import styles from '/styles/Home.module.js'

// Components
import NavBar from '../components/navBar'
import Hero from '../components/hero'
import Features from '../components/features'
import Contact from '../components/contact'
import About from '../components/about'
import Footer from '../components/footer'



export default function Home() {
  return (
    <div style={styles.body}>
      <Head>
        <title>Create Next App</title>
        <meta name="Watermann Consulting" content="Consulting & Employee Benefits" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>
      <Hero/>
      <Features/>
      <Contact/>  
      <About/>
      <Footer/>
    </div>
  )
}
