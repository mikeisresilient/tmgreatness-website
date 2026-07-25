import { motion } from "framer-motion";
import performance from "../../assets/performances/performance5.jpg";
import {
  FaTheaterMasks,
  FaMusic,
  FaVideo,
  FaGraduationCap,
  FaStar,
  FaPeopleCarry,
} from "react-icons/fa";

const services = [
  {
    icon: <FaTheaterMasks />,
    title: "Creative Direction",
    text: "From concept development to stage execution, we bring creative ideas to life with precision and originality.",
  },
  {
    icon: <FaStar />,
    title: "Choreography",
    text: "Professional choreography tailored for concerts, award shows, television, tours and special productions.",
  },
  {
    icon: <FaMusic />,
    title: "Live Performances",
    text: "High energy performances that captivate audiences and create unforgettable entertainment experiences.",
  },
  {
    icon: <FaVideo />,
    title: "Music Videos",
    text: "Creative movement direction and performance styling that elevate visual storytelling.",
  },
  {
    icon: <FaGraduationCap />,
    title: "Dance Training",
    text: "Professional coaching and mentorship for dancers seeking technical and artistic excellence.",
  },
  {
    icon: <FaPeopleCarry />,
    title: "Event Entertainment",
    text: "Premium dance productions and entertainment experiences for corporate, cultural and private events.",
  },
];

const TMGreatness = () => {
  return (
    <section className="relative overflow-hidden bg-zinc-950 py-28 md:py-36">
      {/* Background */}

      <h1
        style={{ fontFamily: "Bebas Neue" }}
        className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 text-[120px] md:text-[220px] uppercase tracking-[0.3em] text-white/5"
      >
        MOVEMENT
      </h1>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <p className="uppercase tracking-[0.4em] text-red-500">
            THE MOVEMENT
          </p>

          <h2
            style={{ fontFamily: "Bebas Neue" }}
            className="mt-4 text-6xl leading-none md:text-8xl"
          >
            TMGREATNESS
          </h2>
        </motion.div>

        {/* Story */}

        <div className="grid gap-20 lg:grid-cols-[1fr_1fr] items-center">
          {/* Image */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/20 blur-[120px]" />

            <img
              src={performance}
              alt="TMGreatness Performance"
              className="relative z-10 rounded-[36px] border border-white/10 shadow-2xl"
            />

            <div
              className="
        absolute
        bottom-3
        left-3
        z-20

        w-[160px]

        rounded-2xl
        border
        border-white/10

        bg-zinc-950/55

        px-4
        py-3

        backdrop-blur-xl

        sm:bottom-5
        sm:left-5
        sm:w-[185px]
        sm:px-5
        sm:py-4

        md:bottom-8
        md:left-8
        md:w-[250px]
        md:px-8
        md:py-5
    "
            >
              <p className="text-[10px] uppercase tracking-[0.28em] text-amber-300 sm:text-xs">
                {" "}
                TMGreatness
              </p>

              <h3
                style={{ fontFamily: "Bebas Neue" }}
                className="
        mt-1
        text-[1.7rem]
        leading-none

        sm:mt-2
        sm:text-[2rem]

        md:text-3xl
    "
              >
                Creating
                <br />
                Unforgettable
                <br />
                Experiences
              </h3>
            </div>
          </motion.div>

          {/* Content */}

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[0.35em] text-red-500">
              WHO WE ARE
            </p>

            <h3
              style={{ fontFamily: "Bebas Neue" }}
              className="mt-4 text-5xl md:text-7xl leading-none"
            >
              MORE THAN
              <br />
              A DANCE
              <br />
              COMPANY
            </h3>

            <div className="mt-8 h-1 w-28 rounded-full bg-red-600" />

            <p className="mt-10 leading-9 text-zinc-300">
              TMGreatness is a premium choreography and creative performance
              company dedicated to transforming ideas into unforgettable live
              experiences. Through innovation, precision and artistic
              excellence, we collaborate with artists, brands and organisations
              to create performances that leave lasting impressions.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                <p className="uppercase tracking-[0.3em] text-red-500">
                  Mission
                </p>

                <p className="mt-5 leading-8 text-zinc-300">
                  To redefine live entertainment through world class
                  choreography, innovation and exceptional creative direction.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                <p className="uppercase tracking-[0.3em] text-red-500">
                  Vision
                </p>

                <p className="mt-5 leading-8 text-zinc-300">
                  To become Africa's leading creative performance company,
                  inspiring audiences through movement, storytelling and
                  excellence.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Services */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-32"
        >
          <div className="mb-14 text-center">
            <p className="uppercase tracking-[0.4em] text-red-500">
              WHAT WE DO
            </p>

            <h3
              style={{ fontFamily: "Bebas Neue" }}
              className="mt-4 text-5xl md:text-7xl"
            >
              OUR EXPERTISE
            </h3>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.25 },
                }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-red-600/40 hover:bg-white/10"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-red-600/10 p-4 text-3xl text-red-500 transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>

                <h4 className="text-2xl font-semibold text-white">
                  {service.title}
                </h4>

                <p className="mt-4 leading-8 text-zinc-400">{service.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call To Action */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mt-36 max-w-5xl rounded-[40px] border border-white/10 bg-gradient-to-r from-zinc-900 via-black to-zinc-900 px-8 py-20 text-center"
        >
          <p className="uppercase tracking-[0.4em] text-red-500">
            LET'S CREATE TOGETHER
          </p>

          <h3
            style={{ fontFamily: "Bebas Neue" }}
            className="mt-6 text-5xl leading-none md:text-7xl"
          >
            READY TO CREATE
            <br />
            SOMETHING
            <br />
            EXTRAORDINARY?
          </h3>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-zinc-400">
            Whether you're planning a concert, music video, live production,
            corporate event or special performance, TMGreatness is ready to
            transform your vision into an unforgettable experience.
          </p>

          <a
            href="#contact"
            className="mt-12 inline-flex rounded-full bg-red-600 px-10 py-4 font-semibold text-white transition duration-300 hover:bg-red-700 hover:scale-105"
          >
            Book TMGreatness
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TMGreatness;
