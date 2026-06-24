"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const Desktopmenu = [
        {
            label: "Home",
            to: "/"
        },
        {
            label: "About",
            to: "/about"
        },
        {
            label: "Services",
            to: "/services"
        },
        {
            label: "Gallery",
            to: "/gallery"
        },
        {
            label: "Blog",
            to: "/blog"
        },
        {
            label: "Contact",
            to: "/contactus"
        }
    ]

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

                    {
                        Desktopmenu.map((item, index) => (
                            <Link href={item.to} className={`hover:text-yellow-400 transition cursor-pointer 
                             ${index % 2 === 0 ? "animate__animated animate__fadeInDown" : ""}
                            `} key={index}>
                                {item.label}
                            </Link>
                        ))
                    }

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
                        {
                            Desktopmenu.map((item, index) => (
                                <Link href={item.to} className={`hover:text-yellow-400 transition cursor-pointer 
                             ${index % 2 === 0 ? "animate__animated animate__fadeInDown" : ""}
                            `} key={index} onClick={() => setIsOpen(false)}>
                                    {item.label}
                                </Link>
                            ))
                        }



                        <button className="bg-yellow-500 text-black font-semibold py-3 rounded-full mt-3">
                            Book Appointment
                        </button>
                    </ul>
                </div>
            </div>
        </nav>
    );
}