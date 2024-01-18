import ParticleBackgroundEffect from "../../Background/ParticleBackgroundEffect";
import Footer from "../../Footer/Footer";
import NavigationBar from "../../Navigation/NavigationBar";

const AboutPage = () => {
    var photoUrl = 'https://media.licdn.com/dms/image/D5603AQG6hldZCU-8mQ/profile-displayphoto-shrink_200_200/0/1687383692377?e=1710979200&v=beta&t=-9v8ivNkTkO80AuXsJUIsONssQFKbJYMoTA3S_0kRm8';

    return (
        <>
            <ParticleBackgroundEffect />
            <NavigationBar/>
            <div className="about-container">
                <div className="about-photo">
                    <div className="photo-border">
                        <img src={photoUrl} className="photo"/>
                    </div>
                </div>
                <div className="about-description">
                    <p className="about-text">
                        Hello there! My name is Robert Brunney and currently, I'm a Software Engineer at GPS Capital Markets. I have had a love and passion for computers ever since as long as I can remember! Anything and everything from playing games, and just trying to get a better understanding of how a computer works. With this passion, I found myself on a journey to becoming a Software Engineer. 
                    </p>
                    <p className="about-text">
                        I am happier than ever to have made the decision as it has allowed me to grow as a person and a Software Engineer. Software has been able to help me tackle some of the biggest issues I have faced/seen growing up. Having the capabilities to provide tools for others such as financial literacy, with my biggest side project InvestEd, has allowed me to help find solutions to issues that people may feel uncomfortable talking about. Either since it is taboo or it's a conversation simply never brought up in their homes.
                    </p>
                    <p className="about-text">
                        To see the powers of Software Engineering is a beautiful piece of work! Having the capabilities to provide reliable and fast scalable systems is my passion! There is nothing that beats a Distributed System, that can be accessed by anyone in the cloud!
                    </p>
                    <p className="about-text">
                        This is where my future awaits! I have been working and honing my skills in technologies such as Java, Spring, Python, Flask, Docker, MySQL, Redis, MongoDB, AWS, RabbitMQ, Kafka, and so many more!   
                    </p>
                    <p className="about-text">
                        Thank you for your time!
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default AboutPage;