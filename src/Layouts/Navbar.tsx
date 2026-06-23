// import Image from 'next/image'
// import React from 'react'

// function Navbar() {
//   return (
//     <nav className="bg-[#18181B] p-5">
//         <div >
//             <Image src="/logo.png" alt='logo' width={100} height={100} className='w-10 h-10 lg:w-14 lg:h-14 rounded-full object-cover '></Image>
//         </div>
//         <div >
//             <ul>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//             </ul>
//         </div>
//     </nav>
//   )
// }

// export default Navbar


"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [serviceOpen, setServiceOpen] = useState(false);

    return (
        <nav className="w-full z-50 bg-[#18181B]/95 backdrop-blur-md border-b border-zinc-800">
           
                <div className="flex items-center justify-between h-20 px-5">

                    {/* Logo */}
                    <div className="flex items-center gap-3" >
                        <Image
                            src="/logo.png"
                            alt="logo"
                            width={100}
                            height={100}
                            className="w-10 h-10 lg:w-12 lg:h-12 object-cover rounded-full"
                        />
                        <h1 className="text-white text-lg lg:text-xl font-bold">
                            Bhawani Saloon
                        </h1>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden lg:flex items-center gap-8 text-white">
                        <li className="hover:text-yellow-400 transition cursor-pointer">
                            Home
                        </li>

                        <li className="hover:text-yellow-400 transition cursor-pointer">
                            About
                        </li>

                        {/* Services Dropdown */}
                        <li
                            className="relative group cursor-pointer"
                            onMouseEnter={() => setServiceOpen(true)}
                            onMouseLeave={() => setServiceOpen(false)}
                        >
                            <div className="flex items-center gap-1 hover:text-yellow-400">
                                Services
                                <ChevronDown size={18} />
                            </div>

                            {serviceOpen && (
                                <div className="absolute top-10 left-0 w-56 bg-[#27272A] rounded-xl shadow-2xl p-3">
                                    <ul className="space-y-2">
                                        <li className="hover:text-yellow-400 cursor-pointer">
                                            Hair Cut
                                        </li>
                                        <li className="hover:text-yellow-400 cursor-pointer">
                                            Hair Styling
                                        </li>
                                        <li className="hover:text-yellow-400 cursor-pointer">
                                            Hair Coloring
                                        </li>
                                        <li className="hover:text-yellow-400 cursor-pointer">
                                            Facial
                                        </li>
                                        <li className="hover:text-yellow-400 cursor-pointer">
                                            Bridal Makeup
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>

                        <li className="hover:text-yellow-400 transition cursor-pointer">
                            Gallery
                        </li>

                        <li className="hover:text-yellow-400 transition cursor-pointer">
                            Blog
                        </li>

                        <li className="hover:text-yellow-400 transition cursor-pointer">
                            Contact
                        </li>
                    </ul>

                    {/* Appointment Button */}
                    <button className="hidden lg:block bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-5 py-3 rounded-full transition-all duration-300">
                        Book Appointment
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={25} /> : <Menu size={25} />}
                    </button>
                </div>
            

            {/* Mobile Menu */}
            <div
                className={`lg:hidden overflow-hidden transition-all duration-500 ${isOpen ? "max-h-screen" : "max-h-0"
                    }`}
            >
                <div className="bg-[#18181B] border-t border-zinc-800">
                    <ul className="flex flex-col text-white p-5 gap-5">
                        <li>Home</li>
                        <li>About</li>

                        <li>
                            <details>
                                <summary className="cursor-pointer">Services</summary>
                                <ul className="pl-4 mt-3 space-y-2 text-zinc-300">
                                    <li>Hair Cut</li>
                                    <li>Hair Styling</li>
                                    <li>Hair Coloring</li>
                                    <li>Facial</li>
                                    <li>Bridal Makeup</li>
                                </ul>
                            </details>
                        </li>

                        <li>Gallery</li>
                        <li>Blog</li>
                        <li>Contact</li>

                        <button className="bg-yellow-500 text-black font-semibold py-3 rounded-full mt-3">
                            Book Appointment
                        </button>
                    </ul>
                </div>
            </div>
        </nav>
    );
}