import React from "react";
import userImage from "../../images/userImage.png";
import starIcon from "../../images/starIcon.svg";
import "../../styles/review/review.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function ReviewSwiper() {
  const data = [
    {
      id: 1,
      name: "فهد صالح",
      comment: "من افضل الشركات تعاملا، سرعه و دقة فالانجاز",
      rate: 4.2,
    },
    {
      id: 2,
      name: "احمد الفهمي",
      comment: "شكرا شركة جبايا المالية، اتمنى لكم التوفيق دوما",
      rate: 4.4,
    },
    {
      id: 3,
      name: "سالم محمد",
      comment: "انصح بشدة",
      rate: 4.1,
    },
    {
      id: 4,
      name: "فيصل اليامي",
      comment: "شركة فعلا مميزه و عمل منظم و متقن، ",
      rate: 4.9,
    },
    {
      id: 5,
      name: "Fahad Saleh",
      comment: "سرعه فالرد و التجاوب، شكرا لكم",
      rate: 4.7,
    },
  ];
  return (
    <main>
      <div className="container">
        <Swiper
          // install Swiper modules
          modules={[Pagination, Autoplay]}
          grabCursor={true}
          initialSlide={1}
          slidesPerView={2}
          speed={800}
          autoplay={{ delay: 1500 }}
          loop={true}
          slideToClickedSlide={true}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          breakpoints={{
            320: { spaceBetween: 20 },
            430: { spaceBetween: 20 },
            580: { spaceBetween: 20 },
          }}
        >
          {data.map((el, index) => (
            <SwiperSlide className="swiper-slide slide-1" key={index}>
              <div className="comment">
                <h5>{el.comment}</h5>
              </div>
              <div className="info-section">
                <div className="user-contaoner">
                  <img
                    src={userImage}
                    alt="user"
                    className="userImage"
                    style={{ width: "25px" }}
                  />
                  <div className="user-box">
                    <h6 className="user-name">{el.name}</h6>
                    <h6 className="user-type">عميل</h6>
                  </div>
                </div>
                <div className="rate-contaoner">
                  <img
                    src={starIcon}
                    alt="user"
                    className="userImage"
                    style={{ width: "25px" }}
                  />
                  <h6 className="rate-number">{el.rate}</h6>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
}
