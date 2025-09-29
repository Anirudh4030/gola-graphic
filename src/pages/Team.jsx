/* eslint-disable no-unused-vars */
import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Linkedin, Instagram } from "lucide-react";

const members = [
  {
    name: "Anirudh Rao",
    role: "Founder / Designer",
    photo: "/team/Anirudh.jpg",
    intro: "Hi, I'm Anirudh, I craft posters and visuals that pop.",
    linkedin: "https://www.linkedin.com/in/anirudh-rao-427021270/",
    instagram: "https://www.instagram.com/anirudh369.design/",
  },
  {
    name: "Pavan Kumar",
    role: "Co-Founder / Marketing Lead",
    photo: "/team/vpk.jpg",
    intro: "Hi, I'm Pavan, turning ideas into viral campaigns.",
    linkedin: "https://www.linkedin.com/in/vadithiyapavan/",
    instagram: "https://www.instagram.com/itlumeepavanjadhav/",
  },
  {
    name: "Angara Balaji",
    role: "Marketing Strategist / Advisor",
    photo: "/team/avk.jpeg",
    intro: "Hi, I'm Balaji, connecting brands with people creatively.",
    linkedin: "https://www.linkedin.com/in/balaji-angara/",
    instagram: "https://www.instagram.com/tony_stark_13b/",
  },
  {
    name: "Ashwith",
    role: "Web Developer",
    photo: "/team/rinku.jpg",
    intro: "Hi, I'm Ashwith, I build smooth, pixel-perfect websites.",
    linkedin: "https://www.linkedin.com/in/ashwith-pabba-514a26254/",
    instagram: "https://www.instagram.com/_iam._.jarvis_/",
  },
];

export default function Team() {
  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-x-hidden">
      <h1 className="text-5xl md:text-6xl font-bold text-center py-12 tracking-wider">
        Meet Team Gola
      </h1>

      <div className="relative flex flex-col items-center gap-32 py-12">
        {members.map((member, index) => (
          <InteractiveCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
}

function InteractiveCard({ member }) {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { margin: "-30% 0px -30% 0px" });

  // ✅ Scroll animations handled safely in useEffect
  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0, scale: 1 });
    } else {
      controls.start({ opacity: 0, y: 50, scale: 0.9 });
    }
  }, [isInView, controls]);

  // Mouse move tilt
  const handleMouseMove = (e) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    const rotateX = ((y - midY) / midY) * 10;
    const rotateY = ((x - midX) / midX) * -10;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    const card = ref.current;
    if (!card) return;
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <motion.div
      ref={ref}
      className="relative max-w-md w-full cursor-pointer perspective"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={controls}
      transition={{ duration: 0.7 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Card Background */}
      <div className="relative bg-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-6 overflow-hidden shadow-2xl hover:shadow-[0_0_60px_rgba(255,0,0,0.5)] transition-all duration-500">
        {/* Floating Shapes */}
        <motion.div
          className="absolute w-48 h-48 rounded-full bg-red-500/20 top-[-20px] left-[-20px] mix-blend-screen"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        />
        <motion.div
          className="absolute w-32 h-32 rounded-full bg-white/20 bottom-[-20px] right-[-20px] mix-blend-screen"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        />

        {/* Profile Image */}
        <div className="relative z-10">
          <img
            src={member.photo}
            alt={member.name}
            className="h-56 w-56 mx-auto rounded-full object-cover border-4 border-white shadow-xl hover:scale-105 transition-transform duration-300"
          />

          {/* Hover overlay */}
          <motion.div
            className="absolute inset-0 bg-black/80 rounded-3xl flex flex-col items-center justify-center p-6 text-center opacity-0 hover:opacity-100 transition-opacity duration-300"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <h2 className="text-2xl font-bold">{member.name}</h2>
            <p className="mt-2 text-white/80">{member.role}</p>
            <p className="mt-2 text-white/60 text-sm">{member.intro}</p>
            <div className="flex gap-4 mt-4">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={member.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition"
              >
                <Instagram size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
