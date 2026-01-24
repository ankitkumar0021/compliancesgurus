"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css"; import "swiper/css/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ImageComponent from "@/app/ui/ImageComponent";

const slides = [
  ["/images/s1.jpeg", "/images/s2.jpeg"],
  ["/images/s3.jpeg", "/images/s4.jpeg"],
  ["/images/s5.jpeg", "/images/s6.jpeg"],
];

export default function MainBanner() {
  return (
    <div className="relative">
      <button className="prev absolute left-3 top-1/2 z-10 -translate-y-1/2">
        <IoIosArrowBack className="text-white text-2xl"/>
      </button>
      <button className="next absolute right-3 top-1/2 z-10 -translate-y-1/2">
        <IoIosArrowForward className="text-white text-2xl"/>
      </button>

      <Swiper modules={[Navigation, Autoplay]} loop autoplay={{delay:4000}}
        navigation={{ nextEl: ".next", prevEl: ".prev" }}>
        {slides.map((img,i)=>(
          <SwiperSlide key={i}>
            <div className="flex flex-col md:flex-row h-[400px] md:h-screen">
              {img.map((src,j)=>(
                <div key={j} className="w-full md:w-1/2 relative h-1/2 md:h-full">
                  <ImageComponent url={src} img_title="" object_cover />
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
