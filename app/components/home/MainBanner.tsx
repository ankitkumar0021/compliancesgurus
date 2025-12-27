"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Link from "next/link";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ImageComponent from "@/app/ui/ImageComponent";

const banners = [
  {
    id: 1,
    image: "/images/tech.jpg",
    link: "/contact",
    alt: "Compliance Gurus Banner",
    title: "Your Trusted Telecom Compliance Partner",
    desc: "Expert DoT, TRAI & AGR compliance solutions for ISPs",
    btnText: "Get Free Consultation",
  },
];

export default function MainBanner() {
  return (
    <div className="relative main_banner bg_gradient">
      <div className="w-full">
        {/* Custom Navigation */}
        <button className="custom-prev absolute top-1/2 left-3 z-30 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60">
          <IoIosArrowBack className="text-white text-2xl" />
        </button>

        <button className="custom-next absolute top-1/2 right-3 z-30 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60">
          <IoIosArrowForward className="text-white text-2xl" />
        </button>

        <Swiper
          modules={[Navigation, Pagination, Autoplay, A11y]}
          slidesPerView={1}
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
          className="w-full"
        >
          {banners.map((banner) => (
            <SwiperSlide key={banner.id}>
              <div className="relative w-full h-[260px] sm:h-[360px] md:h-[520px] lg:h-screen overflow-hidden">
                
                {/* Image */}
                <ImageComponent url={banner.image} img_title={banner.alt} object_cover={true} />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50 z-10" />
                {/* CENTER CONTENT */}
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
                  <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold mb-4 max-w-4xl">
                    {banner.title}
                  </h1>
                  <p className="text-white text-sm sm:text-base md:text-lg mb-6 max-w-2xl">
                    {banner.desc}
                  </p>
                  <Link
                    href={banner.link}
                    className="inline-flex items-center justify-center btn-primary text-white px-6 py-3 rounded-md font-medium transition"
                  >
                    {banner.btnText}
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
