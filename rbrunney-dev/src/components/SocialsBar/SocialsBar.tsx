import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const SocialsBar = () => {

    var iconSize = 40;

    var linkedInUrl = 'https://www.linkedin.com/in/robert-brunney/';
    var githubUrl = 'https://github.com/rbrunney';
    var gmailUrl = 'https://mail.google.com/mail/u/0/#inbox?compose=new';

    return (
        <div className="socials-container">
            <a href={linkedInUrl} target="_blank" className="social-icon"><FaLinkedin size={iconSize}/></a>
            <a href={githubUrl} target="_blank" className="social-icon"><FaGithub size={iconSize}/></a>
            <a href={gmailUrl} target="_blank" className="social-icon"><MdEmail size={iconSize}/></a>
        </div>
    );
}

export default SocialsBar;