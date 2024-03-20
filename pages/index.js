import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import styles from '../styles/index.module.css'
import ProjectOverview from './overview.js'
import Interactives from './projects/interactives.js'

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

  const particleOptions = useMemo(
    () => ({
      "fullScreen": true,
      "background": { "image": "linear-gradient(90deg, #088856, #c44fb1)" },
      "particles": {
        "number": { "value": 40 },
        "shape": {
          "type": "square",
        },
        "opacity": { 
          "value": { "min": 0, "max": 0.1 },
          "animation": {
            "count": 1,
            "enable": true,
            "speed": 0.75,
            "startValue": "min",
            "sync": false
          }
        },
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
          options={particleOptions}
        />
        <Container className={styles.header} id='topAnchor'>
          <Row>
            <Col sm={8} className="ml-auto mr-auto">
              <div>
                <h1 className={styles.nameHeader}>Hi, I'm Bryce.</h1>
                <div style={{ fontSize: '1.45vw', marginTop: '2vw' }}>
                  I am a software developer experienced in full stack web development, app development, and mathematical visualization based in Boston, MA. I graduated with a degree 
                  in Computer Science and Mathematics from the University of Massachusetts Amherst. During this time I was a tech lead at BUILD UMass, a pro-bono tech consulting 
                  organization ran by students. Outside of my professional aspirations you can find me rock climbing, slacklining, hiking, and picking up a new hobby or skill.
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
          <h1 className={styles.portfolioHeader}>Interactives</h1>
          <Interactives />
        </div>
      </div>
      <div style={{height: 30}}/>
    </Layout>
  )
}