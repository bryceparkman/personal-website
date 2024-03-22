'use client'
import Wrapper from '../../components/wrapper'
import utilStyles from '../../styles/utils.module.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import React from 'react'

export default function Bridges() {
    return (
        <Wrapper page='individualProj'>
            <div className={utilStyles.individualProjectPage}>
                <section className={utilStyles.headingXl}>
                    <p>Student Bridges Website</p>
                </section>

                <Container>
                    <Card className={utilStyles.projectCard}>
                        <a href='https://studentbridgesagency.org/' target='_blank' rel="noopener noreferrer">
                            <Image rounded src='../../images/bridges/bridgeHeader.png'  className={utilStyles.projectRow} style={{ margin: 0 }}/>
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
                                    This website was created for a UMass organization known as Student Bridges, who weren't able to create a website on their own.
                                    Student Bridges strives to increase college access and success for underrepresented students by offering tours, art shows,
                                    classes, programs, an online web series, etc. The website is built on a simple HTML5 base, and allows users to learn more about
                                    the organization, view their services, and contact them to learn more. Clicking the image above will take you to the website,
                                    and below are some screenshots of the website's highlights. This project was completed in a small group as part of BUILD UMass,
                                    which you can learn more about <a href='https://buildumass.com/' target='_blank' rel="noopener noreferrer">here.</a>
                                </p>
                            </section>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Image src='../../images/bridges/highlight1.png' />
                        </Col>
                        <Col>
                            <Image src='../../images/bridges/highlight2.png' />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Image src='../../images/bridges/highlight3.png' />
                        </Col>
                        <Col>
                            <Image src='../../images/bridges/highlight4.png' />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Image src='../../images/bridges/highlight5.png' />
                        </Col>
                        <Col>
                            <Image src='../../images/bridges/highlight6.png' />
                        </Col>
                    </Row>
                </Container>
            </div>
        </Wrapper>
    )
}