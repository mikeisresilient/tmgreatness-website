import { motion } from "framer-motion";
import logo from "../../assets/logos/tmglogo.png";

import {
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaFacebook,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="border-t border-zinc-800 bg-black">
      <div className="mx-auto max-w-7xl px-8 py-20">
        <div className="grid gap-16 lg:grid-cols-4">
          {/* Brand */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img src={logo} alt="TMGreatness Logo" className="mb-6 w-36" />

            <p className="leading-8 text-zinc-400">
              Creating unforgettable performances through movement, storytelling
              and creativity for artists, brands, churches, corporate events and
              live audiences.
            </p>
          </motion.div>

          {/* Navigation */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="mb-6 text-xl font-bold">Navigation</h3>

            <div className="space-y-4">
              <a
                href="#"
                className="block text-zinc-400 transition hover:text-red-500"
              >
                Home
              </a>

              <a
                href="#about"
                className="block text-zinc-400 transition hover:text-red-500"
              >
                Journey
              </a>

              <a
                href="#portfolio"
                className="block text-zinc-400 transition hover:text-red-500"
              >
                Portfolio
              </a>

              <a
                href="#contact"
                className="block text-zinc-400 transition hover:text-red-500"
              >
                Contact
              </a>
            </div>
          </motion.div>

          {/* Contact */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="mb-6 text-xl font-bold">Contact</h3>

            <div className="space-y-5">
              <a
                href="https://wa.me/2348131889021"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-zinc-400 transition hover:text-red-500"
              >
                <FaWhatsapp className="mt-1 text-red-500" />

                <div>
                  <p className="font-semibold">Nigeria</p>

                  <p>+234 813 188 9021</p>
                </div>
              </a>

              <a
                href="https://wa.me/447415005373"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-zinc-400 transition hover:text-red-500"
              >
                <FaWhatsapp className="mt-1 text-red-500" />

                <div>
                  <p className="font-semibold">United Kingdom</p>

                  <p>+44 7415 005373</p>
                </div>
              </a>

              <a
                href="mailto:tmgreatnessng2020@gmail.com"
                className="flex items-start gap-3 text-zinc-400 transition hover:text-red-500"
              >
                <FaEnvelope className="mt-1 text-red-500" />

                <div>
                  <p className="font-semibold">Management</p>

                  <p className="break-all">tmgreatnessng2020@gmail.com</p>
                </div>
              </a>

              <a
                href="mailto:ikennadavid2@gmail.com"
                className="flex items-start gap-3 text-zinc-400 transition hover:text-red-500"
              >
                <FaEnvelope className="mt-1 text-red-500" />

                <div>
                  <p className="font-semibold">Personal</p>

                  <p>ikennadavid2@gmail.com</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Follow Us */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="mb-6 text-xl font-bold">Follow Us</h3>

            <div className="space-y-5">
              <a
                href="https://instagram.com/tmgreatness"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-zinc-400 transition hover:text-red-500"
              >
                <FaInstagram className="text-red-500" />
                <span>@tmgreatness</span>
              </a>

              <a
                href="https://instagram.com/1ikenna"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-zinc-400 transition hover:text-red-500"
              >
                <FaInstagram className="text-red-500" />
                <span>@1ikenna</span>
              </a>

              <a
                href="https://www.tiktok.com/@tmgreatness"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-zinc-400 transition hover:text-red-500"
              >
                <FaTiktok className="text-red-500" />
                <span>@tmgreatness</span>
              </a>

              <a
                href="https://www.tiktok.com/@1ikenna"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-zinc-400 transition hover:text-red-500"
              >
                <FaTiktok className="text-red-500" />
                <span>@1ikenna</span>
              </a>

              <a
                href="https://www.youtube.com/@1ikenna_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-zinc-400 transition hover:text-red-500"
              >
                <FaYoutube className="text-red-500" />
                <span>@1ikenna_</span>
              </a>

              <a
                href="https://www.facebook.com/share/17MTohcxTg/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-zinc-400 transition hover:text-red-500"
              >
                <FaFacebook className="text-red-500" />
                <span>Ikenna David</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-zinc-800 pt-8 text-center text-sm text-zinc-500 md:flex-row">
          <p>© {new Date().getFullYear()} TMGreatness. All Rights Reserved.</p>

          <p className="text-zinc-400">
            Designed & Developed by{" "}
            <a
              href="https://linktr.ee/mikeisresilient"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Michael Ege's portfolio and contact links"
              title="Visit Michael Ege's portfolio"
              style={{ color: "#ef4444" }}
              className="group inline-flex items-center gap-1 font-semibold cursor-pointer transition-all duration-300 hover:brightness-110 hover:underline hover:underline-offset-4 active:scale-95"
            >
              Michael Ege
              <span
                aria-hidden="true"
                className="text-xs opacity-80 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                ↗
              </span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
