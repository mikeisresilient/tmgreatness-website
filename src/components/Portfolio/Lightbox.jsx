import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { createPortal } from "react-dom";
import { useRef } from "react";

const imageVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 220 : -220,
    opacity: 0,
    scale: 0.97,
  }),

  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },

  exit: (direction) => ({
    x: direction > 0 ? -220 : 220,
    opacity: 0,
    scale: 0.97,
  }),
};

const backdropVariants = {
  hidden: {
    opacity: 0,
    backdropFilter: "blur(0px)",
  },

  visible: {
    opacity: 1,
    backdropFilter: "blur(10px)",
  },

  exit: {
    opacity: 0,
    backdropFilter: "blur(0px)",
  },
};

const Lightbox = ({
  isOpen,
  portfolio,
  selectedIndex,
  setSelectedIndex,
  direction,
  onClose,
  onPrevious,
  onNext,
}) => {
  const current = selectedIndex !== null ? portfolio[selectedIndex] : null;

  const touchStartX = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;

    const distance = touchStartX.current - e.changedTouches[0].clientX;

    if (Math.abs(distance) > 60) {
      if (distance > 0) {
        onNext();
      } else {
        onPrevious();
      }
    }

    touchStartX.current = null;
  };

  const THUMBNAIL_COUNT = 5;

  const visibleThumbnails = (() => {
    if (!portfolio.length || selectedIndex === null) return [];

    const half = Math.floor(THUMBNAIL_COUNT / 2);

    let start = selectedIndex - half;
    let end = selectedIndex + half + 1;

    if (start < 0) {
      end += Math.abs(start);
      start = 0;
    }

    if (end > portfolio.length) {
      start -= end - portfolio.length;
      end = portfolio.length;
    }

    start = Math.max(0, start);

    return portfolio.slice(start, end).map((item, index) => ({
      ...item,
      actualIndex: start + index,
    }));
  })();

  return createPortal(
    <AnimatePresence mode="wait">
      {isOpen && current && (
        <motion.div
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.35 }}
          className="group fixed inset-0 z-[999999] bg-black/95"
        >
          {/* Click outside to close */}
          <div className="absolute inset-0" onClick={onClose} />

          {/* Close Button */}
          <motion.button
            whileHover={{
              rotate: 90,
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={onClose}
            className="fixed right-6 top-6 z-[1000000] rounded-full border border-white/10 bg-black/60 p-3 text-white backdrop-blur-xl transition-colors hover:bg-red-600 md:right-8 md:top-8"
          >
            <X size={28} />
          </motion.button>

          {/* Main Image Area */}
          <div
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="relative flex h-full items-center justify-center px-6 py-16 md:px-24"
          >
            {/* Previous */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={onPrevious}
              className="absolute left-3 z-30 rounded-full border border-white/10 bg-black/60 p-3 text-white backdrop-blur-xl transition-all duration-300 md:left-6 md:opacity-0 md:group-hover:opacity-100"
            >
              <ChevronLeft size={30} />
            </motion.button>

            {/* Animated Image */}
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.img
                key={current.image}
                custom={direction}
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 28,
                }}
                src={current.image}
                alt={current.title}
                className="max-h-[78vh] max-w-full rounded-3xl object-contain shadow-[0_30px_80px_rgba(0,0,0,0.75)]"
              />
            </AnimatePresence>

            {/* Next */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={onNext}
              className="absolute right-3 z-30 rounded-full border border-white/10 bg-black/60 p-3 text-white backdrop-blur-xl transition-all duration-300 md:right-6 md:opacity-0 md:group-hover:opacity-100"
            >
              <ChevronRight size={30} />
            </motion.button>
          </div>

          {/* Counter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed bottom-52 left-1/2 z-[1000000] -translate-x-1/2 rounded-full border border-white/10 bg-black/60 px-5 py-2 text-sm font-medium text-white backdrop-blur-xl"
          >
            {selectedIndex + 1} / {portfolio.length}
          </motion.div>

          {/* Caption */}
          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 15,
            }}
            transition={{
              delay: 0.08,
            }}
            className="fixed bottom-32 left-1/2 z-[1000000] w-[90%] max-w-xl -translate-x-1/2 rounded-3xl border border-white/10 bg-black/60 px-8 py-5 text-center backdrop-blur-2xl"
          >
            <h3
              style={{
                fontFamily: "Bebas Neue",
              }}
              className="text-3xl uppercase tracking-wide text-white md:text-4xl"
            >
              {current.title}
            </h3>

            <p className="mt-2 text-sm uppercase tracking-[0.35em] text-zinc-400">
              {current.category}
            </p>
          </motion.div>

          {/* Filmstrip */}
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 25,
            }}
            className="fixed bottom-4 left-1/2 z-[1000000] -translate-x-1/2 px-4"
          >
            <div className="flex items-center gap-3 rounded-3xl border border-white/10 bg-black/60 px-4 py-3 backdrop-blur-2xl">
              {visibleThumbnails.map((item) => (
                <motion.button
                  key={item.id}
                  layout
                  whileHover={{
                    scale: 1.08,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                  }}
                  onClick={() => setSelectedIndex(item.actualIndex)}
                  className={`overflow-hidden rounded-2xl transition-all duration-300 ${
                    item.actualIndex === selectedIndex
                      ? "scale-110 ring-2 ring-red-500"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-20 w-32 object-cover"
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
};

export default Lightbox;
