import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Journey from "../components/Journey/Journey";
import Stats from "../components/Stats/Stats";
import Portfolio from "../components/Portfolio/Portfolio";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Journey />
            <Stats />
            <Portfolio />

            <WhyChooseUs />
            <Contact />
            <Footer />

                     
        </>
    );
};

export default Home;