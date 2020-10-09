import Construction from '../../components/construction'
import Head from 'next/head';
import Link from 'next/link'
import Layout from '../../components/layout'
import styles from '../../components/layout.module.css'
import utilStyles from '../../styles/utils.module.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Navigation from '../../components/navigation'

export default function Visualizations() {
    return (
        <div style={{padding: '1rem', margin: '0.5rem auto'}}>
            <Head>
                <title>Bryce Parkman - Visualizations</title>
            </Head>
            <div className={styles.navbar}>
            <Navigation />
          </div>
            <Construction />
            <Container>
                <Row>
                    <Col lg={4}>
                        <Link href='sketches/leaves'>
                            <Card style={{cursor: 'pointer'}}>
                                <Card.Img variant="top" src="/images/leaves.png" />
                                <Card.Body>
                                    <Card.Title>Falling, Changing</Card.Title>
                                    <Card.Text>
                                        An interactive simulation of falling leaves with varying types of wind. Uses matter.js physics engine and adjustable inputs to inspire the user to create their own meaning and beauty out of the visuals.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                    <Col lg={4}>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Falling, Changing</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Falling, Changing</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
