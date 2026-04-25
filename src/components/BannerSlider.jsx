import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const BannerSlider = () => {
  return (
    <div style={{ marginTop: "20px" }}>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 2500 }}
        pagination={{ clickable: true }}
        loop={true}
        style={{
          width: "100%",
          height: "260px",
          borderRadius: "15px",
        }}
      >
        <SwiperSlide>
          <div
            style={{
              background: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1542291026-7eec264c27ff') center/cover",
              width: "100%",
              height: "100%",
              borderRadius: "15px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#b184ff",
              fontSize: "30px",
              fontWeight: "bold",
            }}
          >
            Best Offers 💜🔥
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            style={{
              background: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1513708929605-7d81a0f0b67a') center/cover",
              width: "100%",
              height: "100%",
              borderRadius: "15px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#b184ff",
              fontSize: "30px",
              fontWeight: "bold",
            }}
          >
            Discount until 50% ⚡
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            style={{
              background: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1585386959984-a4155224a1ad') center/cover",
              width: "100%",
              height: "100%",
              borderRadius: "15px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#b184ff",
              fontSize: "30px",
              fontWeight: "bold",
            }}
          >
             ✨New Products 
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSlider;
