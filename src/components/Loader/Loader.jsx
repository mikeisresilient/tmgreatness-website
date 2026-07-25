import { motion, AnimatePresence } from "framer-motion";

const Loader = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.6,
            },
          }}
          className="fixed inset-0 z-[9999999] flex items-center justify-center bg-black"
        >
          <div className="text-center">
            <motion.h1
              initial={{
                opacity: 0,
                scale: 0.8,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              style={{ fontFamily: "Bebas Neue" }}
              className="text-6xl tracking-[0.25em] text-white md:text-8xl"
            >
              TMGREATNESS
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.45,
                duration: 0.6,
              }}
              className="mt-4 text-sm uppercase tracking-[0.5em] text-zinc-400"
            >
              Crafting Musical Excellence
            </motion.p>

            <div className="mx-auto mt-12 h-[3px] w-72 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 1.4,
                  ease: "easeInOut",
                }}
                className="h-full rounded-full bg-red-600"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;