import React from "react";
import headerCSS from "./../Header/Header.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Destination01 from "../../assets/Destination01.jpg"; 
import Destination02 from "../../assets/Destination02.jpg"; 
import Destination03 from "../../assets/Destination03.jpg"; 
import Destination04 from "../../assets/Destination04.jpg"; 
import Destination05 from "../../assets/Destination05.jpg"; 
import Destination06 from "../../assets/Destination06.jpg"; 

function Header() {
  return (
    <div className={`${headerCSS.header_wrapper} section`}>
      <div className={headerCSS.imageContainer}>
        <h2>Explore The World, <br /> One Unforgettable Journey</h2>
      </div>

      <Swiper
        spaceBetween={30}
        loop={true} 
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        grabCursor={true}
        breakpoints={{
          0 : {slidesPerView : 0},
          320: { slidesPerView: 1 }, // Mobile
          500: { slidesPerView: 2 }, // Small tablets
          768: { slidesPerView: 3 }, // Tablets
          1024: { slidesPerView: 4 }, // Laptops
          1200: { slidesPerView: 5 }, // Desktops
        }}
        navigation
        pagination={{ clickable: true }}
        modules={[Autoplay, Navigation, Pagination]}  
        className={headerCSS.swiper} 
      >
        {[Destination01, Destination02, Destination03, Destination04, Destination05, Destination06].map((dest, index) => (
          <SwiperSlide key={index}>
            <div className={headerCSS.DestinationsCard}>
              <img src={dest} alt={`Destination ${index + 1}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Header;
