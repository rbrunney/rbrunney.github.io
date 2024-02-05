import packageJson from '../../../package.json';

const Footer = () => {
    var currentYear = new Date().getFullYear();
    return (
        <>
            <div className="footer">
                © {currentYear} Copyright: rbrunney-dev
                <p>v{packageJson.version}</p>
            </div>
        </>
    );
}

export default Footer;