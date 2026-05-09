// --- Contact.jsx ---
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const scriptURL = 'https://script.google.com/u/0/home/projects/1of75D44eKkZCmnuM4A0qRA0kYdUBdKyGw3a-z7DlZPEi9DudSLO_h3es/exec'; // Replace with your Google Apps Script URL
    const form = e.target;

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(() => alert('Message sent successfully!'))
      .catch((error) => alert('Error!', error.message));
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-24 bg-[#0f0f0f] text-white">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl font-bold mb-4 text-indigo-400">Contact Me</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Whether you have a project in mind or just want to say hello, my inbox is always open.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="flex items-center space-x-4">
            <Mail className="text-indigo-400" />
            <span className="text-gray-300">dkkumarr911@gmail.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <Phone className="text-indigo-400" />
            <span className="text-gray-300">+91-8744086714</span>
          </div>
          <div className="flex items-center space-x-4">
            <MapPin className="text-indigo-400" />
            <span className="text-gray-300">Delhi, India</span>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          name="submit-to-google-sheet"
          method="POST"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full px-4 py-3 bg-[#1e1e1e] border border-gray-700 rounded-xl text-white"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full px-4 py-3 bg-[#1e1e1e] border border-gray-700 rounded-xl text-white"
            onChange={handleChange}
          />
          <textarea
            name="message"
            required
            rows="5"
            placeholder="Your Message"
            className="w-full px-4 py-3 bg-[#1e1e1e] border border-gray-700 rounded-xl text-white"
            onChange={handleChange}
          ></textarea>
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-xl text-white font-semibold transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;