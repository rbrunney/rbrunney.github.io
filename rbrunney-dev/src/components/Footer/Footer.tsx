const Footer = () => {
    var currentYear = new Date().getFullYear();
    return (
        <>
            <div className="footer">
                © {currentYear} Copyright: rbrunney-dev
            </div>
        </>
    );
}

export default Footer;