import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const serviceId = import.meta.env.VITE_serviceId;
    const templateId = import.meta.env.VITE_templateId;
    const userId = import.meta.env.VITE_userId;

    emailjs
      .send(serviceId, templateId, formData, userId)
      .then(() => {
        alert("Thank you for your message!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("Error sending message:", err);
        alert("Failed to send message. Please try again later.");
      })
      .finally(() => setIsSending(false));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-black via-gray-900 to-indigo-900 text-white">
      <div className="container mx-auto px-5">
        <h2 className="text-5xl text-indigo-500 font-bold text-center mb-12 text-white-500">
          Get in Touch
        </h2>
        <motion.form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto bg-gray-900 p-8 rounded-xl shadow-md hover:shadow-indigo-500 transform hover:scale-105 transition-transform duration-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Full Name"
              required
              className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email Address"
              required
              className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows="5"
            placeholder="Your Message"
            required
            className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded focus:ring-2 focus:ring-indigo-400 focus:outline-none mb-6"
          ></textarea>
          <button
            type="submit"
            className={`w-full py-3 rounded transition-all duration-300 ${
              isSending ? "bg-gray-600 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700"
            }`}
            disabled={isSending}
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
