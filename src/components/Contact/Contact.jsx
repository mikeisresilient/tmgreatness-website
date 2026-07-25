import { motion } from "framer-motion";
import {
  FaInstagram,
  FaEnvelope,
  FaWhatsapp,
  FaYoutube,
  FaFacebook,
  FaTiktok,
} from "react-icons/fa6";

const contacts = [
  {
    icon: <FaWhatsapp size={30} />,
    title: "Nigeria",
    value: "+234 813 188 9021",
    link: "https://wa.me/2348131889021",
  },
  {
    icon: <FaWhatsapp size={30} />,
    title: "United Kingdom",
    value: "+44 7415 005373",
    link: "https://wa.me/447415005373",
  },
  {
    icon: <FaEnvelope size={30} />,
    title: "Management",
    value: "tmgreatnessng2020@gmail.com",
    link: "mailto:tmgreatnessng2020@gmail.com",
  },
  {
    icon: <FaEnvelope size={30} />,
    title: "Personal",
    value: "ikennadavid2@gmail.com",
    link: "mailto:ikennadavid2@gmail.com",
  },
];

const socials = [
  {
    icon: <FaInstagram size={28} />,
    title: "TMGreatness Instagram",
    username: "@tmgreatness",
    link: "https://instagram.com/tmgreatness",
  },
  {
    icon: <FaInstagram size={28} />,
    title: "Ikenna Instagram",
    username: "@1ikenna",
    link: "https://instagram.com/1ikenna",
  },
  {
    icon: <FaTiktok size={28} />,
    title: "TMGreatness TikTok",
    username: "@tmgreatness",
    link: "https://www.tiktok.com/@tmgreatness",
  },
  {
    icon: <FaTiktok size={28} />,
    title: "Ikenna TikTok",
    username: "@1ikenna",
    link: "https://www.tiktok.com/@1ikenna",
  },
  {
    icon: <FaYoutube size={28} />,
    title: "YouTube",
    username: "@1ikenna_",
    link: "https://www.youtube.com/@1ikenna_",
  },
  {
    icon: <FaFacebook size={28} />,
    title: "Facebook",
    username: "Ikenna David",
    link: "https://www.facebook.com/share/17MTohcxTg/",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-zinc-950 py-32 px-8"
    >
      <div className="mx-auto max-w-7xl">

        <p className="mb-4 text-center uppercase tracking-[0.4em] text-red-500">
          Contact
        </p>

        <h2
          style={{ fontFamily: "Bebas Neue" }}
          className="mb-6 text-center text-6xl leading-none md:text-8xl"
        >
          LET'S CREATE
          <br />
          SOMETHING
          <br />
          UNFORGETTABLE
        </h2>

        <p className="mx-auto mb-20 max-w-3xl text-center text-lg leading-8 text-zinc-400">
          Whether you're planning a concert, festival, wedding, corporate
          event, artist performance or creative production, TMGreatness is
          ready to bring your vision to life.
        </p>

        {/* Contact Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {contacts.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="group rounded-3xl border border-zinc-800 bg-black/40 p-10 backdrop-blur-sm transition-all duration-300 hover:border-red-500 hover:bg-black/60"
            >
              <div className="mb-8 text-red-500 transition duration-300 group-hover:scale-125">
                {item.icon}
              </div>

              <h3 className="mb-3 text-2xl font-bold">
                {item.title}
              </h3>

              <p className="break-words text-zinc-400 group-hover:text-white">
                {item.value}
              </p>
            </motion.a>
          ))}

        </div>

        {/* Social Media */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-24"
        >

          <h3 className="mb-10 text-center text-4xl font-bold">
            Connect With Us
          </h3>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {socials.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="group flex items-center gap-5 rounded-3xl border border-zinc-800 bg-black/40 p-6 transition-all duration-300 hover:border-red-500 hover:bg-black/60"
              >

                <div className="text-red-500 transition duration-300 group-hover:scale-125">
                  {social.icon}
                </div>

                <div>

                  <h4 className="font-semibold text-lg">
                    {social.title}
                  </h4>

                  <p className="text-zinc-400 group-hover:text-white">
                    {social.username}
                  </p>

                </div>

              </motion.a>
            ))}

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Contact;