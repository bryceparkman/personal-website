import Head from 'next/head';
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

export default function Project() {
    return (
        <Layout>
            <Head>
                <title>Projects</title>
            </Head>
            <Card>
            <Row className={utilStyles.projectRow}>
                <Col>
                    <Image rounded src="/images/profile.jpeg" />
                </Col>
                <Col>
                    <h2>
                        Nadine El Nesr
                    </h2>
                    <div>
                        Hello
                    </div>
                </Col>
            </Row>
            </Card>
            <Row className={utilStyles.projectRow}>
                <Col>
                    <Image rounded src="/images/profile.jpeg" />
                </Col>
                <Col>
                    <h2>
                        Student Bridges
                    </h2>
                    <div>
                     Collaborated in a six-person team to develop a website for the UMass Amherst organization Student Bridges,
                     which provides easier college access for underrepresented students. I learned valuable project management techniques
                     gained strong communication skills by attending meetings with Student Bridges to discuss website features.
                     Built with Bootstrap, Express, NodeJS, and Firebase.
                    </div>
                </Col>
            </Row>
            <Row className={utilStyles.projectRow}>
                <Col>
                    <Image rounded src="/images/profile.jpeg" />
                </Col>
                <Col>
                    <h2>
                        MASKerAID
                    </h2>
                    <div>
                        Hello
                    </div>
                </Col>
            </Row>
            {/* <Card style={{ width: '18rem' }}>
                <Card.Image variant="top" src="../public/images/profile.jpeg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                </Card.Text>
                </Card.Body>
            </Card> */}
        </Layout>
    )
}
