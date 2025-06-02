"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from 'next/image'
import "swiper/css";
import "swiper/css/pagination";

export default function ClientCarousel({ media }: { media: { type: string; src: string }[] }) {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={10}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      className="w-full h-full"
    >
      {media.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="w-full h-full flex items-center justify-center bg-black rounded-lg overflow-hidden">
            {item.type === "image" ? (
              <Image
                src={item.src}
                alt={`slide-${index}`}
                width={800}
                height={600}
                className="max-w-full max-h-full object-contain"
              />

            ) : (
              <video
                src={item.src}
                autoPlay
                muted
                loop
                playsInline
                className="max-w-full max-h-full object-contain"
              />
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
