import Head from 'next/head'
import styles from '../styles/layout.module.css'
import Navigation from './navigation'
import OffHomeNavigation from './offhomenavigation'

export const siteTitle = 'Bryce Parkman'

export default function Layout({ children, page }) {
  return (
    <div>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Arimo" rel="stylesheet"/>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content=" Welcome to my website! I am a software developer based in Boston, MA. I graduated with a degree in Computer Science and Mathematics 
            from the University of Massachusetts Amherst. During this time I was a tech lead at BUILD UMass, a pro-bono tech consulting organization run 
            by UMass Amherst students. I am interested in all things robotics and the intersection of computer science and math. Experienced in full stack 
            web development, app development, and mathematical visualization."
          />
          <meta
            property="og:image"
            content={`https://bryce-parkman.vercel.app/images/profile.jpeg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        {page === 'home' && 
          <div>
            <Navigation />
          </div>
        }
        {page !== 'home' && page !== 'individualVis' &&
          <div className={styles.navbar}>
            <OffHomeNavigation link="../" title="← Home"/>
          </div>
        }
        {page === 'individualVis' && (
          <OffHomeNavigation link="../../projects/interactives" title="← All interactives"/>
        )}
        <main>{children}</main>
    </div>
  )
}
