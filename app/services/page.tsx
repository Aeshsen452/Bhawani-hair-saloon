"use client";

import Image from "next/image";

const services = [
  {
    title: "Hair Services",
    image: "/Services/Haircutservice.avif",
    icon: "✂️",
    items: [
      "Hair Cutting",
      "Hair Trimming",
      "Hair Styling",
      "Hair Wash",
      "Hair Curling",
      "Hair Straightening",
      "Hair Smoothening",
      "Hair Spa",
      "Hair Coloring",
      "Hair Highlights",
      "Scalp Treatment",
      "Anti-Dandruff Treatment",
      "Anti Hair Fall Treatment",
    ],
  },

  {
    title: "Beard & Grooming",
    image: "/Services/beardservice.avif",
    icon: "🧔",
    items: [
      "Beard Trim",
      "Beard Styling",
      "Clean Shave",
      "Beard Coloring",
      "Mustache Styling",
      "Head Shave",
    ],
  },

  {
    title: "Facial & Skin Care",
    image: "/Services/facialservice.avif",
    icon: "✨",
    items: [
      "Facial",
      "Cleanup",
      "D-Tan",
      "Face Massage",
      "Bleach",
      "Acne Treatment",
      "Hydrating Treatment",
    ],
  },

  {
    title: "Threading ",
    image: "/Services/Threading.webp",
    icon: "💎",
    items: [
      "Eyebrow Threading",
      "Forehead Threading",
    ],
  },

  {
    title: "Makeup Services",
    image: "/Services/makeup.avif",
    icon: "🎩",
    items: [
      "Party Makeup",
      "Engagement Makeup",
      "Reception Makeup",
      "Groom Makeup",
    ],
  },

  {
    title: "Massage",
    image: "/Services/massage.avif",
    icon: "💆",
    items: [
      "Head Massage",
      "Face Massage",
      "Neck & Shoulder Massage",
      "Relaxation Therapy",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#0B0B0F] min-h-screen">

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">

        <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-500/10 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-500/10 blur-[140px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-4 text-center">

          <span className="text-yellow-400 uppercase tracking-[4px]">
            Premium Salon Services
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-6">
            Our Services
          </h1>

          <p className="max-w-3xl mx-auto text-zinc-400 mt-6 text-lg">
            Experience professional grooming, hairstyling,
            facial treatments, beard care and relaxation services
            at Bhawani Hari Saloon since 1999.
          </p>

        </div>

      </section>

      {/* Service Cards */}
      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {services.map((service) => (
            <div
              key={service.title}
              className="
              bg-[#15151C]
              border
              border-zinc-800
              rounded-3xl
              overflow-hidden
              hover:border-yellow-500
              hover:-translate-y-2
              transition-all
              duration-500
            "
            >
              <div className="relative h-[260px]">

                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-black/50"></div>

                <h2
                  className="
                  absolute
                  bottom-5
                  left-5
                  text-white
                  text-2xl
                  font-bold
                "
                >
                  {service.icon} {service.title}
                </h2>

              </div>

              <div className="p-6">

                <ul className="space-y-3">

                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-zinc-300"
                    >
                      <span className="text-yellow-400">✓</span>
                      {item}
                    </li>
                  ))}

                </ul>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* Why Choose Us */}
      <section className="py-20 border-t border-zinc-800">

        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-center text-white text-4xl font-bold">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            <div className="bg-[#15151C] rounded-3xl p-8 border border-zinc-800">
              <h3 className="text-yellow-400 text-xl font-semibold">
                25+ Years Experience
              </h3>

              <p className="text-zinc-400 mt-4">
                Trusted grooming and beauty services since 1999.
              </p>
            </div>

            <div className="bg-[#15151C] rounded-3xl p-8 border border-zinc-800">
              <h3 className="text-yellow-400 text-xl font-semibold">
                Professional Team
              </h3>

              <p className="text-zinc-400 mt-4">
                Skilled experts delivering modern styling solutions.
              </p>
            </div>

            <div className="bg-[#15151C] rounded-3xl p-8 border border-zinc-800">
              <h3 className="text-yellow-400 text-xl font-semibold">
                Premium Experience
              </h3>

              <p className="text-zinc-400 mt-4">
                Comfortable environment with high-quality service.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-24">

        <div className="max-w-4xl mx-auto px-4 text-center">

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Ready For Your New Look?
          </h2>

          <p className="text-zinc-400 mt-6">
            Book your appointment today and experience premium salon services.
          </p>

          <button
            className="
            mt-8
            px-8
            py-4
            bg-yellow-500
            text-black
            rounded-full
            font-semibold
            hover:bg-yellow-400
            transition
          "
          >
            Book Appointment
          </button>

        </div>

      </section>

    </main>
  );
}