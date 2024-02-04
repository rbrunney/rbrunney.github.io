import { Button, Col, Form, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap";

const ContactPage = () => {
    return (
        <>
            <div className="contact-container">
                <div>
                    <p className="contact-title">Send a Message!</p>
                    <p className="contact-description">Reach out if you want to say hello, or want to discuss further!</p>
                </div>
                <div>
                    <Form className="contact-email-form">
                        <FormGroup className="contact-user-data">
                            <Row>
                                <Col></Col>
                                <Col>
                                    <FormLabel className="contact-label">Your Name</FormLabel>
                                    <Form.Control type="text"/>
                                </Col>
                                <Col>
                                    <FormLabel className="contact-label">Your Email</FormLabel>
                                    <Form.Control type="email"/>
                                </Col>
                                <Col></Col>
                            </Row>
                        </FormGroup>
                        <FormGroup className="contact-message">
                            <Row className="contact-email-row">
                                <Col className="contact-empty-col"></Col>
                                <Col className="contact-email-col">
                                    <FormLabel className="contact-label">Your Message</FormLabel>
                                    <Form.Control as="textarea" rows={5}/>
                                </Col>
                                <Col className="contact-empty-col"></Col>
                            </Row>
                        </FormGroup>
                    </Form>
                </div>
                <Button className="contact-send-email-btn" type="submit">Send Email</Button>
            </div>
        </>
    );
}

export default ContactPage;