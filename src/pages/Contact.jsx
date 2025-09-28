// src/pages/Contact.jsx
import React, { useState, useEffect } from 'react'

export default function Contact() {
  useEffect(() => {
    document.title = 'Gola Graphic — Contact'
  }, [])

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  function update(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function submit(e) {
    e.preventDefault()
    setSent(false)
    setError('')

    try {
      const res = await fetch('https://golagraphic.onrender.com/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()

      if (data.ok) {
        setSent(true)
        setForm({ name: '', email: '', message: '' })
      } else {
        setError(data.error || 'Failed to send message.')
      }
    } catch (err) {
      console.error(err)
      setError('Failed to send message.')
    }
  }

  return (
    <main className="pt-20 min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Let’s Make More <span className="text-brandRed">Noise</span> With Your Project!
          </h1>
          <p className="text-white/70 mt-3 mb-8">
            🚀 We reply within <span className="text-brandRed font-semibold">24 hours</span>.
          </p>

          <form onSubmit={submit} className="space-y-6">
            {sent && (
              <div className="bg-green-800 text-white p-3 rounded animate-bounce">
                ✅ Message sent.
              </div>
            )}
            {error && (
              <div className="bg-red-800 text-white p-3 rounded animate-bounce">
                ❌ {error}
              </div>
            )}

            <input name="name" value={form.name} onChange={update} placeholder="Name" required className="w-full p-3 rounded bg-white/5 text-white" />
            <input name="email" type="email" value={form.email} onChange={update} placeholder="Email" required className="w-full p-3 rounded bg-white/5 text-white" />
            <textarea name="message" rows="5" value={form.message} onChange={update} placeholder="Message" required className="w-full p-3 rounded bg-white/5 text-white"></textarea>

            <button type="submit" className="px-6 py-3 bg-brandRed rounded-lg text-white font-semibold">
              🚀 Send Message
            </button>
          </form>
        </div>

        <div className="space-y-6 text-white/80">
          <h3 className="text-2xl font-bold">Reach Us</h3>
          <p>Email: golaworks@gmail.com</p>
        </div>
      </div>
    </main>
  )
}
