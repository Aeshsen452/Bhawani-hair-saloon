"use client";

import Image from "next/image";
import {
    Scissors,
    Star,
    MapPin,
    Award,
} from "lucide-react";

export default function AboutSection() {
    const services = [
        "Hair Cutting",
        "Hair Styling",
        "Hair Coloring",
        "Hair Spa",
        "Beard Styling",
        "Facial",
        "Bridal Makeup",
        "Head Massage",
    ];

    return (
        <section className="relative bg-[#0B0B0F] overflow-hidden  py-8 ">

            {/* Background Effects */}
            <div className="absolute top-10 left-0 w-60 h-60 sm:w-80 sm:h-80 bg-yellow-500/10 blur-[120px] rounded-full"></div>

            <div className="absolute bottom-0 right-0 w-60 h-60 sm:w-96 sm:h-96 bg-orange-500/10 blur-[140px] rounded-full"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Heading */}
                <div className="text-center mb-14 lg:mb-20">
                    <span className="text-yellow-400 uppercase tracking-[3px] text-sm">
                        About Us
                    </span>

                    <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                        Bhawani Hari Saloon
                    </h2>

                    <p className="text-zinc-400 mt-5 max-w-3xl mx-auto text-base sm:text-lg">
                        Serving Ratlam since 1999 with premium grooming,
                        hairstyling, beauty treatments and exceptional customer care.
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Owner Image */}
                    <div className="relative flex justify-center">

                        <div className="
              absolute
              w-52 h-52
              sm:w-72 sm:h-72
              lg:w-[380px]
              lg:h-[380px]
              bg-yellow-500/20
              rounded-full
              blur-[120px]
            "></div>

                        <div className="
              relative
              bg-white/5
              backdrop-blur-lg
              border
              border-yellow-500/20
              rounded-3xl
              p-3 sm:p-4
              shadow-2xl
            ">

                            <Image
                                src="/shop_image.png"
                                alt="Vinod Kumar Sen"
                                width={600}
                                height={700}
                                priority
                                className="
                  w-[260px]
                  sm:w-[340px]
                  md:w-[420px]
                  lg:w-[500px]
                  h-auto
                  rounded-3xl
                  object-cover
                "
                            />

                        </div>

                        {/* Experience Badge */}
                        <div className="
              hidden
              md:flex
              absolute
              -bottom-5
              right-0
              bg-[#16161D]
              border
              border-yellow-500/20
              px-5
              py-3
              rounded-2xl
              items-center
              gap-3
            ">
                            <Award className="text-yellow-400" />

                            <div>
                                <h4 className="text-white font-semibold">
                                    Since 1999
                                </h4>
                                <p className="text-zinc-400 text-sm">
                                    25+ Years Experience
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Content */}
                    <div>

                        <h3 className="
              text-2xl
              sm:text-3xl
              md:text-4xl
              lg:text-5xl
              font-bold
              text-white
              leading-tight
            ">
                            A Trusted Name In
                            <span className="block text-yellow-400 mt-2">
                                Grooming & Beauty
                            </span>
                        </h3>

                        <p className="text-zinc-400 mt-6 text-base sm:text-lg leading-relaxed">
                            Bhawani Hari Saloon was established in 1999 and has become
                            one of the most trusted salons in Ratlam. Located at
                            Sajjan Mill Road, opposite Thane, Ratlam (M.P.),
                            we provide premium grooming, hairstyling,
                            beauty and makeup services.
                        </p>

                        <p className="text-zinc-400 mt-5 text-base sm:text-lg leading-relaxed">
                            Under the leadership of Vinod Kumar Sen, our mission
                            is to deliver confidence, style and customer satisfaction
                            through professional care and modern salon techniques.
                        </p>

                        {/* Location */}
                        <div className="flex items-start gap-4 mt-8">
                            <MapPin
                                size={24}
                                className="text-yellow-400 flex-shrink-0 mt-1"
                            />

                            <p className="text-white">
                                Sajjan Mill Road, Thane Ke Samne,
                                Ratlam, Madhya Pradesh
                            </p>
                        </div>

                        {/* Features */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">

                            <div className="
                bg-[#16161D]
                border
                border-zinc-800
                rounded-2xl
                p-5
              ">
                                <Scissors className="text-yellow-400 mb-3" />

                                <h4 className="text-white font-semibold">
                                    Professional Styling
                                </h4>

                                <p className="text-zinc-400 text-sm mt-2">
                                    Modern haircuts, grooming and beard styling.
                                </p>
                            </div>

                            <div className="
                bg-[#16161D]
                border
                border-zinc-800
                rounded-2xl
                p-5
              ">
                                <Star className="text-yellow-400 mb-3" />

                                <h4 className="text-white font-semibold">
                                    Premium Experience
                                </h4>

                                <p className="text-zinc-400 text-sm mt-2">
                                    Comfortable environment and quality service.
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

                {/* Services Section */}

                <div className="mt-20 lg:mt-28">

                    <h3 className="
            text-center
            text-2xl
            sm:text-3xl
            lg:text-4xl
            font-bold
            text-white
            mb-10
          ">
                        Popular Services
                    </h3>

                    <div className="
            grid
            grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            gap-4
            sm:gap-6
          ">
                        {services.map((service) => (
                            <div
                                key={service}
                                className="
                  bg-[#16161D]
                  border
                  border-zinc-800
                  hover:border-yellow-500
                  hover:-translate-y-2
                  transition-all
                  duration-300
                  rounded-xl
                  sm:rounded-2xl
                  p-4
                  sm:p-6
                  text-center
                  animate__animated
                  animate__flash
                "
                            >
                                <h4 className="
                  text-white
                  text-sm
                  sm:text-base
                  font-medium
                ">
                                    {service}
                                </h4>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}