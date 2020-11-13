import utilStyles from '../styles/utils.module.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

export default function projectHeader(webLink, gitLink) {
    return (
        <Container>
                <Row style={{textAlign: 'center'}}>
                    <Col>
                        <a href={webLink} target="_blank">
                            <span className={utilStyles.contacts}>
                                <i className="fas fa-globe fa-10x"></i>
                            </span>
                        </a>
                        <p>
                            Website
                        </p>                      
                    </Col>
                    <Col>
                        <a href={gitLink} target="_blank">
                            <span className={utilStyles.contacts}>
                                <i className="fab fa-github fa-10x"></i>
                            </span>
                        </a>
                        <p>
                            GitHub
                        </p>
                    </Col>
                </Row>
            </Container>
    );
}