import { motion } from "framer-motion";
import founder from "../../assets/founder/founder.webp";
import {
    FaAward,
    FaFilm,
    FaGlobeAfrica,
    FaMusic,
} from "react-icons/fa";

const expertise = [
    {
        icon: <FaFilm />,
        title: "Creative Direction",
        text: "Transforming concepts into unforgettable stage and visual experiences.",
    },
    {
        icon: <FaMusic />,
        title: "Live Performance",
        text: "Designing energetic performances that captivate audiences worldwide.",
    },
    {
        icon: <FaAward />,
        title: "Artist Development",
        text: "Mentoring performers to unlock confidence, creativity and excellence.",
    },
    {
        icon: <FaGlobeAfrica />,
        title: "Entertainment Production",
        text: "Delivering premium productions from concept to final performance.",
    },
];

const Founder = () => {
    return (
        <section
            id="about"
            className="relative overflow-hidden bg-black py-28 md:py-36"
        >
            {/* Background Word */}

            <h1
                style={{ fontFamily: "Bebas Neue" }}
                className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 select-none text-[120px] font-bold uppercase tracking-[0.25em] text-white/5 md:text-[220px]"
            >
                VISIONARY
            </h1>

            <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">

                {/* Section Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .8 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <p className="mb-5 uppercase tracking-[0.45em] text-red-500">
                        Meet The Visionary
                    </p>

                    <h2
                        style={{ fontFamily: "Bebas Neue" }}
                        className="max-w-3xl text-6xl leading-none md:text-8xl"
                    >
                        THE MAN
                        <br />
                        BEHIND
                        <br />
                        THE MOVEMENT
                    </h2>
                </motion.div>

                {/* Editorial Layout */}

                <div className="grid items-center gap-20 lg:grid-cols-[0.9fr_1.1fr]">

                    {/* Portrait */}

                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >

                        {/* Glow */}

                        <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/20 blur-[120px]" />

                        <img
                            src={founder}
                            alt="Onyekwere David Ikenna"
                            className="relative z-10 rounded-[36px] border border-white/10 shadow-2xl"
                        />

                        {/* Founder Badge */}

                        <div className="absolute bottom-8 left-8 z-20 rounded-2xl border border-white/10 bg-black/80 px-8 py-5 backdrop-blur-xl">

                            <p className="text-xs uppercase tracking-[0.4em] text-amber-300">
                                TMGreatness
                            </p>

                            <h3
                                style={{ fontFamily: "Bebas Neue" }}
                                className="mt-1 text-3xl"
                            >
                                Founder
                            </h3>

                        </div>

                    </motion.div>

                    {/* Biography */}

                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .8 }}
                        viewport={{ once: true }}
                    >

                        <p className="uppercase tracking-[0.4em] text-red-500">
                            ONYEKWERE DAVID IKENNA
                        </p>

                        <h3
                            style={{ fontFamily: "Bebas Neue" }}
                            className="mt-4 text-5xl leading-none md:text-7xl"
                        >
                            Founder
                            <br />
                            Creative Director
                            <br />
                            Choreographer
                        </h3>

                        <div className="mt-8 h-1 w-32 rounded-full bg-red-600" />

                        <p className="mt-10 text-xl italic leading-9 text-amber-300">
                            "Every great movement begins with a visionary."
                        </p>

                        <p className="mt-10 leading-9 text-zinc-300">
                            For over a decade, Onyekwere David Ikenna has transformed
                            movement into storytelling, building one of Africa's most
                            respected choreography and performance brands through
                            creativity, discipline and excellence.
                        </p>

                        <p className="mt-8 leading-9 text-zinc-400">
                            Since beginning his professional journey in 2012, he has
                            dedicated his career to creating unforgettable stage
                            performances, directing large scale productions, mentoring
                            dancers and delivering creative excellence for artists,
                            brands and audiences across Africa.
                        </p>

                        <p className="mt-8 leading-9 text-zinc-400">
                            His leadership continues to shape TMGreatness into more than
                            a dance company. It is a movement driven by passion,
                            innovation and an unwavering commitment to excellence.
                        </p>

                    </motion.div>

                </div>

                {/* Expertise */}

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-32"
                >
                    <div className="mb-12 text-center">
                        <p className="uppercase tracking-[0.4em] text-red-500">
                            Expertise
                        </p>

                        <h3
                            style={{ fontFamily: "Bebas Neue" }}
                            className="mt-4 text-5xl md:text-7xl"
                        >
                            BUILDING EXCELLENCE
                        </h3>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">
                        {expertise.map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{
                                    y: -10,
                                    transition: { duration: 0.25 },
                                }}
                                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:border-red-600/40 hover:bg-white/10"
                            >
                                <div className="mb-6 inline-flex rounded-2xl bg-red-600/10 p-4 text-3xl text-red-500 transition group-hover:scale-110">
                                    {item.icon}
                                </div>

                                <h4 className="text-2xl font-semibold">
                                    {item.title}
                                </h4>

                                <p className="mt-4 leading-8 text-zinc-400">
                                    {item.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Career Highlights */}

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-32 grid gap-8 md:grid-cols-3"
                >
                    <div className="rounded-3xl border border-white/10 bg-zinc-900/60 p-10 text-center backdrop-blur-xl">
                        <h2
                            style={{ fontFamily: "Bebas Neue" }}
                            className="text-6xl text-red-500"
                        >
                            2012
                        </h2>

                        <p className="mt-3 uppercase tracking-[0.25em] text-zinc-300">
                            Professional Journey Began
                        </p>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-zinc-900/60 p-10 text-center backdrop-blur-xl">
                        <h2
                            style={{ fontFamily: "Bebas Neue" }}
                            className="text-6xl text-red-500"
                        >
                            Africa
                        </h2>

                        <p className="mt-3 uppercase tracking-[0.25em] text-zinc-300">
                            Creative Influence
                        </p>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-zinc-900/60 p-10 text-center backdrop-blur-xl">
                        <h2
                            style={{ fontFamily: "Bebas Neue" }}
                            className="text-6xl text-red-500"
                        >
                            Elite
                        </h2>

                        <p className="mt-3 uppercase tracking-[0.25em] text-zinc-300">
                            Performance Leadership
                        </p>
                    </div>
                </motion.div>

                {/* Quote */}

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mx-auto mt-36 max-w-5xl text-center"
                >
                    <div className="text-6xl text-amber-300 md:text-8xl">“</div>

                    <h3
                        style={{ fontFamily: "Bebas Neue" }}
                        className="mt-4 text-4xl leading-tight md:text-6xl"
                    >
                        EVERY PERFORMANCE
                        <br />
                        TELLS A STORY.
                        <br />
                        EVERY MOVEMENT
                        <br />
                        LEAVES AN IMPACT.
                    </h3>

                    <p className="mt-8 text-lg uppercase tracking-[0.35em] text-zinc-500">
                        ONYEKWERE DAVID IKENNA
                    </p>
                </motion.div>

            </div>
        </section>
    );
};

export default Founder;