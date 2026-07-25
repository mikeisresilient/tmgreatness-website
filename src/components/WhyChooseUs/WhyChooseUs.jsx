import { motion } from "framer-motion";
import {
    FaFire,
    FaUsers,
    FaGlobeAfrica,
    FaStar,
} from "react-icons/fa";

const features = [
    {
        icon: <FaFire size={36} />,
        title: "World Class Choreography",
        description:
            "Creative performances designed to captivate audiences and elevate every event.",
    },
    {
        icon: <FaUsers size={36} />,
        title: "Professional Team",
        description:
            "Experienced dancers committed to excellence, discipline and unforgettable performances.",
    },
    {
        icon: <FaGlobeAfrica size={36} />,
        title: "African Excellence",
        description:
            "Celebrating African culture while delivering performances for global audiences.",
    },
    {
        icon: <FaStar size={36} />,
        title: "Premium Experience",
        description:
            "From rehearsals to the final show, every detail is handled with professionalism.",
    },
];

const WhyChooseUs = () => {
    return (
        <section className="bg-zinc-950 py-32 px-8">
            <div className="max-w-7xl mx-auto">

                <p className="text-center uppercase tracking-[0.4em] text-red-500 mb-4">
                    Why TMGreatness
                </p>

                <h2
                    style={{ fontFamily: "Bebas Neue" }}
                    className="text-center text-6xl md:text-8xl mb-20"
                >
                    MORE THAN DANCE
                </h2>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.15,
                            }}
                            whileHover={{ y: -10 }}
                            className="group rounded-3xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm p-8 transition-all duration-500 hover:-translate-y-2 hover:border-red-500 hover:bg-zinc-900"
                        >
                            <div className="mb-6 text-red-500 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6">
                                {feature.icon}
                            </div>

                            <h3 className="mb-4 text-2xl font-bold transition-colors duration-300 group-hover:text-red-500">
                                {feature.title}
                            </h3>

                            <p className="leading-7 text-zinc-400 transition-colors duration-300 group-hover:text-zinc-200">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default WhyChooseUs;