import React, { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    reason: "",
    contactMethod: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-[#F6F8FC] font-sans text-slate-900 selection:bg-indigo-100">
      {/* Top Navigation Bar */}
      <header className="w-full flex items-center justify-between px-6 py-5 md:px-12 bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm shadow-sm">
            Y
          </div>
          <span className="font-bold text-lg tracking-tight text-gray-900">
            YESCA Technologies
          </span>
        </div>

        <nav className="flex gap-6 text-sm font-semibold text-gray-500">
          <a href="#" className="hover:text-indigo-600 transition-colors">
            Back to Home
          </a>
          <a href="#" className="hover:text-indigo-600 transition-colors">
            View Products
          </a>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col items-center">
        {/* Page Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Contact us
          </h1>
          <p className="text-gray-500 text-lg max-w-lg mx-auto leading-relaxed">
            Have questions about our products or need a custom solution? 
            Our team is here to help you scale your operations.
          </p>
        </div>

        {/* Form Card */}
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden">
          <div className="p-8 md:p-12">
            <h2 className="text-xl font-bold text-gray-900 mb-8">
              Send a message
            </h2>

            <form className="space-y-6">
              {/* Grid: Full Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-gray-700">Full name</label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="e.g. Alex Rivera"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all placeholder:text-gray-300 bg-white"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-gray-700">Work email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all placeholder:text-gray-300 bg-white"
                  />
                </div>
              </div>

              {/* Grid: Phone & Company */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-gray-700">Phone number (optional)</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all placeholder:text-gray-300 bg-white"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-gray-700">Company / Hospital</label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Organization name"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all placeholder:text-gray-300 bg-white"
                  />
                </div>
              </div>

              {/* Subject (Full Width) */}
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-700">Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="How can we help?"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all placeholder:text-gray-300 bg-white"
                />
              </div>

              {/* Grid: Reason & Method (Selects) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-gray-700">Reason for contact</label>
                  <select
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all bg-white text-gray-600 cursor-pointer appearance-none"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 1rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em' }}
                  >
                    <option value="">Select a reason</option>
                    <option value="sales">Sales Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-gray-700">Preferred contact method</label>
                  <select
                    name="contactMethod"
                    value={formData.contactMethod}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all bg-white text-gray-600 cursor-pointer appearance-none"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 1rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em' }}
                  >
                    <option value="">Select method</option>
                    <option value="email">Email</option>
                    <option value="phone">Phone Call</option>
                    <option value="whatsapp">WhatsApp</option>
                  </select>
                </div>
              </div>

              {/* Message Textarea */}
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-700">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all placeholder:text-gray-300 bg-white resize-none"
                />
                <p className="text-xs text-gray-400 mt-2">
                  Our team typically responds within 24 hours during business days.
                </p>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3.5 rounded-full font-bold text-base transition-all active:scale-95 shadow-lg shadow-indigo-600/20 flex items-center gap-2 group"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      {/* Simple Legal Footer */}
      <footer className="max-w-3xl mx-auto w-full px-6 py-10 text-center">
        <p className="text-xs font-medium text-gray-400 uppercase tracking-widest">
          © 2024 YESCA Technologies. All rights reserved.
        </p>
      </footer>
    </div>
  );
}