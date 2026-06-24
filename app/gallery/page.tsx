"use client";

import Image from "next/image";

const galleryImages = [
    "/gallery/1.jpg",
    "/gallery/2.jpg",
    "/gallery/3.jpg",
    "/gallery/4.jpg",
    "/gallery/5.jpg",
    "/gallery/6.jpg",
    "/gallery/7.jpg",
    "/gallery/8.jpg",
];

export default function GallerySection() {
    return (
        <section className="bg-[#0B0B0F] py-20">

            <div className="max-w-7xl mx-auto px-4">

                {/* Heading */}
                <div className="text-center mb-16">
                    <span className="text-yellow-400 uppercase tracking-[4px]">
                        Our Gallery
                    </span>

                    <h2 className="text-4xl md:text-6xl font-bold text-white mt-4">
                        Transformations & Styles
                    </h2>

                    <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
                        Explore our premium grooming, hairstyling,
                        beauty treatments and makeover results.
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-6
        ">
                    {galleryImages.map((image, index) => (
                        <div
                            key={index}
                            className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-zinc-800
              "
                        >
                            <Image
                                src={image}
                                alt={`Gallery ${index + 1}`}
                                width={500}
                                height={600}
                                className="
                  w-full
                  h-[300px]
                  object-cover
                  transition-all
                  duration-700
                  group-hover:scale-110
                "
                            />

                            {/* Overlay */}
                            <div className="
                absolute
                inset-0
                bg-black/60
                opacity-0
                group-hover:opacity-100
                transition-all
                duration-500
                flex
                items-center
                justify-center
              ">
                                <h3 className="text-white text-xl font-semibold">
                                    Premium Style
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </section>
    );
}