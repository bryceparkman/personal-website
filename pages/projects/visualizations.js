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
                                        An interactive simulation of falling leaves with varying types of wind. Uses matter.js physics engine and adjustable inputs to inspire the user to create their own meaning out of the visuals.
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
                    <Link href='sketches/flock'>
                        <Card style={{cursor: 'pointer', marginTop: '20px'}}>
                            <Card.Img variant="top" src="/images/flock.png" />
                            <Card.Body>
                                <Card.Title>Flocking Simulation</Card.Title>
                                <Card.Text>
                                    A flocking simulation based on Craig Reynolds "Boids" engine. On top of this engine, each bird has a true to life field of view. Users can also interact with the birds themselves.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </Link>
                    </Col>
                    <Col lg={4}>
                        <Link href='sketches/cat'>
                        <Card style={{cursor: 'pointer', marginTop: '20px'}}>
                            <Card.Img variant="top" src="/images/cat.png" />
                            <Card.Body>
                                <Card.Title>Image Tile Physics</Card.Title>
                                <Card.Text>
                                    Splits an image into many tiles which interact with the user's mouse presses. Outward spiral and attraction modes are toggleable, and tiles return to original positions upon release.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <Link href='sketches/pi'>
                            <Card style={{cursor: 'pointer', marginTop: '20px'}}>
                                <Card.Img variant="top" src="/images/wiggle.png" />
                                <Card.Body>
                                    <Card.Title>Pi Collisions</Card.Title>
                                    <Card.Text>
                                        Pi calculator that counts the collisions of two boxes. Uses a simple physics engine based on elastic collision velocity equations. The digits of Pi are approximated.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                    <Col lg={4}>
                    <Link href='sketches/recaman'>
                        <Card style={{cursor: 'pointer', marginTop: '20px'}}>
                            <Card.Img variant="top" src="/images/flock.png" />
                            <Card.Body>
                                <Card.Title>Recaman's Sequence</Card.Title>
                                <Card.Text>
                                    A visualization of Recaman's sequence. This sequence jumps forward by n at every step, unless it can jump backwards to a positive integer not in the sequence.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </Link>
                    </Col>
                    <Col lg={4}>
                        <Link href='sketches/circles'>
                        <Card style={{cursor: 'pointer', marginTop: '20px'}}>
                            <Card.Img variant="top" src="/images/cat.png" />
                            <Card.Body>
                                <Card.Title>Lissajous Curves</Card.Title>
                                <Card.Text>
                                    Python implementation of creating Lissajous curves using parametric functions. The circles on each axis represents the cosine and sine of the shape.
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
