import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Loader from "./components/Loader/Loader";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Founder from "./components/Founder/Founder";
import TMGreatness from "./components/TMGreatness/TMGreatness";
import Collaborations from "./components/Collaborations/Collaborations";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BackToTop from "./components/BackToTop/BackToTop";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loader isLoading={isLoading} />}
      </AnimatePresence>

      {!isLoading && (
        <motion.main
          id="top"
          className="min-h-screen bg-black text-white"
          initial={{
            opacity: 0,
            y: 16,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Navbar />
          <Hero />
          <Founder />
          <TMGreatness />
          <Collaborations />
          <Portfolio />
          <Contact />
          <Footer />
          <BackToTop />
        </motion.main>
      )}
    </>
  );
}

export default App;