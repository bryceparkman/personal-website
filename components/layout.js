import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'
import Navigation from './navigation'
import OffHomeNavigation from './offhomenavigation'

const name = 'Bryce Parkman'
export const siteTitle = 'Bryce Parkman'

export default function Layout({ children, page }) {
  return (
    <div className={styles.container}>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Arimo" rel="stylesheet"/>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content=" Welcome to my website! I am a Computer Science and Mathematics major at the University of Massachusetts Amherst.
            I am interested in all things robotics and the intersection of computer science and math."
          />
          <meta
            property="og:image"
            content={`https://bryce-parkman.vercel.app/images/profile.jpeg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        {page === 'home' && 
          <div className={styles.navbar}>
            <Navigation />
          </div>
        }
        {page !== 'home' && page !== 'individualVis' && 
          <div className={styles.navbar}>
            <OffHomeNavigation />
          </div>
        }
        {page === 'individualVis' && (
          <div className={styles.backToHome}>
          <Link href="/projects/visualizations">
            <a>← Back to visualizations</a>
          </Link>
        </div>
        )}
        <main>{children}</main>
        
    </div>
  )
}
