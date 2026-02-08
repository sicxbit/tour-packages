"use client";

import { MailIcon } from "lucide-react";
import { SiFacebook } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <section className="relative w-full bg-transparent overflow-hidden flex items-center justify-center">
      {/* Footer Content */}
      <footer className="relative z-10 w-full">
        <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-16">
          <div className="bg-black/30 rounded-3xl p-10 sm:p-12 md:p-16 text-white flex flex-col gap-10">
            
            {/* Top Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
              
              {/* Logo + Social */}
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-4xl font-bold leading-tight">
                    <span className="text-white">Website</span> <br />
                    <span className="primary-color">Title</span>
                  </h2>
                </div>

                {/* Social Icons */}
                <div className="flex items-center gap-4 mt-6">
                  <a
                    href="#"
                    className="flex items-center justify-center primary-color hover:text-white transition"
                  >
                    <SiFacebook className="w-8 h-8" />
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center primary-color hover:text-white transition"
                  >
                    <BsTwitterX className="w-8 h-8" />
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center primary-color hover:text-white transition"
                  >
                    <FaInstagram className="w-8 h-8" />
                  </a>
                </div>
              </div>

              {/* Contact Us */}
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="primary-color text-xl font-semibold mb-6">
                    CONTACT US
                  </h3>
                  <a
                    href="mailto:hello@bluelagoons.com"
                    className="block text-white text-base mb-4 hover:underline"
                  >
                    hello@bluelagoons.com
                  </a>
                  <p className="text-white text-base mb-4 leading-relaxed">
                    24 Oceanfront Avenue, Blue Lagoons <br />
                    Blue Lagoons Inc
                  </p>
                  <p className="text-white text-base">+34 875 328 58 47</p>
                </div>
              </div>

              {/* Subscribe */}
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="primary-color text-xl font-semibold mb-6">
                    SUBSCRIBE
                  </h3>
                  <p className="text-white text-base mb-4 leading-relaxed">
                    Enter your email to get notified about our new trips.
                  </p>

                  {/* Input with Mail Icon */}
                  <div className="relative mt-4">
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full bg-white/50 rounded-xl py-3 pl-4 pr-12 text-white placeholder:text-black/50 focus:outline-none focus:border-[#ffe500]"
                    />
                    <MailIcon className="absolute top-1/2 -translate-y-1/2 primary-color right-4 w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Border Line */}
            <div className="border-t border-white/30 pt-6 text-center text-sm text-gray-300">
              © {new Date().getFullYear()} Website Title. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
