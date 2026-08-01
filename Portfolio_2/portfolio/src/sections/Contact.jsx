import React, { useState, useRef } from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { Mail, Phone, MapPin, Send, Loader2, Github, Linkedin, Twitter, Youtube, Code } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [isSending, setIsSending] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        nmae: '',
        email: '',
        message: '',
        time: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ 
            ...formData, 
            [name]: value,
            // Sync nmae with name for the EmailJS template variable
            ...(name === 'name' ? { nmae: value } : {})
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);

        // EMAILJS SERVICE ID, TEMPLATE ID, AND PUBLIC KEY
        const SERVICE_ID = 'service_qfntaar';
        const TEMPLATE_ID = 'template_c8yl38d';
        const PUBLIC_KEY = 'QKFS18dSWKVZLrE8g';

        // Initialize EmailJS with Public Key
        emailjs.init(PUBLIC_KEY);

        // Add current time for the {{time}} placeholder
        const currentTime = new Date().toLocaleString();
        const templateParams = {
            name: formData.name,
            nmae: formData.nmae,
            email: formData.email,
            message: formData.message,
            time: currentTime
        };

        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
            .then((result) => {
                alert('Success! Message sent.');
                setFormData({ name: '', nmae: '', email: '', message: '', time: '' });
                setIsSending(false);
            }, (error) => {
                console.warn('EmailJS Error Object:', error);
                const errorDetail = error?.text || JSON.stringify(error) || 'Unknown error';
                alert(`Error: ${errorDetail}`);
                setIsSending(false);
            });
    };

    return (
        <section id="contact" className="py-20 relative">
            <div className="max-w-6xl mx-auto px-6">
                <SectionTitle title="Get In Touch" subtitle="Let's build something amazing together" />

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="text-3xl font-bold text-white">Let's Connect</h3>
                        <p className="text-gray-400 text-lg">
                            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4 text-gray-300 hover:text-neon-cyan transition-colors">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-neon-cyan">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Email</p>
                                    <p className="font-medium">dhruvipatel5674@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 text-gray-300 hover:text-neon-cyan transition-colors">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-neon-cyan">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Phone</p>
                                    <p className="font-medium">+91 9426408104</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 text-gray-300 hover:text-neon-cyan transition-colors">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-neon-cyan">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Location</p>
                                    <p className="font-medium">Gujarat, India</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 space-y-5">
                            <h4 className="text-xl font-semibold text-white">Availability</h4>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Response Time</p>
                                    <p className="text-white text-lg font-bold">Within 24h</p>
                                </div>
                                <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Status</p>
                                    <p className="text-green-400 text-lg font-bold flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                        Open to Work
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-r from-neon-cyan/20 to-purple-600/20 rounded-3xl blur-2xl opacity-50 block" />

                        <form
                            ref={formRef}
                            className="relative space-y-5 backdrop-blur-2xl bg-black/40 p-6 sm:p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl"
                            onSubmit={handleSubmit}
                        >
                            <h3 className="text-2xl font-bold text-white mb-2">Send Message</h3>
                            <p className="text-gray-400 text-sm mb-8">Have a specific inquiry or just want to say hi? I'll get back to you as soon as possible.</p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-xs font-semibold text-gray-400 uppercase tracking-widest ml-1">Your Name</label>
                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-neon-cyan focus:bg-white/10 transition-all duration-300"
                                        placeholder="Enter your name"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-xs font-semibold text-gray-400 uppercase tracking-widest ml-1">Your Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-neon-cyan focus:bg-white/10 transition-all duration-300"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-xs font-semibold text-gray-400 uppercase tracking-widest ml-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-neon-cyan focus:bg-white/10 transition-all duration-300 resize-none"
                                    placeholder="Tell me about your project or vision..."
                                    required
                                ></textarea>
                            </div>

                            <Button variant="primary" className="w-full py-4 rounded-xl font-bold text-lg hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all duration-300" disabled={isSending}>
                                <div className="flex flex-row items-center justify-center gap-3 w-full">
                                    {isSending ? <Loader2 className="animate-spin shrink-0" size={22} /> : <Send className="shrink-0" size={22} />}
                                    <span className="whitespace-nowrap">{isSending ? 'Sending ...' : 'Send Message Now'}</span>
                                </div>
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
