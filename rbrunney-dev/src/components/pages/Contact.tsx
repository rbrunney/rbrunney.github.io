import { Button, Col, Form, FormGroup, FormLabel, Row } from "react-bootstrap";
import emailjs from '@emailjs/browser';
import { FormEvent } from "react";

const ContactPage = () => {
    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(checkIsBtnDisabled()) {
            try {
                emailjs.sendForm(
                    process.env.REACT_APP_EMAILJS_SERVICE_ID as string, 
                    process.env.REACT_APP_EMAILJS_TEMPLATE_ID as string, 
                    e.currentTarget, 
                    process.env.REACT_APP_EMAILJS_PUBLIC_KEY as string
                );
                alert('Email Sent!');
            } catch {
                alert('Could not send email at this time!');
            }
        } else {
            alert('Fill in all fields!')
        }
    }

    const checkIsBtnDisabled = () => {
        const nameInput = document.getElementById("users-name") as HTMLInputElement;
        const emailInput = document.getElementById("users-email") as HTMLInputElement;
        const emailBody = document.getElementById("email-body") as HTMLInputElement;

        return nameInput.value !== "" && emailInput.value !== "" && emailBody.value !== "";
    }

    return (
        <>
            <div className="contact-container">
                <div>
                    <p className="contact-title">Send a Message!</p>
                    <p className="contact-description">Reach out if you want to say hello, or want to discuss further!</p>
                </div>
                <div className="contact-email-section">
                    <Form className="contact-email-form" onSubmit={sendEmail}>
                        <FormGroup className="contact-user-data">
                            <Row>
                                <Col></Col>
                                <Col>
                                    <FormLabel className="contact-label">Your Name</FormLabel>
                                    <Form.Control name="users-name" id="users-name" type="text"/>
                                </Col>
                                <Col>
                                    <FormLabel className="contact-label">Your Email</FormLabel>
                                    <Form.Control name="users-email" id="users-email" type="email"/>
                                </Col>
                                <Col></Col>
                            </Row>
                        </FormGroup>
                        <FormGroup className="contact-message">
                            <Row className="contact-email-row">
                                <Col className="contact-empty-col"></Col>
                                <Col className="contact-email-col">
                                    <FormLabel className="contact-label">Your Message</FormLabel>
                                    <Form.Control name="email-body" id="email-body" as="textarea" rows={5}/>
                                </Col>
                                <Col className="contact-empty-col"></Col>
                            </Row>
                        </FormGroup>
                        <Button className="contact-send-email-btn" type="submit">
                            Send Email
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    );
}

export default ContactPage;