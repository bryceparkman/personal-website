'use client'
import Wrapper from '../../components/wrapper'
import utilStyles from '../../styles/utils.module.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import React from 'react'

export default function Mask() {
    return (
        <Wrapper page='individualProj'>
            <div className={utilStyles.individualProjectPage}>
                <section className={utilStyles.headingXl}>
                    <p>MASKerAID</p>
                </section>
                <Container>
                    <Card className={utilStyles.projectCard}>
                        <a href='https://github.com/bryceparkman/MASKerAID' target='_blank' rel="noopener noreferrer">
                            <Image rounded src='../../images/mask/maskHeader.png'  className={utilStyles.projectRow} style={{margin: 0}}/>
                            <div className={utilStyles.overlayArrow}>
                                <i className='fab fa-github fa-3x'></i>
                            </div>
                        </a>                     
                    </Card>
                </Container>
                
                <Container id="projectDescription" className="justify-content-md-center">
                    <Row>
                        <Col>
                            <section>
                                <p>
                                    MASKerAID is a device that attaches to a mask that enables temperature, moisture, and air quality tracking. 
                                    It uses this information to determine when the user should wash their mask or replace the filter, and 
                                    communicates this via Bluetooth to a companion app. This project was made during the John Hopkins 2020 MedHack,
                                    and our small team of 4 ended up placing 3rd in the pandemic track. Clicking the image above will take you to the 
                                    GitHub page, and below are some highlights from the 72 hour stretch we had to create our vision.
                                </p>
                            </section>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Image src='../../images/mask/highlight3.png'/>
                        </Col>
                        <Col>
                            <Image src='../../images/mask/highlight4.png'/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Image src='../../images/mask/highlight1.png'/>
                        </Col>
                        <Col>
                            <Image src='../../images/mask/highlight5.png'/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Image src='../../images/mask/highlight2.png'/>
                        </Col>                        
                    </Row>
                </Container>
            </div>
        </Wrapper>
    )
}