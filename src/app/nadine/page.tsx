'use client'
import Wrapper from '../../components/wrapper'
import utilStyles from '../../styles/utils.module.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import React from 'react'

export default function Nadine() {
    return (
        <Wrapper page='individualProject'>
            <div className={utilStyles.individualProjectPage}>
                <section className={utilStyles.headingXl}>
                    <p>Nadine El Nesr Website</p>
                </section>

                <Container>
                    <Card className={utilStyles.projectCard}>
                        <a href='https://nadine-elnesr.web.app/' target='_blank' rel="noopener noreferrer">
                            <Image rounded src='../../images/nadine/nadineHeader.png'  className={utilStyles.projectRow} style={{margin: 0}}/>                
                            <div className={utilStyles.overlayArrow}>
                                <i className='fas fa-globe fa-3x'></i>
                            </div>
                        </a>
                    </Card>
                </Container>
                
                <Container id="projectDescription" className="justify-content-md-center">
                    <Row>
                        <Col>
                            <section>
                                <p>
                                    This website was created for a local artist based in Massachusetts who wasn't able to create a website on her own.
                                    The site takes you through her work in fashion, fine art, and experimental art pieces. Viewers can also read about who
                                    she is and can contact her through the website very easily. This website was built with React.js and uses the GreenSock library to
                                    create stunning animations on every page. Clicking the image above will take you to the website, and below are some screenshots
                                    of the website's highlights.
                                </p>
                            </section>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Image src='../../images/nadine/highlight1.png' />
                        </Col>
                        <Col>
                            <Image src='../../images/nadine/highlight2.jpg' />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Image src='../../images/nadine/highlight3.png' />
                        </Col>
                        <Col>
                            <Image src='../../images/nadine/highlight4.png' />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Image src='../../images/nadine/highlight5.jpg' />
                        </Col>
                        <Col>
                            <Image src='../../images/nadine/highlight7.jpg' />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Image src='../../images/nadine/highlight6.png' />
                        </Col>
                        <Col>
                            <Image src='../../images/nadine/highlight8.png' />
                        </Col>
                    </Row>
                </Container>
            </div>
        </Wrapper>
    )
}
