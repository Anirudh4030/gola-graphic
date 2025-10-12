/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const members = [
  { 
    name: 'Anirudh Rao', 
    role: 'Founder / Designer', 
    photo: '/team/Anirudh.jpg', 
    description: 'Loves to craft visual identities that pop off the screen.',
    linkedin: 'https://www.linkedin.com/in/anirudh-rao-427021270/',
    instagram: 'https://www.instagram.com/anirudh369.design/'
  },
  { 
    name: 'Pavan Kumar', 
    role: 'Co-Founder / Marketing Lead', 
    photo: '/team/vpk.jpg', 
    description: 'Mastermind behind our marketing strategies and campaigns.',
    linkedin: 'https://www.linkedin.com/in/vadithiyapavan/',
    instagram: 'https://www.instagram.com/itlumeepavanjadhav/'
  },
  { 
    name: 'Angara Balaji', 
    role: 'Marketing Strategist / Advisor', 
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

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardAnim = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Team() {
  return (
    <section className="bg-black min-h-screen py-20 px-6 text-center">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-5xl font-extrabold text-white tracking-widest">
          Our Team
        </h1>
        <p className="text-white/60 text-lg mt-2">
          Meet The Team Who Make All These Happen :)   
        </p>
      </div>

      {/* Team Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {members.map((member, i) => (
          <motion.div
            key={i}
            className="relative rounded-xl overflow-hidden cursor-pointer bg-neutral-900 group"
            variants={cardAnim}
          >
            {/* Image */}
            <img
              src={member.photo}
              alt={member.name}
              className="w-full h-80 object-cover filter grayscale group-hover:grayscale-0 transform group-hover:scale-105 transition-all duration-700 ease-out"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-500">
              <div className="flex flex-col items-center space-y-3">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-transparent text-white font-semibold text-sm border border-white px-4 py-1 rounded hover:bg-white hover:text-black transition-all"
                >
                  LinkedIn
                </a>
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-transparent text-white font-semibold text-sm border border-white px-4 py-1 rounded hover:bg-white hover:text-black transition-all"
                >
                  Instagram
                </a>
              </div>
            </div>

            {/* Role Text with Blur Background */}
            <div className="absolute bottom-3 left-3 right-3 flex justify-center">
              <div className="backdrop-blur-md bg-black/60 opacity-80 text-white text-sm font-medium px-3 py-2 rounded-lg shadow-md w-fit">
                {member.role}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
