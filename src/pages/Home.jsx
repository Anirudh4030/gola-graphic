// src/pages/Home.jsx
import React, { useEffect } from 'react'
import { useState } from "react";

function Stat({ end, suffix, label }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = end / (duration / 30); // update every 30ms
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
    <div>
      <div className="text-3xl font-bold text-brandRed">
        {count}
        {suffix}
      </div>
      <div className="text-white/80 text-sm">{label}</div>
    </div>
  );
}

export default function Home(){
  useEffect(()=>{ document.title = 'Gola Graphic — Home' }, [])

  return (
    <main className="pt-20"> {/* pt-20 leaves space for fixed navbar */}
{/* Hero */}
    <section className="relative h-screen flex items-center bg-black text-white overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/src/assets/videos/bg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center w-full z-10">
        {/* Left Side */}
        <div className="text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold">Gola Graphic</h1>
          <p className="mt-4 text-lg md:text-2xl text-white/90 animate-slideUp opacity-0">
            We Make Creative Noise 
          </p>
         <div className="mt-8 flex gap-4">
  <a
    href="#projects"
    className="px-6 py-3 bg-brandRed text-white rounded-md shadow hover:opacity-90 transition"
  >
    View Projects
  </a>
  <a
    href="/services"
    className="px-6 py-3 border border-white/10 text-white rounded-md hover:text-brandRed transition"
  >
    Services
  </a>
  <a
    href="https://www.instagram.com/golagraphic/"
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-3 border border-red-500 text-red-500 rounded-md hover:bg-red-700 hover:text-white transition"
  >
    Instagram
  </a>
</div>

        
          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-6 text-center">
            <Stat end={2} suffix="+ Years" label="Experience" />
            <Stat end={50} suffix="+" label="Clients" />
            <Stat end={500} suffix="+" label="Designs" />
          </div>
        </div>

        {/* Right Side - Video Tab */}
        <div className="relative flex justify-center">
          <div className="rounded-xl border-2 border-brandRed overflow-hidden shadow-lg transition hover:shadow-[0_0_25px_5px_rgba(255,0,0,0.6)]">
            <video
              className="w-full h-auto max-w-md rounded-xl"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/src/assets/videos/hns.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>


{/* Tools We Use */}
<section className="relative py-20 bg-black text-white overflow-hidden">
  {/* Background Image */}
  <img
    src="/src/assets/tools/tools-bg.jpg"
    alt="Tools Background"
    className="absolute top-0 left-0 w-full h-full object-contain z-0"
  />

  {/* Dark overlay for readability */}
  <div className="absolute top-0 left-0 w-full h-full bg-black/70
   z-0"></div>

  {/* Content */}
  <div className="relative max-w-6xl mx-auto px-6 z-10">
    {/* Title */}
    <h2 className="text-3xl font-bold text-center mb-12">We Dont Just Craft, 
      We tell Stories
    </h2>

    
  {/* Photoshop Toolbar on Left Corner */}
  <div className="absolute top-1/2 -left-20 transform -translate-y-1/2 z-20">
    <img
      src="/src/assets/tools/toolbar.png"
      alt="Photoshop Toolbar"
      className="w-20 h-auto opacity-80 hover:opacity-100 transition"
    />
  </div>

    <div className="grid md:grid-cols-2 gap-10 items-center">
      {/* Left - 2 Up & 2 Down */}
      <div className="flex flex-col gap-6">
        {/* Top Row */}
        <div className="flex justify-center gap-6">
          <div className="relative transition-transform duration-300 ease-out cursor-pointer hover:scale-125 hover:z-20">
            <img
              src="/src/assets/tools/3.png"
              alt="Tool 1"
              className="w-28 h-28 object-contain opacity-80 hover:opacity-100 transition duration-300 ease-out"
            />
          </div>
          <div className="relative transition-transform duration-300 ease-out cursor-pointer hover:scale-125 hover:z-20">
            <img
              src="/src/assets/tools/1.png"
              alt="Tool 2"
              className="w-28 h-28 object-contain opacity-80 hover:opacity-100 transition duration-300 ease-out"
            />
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex justify-center gap-6">
          <div className="relative transition-transform duration-300 ease-out cursor-pointer hover:scale-125 hover:z-20">
            <img
              src="/src/assets/tools/2.png"
              alt="Tool 3"
              className="w-28 h-28 object-contain opacity-80 hover:opacity-100 transition duration-300 ease-out"
            />
          </div>
          <div className="relative transition-transform duration-300 ease-out cursor-pointer hover:scale-125 hover:z-20">
            <img
              src="/src/assets/tools/4.png"
              alt="Tool 4"
              className="w-28 h-28 object-contain opacity-80 hover:opacity-100 transition duration-300 ease-out"
            />
          </div>
        </div>
      </div>

      {/* Right - Stable Image */}
      <div className="flex justify-center">
        <img
          src="/src/assets/tools/5.png"
          alt="Main Tool"
          className="w-64 h-64 object-contain opacity-90"
        />
      </div>
    </div>
  </div>
</section>



{/* Recent Projects */}
<section id="projects" className="py-16 bg-black">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-white">Recent Projects</h2>
    <p className="text-white/80 mt-2">
      Few of our latest poster & design work.
    </p>

    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {[
        {
          title: 'Tiranga',
          type: 'Independent Film / Poster',
          image: '/src/assets/projects/tiranga.jpg',
        },
        {
          title: 'Deggaralu-Dooralu',
          type: 'Shortfilm / Title-Poster design',
          image: '/src/assets/projects/DD.jpg',
        },
        {
          title: 'Hey Chikitha',
          type: ' Feature Film / Poster Campaign',
          image: '/src/assets/projects/hc.jpg',
        },
        {
          title: 'Kalavar Raja Kahani',
          type: 'Independent Film / Poster campaign',
          image: '/src/assets/projects/krk.jpg',
        },
      ].map((project, i) => (
        <div
          key={i}
          className="bg-white/5 p-4 rounded-lg hover:scale-[1.02] transition"
        >
          <div className="aspect-video w-full rounded overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
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


   {/* Team Section */}
<section className="py-16 bg-black">
  <div className="max-w-6xl mx-auto px-6">
    <h3 className="text-2xl font-bold text-white">Team Gola</h3>
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {[
        {
          name: 'Anirudh Rao',
          role: 'Founder/Designer',
          photo: '/src/assets/team/Anirudh.jpg',
          linkedin: 'https://www.linkedin.com/in/anirudh-rao-427021270/',
          instagram: 'https://www.instagram.com/anirudh369.design/',
        },
        {
          name: 'Pavan Kumar',
          role: 'Co-Founder/Marketing Lead',
          photo: '/src/assets/team/vpk.jpg',
          linkedin: 'https://www.linkedin.com/in/vadithiyapavan/',
          instagram: 'https://www.instagram.com/itlumeepavanjadhav/',
        },
        {
          name: 'Angara Balaji',
          role: 'Marketing Strategist/Advisor',
          photo: '/src/assets/team/avk.jpeg',
          linkedin: 'https://www.linkedin.com/in/balaji-angara/',
          instagram: 'https://www.instagram.com/tony_stark_13b/',
        },
        {
          name: 'Ashwith',
          role: 'Web Developer',
          photo: '/src/assets/team/rinku.jpg',
          linkedin: 'https://www.linkedin.com/in/ashwith-pabba-514a26254/',
          instagram: 'https://www.instagram.com/_iam._.jarvis_/',
        },
      ].map((member, i) => (
        <div key={i} className="bg-white/5 p-4 rounded-lg text-center">
          <img
            src={member.photo}
            alt={member.name}
            className="h-28 w-28 mx-auto rounded-full object-cover"
          />
          <div className="mt-3 font-semibold text-white">{member.name}</div>
          <div className="text-sm text-white/70">{member.role}</div>

          {/* Social Links */}
          <div className="mt-3 flex justify-center gap-3">
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 bg-black text-red-600 rounded hover:bg-white transition text-sm"
            >
              LinkedIn
            </a>
            <a
              href={member.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 bg-black text-white rounded hover:bg-red-700 transition text-sm"
            >
              Instagram
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Testimonials */}
<section className="py-16 bg-black">
  <div className="max-w-6xl mx-auto px-6">
    <h3 className="text-2xl font-bold text-white">Testimonials</h3>
    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        {
          name: 'BasiReddy Rana - Director ',
          photo: '/src/assets/testimonials/1.png',
          instagram: 'https://www.instagram.com/basireddy_rana/',
          testimonial: 'Amazing Concept Designs,Story telling at its peak',
        },
        {
          name: 'Garudavega Anji - Producer/DOP',
          photo: '/src/assets/testimonials/2.png',
          instagram: 'https://www.instagram.com/anjidop_garudavega/',
          testimonial: 'Great design, delivered on time.',
        },
        {
          name: 'Rohit Surisetty - Youtuber',
          photo: '/src/assets/testimonials/3.png',
          instagram: 'https://www.instagram.com/rohit_surisetty/',
          testimonial: 'Very Professional and affordable!',
        },
      ].map((client, i) => (
        <blockquote
          key={i}
          className="bg-white/5 p-6 rounded flex flex-col items-center text-center"
        >
          {/* Client Photo */}
          <img
            src={client.photo}
            alt={client.name}
            className="w-24 h-24 rounded-full object-cover mb-4"
          />

          {/* Testimonial Text */}
          <p className="italic text-white/90">"{client.testimonial}"</p>

          {/* Client Name */}
          <div className="mt-4 font-semibold text-white">{client.name}</div>

          {/* Instagram Link */}
          <a
            href={client.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-red-500 hover:text-white transition text-sm"
          >
            Instagram
          </a>
        </blockquote>
      ))}
    </div>
  </div>
</section>


     {/* Design Process (simple) */}
<section className="py-16 bg-black">
  <div className="max-w-6xl mx-auto px-6">
    <h3 className="text-2xl font-bold text-white">Design Process</h3>
    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white/5 p-6 rounded border border-red-500 hover:shadow-[0_0_20px_red] transition-shadow duration-300">
        <h4 className="font-semibold text-white">Discover The Story</h4>
        <p className="text-sm text-white/80 mt-2">Grasp the story you want to tell.</p>
      </div>
      <div className="bg-white/5 p-6 rounded border border-red-500 hover:shadow-[0_0_20px_red] transition-shadow duration-300">
        <h4 className="font-semibold text-white">Design The Ideology</h4>
        <p className="text-sm text-white/80 mt-2">Sketch, compose & visualise.</p>
      </div>
      <div className="bg-white/5 p-6 rounded border border-red-500 hover:shadow-[0_0_20px_red] transition-shadow duration-300">
        <h4 className="font-semibold text-white">Deliver The Design</h4>
        <p className="text-sm text-white/80 mt-2">Final assets and variations.</p>
      </div>
    </div>
  </div>
</section>

    </main>
  )
}
