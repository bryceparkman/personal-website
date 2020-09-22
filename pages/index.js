import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Computer Science and Computational Mathematics Student</p>
      </section>
      <section className={utilStyles.lightText} style={{ textAlign: 'center' }}>
        <p>
          Welcome to my website! I am a Computer Science and Mathematics major at the University of Massachusetts Amherst.
          I am interested in all things robotics and the intersection of computer science and math.
          Experienced in full stack web development, app development, and mathematical visualization.
          Check out my projects to see these skills in action.
      </p>
      </section>
      <section style={{ textAlign: 'center', marginTop: '2.5rem' }}>
        <a href='mailto:bparkman@umass.edu'>
          <span className={utilStyles.contacts}>
            <i className="fa fa-envelope fa-3x"></i>
          </span>
        </a>
        <a href='https://github.com/bryceparkman' target="_blank">
          <span className={utilStyles.contacts}>
            <i className="fa fa-github fa-3x"></i>
          </span>
        </a>
        <a href='https://www.linkedin.com/in/bryce-parkman/' target="_blank">
          <span className={utilStyles.contacts}>
            <i className="fa fa-linkedin fa-3x"></i>
          </span>
        </a>
      </section>
    </Layout>
  )
}