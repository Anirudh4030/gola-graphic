/* eslint-disable no-unused-vars */
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const members = [
  { 
    name: 'Anirudh Rao', 
    role: 'Founder/Designer', 
    photo: '/team/Anirudh.jpg', 
    description: 'Loves to craft visual identities that pop off the screen.',
    linkedin: 'https://www.linkedin.com/in/anirudh-rao-427021270/',
    instagram: 'https://www.instagram.com/anirudh369.design/'
  },
  { 
    name: 'Pavan Kumar', 
    role: 'Co-Founder/Marketing Lead', 
    photo: '/team/vpk.jpg', 
    description: 'Mastermind behind our marketing strategies and campaigns.',
    linkedin: 'https://www.linkedin.com/in/vadithiyapavan/',
    instagram: 'https://www.instagram.com/itlumeepavanjadhav/'
  },
  { 
    name: 'Angara Balaji', 
    role: 'Marketing Strategist/Advisor', 
    photo: '/team/avk.jpeg', 
    description: 'Connects brands with people through killer strategies.',
    linkedin: 'https://www.linkedin.com/in/balaji-angara/',
    instagram: 'https://www.instagram.com/tony_stark_13b/'
  },
  { 
    name: 'Ashwith', 
    role: 'Web Developer', 
    photo: '/team/rinku.jpg',
    description: 'Builds pixel-perfect websites with seamless interactions.',
    linkedin: 'https://www.linkedin.com/in/ashwith-pabba-514a26254/',
    instagram: 'https://www.instagram.com/_iam._.jarvis_/'
  },
];

export default function Team() {
  return (
    <div className="relative w-full bg-black text-white">
      {/* Added padding-top to avoid heading going under navbar */}
      <h1 className="text-5xl md:text-6xl font-bold text-center pt-28 pb-12 tracking-wider">
        Meet Team Gola
      </h1>

      {/* Reduced vertical space between members */}
      <div className="relative flex flex-col space-y-16">
        {members.map((member, i) => (
          <MemberSection key={i} member={member} index={i} />
        ))}
      </div>
    </div>
  );
}

function MemberSection({ member, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-20% 0px -20% 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [isInView, controls]);

  const bgColors = ["#ff0000", "#00ffff", "#ff00ff", "#ffff00"];
  const bgColor = bgColors[index % bgColors.length];

  return (
    <section
      ref={ref}
      className="relative flex flex-col items-center justify-center min-h-screen px-6"
    >
      {/* Subtle Animated Background */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-10 blur-3xl"
        style={{ backgroundColor: bgColor }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      />

      {/* Member Card */}
      <motion.div
        className="relative z-10 text-center max-w-sm md:max-w-md bg-white/5 p-6 rounded-2xl shadow-xl backdrop-blur-sm"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.8 }}
      >
        <img
          src={member.photo}
          alt={member.name}
          className="h-64 w-64 md:h-72 md:w-72 mx-auto rounded-full object-cover border-4 border-white shadow-lg hover:scale-105 transition-transform duration-300"
        />
        <h2 className="mt-6 text-3xl md:text-4xl font-bold">{member.name}</h2>
        <p className="text-xl text-white/80 mt-2">{member.role}</p>
        <p className="mt-4 text-white/70">{member.description}</p>

        {/* Social Links */}
        <div className="mt-6 flex justify-center gap-4">
          <a 
            href={member.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 bg-red-500 rounded text-white font-medium hover:bg-red-900 transition"
          >
            LinkedIn
          </a>
          <a 
            href={member.instagram} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 bg-red-500 rounded text-white font-medium hover:bg-red-900 transition"
          >
            Instagram
          </a>
        </div>
      </motion.div>
    </section>
  );
}
