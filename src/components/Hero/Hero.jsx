import { motion } from "framer-motion";
import heroImage from "../../assets/images/more13.webp";
import logo from "../../assets/logos/tmglogo.png";
import founder from "../../assets/founder/founder.webp";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}

      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1.05 }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />

      {/* Gradient Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/55" />

      {/* Hero Content */}

      <div className="relative z-10 flex min-h-screen items-center pt-28 pb-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center px-6 md:px-10">
          {/* LEFT SIDE */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Logo */}

            <motion.div
              variants={itemVariants}
              whileHover={{
                rotate: -4,
                scale: 1.04,
              }}
              className="inline-flex mb-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 md:p-5 shadow-2xl"
            >
              <img
                src={logo}
                alt="TMGreatness Logo"
                className="w-20 h-20 md:w-28 md:h-28 object-contain"
              />
            </motion.div>

            {/* Intro */}

            <motion.p
              variants={itemVariants}
              className="uppercase tracking-[0.35em] text-red-500 text-xs md:text-base mb-5"
            >
              Founder • Choreographer • Creative Director
            </motion.p>

            {/* Heading */}

            <motion.h1
              variants={itemVariants}
              style={{ fontFamily: "Bebas Neue" }}
              className="leading-none text-6xl sm:text-7xl md:text-8xl lg:text-[9rem]"
            >
              IKENNA
              <br />
              <span className="text-red-600">DAVID</span>
            </motion.h1>

            {/* Animated Divider */}

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 140 }}
              transition={{
                delay: 0.8,
                duration: 0.8,
              }}
              className="mt-8 h-1 rounded-full bg-red-600"
            />

            {/* Description */}

            <motion.p
              variants={itemVariants}
              className="mt-8 max-w-2xl text-base sm:text-lg leading-8 text-zinc-300"
            >
              Award winning choreographer and creative director behind
              TMGreatness, delivering exceptional choreography, electrifying
              live performances and unforgettable entertainment experiences for
              artists, brands and audiences across Africa and beyond.
            </motion.p>

            {/* Buttons */}

            <motion.div
              variants={itemVariants}
              className="mt-12 flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                href="#portfolio"
                className="rounded-full bg-red-600 px-8 py-4 text-center font-semibold transition shadow-xl hover:bg-red-500"
              >
                View Portfolio
              </motion.a>

              <motion.a
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                href="#contact"
                className="rounded-full border border-white px-8 py-4 text-center font-semibold transition hover:bg-white hover:text-black"
              >
                Book TMGreatness
              </motion.a>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.4,
              duration: 0.9,
            }}
            className="relative flex flex-col items-center"
          >
            {/* Background Glow */}

            <div className="absolute h-[520px] w-[520px] rounded-full bg-red-600/20 blur-[150px]" />

            <div className="absolute h-80 w-80 rounded-full bg-red-500/15 blur-[80px]" />

            {/* Founder Image */}

            <motion.img
              src={founder}
              alt="Ikenna David"
              loading="eager"
              decoding="async"
              whileHover={{
                scale: 1.02,
                rotate: -1,
              }}
              transition={{
                duration: 0.35,
              }}
              className="relative z-10 w-72 rounded-[32px] object-cover shadow-[0_35px_80px_rgba(0,0,0,0.45)] sm:w-80 md:w-[460px] lg:max-h-[720px]"
            />

            {/* Experience Card */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1,
              }}
              className="absolute -bottom-22 left-1/2 z-30 hidden -translate-x-1/2 rounded-3xl border border-white/10 bg-black/70 px-6 py-5 backdrop-blur-md md:block lg:left-0 lg:translate-x-0"
            >
              <h2
                style={{ fontFamily: "Bebas Neue" }}
                className="text-4xl text-red-500"
              >
                Since
              </h2>

              <p className="text-2xl font-bold text-white">2012</p>

              <p className="mt-2 text-xs uppercase tracking-[0.35em] text-zinc-400">
                Choreographing Excellence
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Mobile Since Card */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1,
          duration: 0.6,
        }}
        className="relative z-10 mx-auto -mt-6 w-72 rounded-3xl border border-white/10 bg-black/70 px-6 py-5 text-center backdrop-blur-xl shadow-2xl lg:hidden"
      >
        <h2
          style={{ fontFamily: "Bebas Neue" }}
          className="text-4xl text-red-500"
        >
          Since
        </h2>

        <p className="text-xl font-bold">2012</p>

        <p className="mt-2 text-xs uppercase tracking-[0.35em] text-zinc-400">
          Choreographing Excellence
        </p>
      </motion.div>

      {/* Scroll Indicator */}

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 md:block"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
        }}
      >
        <div className="flex h-14 w-8 justify-center rounded-full border border-white/50">
          <motion.div
            animate={{
              y: [0, 18, 0],
              opacity: [1, 0.25, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.6,
            }}
            className="mt-2 h-3 w-1 rounded-full bg-white"
          />
        </div>
      </motion.a>
    </section>
  );
};

export default Hero;
