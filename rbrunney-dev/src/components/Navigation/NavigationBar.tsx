import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

const NavigationBar = () => {
    return (
        <>
            <Navbar expand="lg" className="navbar">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbar">
                        <Nav.Link href="/about" className='navbar-item'>About</Nav.Link>
                        <Nav.Link href="/skills" className='navbar-item'>Skills</Nav.Link>
                        <Nav.Link href="/project" className='navbar-item'>Projects</Nav.Link>
                        <Nav.Link href="/work" className='navbar-item'>Work</Nav.Link>
                        <Nav.Link href="/contact" className='navbar-item'>Contact</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavigationBar;