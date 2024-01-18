import ParticleBackgroundEffect from "../../Background/ParticleBackgroundEffect";
import NavigationBar from "../../Navigation/NavigationBar";

const AboutPage = () => {
    return (
        <>
            <ParticleBackgroundEffect />
            <NavigationBar/>
            <div className="about-container">
                <div className="about-photo"></div>
                <div className="about-description"></div>
            </div>
        </>
    );
}

export default AboutPage;