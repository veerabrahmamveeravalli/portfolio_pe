import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 mt-10 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-semibold mb-8 text-center">Contact Me</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left: Contact Info */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-blue-600 text-xl" />
            <span className="text-lg">veeravalliv77@gmail.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaPhone className="text-blue-600 text-xl" />
            <span className="text-lg">+1 (945) 264-1185</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaLinkedin className="text-blue-600 text-xl" />
            <a
              href="https://www.linkedin.com/in/veerabrahmam-veeravalli/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-blue-700 hover:underline"
            >
              linkedin.com/in/veeravalli
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <FaGithub className="text-blue-600 text-xl" />
            <a
              href="https://github.com/veerabrahmamveeravalli"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-blue-700 hover:underline"
            >
              github.com/veeravalli
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <FaGithub className="text-blue-600 text-xl" />
            <a
              href="https://leetcode.com/u/Veerabrahmam_Veeravalli/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-blue-700 hover:underline"
            >
              leetcode.com/veeravalli
            </a>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {submitted && (
            <div className="text-green-600 text-center">
              Thanks for reaching out! I'll get back to you soon.
            </div>
          )}

          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
