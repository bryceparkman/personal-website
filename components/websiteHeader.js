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
                            <span className={utilStyles.header}>
                                <i className="fas fa-globe"></i>
                            </span>
                        </a>
                        <p>
                            Website
                        </p>                      
                    </Col>
                    <Col>
                        <a href={gitLink} target="_blank">
                            <span className={utilStyles.header}>
                                <i className="fab fa-github"></i>
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