
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";


import { InstagramOutlined, FacebookOutlined, WhatsAppOutlined } from "@ant-design/icons"

export default function Footer() {
  return (
    <footer className="bg-[#08080B] border-t border-zinc-800">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo Section */}
          <div>
            <div className="flex items-center gap-3">

              <Image
                src="/logo.png"
                alt="Bhawani Hari Saloon"
                width={100}
                height={100}
                className="rounded-full w-14 h-14 object-cover"
              />

              <div>
                <h2 className="text-white text-xl font-bold">
                  Bhawani Hair
                </h2>

                <p className="text-yellow-400 text-sm">
                  Saloon Since 1999
                </p>
              </div>

            </div>

            <p className="text-zinc-400 mt-6 leading-relaxed">
              Providing premium grooming, hairstyling,
              beard care and beauty services in Ratlam
              since 1999.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">

              <a
                href="#"
                className="p-3 rounded-full
                 bg-[#16161D] text-white hover:bg-yellow-500 hover:text-black transition
                 w-10 h-10 flex items-center justify-center
                 "
              >

                <InstagramOutlined />
              </a>

              <a
                href="#"
                className="p-3 rounded-full bg-[#16161D] text-white hover:bg-yellow-500 hover:text-black transition  w-10 h-10 flex items-center justify-center"
              >
                <FacebookOutlined />
              </a>

              <a
                href="https://wa.me/919827557117?text=Hello%20Bhwawani %20Bhaiya%20mujhe%20jankari%20chaiye%20aapki%20saloon%20ki"
                className="p-3 rounded-full bg-[#16161D] text-white hover:bg-yellow-500 hover:text-black transition  w-10 h-10 flex items-center justify-center"
              >
                <WhatsAppOutlined />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">

              <li>
                <Link
                  href="/"
                  className="text-zinc-400 hover:text-yellow-400 transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="text-zinc-400 hover:text-yellow-400 transition"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="text-zinc-400 hover:text-yellow-400 transition"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="/gallery"
                  className="text-zinc-400 hover:text-yellow-400 transition"
                >
                  Gallery
                </Link>
              </li>

              <li>
                <Link
                  href="/contactus"
                  className="text-zinc-400 hover:text-yellow-400 transition"
                >
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">
              Services
            </h3>

            <ul className="space-y-4 text-zinc-400">

              <li className="hover:text-yellow-400 transition cursor-pointer">
                Hair Cutting
              </li>

              <li className="hover:text-yellow-400 transition cursor-pointer">
                Hair Styling
              </li>

              <li className="hover:text-yellow-400 transition cursor-pointer">
                Beard Styling
              </li>

              <li className="hover:text-yellow-400 transition cursor-pointer">
                Facial Treatment
              </li>

              <li className="hover:text-yellow-400 transition cursor-pointer">
                Groom Makeup
              </li>

              <li className="hover:text-yellow-400 transition cursor-pointer">
                Head Massage
              </li>

            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">
              Contact Info
            </h3>

            <div className="space-y-5">

              <div className="flex gap-3">
                <MapPin
                  size={20}
                  className="text-yellow-400 mt-1"
                />

                <p className="text-zinc-400">
                  Sajjan Mill Road,
                  Thane Ke Samne,
                  Ratlam (M.P.)
                </p>
              </div>

              <div className="flex gap-3">
                <Phone
                  size={20}
                  className="text-yellow-400"
                />

                <a className="text-zinc-400" href="tel:+919827557117">
                  +91 9827557117
                </a>
              </div>

              <div className="flex gap-3">
                <Mail
                  size={20}
                  className="text-yellow-400"
                />

                <a className="text-zinc-400" href="mailto:vinodsen9827@gmail.com">
                  vinodsen9827@gmail.com
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-zinc-800">

        <div className="max-w-7xl mx-auto px-4 py-6">

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-zinc-500 text-center md:text-left">
              © 2025 Bhawani Hari Saloon. All Rights Reserved.
            </p>

            <p className="text-zinc-500 text-center md:text-right">
              Designed with ❤️ for Premium Grooming Experience
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}