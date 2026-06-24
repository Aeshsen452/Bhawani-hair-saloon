"use client";

import {
    MapPin,
    Phone,
    Mail,
    Clock,

} from "lucide-react";

export default function ContactSection() {
    return (
        <section className="relative bg-[#0B0B0F] py-16 sm:py-20 overflow-hidden">

            {/* Background Glow */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-500/10 rounded-full blur-[120px]"></div>

            <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-[140px]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Heading */}
                <div className="text-center mb-14">
                    <span className="text-yellow-400 uppercase tracking-[3px] text-sm">
                        Contact Us
                    </span>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4">
                        Get In Touch
                    </h2>

                    <p className="text-zinc-400 mt-5 max-w-2xl mx-auto">
                        We'd love to hear from you. Book an appointment,
                        ask a question, or visit our salon.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10">

                    {/* Contact Info */}
                    <div className="space-y-6">

                        <div className="bg-[#16161D] border border-zinc-800 rounded-3xl p-6">
                            <h3 className="text-2xl font-bold text-white mb-6">
                                Contact Information
                            </h3>

                            <div className="space-y-6">

                                <div className="flex gap-4">
                                    <MapPin className="text-yellow-400" />
                                    <div>
                                        <h4 className="text-white font-semibold">
                                            Address
                                        </h4>
                                        <p className="text-zinc-400">
                                            Sajjan Mill Road, Thane Ke Samne,
                                            Ratlam, Madhya Pradesh
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <Phone className="text-yellow-400" />
                                    <div>
                                        <h4 className="text-white font-semibold">
                                            Phone
                                        </h4>
                                        <a className="text-zinc-400" href="tel:+919827557117">
                                            +91 9827557117
                                        </a>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <Mail className="text-yellow-400" />
                                    <div>
                                        <h4 className="text-white font-semibold">
                                            Email
                                        </h4>
                                        <a className="text-zinc-400" href="mailto:vinodsen9827@gmail.com">
                                            vinodsen9827@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <Clock className="text-yellow-400" />
                                    <div>
                                        <h4 className="text-white font-semibold">
                                            Working Hours
                                        </h4>
                                        <p className="text-zinc-400">
                                            Monday - Sunday
                                        </p>
                                        <p className="text-zinc-400">
                                            9:00 AM - 11:00 PM
                                        </p>
                                    </div>
                                </div>

                            </div>

                            {/* Social Icons */}
                            <div className="flex gap-4 mt-8">
                                <button className="bg-[#222] p-3 rounded-full hover:bg-yellow-500 hover:text-black transition">
                                    {/* <Instagram /> */}
                                </button>

                                <button className="bg-[#222] p-3 rounded-full hover:bg-yellow-500 hover:text-black transition">
                                    {/* <Facebook /> */}
                                </button>
                            </div>

                        </div>

                    </div>

                    {/* Contact Form */}
                    <div className="bg-[#16161D] border border-zinc-800 rounded-3xl p-6 sm:p-8">

                        <h3 className="text-2xl font-bold text-white mb-6">
                            Send Message
                        </h3>

                        <form className="space-y-5">

                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full bg-[#0B0B0F] border border-zinc-700 rounded-xl px-4 py-4 text-white outline-none focus:border-yellow-500"
                            />

                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full bg-[#0B0B0F] border border-zinc-700 rounded-xl px-4 py-4 text-white outline-none focus:border-yellow-500"
                            />

                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="w-full bg-[#0B0B0F] border border-zinc-700 rounded-xl px-4 py-4 text-white outline-none focus:border-yellow-500"
                            />

                            <textarea
                                rows={5}
                                placeholder="Your Message"
                                className="w-full bg-[#0B0B0F] border border-zinc-700 rounded-xl px-4 py-4 text-white outline-none focus:border-yellow-500 resize-none"
                            />

                            <button
                                type="submit"
                                className="w-full bg-yellow-500 text-black py-4 rounded-xl font-semibold hover:bg-yellow-400 transition"
                            >
                                Send Message
                            </button>

                        </form>

                    </div>

                </div>

                {/* Google Map */}

                <div className="mt-12">
                    <div className="rounded-3xl overflow-hidden border border-zinc-800">

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242.56750786833592!2d75.03017637175387!3d23.3428899606035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963fe936ad5ea53%3A0x3dbc11b38ddfaf8e!2z4KSt4KS14KS-4KSo4KWAIOCkuOClh-CksuClgeCkqA!5e0!3m2!1sen!2sin!4v1782302402542!5m2!1sen!2sin"
                            width="100%"
                            height="400"
                            loading="lazy"
                            className="w-full"
                        ></iframe>



                    </div>
                </div>

            </div>
        </section>
    );
}