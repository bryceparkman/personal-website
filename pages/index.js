import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import utilStyles from '../styles/utils.module.css'
import layoutStyles from '../components/layout.module.css'
import ProjectOverview from './overview.js'

export default function Home() {
  return (
    <Layout page='home'>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Container className={layoutStyles.header}>
        <a className={layoutStyles.anchor} style={{ top: -200 }} id="topAnchor" />
        <Row id='top'>
          <Col sm={6} style={{ paddingLeft: 0 }}>
              <div>
                <h1 style={{ fontSize: '5vw' }}>Bryce Parkman</h1>
                <div style={{ fontSize: '1.45vw', marginTop: '2vw' }}>
                  Welcome to my website! I am an undergraduate Computer Science and Computational Mathematics student at the University of Massachusetts Amherst.
                  I am interested in all things robotics and the intersection of computer science and math. Experienced in full stack web development, app development,
                  arduino prototyping, and mathematical visualization. Always creating. I also love to go rock climbing, biking, hiking, and running and will take any oppurtunity to do so.
              </div>
              </div>
            </Col>
          <Col sm={6}>
            <img
              src="/images/profile.jpeg"
              className={layoutStyles.headerHomeImage}
              alt={'A headshot of Bryce Parkman'}
            />
            <div className={layoutStyles.contactBar}>
              <a href='mailto:brycecparkman@gmail.com'>
                <span className={utilStyles.contacts}>
                  <i className="fa fa-envelope" style={{ fontSize: '2em' }}></i>
                </span>
              </a>
              <a href='https://github.com/bryceparkman' target="_blank">
                <span className={utilStyles.contacts}>
                  <i className="fab fa-github" style={{ fontSize: '2em' }}></i>
                </span>
              </a>
              <a href='https://www.linkedin.com/in/bryce-parkman/' target="_blank">
                <span className={utilStyles.contacts}>
                  <i className="fab fa-linkedin" style={{ fontSize: '2em' }}></i>
                </span>
              </a>
            </div>
          </Col>
        </Row>
        <a className={layoutStyles.anchor} style={{ top: -130 }} id="aboutAnchor" />
        <div id="about">
          {/* <Row>
            <Col sm={6} style={{ paddingLeft: 0 }}>
              <div className={`${layoutStyles.headerLeft} ${layoutStyles.headerSide}`}>
                <h1 style={{ fontSize: '5vw' }}>Bryce Parkman</h1>
                <div style={{ fontSize: '1.45vw', marginTop: '2vw' }}>
                  Welcome to my website! I am an undergraduate Computer Science and Computational Mathematics student at the University of Massachusetts Amherst.
                  I am interested in all things robotics and the intersection of computer science and math. Experienced in full stack web development, app development,
                  arduino prototyping, and mathematical visualization. Always creating. I also love to go rock climbing, biking, hiking, and running and will take any oppurtunity to do so.
              </div>
              </div>
            </Col>
            <Col>
              <img
                src="/images/climb.jpg"
                className={layoutStyles.headerHomeImage2}
                alt={'Bryce Parkman'}
              />
            </Col>
          </Row> */}
          <h1 className={layoutStyles.languageHeader}>Top GitHub languages </h1>
        <iframe width="100%" height="600" src="https://ionicabizau.github.io/github-profile-languages/api.html?bryceparkman" frameBorder="0"></iframe>
      </div>
      </Container>
      <a className={layoutStyles.anchor} style={{ top: -70 }} id="portfolioAnchor" />
      <div id='portfolio'>
        <h1 className={layoutStyles.portfolioHeader}>Portfolio</h1>
        <ProjectOverview />
      </div>
    </Layout >
  )
}