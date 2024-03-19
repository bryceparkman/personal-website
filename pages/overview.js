
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

export default function ProjectOverview() {
    return (
        <>
            <Card className={utilStyles.projectCard}>
                <Link href='/projects/nadine' style={{ textDecoration: 'none' }}>
                    <Container>
                        <Row className={utilStyles.projectRow}>
                            <Col lg>
                                <Image rounded src="/images/nadine/nadineOverview.png" />
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
                </Link>
                <div className={utilStyles.overlayArrow}>
                    <i className='fa fa-arrow-right fa-3x'></i>
                </div>
            </Card>

            <Card className={utilStyles.projectCard}>
                <Link href='/projects/bridges' style={{ textDecoration: 'none' }}>
                    <Container>
                        <Row className={utilStyles.projectRow}>
                            <Col lg>
                                <Image rounded src="/images/bridges/bridges.png" />
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
                </Link>
                <div className={utilStyles.overlayArrow}>
                    <i className='fa fa-arrow-right fa-3x'></i>
                </div>
            </Card>

            <Card className={utilStyles.projectCard}>
                <Link href='/projects/mask' style={{ textDecoration: 'none' }}>
                    <Container>
                        <Row className={utilStyles.projectRow}>
                            <Col lg>
                                <Image rounded src="/images/mask/mask.png" />
                            </Col>
                            <Col lg>
                                <h2>
                                    MASKerAID
                                </h2>
                                <div>
                                    In the Johns Hopkins MedHack 2020 hackathon, I collaborated with 3 other students to develop MASKerAID.
                                    This device would communicate with your phone and display the temperature
                                    and humidity in a mask, and alert you if the filter needs to be replaced or if the air quality is poor.
                                    Out of 700 teams competing we placed 3rd place in the pandemic hack category.
                                    The companion app was built with React Native, and the insert was prototyped with Arduino.
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Link>
                <div className={utilStyles.overlayArrow}>
                    <i className='fa fa-arrow-right fa-3x'></i>
                </div>
            </Card>

        </>
    )
}
