import React from "react";
import Navbar from "./components/2-navbar/Navbar";
import Topbar from "./components/1-topbar/Topbar";
import CarouselBar from "./components/3-carousel/Carousel";
import Menu from "./components/4-menu-resimli/Menu";

const App = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <CarouselBar />
      <Menu />
    </>
  );
};

export default App;
