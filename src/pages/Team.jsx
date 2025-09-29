/* eslint-disable no-unused-vars */
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const members = [
  { 
    name: 'Anirudh Rao', 
    role: 'Founder/Designer', 
    photo: '/team/Anirudh.jpg', 
    description: 'Loves to craft visual identities that pop off the screen.' 
  },
  { 
    name: 'Pavan Kumar', 
    role: 'Co-Founder/Marketing Lead', 
    photo: '/team/vpk.jpg', 
    description: 'Mastermind behind our marketing strategies and campaigns.' 
  },
  { 
    name: 'Angara Balaji', 
    role: 'Marketing Strategist/Advisor', 
    photo: '/team/avk.jpeg', 
    description: 'Connects brands with people through killer strategies.' 
  },
  { 
    name: 'Ashwith', 
    role: 'Web Developer', 
    description: 'Builds pixel-perfect websites with seamless interactions.', 
    photo: '/team/rinku.jpg'
  },
];

export default function Team() {
  return (
    <div className="relative w-full bg-black text-white">
      <h1 className="text-5xl md:text-6xl font-bold text-center py-12 tracking-wider">
        <br />Meet Team Gola
      </h1>

      <div className="relative">
        {members.map((member, i) => (
          <MemberSection key={i} member={member} index={i} />
        ))}
      </div>
    </div>
  );
}

function MemberSection({ member, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-20% 0px -20% 0px" }); // triggers slightly before center
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0, scale: 1 });
    } else {
      controls.start({ opacity: 0, y: 50, scale: 0.95 });
    }
  }, [isInView, controls]);

  const colors = ["#ff0000", "#00ffff", "#ff00ff", "#ffff00"];
  const bgColor = colors[index % colors.length];

  return (
    <section
      ref={ref}
      className="relative flex flex-col items-center justify-center min-h-screen px-6 overflow-hidden"
    >
      {/* Animated Background Shapes */}
      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-20 mix-blend-screen"
        style={{ backgroundColor: bgColor }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      />

      {/* Member Card */}
      <motion.div
        className="relative z-10 text-center max-w-xl"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={controls}
        transition={{ duration: 0.8 }}
      >
        <img
          src={member.photo}
          alt={member.name}
          className="h-64 w-64 md:h-72 md:w-72 mx-auto rounded-full object-cover border-4 border-white shadow-2xl hover:scale-105 transition-transform"
        />
        <h2 className="mt-6 text-3xl md:text-4xl font-bold">{member.name}</h2>
        <p className="text-xl text-white/80 mt-2">{member.role}</p>
        <p className="mt-4 text-white/70">{member.description}</p>
      </motion.div>
    </section>
  );
}
