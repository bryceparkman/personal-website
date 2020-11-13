import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Navigation from './navigation'

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
        <div className={styles.navbar}>
          <Navigation />
        </div>
        <header className={styles.header}>
          {page === 'home' ? (
            <>
              <img
                src="/images/profile.jpeg"
                className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                alt={name}
              />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
          ) : (
              <>
              </>
            )}
        </header>
        <main>{children}</main>
        {page !== 'home' && page !== 'individualVis' && page !== 'individualProj' && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
        {page === 'individualVis' && (
          <div className={styles.backToHome}>
          <Link href="/projects/visualizations">
            <a>← Back to visualizations</a>
          </Link>
        </div>
        )}
        {page === 'individualProj' && (
          <div className={styles.backToHome}>
          <Link href="/overview">
            <a>← Back to projects</a>
          </Link>
        </div>
        )}
    </div>
  )
}
