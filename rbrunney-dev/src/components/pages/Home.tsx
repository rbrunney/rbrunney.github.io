import Footer from "../page_components/Footer";
import SocialsBar from "../page_components/SocialsBar";

const HomePage = () => {
    return (
        <>
            <div className="home-container">
                <div className="home-intro">
                    <p className="intro-title">Software Engineer</p>
                    <p className="intro-description">
                        Hello, my name is Robert Brunney and I build software for a better tomorrow!
                    </p>
                    <SocialsBar />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default HomePage;