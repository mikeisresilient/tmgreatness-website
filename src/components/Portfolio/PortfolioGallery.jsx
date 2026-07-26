import { useState, useEffect } from "react";
import portfolio from "../../data/portfolio";
import PortfolioCard from "./PortfolioCard";
import Lightbox from "./Lightbox";

const PortfolioGallery = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [direction, setDirection] = useState(0);

    const closeLightbox = () => setSelectedIndex(null);

    const showPrevious = () => {
        setDirection(-1);

        setSelectedIndex((prev) =>
            prev === 0 ? portfolio.length - 1 : prev - 1
        );
    };

    const showNext = () => {
        setDirection(1);

        setSelectedIndex((prev) =>
            prev === portfolio.length - 1 ? 0 : prev + 1
        );
    };

    useEffect(() => {
        if (selectedIndex !== null) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        const handleKeyDown = (e) => {
            if (selectedIndex === null) return;

            switch (e.key) {
                case "Escape":
                    closeLightbox();
                    break;

                case "ArrowLeft":
                    showPrevious();
                    break;

                case "ArrowRight":
                    showNext();
                    break;

                default:
                    break;
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = "auto";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectedIndex]);

    return (
        <section className="mt-24">
            {/* Heading */}
            <div className="mb-14 text-center">
                <h3
                    style={{ fontFamily: "Bebas Neue" }}
                    className="text-4xl uppercase tracking-wide text-white md:text-6xl"
                >
                    Selected Performances
                </h3>

                <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
                    A collection of live performances, concerts, productions and memorable
                    moments captured throughout the TMGreatness journey.
                </p>
            </div>

            {/* Gallery */}
            <div className="columns-1 gap-8 space-y-8 md:columns-2 xl:columns-3 2xl:columns-4">
                {portfolio.map((item, index) => (
                    <PortfolioCard
                        key={item.id}
                        image={item.image}
                        title={item.title}
                        category={item.category}
                        onClick={() => setSelectedIndex(index)}
                    />
                ))}
            </div>

            {/* Lightbox */}
            <Lightbox
                isOpen={selectedIndex !== null}
                portfolio={portfolio}
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
                direction={direction}
                onClose={closeLightbox}
                onPrevious={showPrevious}
                onNext={showNext}
            />
        </section>
    );
};

export default PortfolioGallery;