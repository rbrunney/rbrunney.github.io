import { Button } from 'react-bootstrap';
import { FaHome } from 'react-icons/fa';
import { FaDownload } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar = () => {
    var iconSize = 23;

    return (
        <>
            <Navbar expand="lg" className="navbar">
                <div className="navbar-home">
                    <FaHome className="navbar-icon" size={iconSize}/>
                </div>
                <div className="navbar-page-nav">
                    <Nav className="navbar-item-list">
                        <Nav.Link href="/about" className='navbar-item'>About</Nav.Link>
                        <Nav.Link href="/skills" className='navbar-item'>Skills</Nav.Link>
                        <Nav.Link href="/projects" className='navbar-item'>Projects</Nav.Link>
                        <Nav.Link href="/work" className='navbar-item'>Work</Nav.Link>
                        <Nav.Link href="/contact" className='navbar-item'>Contact</Nav.Link>
                    </Nav>
                </div>
                <div className="navbar-download">
                    <FaDownload className="navbar-icon" size={iconSize}/>
                </div>
            </Navbar>
        </>
    );
}

export default NavigationBar;