'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus({ loading: true, success: false, error: false, message: '' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed');

      setStatus({
        loading: false,
        success: true,
        error: false,
        message: 'Message sent successfully! We will contact you soon.',
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch {
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Failed to send message. Please try again later.',
      });
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl p-10 md:p-14">

          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Contact Us
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
            Have questions or need assistance? Fill out the form and our team will get back to you shortly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name *"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full border rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <textarea
              name="message"
              placeholder="Write your message here *"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <button
              type="submit"
              disabled={status.loading}
              className="w-full bg-primary text-white py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition shadow-lg"
            >
              {status.loading ? 'Sending...' : 'Send Message'}
            </button>

            {status.message && (
              <p
                className={`text-center font-medium ${
                  status.success
                    ? 'text-green-600'
                    : status.error
                    ? 'text-red-600'
                    : ''
                }`}
              >
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
