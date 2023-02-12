import React from "react";
import { Card, Carousel, Container } from "react-bootstrap";
import "./menu.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import menu from "./menu.json";
const Menu = () => {
  return (
    <>
      <div className="text-center mt-5 menu1">
        <h1 className="mb-5">Moda Cafeye Hoşgeldiniz</h1>
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {menu.map((item) => (
            <SwiperSlide>
              <Card className="col-9 menucard">
                <Card.Img
                  className="h-50"
                  variant="top"
                  height="200px"
                  src={require(`./img/${item.image}`)}
                />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.desc}</Card.Text>
                  <Card.Text>{item.price}₺</Card.Text>
                </Card.Body>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Menu;
