import React from "react";
import Navbar from "./components/2-navbar/Navbar";
import Topbar from "./components/1-topbar/Topbar";
import CarouselBar from "./components/3-carousel/Carousel";
import Menu from "./components/4-menu-resimli/Menu";
import Icecek from "./components/5-icecek menüsü/Icecek";
import Iletisim from "./components/6-iletisim/IletisimMenu";
import Yorumlar from "./components/7-yorumlar/Yorumlar";

const App = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <CarouselBar />
      <Menu />
      <Icecek />
      <Iletisim />
      <Yorumlar />
    </>
  );
};

export default App;
