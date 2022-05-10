import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { Left, Right } from '../components/PageOne/index'

export default function Home() {
  return (
    <div className={styles.container}>
      {/* for SEO */}
      <Head>
      <title>Home Page - Assigmnet</title>
      <link rel="icon" href="/gubloo.png" />
      </Head>
    
    <main className={styles.Main}> 
    
    <Right/>
    <Left/>
    
    </main>
    </div>
  )
}
