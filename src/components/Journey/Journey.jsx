import { motion } from "framer-motion";

const milestones = [
  {
    year: "2018",
    title: "The Beginning",
    description:
      "TMGreatness was founded with a vision to redefine dance performance through creativity and excellence.",
  },
  {
    year: "2020",
    title: "Growing Influence",
    description:
      "Building a reputation through outstanding choreography and memorable live performances.",
  },
  {
    year: "2023",
    title: "National Recognition",
    description:
      "Collaborating with leading artists and performing on bigger stages across Nigeria.",
  },
  {
    year: "Today",
    title: "Global Vision",
    description:
      "Taking African creativity to the world through performance, training and storytelling.",
  },
];

const Journey = () => {
  return (
    <section
      id="about"
      className="bg-black py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <motion.p
          className="text-center uppercase tracking-[0.4em] text-red-500 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          OUR JOURNEY
        </motion.p>

        <motion.h2
          style={{ fontFamily: "Bebas Neue" }}
          className="text-center text-6xl md:text-8xl leading-none"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          FROM LAGOS
          <br />
          TO THE WORLD
        </motion.h2>

        <div className="mt-24 relative">

          {/* Vertical Line */}
          <div className="absolute left-6 top-0 h-full w-1 bg-red-600 md:left-1/2 md:-translate-x-1/2"></div>

          <div className="space-y-20">

            {milestones.map((item, index) => (
              <motion.div
                key={index}
                className={`relative flex ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                } items-center`}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                {/* Card */}
                <div className="ml-16 md:ml-0 md:w-1/2 md:px-10">
                  <div className="rounded-2xl bg-zinc-900 p-8 border border-zinc-800">

                    <span className="text-red-500 font-bold text-xl">
                      {item.year}
                    </span>

                    <h3 className="mt-3 text-3xl font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-zinc-400 leading-8">
                      {item.description}
                    </p>

                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-red-600 border-4 border-black"></div>

              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Journey;