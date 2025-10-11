// src/pages/Home.jsx
import React, { useEffect } from 'react'
import { useState } from "react";

function Stat({ end, suffix, label }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = end / (duration / 30);
    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(counter);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);

    return () => clearInterval(counter);
  }, [end]);

  return (
    <div className="flex flex-col items-center md:items-start">
      <div className="text-2xl sm:text-3xl font-bold text-brandRed">
        {count}{suffix}
      </div>
      <div className="text-white/80 text-sm sm:text-base">{label}</div>
    </div>
  );
}

export default function Home(){
  useEffect(()=>{ document.title = 'Gola Graphic | Design Studio' }, [])

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-black text-white overflow-hidden">
        {/* Background Video */}
       <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay loop muted playsInline
        >
          <source src="/videos/bg-video.mp4" type="video/mp4" />
        </video> 
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0"></div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full z-10">
          {/* Left Side */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold">Gola Graphic</h1>
            <p className="mt-4 text-base sm:text-lg md:text-2xl text-white/90 animate-slideUp opacity-0">
              We Make Creative Noise
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="#projects" className="px-5 py-3 bg-brandRed text-white rounded-md shadow hover:opacity-90 transition text-sm sm:text-base">View Projects</a>
              <a href="/services" className="px-5 py-3 border border-white/10 text-white rounded-md hover:text-brandRed transition text-sm sm:text-base">Services</a>
              <a href="https://www.instagram.com/golagraphic/" target="_blank" rel="noopener noreferrer" className="px-5 py-3 border border-red-500 text-red-500 rounded-md hover:bg-red-700 hover:text-white transition text-sm sm:text-base">Instagram</a>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-4 text-center md:text-left">
              <Stat end={2} suffix="+ Years" label="Experience" />
              <Stat end={50} suffix="+" label="Clients" />
              <Stat end={500} suffix="+" label="Designs" />
            </div>
          </div>

          {/* Right Side */}
<div className="relative flex justify-center">
  <div className="rounded-xl border-2 border-brandRed overflow-hidden shadow-lg hover:shadow-[0_0_25px_5px_rgba(255,0,0,0.6)] transition w-full max-w-md aspect-[4/5]">
    <video
      className="w-full h-full object-contain rounded-xl"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src="/videos/hns.mp4" type="video/mp4" />
    </video>
  </div>
</div>

        </div>
        
      </section>

      {/* Tools We Use */}
      <section className="relative py-16 sm:py-20 bg-black text-white overflow-hidden">
        <img src="/tools/tools-bg.jpg" alt="Tools Background" className="absolute top-0 left-0 w-full h-full object-cover z-0" />
        <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-0"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 z-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-12">We Don’t Just Craft, We Tell Stories</h2>

          {/* Photoshop Toolbar */}


          <div className="flex flex-col items-center justify-center text-center w-full py-10">

            {/* Tools Grid */}
{/* Tools Grid */}
{/* Photoshop Toolbar */}
<div className="flex items-center justify-center w-full">
  <div className="flex flex-col items-center justify-center gap-6">
    <div className="flex justify-center gap-6 flex-wrap">
      {["3.png", "1.png"].map((img, i) => (
        <img
          key={i}
          src={`/tools/${img}`}
          alt="Tool"
          className="w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28 object-contain opacity-80 hover:opacity-100 transform hover:scale-125 transition duration-300"
        />
      ))}
    </div>
    <div className="flex justify-center gap-6 flex-wrap">
      {["2.png", "4.png"].map((img, i) => (
        <img
          key={i}
          src={`/tools/${img}`}
          alt="Tool"
          className="w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28 object-contain opacity-80 hover:opacity-100 transform hover:scale-125 transition duration-300"
        />
      ))}
    </div>
  </div>
</div>



            {/* Main Tool */}

          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section id="projects" className="py-12 sm:py-16 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Recent Projects</h2>
          <p className="text-white/80 mt-2 text-sm sm:text-base">Few of our latest poster & design work.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: 'Tiranga', type: 'Independent Film / Poster', image: '/projects/tiranga.jpg' },
              { title: 'Deggaralu-Dooralu', type: 'Shortfilm / Title-Poster design', image: '/projects/DD.jpg' },
              { title: 'Hey Chikitha', type: 'Feature Film / Poster Campaign', image: '/projects/hc.jpg' },
              { title: 'Kalavar Raja Kahani', type: 'Independent Film / Poster campaign', image: '/projects/krk.jpg' },
            ].map((project, i) => (
              <div key={i} className="bg-white/5 p-4 rounded-lg hover:scale-[1.02] transition">
                <div className="aspect-video w-full rounded overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <div className="mt-3">
                  <div className="font-semibold text-white">{project.title}</div>
                  <div className="text-sm text-white/70">{project.type}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="Team" className="py-12 sm:py-16 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h3 className="text-2xl font-bold text-white">Team Gola</h3>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Anirudh Rao', role: 'Founder/Designer', photo: '/team/Anirudh.jpg', linkedin: 'https://www.linkedin.com/in/anirudh-rao-427021270/', instagram: 'https://www.instagram.com/anirudh369.design/' },
              { name: 'Pavan Kumar', role: 'Co-Founder/Marketing Lead', photo: '/team/vpk.jpg', linkedin: 'https://www.linkedin.com/in/vadithiyapavan/', instagram: 'https://www.instagram.com/itlumeepavanjadhav/' },
              { name: 'Angara Balaji', role: 'Marketing Strategist/Advisor', photo: '/team/avk.jpeg', linkedin: 'https://www.linkedin.com/in/balaji-angara/', instagram: 'https://www.instagram.com/tony_stark_13b/' },
              { name: 'Ashwith', role: 'Web Developer', photo: '/team/rinku.jpg', linkedin: 'https://www.linkedin.com/in/ashwith-pabba-514a26254/', instagram: 'https://www.instagram.com/_iam._.jarvis_/' },
            ].map((member, i) => (
              <div key={i} className="bg-white/5 p-4 rounded-lg text-center">
                <img src={member.photo} alt={member.name} className="h-24 w-24 mx-auto rounded-full object-cover" />
                <div className="mt-3 font-semibold text-white">{member.name}</div>
                <div className="text-sm text-white/70">{member.role}</div>
                <div className="mt-3 flex justify-center gap-3">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-black text-red-600 rounded hover:bg-white transition text-sm">LinkedIn</a>
                  <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-black text-white rounded hover:bg-red-700 transition text-sm">Instagram</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h3 className="text-2xl font-bold text-white">Testimonials</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'BasiReddy Rana - Director ', photo: '/testimonials/1.png', instagram: 'https://www.instagram.com/basireddy_rana/', testimonial: 'Amazing Concept Designs, Story telling at its peak' },
              { name: 'Garudavega Anji - Producer/DOP', photo: '/testimonials/2.png', instagram: 'https://www.instagram.com/anjidop_garudavega/', testimonial: 'Great design, delivered on time.' },
              { name: 'Rohit Surisetty - Youtuber', photo: '/testimonials/3.png', instagram: 'https://www.instagram.com/rohit_surisetty/', testimonial: 'Very Professional and affordable!' },
            ].map((client, i) => (
              <blockquote key={i} className="bg-white/5 p-6 rounded flex flex-col items-center text-center">
                <img src={client.photo} alt={client.name} className="w-20 h-20 rounded-full object-cover mb-4" />
                <p className="italic text-white/90 text-sm sm:text-base">"{client.testimonial}"</p>
                <div className="mt-4 font-semibold text-white text-sm sm:text-base">{client.name}</div>
                <a href={client.instagram} target="_blank" rel="noopener noreferrer" className="mt-2 text-red-500 hover:text-white transition text-xs sm:text-sm">Instagram</a>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-12 sm:py-16 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h3 className="text-2xl font-bold text-white">Design Process</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Discover The Story', desc: 'Grasp the story you want to tell.' },
              { title: 'Design The Ideology', desc: 'Sketch, compose & visualise.' },
              { title: 'Deliver The Design', desc: 'Final assets and variations.' },
            ].map((step, i) => (
              <div key={i} className="bg-white/5 p-6 rounded border border-red-500 hover:shadow-[0_0_20px_red] transition">
                <h4 className="font-semibold text-white">{step.title}</h4>
                <p className="text-sm text-white/80 mt-2">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
