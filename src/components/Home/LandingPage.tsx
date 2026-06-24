
"use client";
import Image from "next/image";
import { WhatsAppOutlined } from "@ant-design/icons"

function LandingPage() {
    return (
        <section className="relative min-h-screen overflow-hidden bg-[#0B0B0F] lg:py-5">

            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-500/20 blur-[120px] rounded-full"></div>

            <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/20 blur-[150px] rounded-full"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 min-h-screen items-center">

                    {/* LEFT SIDE */}
                    <div className="text-center lg:text-left pt-8 lg:pt-0 z-10">

                        <span className="inline-block px-4 py-2 rounded-full border border-yellow-500 text-yellow-400 text-xs sm:text-sm animate__animated animate__swing">
                            Premium Hair & Beauty Salon
                        </span>

                        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-tight text-white">
                            Meet
                            <span className="block text-yellow-400 mt-2 animate__animated animate__fadeInUp">
                                Vinod Kumar Sen
                            </span>
                        </h1>

                        <p className="mt-8 text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            Vinod Kumar Sen is a highly experienced salon professional
                            dedicated to transforming personal style with precision,
                            creativity, and care. From modern haircuts and beard styling
                            to premium grooming and beauty treatments, he delivers a
                            luxurious salon experience that enhances confidence and
                            personality.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-10">

                            <button className="px-8 py-4 rounded-full bg-yellow-500 text-black font-semibold hover:scale-105 transition duration-300">
                                Book Appointment
                            </button>

                            <button className="px-8 py-4 rounded-full border border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black transition duration-300">
                                Explore Services
                            </button>

                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-14">

                            <div className="animate__animated animate__fadeInUp">
                                <h2 className="text-yellow-400 text-2xl sm:text-4xl font-bold ">
                                    25+
                                </h2>
                                <p className="text-gray-400 text-sm sm:text-base">
                                    Years
                                </p>
                            </div>

                            <div className="animate__animated animate__fadeInUp">
                                <h2 className="text-yellow-400 text-2xl sm:text-4xl font-bold">
                                    3K+
                                </h2>
                                <p className="text-gray-400 text-sm sm:text-base">
                                    Clients
                                </p>
                            </div>

                            <div className="animate__animated animate__fadeInUp">
                                <h2 className="text-yellow-400 text-2xl sm:text-4xl font-bold">
                                    100%
                                </h2>
                                <p className="text-gray-400 text-sm sm:text-base">
                                    Satisfaction
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* RIGHT SIDE */}
                    <div className="relative flex justify-center items-center">

                        {/* Glow */}
                        <div className="absolute w-64 h-64 sm:w-80 sm:h-80 lg:w-[500px] lg:h-[500px] bg-yellow-500/20 blur-[120px] rounded-full animate-pulse"></div>

                        {/* Image Card */}
                        <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-[30px] p-3 shadow-2xl">

                            <Image
                                src="/ProfileImage.png"
                                alt="Vinod Kumar Sen"
                                width={600}
                                height={700}
                                priority
                                className="
                  w-[280px]
                  sm:w-[350px]
                  md:w-[450px]
                  lg:w-[500px]
                  h-auto
                  rounded-[25px]
                  object-cover
                "
                            />

                        </div>

                        {/* Floating Card 1 */}
                        <div
                            className="
              hidden md:flex
              absolute
              top-10
              left-0
              bg-[#16161D]
              border border-zinc-800
              px-5
              py-3
              rounded-2xl
              shadow-xl
              text-white
              animate__animated
              animate__zoomInLeft
            "
                        >
                            ✂️ Hair Styling Expert
                        </div>

                        {/* Floating Card 2 */}
                        <div
                            className="
              hidden md:flex
              absolute
              bottom-10
              right-0
              bg-[#16161D]
              border border-zinc-800
              px-5
              py-3
              rounded-2xl
              shadow-xl
             text-white
             animate__animated
             animate__zoomInRight
            "
                        >
                            ⭐ Premium Salon Service
                        </div>

                    </div>

                </div>

            </div>

            <a className="w-14 h-14 bg-green-700 z-50 rounded-full fixed bottom-9 right-5 flex justify-center items-center" href="https://wa.me/919827557117?text=Hello%20Bhwawani %20Bhaiya%20mujhe%20jankari%20chaiye%20aapki%20saloon%20ki"

            >

                <WhatsAppOutlined />
            </a>
        </section>
    );
}

export default LandingPage

