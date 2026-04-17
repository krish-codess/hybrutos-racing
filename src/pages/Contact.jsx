import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const form = e.target
    const formData = new FormData(form)
    
    // Web3Forms automatically sends an email to the registered address associated with the access key below
    // Create your free access key at https://web3forms.com/
    formData.append('access_key', 'YOUR_ACCESS_KEY_HERE')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <div className="pt-32 pb-24 min-h-[80vh] flex items-center justify-center px-4" id="contact-page">
      <div className="card w-full max-w-xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-[var(--accent)] font-semibold text-sm tracking-widest uppercase mb-3 block">Get in Touch</span>
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4 font-inter tracking-tight">Contact Us</h1>
          <p className="text-[var(--text-secondary)] text-md leading-relaxed">
            Interested in supporting the next generation of automotive engineers? Send us a message and we'll get back to you.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium text-[var(--text-secondary)]">Full Name</label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              required 
              className="w-full bg-[var(--bg-surface)] border border-[var(--card-border)] rounded-xl p-3.5 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-all duration-300"
              placeholder="John Doe"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-[var(--text-secondary)]">Email Address</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              required 
              className="w-full bg-[var(--bg-surface)] border border-[var(--card-border)] rounded-xl p-3.5 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-all duration-300"
              placeholder="john@example.com"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium text-[var(--text-secondary)]">Your Message</label>
            <textarea 
              name="message" 
              id="message" 
              rows="5" 
              required 
              className="w-full bg-[var(--bg-surface)] border border-[var(--card-border)] rounded-xl p-3.5 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-all duration-300 resize-none"
              placeholder="How can we partner together?"
            ></textarea>
            {/* Honeypot field to prevent spam */}
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
          </div>

          <button 
            type="submit" 
            disabled={status === 'sending'}
            className="btn-primary mt-2 flex items-center justify-center gap-2 rounded-xl py-3.5 hover:opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status === 'sending' ? 'Sending Message...' : 'Send Message'}
            {status !== 'sending' && (
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10m0 0l-3.5-3.5M13 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>

          {status === 'success' && (
            <div className="bg-green-500/10 border border-green-500/20 text-green-500 p-3 rounded-lg text-sm text-center mt-2 font-medium">
              Message sent successfully! We'll be in touch soon.
            </div>
          )}
          {status === 'error' && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-3 rounded-lg text-sm text-center mt-2 font-medium">
              There was an error sending your message. Please try again.
            </div>
          )}
        </form>
      </div>
    </div>
  )
}
