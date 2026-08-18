import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    setLoading(false);
                    setStatus({ type: 'success', message: 'Message sent successfully!' });
                    form.current.reset();
                },
                (error) => {
                    setLoading(false);
                    setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
                    console.error('EmailJS Error:', error);
                }
            );
    };

    return (
        <section id="contact" className="relative bg-[#090A0F] text-white py-20 px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-red-500 font-semibold tracking-widest uppercase text-sm">Get In Touch</p>
                    <h2 className="text-4xl md:text-5xl font-extrabold mt-2">
                        Contact <span className="text-red-500">Me.</span>
                    </h2>
                    <div className="w-16 h-1 bg-red-500 mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
                    {/* Info Card */}
                    <div className="lg:col-span-2 space-y-8 bg-[#111319] p-8 rounded-2xl border border-gray-800/80 shadow-xl">
                        <h3 className="text-2xl font-bold text-white">Let's Talk</h3>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            Have a project in mind or want to collaborate? Feel free to reach out using the form or through social links!
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-500 shrink-0">
                                    <FaEnvelope size={18} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400">Email Me</p>
                                    <p className="text-sm font-semibold text-gray-200">muhammadthanveer111@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-500 shrink-0">
                                    <FaMapMarkerAlt size={18} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400">Location</p>
                                    <p className="text-sm font-semibold text-gray-200">Bengaluru, Karnataka, India</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="pt-6 border-t border-gray-800/80">
                            <p className="text-xs text-gray-400 mb-4">Follow Me</p>
                            <div className="flex space-x-4">
                                <a
                                    href="https://www.linkedin.com/in/muhammad-thanveer-akula-897521280/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-500 transition-colors"
                                >
                                    <FaLinkedin size={18} />
                                </a>
                                <a
                                    href="https://github.com/MuhammadThanveer786"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-500 transition-colors"
                                >
                                    <FaGithub size={18} />
                                </a>
                                <a
                                    href="https://www.instagram.com/thannu_789/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-500 transition-colors"
                                >
                                    <FaInstagram size={18} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Underline Form Area */}
                    <div className="lg:col-span-3 bg-[#111319] p-8 md:p-10 rounded-2xl border border-gray-800/80 shadow-xl">
                        <form ref={form} onSubmit={sendEmail} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* First Name */}
                                <div className="relative">
                                    <label className="block text-xs font-medium text-gray-400 mb-1">First Name *</label>
                                    <input
                                        type="text"
                                        name="from_first_name"
                                        required
                                        placeholder="John"
                                        className="w-full bg-transparent border-b-2 border-gray-700 py-2 text-gray-100 placeholder-gray-600 focus:outline-none focus:border-red-500 transition-colors"
                                    />
                                </div>

                                {/* Last Name */}
                                <div className="relative">
                                    <label className="block text-xs font-medium text-gray-400 mb-1">Last Name *</label>
                                    <input
                                        type="text"
                                        name="from_last_name"
                                        required
                                        placeholder="Doe"
                                        className="w-full bg-transparent border-b-2 border-gray-700 py-2 text-gray-100 placeholder-gray-600 focus:outline-none focus:border-red-500 transition-colors"
                                    />
                                </div>
                            </div>

                            {/* Email Address */}
                            <div className="relative">
                                <label className="block text-xs font-medium text-gray-400 mb-1">Email *</label>
                                <input
                                    type="email"
                                    name="from_email"
                                    required
                                    placeholder="john.doe@example.com"
                                    className="w-full bg-transparent border-b-2 border-gray-700 py-2 text-gray-100 placeholder-gray-600 focus:outline-none focus:border-red-500 transition-colors"
                                />
                            </div>

                            {/* Message */}
                            <div className="relative">
                                <label className="block text-xs font-medium text-gray-400 mb-1">Write a message *</label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    required
                                    placeholder="Type your message here..."
                                    className="w-full bg-transparent border-b-2 border-gray-700 py-2 text-gray-100 placeholder-gray-600 focus:outline-none focus:border-red-500 transition-colors resize-none"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg flex items-center space-x-2 transition-all shadow-lg hover:shadow-red-600/30 disabled:opacity-50 cursor-pointer"
                            >
                                <span>{loading ? 'Sending...' : 'Send Message'}</span>
                                <FaPaperPlane size={14} />
                            </button>

                            {status.message && (
                                <p className={`text-sm mt-4 ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                                    {status.message}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;