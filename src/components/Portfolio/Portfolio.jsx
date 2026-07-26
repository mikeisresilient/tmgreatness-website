import { motion } from "framer-motion";
import featured from "../../assets/performances/featured.webp";
import PortfolioGallery from "./PortfolioGallery";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-black py-28 md:py-36"
    >
      {/* Background Text */}
      <h2
        style={{ fontFamily: "Bebas Neue" }}
        className="pointer-events-none absolute left-1/2 top-24 -translate-x-1/2 text-[20vw] font-bold uppercase leading-none text-white/[0.03]"
      >
        Portfolio
      </h2>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-4xl text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-red-600/40 bg-red-600/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-red-500">
            Our Work
          </span>

          <h2
            style={{ fontFamily: "Bebas Neue" }}
            className="text-5xl uppercase tracking-wide text-white md:text-7xl"
          >
            Every Performance
            <br />
            Has A Story
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            Every performance is a moment of excellence, creativity, and
            precision. From concerts and music videos to festivals, brand
            campaigns, and live productions, TMGreatness has helped create
            unforgettable experiences across Africa's entertainment industry.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          viewport={{ once: true }}
          className="mb-24 grid gap-6 md:grid-cols-4"
        >
          {[
            ["2012", "Established"],
            ["Award Winning", "Productions"],
            ["Top Record Labels", "Collaborations"],
            ["Top Artists", "Worked With"],
          ].map(([number, label]) => (
            <div
              key={label}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl"
            >
              <h3
                style={{ fontFamily: "Bebas Neue" }}
                className="text-5xl text-red-500"
              >
                {number}
              </h3>

              <p className="mt-3 uppercase tracking-[0.25em] text-zinc-400">
                {label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Featured Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-white/10"
        >
          <img
            src={featured}
            alt="Featured Performance"
            className="h-[650px] w-full object-cover transition-transform duration-700 hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/10" />

          <div className="absolute bottom-10 left-10">
            <span className="rounded-full bg-red-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white">
              Featured Performance
            </span>

            <h3
              style={{ fontFamily: "Bebas Neue" }}
              className="mt-6 text-5xl uppercase text-white md:text-7xl"
            >
              Excellence In Every Frame
            </h3>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
              A glimpse into TMGreatness's commitment to delivering
              unforgettable live experiences, world class stage productions,
              and exceptional creative direction.
            </p>
          </div>
        </motion.div>

        <PortfolioGallery />


      </div>
    </section>
  );
};

export default Portfolio;