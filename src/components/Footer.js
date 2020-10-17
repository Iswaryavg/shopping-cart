import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
const Footer = () => {
    return (
        <div className="p-4 bg-dark">
            <footer>
                <Container>
                    <Row>
                        <Col className="text-center py-3">
&copy;copyright reserved {new Date().getFullYear()}
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    )
}

export default Footer
