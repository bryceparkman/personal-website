import Head from 'next/head';
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import styles from '../styles/index.module.css'
import utilStyles from '../styles/utils.module.css'
import ProjectOverview from './overview.js'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function Home() {
  const [_, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      "fullScreen": true,
      "background": { "image": "linear-gradient(90deg, #088856, #c44fb1)" },
      "particles": {
        "number": { "value": 40 },
        "shape": {
          "type": "square",
        },
        "opacity": { "value": 0.1 },
        "size": {"value": 10},
        "move": {
          "enable": true,
          "speed": 1/3,
          "direction": "top",
          "straight": true,
        }
      },
      "retina_detect": true
    })
  )

  return (
    <Layout page='home'>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div id={styles.indexPage}>
        <Particles
          options={options}
        />
        <Container className={styles.header} id='topAnchor'>
          <Row>
            <Col sm={8} className="ml-auto mr-auto">
              <div>
                <h1 className={styles.nameHeader}>Hi, I'm Bryce.</h1>
                <div style={{ fontSize: '1.45vw', marginTop: '2vw' }}>
                  Welcome to my website! I am an undergraduate Computer Science and Computational Mathematics student at the University of Massachusetts Amherst.
                  I am interested in all things robotics and the intersection of computer science and math. Experienced in full stack web development, app development,
                  arduino prototyping, and mathematical visualization. Always creating. I also love to go rock climbing, biking, hiking, and running and will take any oppurtunity to do so.
                </div>
              </div>
            </Col>
            <Col sm={4} className="ml-auto mr-auto">
              <img
                src="/images/profile.jpeg"
                className={styles.headerHeadshot}
                alt={'A headshot of Bryce Parkman'}
              />
              <div className={styles.contactBar}>
                <a href='mailto:brycecparkman@gmail.com'>
                  <span>
                    <i className={`fa fa-envelope ${styles.contacts}`}></i>
                  </span>
                </a>
                <a href='https://github.com/bryceparkman' target="_blank">
                  <span>
                    <i className={`fab fa-github ${styles.contacts}`}></i>
                  </span>
                </a>
                <a href='https://www.linkedin.com/in/bryce-parkman/' target="_blank">
                  <span>
                    <i className={`fab fa-linkedin ${styles.contacts}`}></i>
                  </span>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
        <div id='projectsAnchor'>
          <h1 className={styles.portfolioHeader}>Projects</h1>
          <ProjectOverview />
        </div>
        {/* <div id='resumeAnchor'>

        </div> */}
        <div id='funAnchor' style={{paddingTop: 30}}>
          <Card className={utilStyles.projectCard}>
            <Link href='/projects/visualizations'>
              <Container>
                <Row className={utilStyles.projectRow}>
                  <Col lg>
                    <Image rounded src="/images/vis.png" />
                  </Col>
                  <Col lg>
                    <h2>
                      Visualizations
                    </h2>
                    <div>
                      A collection of p5.js sketches that I have created over the years. Explores everything from natural patterns like leaves falling and birds flocking, to mathematical visualizations, to small physics based games. All sketches are interactable on the browser and many have options to allow the viewer control over the artwork. I believe this allows the user to create their own meaning and beauty out of these creations.
                    </div>
                  </Col>
                </Row>
              </Container>
            </Link>
            <div className={utilStyles.overlayArrow}>
              <i className='fa fa-arrow-right fa-3x'></i>
            </div>
          </Card>
        </div>
        <div style={{height:30}}></div>
      </div>
    </Layout>
  )
}