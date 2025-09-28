// src/pages/Contact.jsx
import React, { useState, useEffect } from 'react'

export default function Contact() {
  useEffect(() => {
    document.title = 'Gola Graphic — Contact'
  }, [])

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(null)

  function update(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function submit(e) {
    e.preventDefault()
    setSent(false)
    setError(null)

    try {
      const res = await fetch('https://golagraphic.onrender.com/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()
      if (data.ok) {
        setSent(true)
        setForm({ name: '', email: '', message: '' })
      } else {
        setError(data.error || '❌ Failed to send message. Try again later.')
      }
    } catch (err) {
      setError('❌ Failed to send message. Try again later.')
      console.error(err)
    }
  }

  return (
    <main className="pt-20 min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Left - Form */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Let’s Make More <span className="text-brandRed">Noise</span> With Your Project!
          </h1>
          <p className="text-white/70 mt-3 mb-8">
            🚀 We reply within <span className="text-brandRed font-semibold">24 hours</span>.  
            Making creative noise, itself a marketing❤️
          </p>

          <form onSubmit={submit} className="space-y-6">
            {sent && (
              <div className="bg-green-800 text-white p-3 rounded animate-bounce">
                ✅ Message sent.
              </div>
            )}
            {error && (
              <div className="bg-red-800 text-white p-3 rounded animate-bounce">
                {error}
              </div>
            )}

            {/* Name */}
            <div className="relative">
              <input
                name="name"
                value={form.name}
                onChange={update}
                required
                placeholder=" "
                className="peer w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-brandRed focus:shadow-[0_0_15px_rgba(255,0,0,0.6)] transition"
              />
              <label className="absolute left-4 top-3 text-white/50 peer-placeholder-shown:top-3 peer-placeholder-shown:text-white/50 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-brandRed transition">
                Name
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={update}
                required
                placeholder=" "
                className="peer w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-brandRed focus:shadow-[0_0_15px_rgba(255,0,0,0.6)] transition"
              />
              <label className="absolute left-4 top-3 text-white/50 peer-placeholder-shown:top-3 peer-placeholder-shown:text-white/50 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-brandRed transition">
                Email
              </label>
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={update}
                required
                placeholder=" "
                className="peer w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-brandRed focus:shadow-[0_0_15px_rgba(255,0,0,0.6)] transition resize-none"
              />
              <label className="absolute left-4 top-3 text-white/50 peer-placeholder-shown:top-3 peer-placeholder-shown:text-white/50 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-brandRed transition">
                Message
              </label>
            </div>

            {/* Checkbox */}
            <div className="flex items-center gap-2">
              <input type="checkbox" id="consult" className="accent-brandRed" />
              <label htmlFor="consult" className="text-sm text-white/70">
                I want a free design consultation 🎨
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-brandRed to-red-600 rounded-lg text-white font-semibold shadow-lg hover:scale-105 hover:shadow-[0_0_25px_rgba(255,0,0,0.8)] transition-transform duration-300"
            >
              🚀 Send Message
            </button>
          </form>
        </div>

        {/* Right - Contact Info */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold">Reach Us</h3>
          <p className="text-white/70">Let’s collaborate and bring your vision to life.</p>

          <div className="space-y-4 text-white/80">
            <div>
              <span className="font-semibold text-brandRed">📧 Email:</span> golaworks@gmail.com
            </div>
            <div>
              <span className="font-semibold text-brandRed">📸 Instagram:</span>{' '}
              <a href="https://instagram.com/golagraphic" target="_blank" rel="noopener noreferrer" className="hover:text-brandRed">
                @golagraphic
              </a>
            </div>
            <div>
              <span className="font-semibold text-brandRed">💼 LinkedIn:</span>{' '}
              <a href="https://www.linkedin.com/company/gola-graphic/" target="_blank" rel="noopener noreferrer" className="hover:text-brandRed">
                /golagraphic
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
