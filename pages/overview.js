import Head from 'next/head';
import Link from 'next/link'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Construction from '../components/construction'

export default function Project() {
    return (
        <Layout>
            <Head>
                <title>Projects</title>
            </Head>
            <Link href='/projects/nadine'>
                <Card className={utilStyles.projectCard}>
                    <Container>
                        <Row className={utilStyles.projectRow}>
                            <Col lg>
                                <Image rounded src="/images/nadine.png" />
                            </Col>
                            <Col lg>
                                <h2>
                                    Nadine El Nesr
                                </h2>
                                <div>
                                    Commissioned work for a local artist who could not afford to make her own website.
                                    The website features her fine art, fashion, and experimental projects. The website is designed to
                                    have mobile-friendly navigation, robust animations, and self-populating images. I built it with React, Bootstrap, and Firebase.
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <div className={utilStyles.overlayArrow}>
                        <i className='fa fa-arrow-right fa-3x'></i>
                    </div>
                </Card>
            </Link>
            <Link href='/projects/bridges'>
                <Card className={utilStyles.projectCard}>
                    <Container>
                        <Row className={utilStyles.projectRow}>
                            <Col lg>
                                <Image rounded src="/images/bridges.png" />
                            </Col>
                            <Col lg>
                                <h2>
                                    Student Bridges
                            </h2>
                                <div>
                                    Collaborated in a six-person team to develop a website for the UMass Amherst organization Student Bridges,
                                    which provides easier college access for underrepresented students. The website allows these students to
                                    access Student Bridges contact information, calendars, and workshop details much easier than before and will
                                    hopefully give this organizaiton more outreach. We built this website with Bootstrap, Express, NodeJS, and Firebase.
                            </div>
                            </Col>
                        </Row>
                    </Container>
                    <div className={utilStyles.overlayArrow}>
                        <i className='fa fa-arrow-right fa-3x'></i>
                    </div>
                </Card>
            </Link>
            <Link href='/projects/mask'>
                <Card className={utilStyles.projectCard}>
                    <Container>
                        <Row className={utilStyles.projectRow}>
                            <Col lg>
                                <Image rounded src="/images/mask.png" />
                            </Col>
                            <Col lg>
                                <h2>
                                    MASKerAID
                            </h2>
                                <div>
                                    In the MedHack 2020 hackathon, I collaborated with 3 other students to develop MASKerAID.
                                    This device would communicate with your phone and display the temperature
                                    and humidity in the mask, and alert you if the filter needs to be replaced or if the air quality is poor.
                                    Out of 700 teams competing we placed 3rd place in the pandemic hack category.
                                    The companion app was built with React Native, and the insert was prototyped with Arduino.
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <div className={utilStyles.overlayArrow}>
                        <i className='fa fa-arrow-right fa-3x'></i>
                    </div>
                </Card>
            </Link>
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
        </Layout>
    )
}
