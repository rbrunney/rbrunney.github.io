import { FaHome } from 'react-icons/fa';
import { FaDownload } from 'react-icons/fa';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar = () => {
    var iconSize = 23;
    var resumeLink = require('../../assets/documents/rbrunney-resume.pdf');

    return (
        <>
            <Navbar expand="lg" className="navbar">
                <div className="navbar-home">
                    <Nav.Link href="#home" className='navbar-item'>
                        <FaHome className="navbar-icon" size={iconSize}/>
                    </Nav.Link>
                </div>
                <div className="navbar-page-nav">
                    <Nav className="navbar-item-list" activeKey="">
                        <Nav.Link href="#about" className='navbar-item'>About</Nav.Link>
                        <Nav.Link href="#projects" className='navbar-item'>Projects</Nav.Link>
                        <Nav.Link href="#work" className='navbar-item'>Work</Nav.Link>
                        <Nav.Link href="#contact" className='navbar-item'>Contact</Nav.Link>
                    </Nav>
                </div>
                <div className="navbar-download">
                    <a href={resumeLink} download="Robert Brunney's Resume" target="_blank">
                        <FaDownload className="navbar-icon" size={iconSize}/>
                    </a>
                </div>
            </Navbar>
        </>
    );
}

export default NavigationBar;