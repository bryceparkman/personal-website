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

// import { useEffect, useMemo, useState } from "react";
// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadSlim } from "@tsparticles/slim";

export default function Home() {
  // const [init, setInit] = useState(false);

  // useEffect(() => {
  //   initParticlesEngine(async (engine) => {
  //     //await loadAll(engine);
  //     //await loadFull(engine);
  //     await loadSlim(engine);
  //     //await loadBasic(engine);
  //   }).then(() => {
  //     setInit(true);
  //   });
  // }, []);

  // const particlesLoaded = (container) => {
  //   console.log(container);
  // };

  // const options = useMemo(
  //   () => ({ "fullScreen": false, "background": { "image": " linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)" }, "particles": { "number": { "value": 10, "density": { "enable": true, "value_area": 600 } }, "color": { "value": "#ffffff" }, "shape": { "type": "square", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 } }, "opacity": { "value": 0.25, "random": true, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 29, "random": true, "anim": { "enable": false, "speed": 2, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": false, "distance": 300, "color": "#ffffff", "opacity": 0, "width": 0 }, "move": { "enable": true, "speed": 0.5, "direction": "top", "straight": true, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": false, "mode": "repulse" }, "onclick": { "enable": false, "mode": "push" }, "resize": true }, "modes": { "grab": { "distance": 800, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 790, "size": 79, "duration": 2, "opacity": 0.8, "speed": 3 }, "repulse": { "distance": 400, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true })
  // )

  return (
    <Layout page='home'>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div id={styles.indexPage}>
        <Container className={styles.header} id='topAnchor'>
          {/* <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
          /> */}
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
        <div id='resumeAnchor'>

        </div>
        <div id='funAnchor'>
          <Link href='/projects/visualizations'>
            <Card className={utilStyles.projectCard}>
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
              <div className={utilStyles.overlayArrow}>
                <i className='fa fa-arrow-right fa-3x'></i>
              </div>
            </Card>
          </Link>
        </div>
      </div>
    </Layout >
  )
}