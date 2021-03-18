import Head from 'next/head';
import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

export default function Bridges() {
    return (
        <Layout page='individualProj'>
            <Head>
                <title>Bryce Parkman - Student Bridges</title>
            </Head>
            <section className={utilStyles.headingXl}>
                <p>Student Bridges Website</p>
            </section>
            <a href='https://studentbridgesagency.org/' target='_blank' rel="noopener noreferrer">
                <Card className={utilStyles.projectCard}>
                    <Container>
                        <Row className={utilStyles.projectRow}>
                            <Image rounded src='../../images/bridges/bridgeHeader.png'/>
                        </Row>
                    </Container>
                    <div className={utilStyles.overlayArrow}>
                        <i className='fas fa-globe fa-3x'></i>
                    </div>
                </Card>
            </a>
            <section className={utilStyles.lightText}>
                <p>
                    This website was created for a UMass organization known as Student Bridges, who weren't able to create a website on their own. 
                    Student Bridges strives to increase college access and success for underrepresented students by offering tours, art shows, 
                    classes, programs, an online web series, etc. The website is built on a simple HTML5 base, and allows users to learn more about 
                    the organization, view their services, and contact them to learn more. Clicking the image above will take you to the website, 
                    and below are some screenshots of the website's highlights. This project was completed in a small group as part of BUILD UMass, 
                    which you can learn more about <a href='https://buildumass.com/' target='_blank' rel="noopener noreferrer">here.</a>
                </p>
            </section>
            <Row style={{marginBottom: '30px'}}>
                <Col>
                    <Image src='../../images/bridges/highlight1.png'/>
                </Col>
                <Col>
                    <Image src='../../images/bridges/highlight2.png'/>
                </Col>
            </Row>
            <Row style={{marginBottom: '30px'}}>
                <Col>
                    <Image src='../../images/bridges/highlight3.png'/>
                </Col>
                <Col>
                    <Image src='../../images/bridges/highlight4.png'/>
                </Col>
            </Row>
            <Row style={{marginBottom: '30px'}}>
                <Col>
                    <Image src='../../images/bridges/highlight5.png'/>
                </Col>
                <Col>
                    <Image src='../../images/bridges/highlight6.png'/>
                </Col>
            </Row>
        </Layout>
    )
}