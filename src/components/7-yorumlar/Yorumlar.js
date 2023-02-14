import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Yorum from "./Yorum";
import yorumlar from "./yorum.json";
import "./yorum.scss";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";

const Yorumlar = () => {
  const [yorumDB, setYorumDB] = useState([]);

  const yorumGetir = async () => {
    const yorum = await axios.get("http://localhost:8090/message");
    setYorumDB(yorum.data);
    console.log(yorumDB);
  };

  useEffect(() => {
    yorumGetir();
  }, [yorumDB]);

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {yorumlar.map((yorum) => (
          <SwiperSlide>
            <Yorum {...yorum} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Yorumlar;
