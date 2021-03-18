import Head from 'next/head';
import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

export default function Mask() {
    return (
        <Layout page='individualProj'>
            <Head>
                <title>Bryce Parkman - MASKerAID</title>
            </Head>
            <section className={utilStyles.headingXl}>
                <p>MASKerAID</p>
            </section>
            <a href='https://github.com/bryceparkman/MASKerAID' target='_blank' rel="noopener noreferrer">
                <Card className={utilStyles.projectCard}>
                    <Container>
                        <Row className={utilStyles.projectRow}>
                            <Image rounded src='../../images/mask/maskHeader.png'/>
                        </Row>
                    </Container>
                    <div className={utilStyles.overlayArrow}>
                        <i className='fab fa-github fa-3x'></i>
                    </div>
                </Card>
            </a>
            <section className={utilStyles.lightText}>
                <p>
                    MASKerAID is a device that attaches to a mask that enables temperature, moisture, and air quality tracking. 
                    It uses this information to determine when the user should wash their mask or replace the filter, and 
                    communicates this via Bluetooth to a companion app. This project was made during the John Hopkins 2020 MedHack,
                    and our small team of 4 ended up placing 3rd in the pandemic track. Clicking the image above will take yo to the 
                    GitHub page, and below are some highlights from the 72 hour stretch we had to create our vision.
                </p>
            </section>
            <Row style={{marginBottom: '30px'}}>
                <Col>
                    <Image src='../../images/mask/highlight2.png'/>
                </Col>
                
            </Row>
            <Row style={{marginBottom: '30px'}}>
                <Col>
                    <Image src='../../images/mask/highlight3.png'/>
                </Col>
                <Col>
                    <Image src='../../images/mask/highlight4.png'/>
                </Col>
            </Row>
            <Row style={{marginBottom: '30px'}}>
                <Col>
                    <Image src='../../images/mask/highlight1.png'/>
                </Col>
                <Col>
                    <Image src='../../images/mask/highlight5.png'/>
                </Col>
            </Row>
        </Layout>
    )
}