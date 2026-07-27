import { motion } from "framer-motion";

import GLO from "../../assets/logos/brands/GLO.jpg";
import KELLOGGS from "../../assets/logos/brands/KELLOGGS.jpg";
import MONSTER from "../../assets/logos/brands/MONSTER.jpg";
import PEPSI from "../../assets/logos/brands/PEPSI.jpg";
import REDBULL from "../../assets/logos/brands/REDBULL.jpg";

import CHOCO from "../../assets/logos/labels/CHOCO.jpg";
import EPG from "../../assets/logos/labels/E.png";
import EMPIRE from "../../assets/logos/labels/EMPIRE.jpg";
import GIRAN from "../../assets/logos/labels/GIRAN.jpg";
import MAVIN from "../../assets/logos/labels/MAVIN.jpg";
import YBNL from "../../assets/logos/labels/YBNL.jpg";

const artists = [
    "Asake",
    "Rema",
    "Olamide",
    "Young John",
    "Davido",
    "Burna Boy",
    "Ayra Starr",
    "Zlatan",
    "Seyi Vibez",
    "Blaqbonez",
    "Yemi Alade",
    "Wizkid"
];

const labels = [
    { image: YBNL, name: "YBNL Nation" },
    { image: CHOCO, name: "Chocolate City" },
    { image: GIRAN, name: "Giran Republic" },
    { image: MAVIN, name: "Mavin Records" },
    { image: EMPIRE, name: "Empire" },
    { image: EPG, name: "" },
];

const brands = [
    { image: GLO, name: "Glo" },
    { image: KELLOGGS, name: "Kellogg's" },
    { image: MONSTER, name: "Monster Energy" },
    { image: REDBULL, name: "Red Bull" },
    { image: PEPSI, name: "Pepsi" },
];

const Collaborations = () => {
    return (
        <section className="relative overflow-hidden bg-black py-28 md:py-36">

            <h1
                style={{ fontFamily: "Bebas Neue" }}
                className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 select-none text-[120px] uppercase tracking-[0.3em] text-white/5 md:text-[220px]"
            >
                TRUSTED
            </h1>

            <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .8 }}
                    viewport={{ once: true }}
                    className="mb-24 text-center"
                >
                    <p className="uppercase tracking-[0.45em] text-red-500">
                        Collaborations
                    </p>

                    <h2
                        style={{ fontFamily: "Bebas Neue" }}
                        className="mt-4 text-6xl leading-none md:text-8xl"
                    >
                        TRUSTED BY
                        <br />
                        AFRICA'S LEADING
                        <br />
                        CREATIVE PARTNERS
                    </h2>

                    <p className="mx-auto mt-8 max-w-3xl leading-8 text-zinc-400">
                        Collaborating with leading artists, labels, brands and creative
                        directors to deliver unforgettable performances and premium
                        entertainment experiences.
                    </p>
                </motion.div>

                {/* Artists */}

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .8 }}
                    viewport={{ once: true }}
                >
                    <h3
                        style={{ fontFamily: "Bebas Neue" }}
                        className="mb-10 text-center text-5xl"
                    >
                        Artists
                    </h3>

                    <div className="flex flex-wrap justify-center gap-4">
                        {artists.map((artist) => (
                            <motion.div
                                key={artist}
                                whileHover={{
                                    y: -6,
                                    scale: 1.04,
                                }}
                                className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-white backdrop-blur-xl transition hover:border-red-600 hover:bg-red-600/10"
                            >
                                {artist}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Labels */}

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .8 }}
                    viewport={{ once: true }}
                    className="mt-28"
                >
                    <h3
                        style={{ fontFamily: "Bebas Neue" }}
                        className="mb-12 text-center text-5xl"
                    >
                        Labels
                    </h3>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {labels.map((label) => (
                            <motion.div
                                key={label.name}
                                whileHover={{
                                    y: -10,
                                }}
                                className="group rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl transition-all duration-300 hover:border-red-600/40"
                            >
                                <img
                                    src={label.image}
                                    alt={label.name}
                                    className="mx-auto h-20 object-contain transition duration-300 group-hover:scale-110"
                                />

                                <p className="mt-8 text-center text-lg text-zinc-300">
                                    {label.name}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Brands */}

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-28"
                >
                    <h3
                        style={{ fontFamily: "Bebas Neue" }}
                        className="mb-12 text-center text-5xl"
                    >
                        Brands
                    </h3>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
                        {brands.map((brand) => (
                            <motion.div
                                key={brand.name}
                                whileHover={{
                                    y: -10,
                                    scale: 1.03,
                                }}
                                className="group flex h-48 items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-red-600/40 hover:bg-white/10"
                            >
                                <img
                                    src={brand.image}
                                    alt={brand.name}
                                    className="max-h-20 object-contain transition duration-300 group-hover:scale-110"
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Creative Directors */}

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-28"
                >
                    <h3
                        style={{ fontFamily: "Bebas Neue" }}
                        className="mb-10 text-center text-5xl"
                    >
                        Creative Directors
                    </h3>

                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            "TG Omori",
                            "Dir K",
                            "Dammy Twitch",
                            "Jyde Ajala",
                            "Clarence A. Peters",
                            "The Splendid Alien",
                            "Director X",
                            "Meji Alabi",
                        ].map((director) => (
                            <motion.div
                                key={director}
                                whileHover={{
                                    y: -6,
                                    scale: 1.04,
                                }}
                                className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-white backdrop-blur-xl transition-all duration-300 hover:border-red-600 hover:bg-red-600/10"
                            >
                                {director}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Closing Statement */}

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mx-auto mt-36 max-w-5xl rounded-[40px] border border-white/10 bg-gradient-to-r from-zinc-900 via-black to-zinc-900 px-8 py-20 text-center"
                >
                    <p className="uppercase tracking-[0.4em] text-red-500">
                        Excellence Through Collaboration
                    </p>

                    <h3
                        style={{ fontFamily: "Bebas Neue" }}
                        className="mt-6 text-5xl leading-none md:text-7xl"
                    >
                        WE DON'T JUST CREATE
                        <br />
                        PERFORMANCES.
                        <br />
                        WE CREATE
                        <br />
                        UNFORGETTABLE MOMENTS.
                    </h3>

                    <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-zinc-400">
                        Every collaboration reflects our commitment to creativity,
                        professionalism and excellence. From chart topping artists and
                        leading record labels to global brands and award winning creative
                        directors, TMGreatness continues to deliver performances that leave
                        lasting impressions.
                    </p>

                    <a
                        href="#contact"
                        className="mt-12 inline-flex rounded-full bg-red-600 px-10 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-red-700"
                    >
                        Work With TMGreatness
                    </a>
                </motion.div>

            </div>
        </section>
    );
};

export default Collaborations;