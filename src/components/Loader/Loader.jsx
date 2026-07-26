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
              className="
                px-4
                text-center
                text-4xl
                tracking-[0.12em]
                text-white
                sm:text-5xl
                sm:tracking-[0.18em]
                md:text-7xl
                md:tracking-[0.22em]
                lg:text-8xl
                lg:tracking-[0.25em]
              "
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
              className="
                mt-4
                px-4
                text-center
                text-[10px]
                uppercase
                tracking-[0.28em]
                text-zinc-400
                sm:text-xs
                sm:tracking-[0.4em]
                md:text-sm
                md:tracking-[0.5em]
              "
            >
              Crafting Musical Excellence
            </motion.p>

            <div className="mx-auto mt-10 h-[3px] w-56 overflow-hidden rounded-full bg-white/10 sm:w-64 md:mt-12 md:w-72">
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