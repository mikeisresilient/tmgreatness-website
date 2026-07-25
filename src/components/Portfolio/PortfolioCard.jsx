import { motion } from "framer-motion";

const PortfolioCard = ({ image, title, category, onClick }) => {
    return (
        <motion.div
            onClick={onClick}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="group relative mb-6 cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-zinc-900"
        >
            {/* Image */}
            <div className="overflow-hidden rounded-3xl">
                <img
                    src={image}
                    alt={title || "TMGreatness Performance"}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100" />

            {/* Red Glow */}
            <div className="absolute inset-0 rounded-3xl ring-2 ring-red-600/0 transition-all duration-500 group-hover:ring-red-600/60" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 translate-y-8 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {category && (
                    <span className="inline-block rounded-full bg-red-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white">
                        {category}
                    </span>
                )}

                {title && (
                    <h3
                        style={{ fontFamily: "Bebas Neue" }}
                        className="mt-4 text-3xl uppercase tracking-wide text-white"
                    >
                        {title}
                    </h3>
                )}
            </div>
        </motion.div>
    );
};

export default PortfolioCard;