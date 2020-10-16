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
                            <Card style={{cursor: 'pointer', marginTop: '20px'}}>
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
                        <Link href='sketches/impacts'>
                        <Card style={{cursor: 'pointer', marginTop: '20px'}}>
                            <Card.Img variant="top" src="/images/impacts.png" />
                            <Card.Body>
                                <Card.Title>Impact Viewer</Card.Title>
                                <Card.Text>
                                    A visual interpretation of the JPL Sentry API, which tracks asteroids and their potential impact trajectories. For each asteroid the size, threat level, and potential impact date/energy is displayed.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </Link>
                    </Col>
                    <Col lg={4}>
                        <Link href='sketches/hue'>
                        <Card style={{cursor: 'pointer', marginTop: '20px'}}>
                            <Card.Img variant="top" src="/images/hue.png" />
                            <Card.Body>
                                <Card.Title>I Love Hue Remake</Card.Title>
                                <Card.Text>
                                    Remake of the "I Love Hue" app. Puzzle game that rearranges blocks of a gradient and tasks the user to put the gradient back into order. Randomized tile and color gradient selection.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <Link href='sketches/wiggle'>
                            <Card style={{cursor: 'pointer', marginTop: '20px'}}>
                                <Card.Img variant="top" src="/images/wiggle.png" />
                                <Card.Body>
                                    <Card.Title>Perlin Noise Blob</Card.Title>
                                    <Card.Text>
                                        A visualization of Perlin noise. Spoke heights are generated using Perlin noise to create a the different shapes. Try moving your mouse around and interacting with the controls.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                    <Col lg={4}>
                    <Link href='sketches/impacts'>
                        <Card style={{cursor: 'pointer', marginTop: '20px'}}>
                            <Card.Img variant="top" src="/images/flock.png" />
                            <Card.Body>
                                <Card.Title>Impact Viewer</Card.Title>
                                <Card.Text>
                                    A visual interpretation of the JPL Sentry API, which tracks asteroids and their potential impact trajectories. For each asteroid the size, threat level, and potential impact date/energy is displayed.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </Link>
                    </Col>
                    <Col lg={4}>
                        <Link href='sketches/hue'>
                        <Card style={{cursor: 'pointer', marginTop: '20px'}}>
                            <Card.Img variant="top" src="/images/hue.png" />
                            <Card.Body>
                                <Card.Title>I Love Hue Remake</Card.Title>
                                <Card.Text>
                                    Remake of the "I Love Hue" app with p5.js. Puzzle game that rearranges blocks of a gradient and tasks the user to put the gradient back into order. Features randomized tile and color gradient selection.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
