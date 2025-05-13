import React, { useState } from "react";
import Navbar from './Navbar/Navbar.jsx';
import Header from "./Header/Header.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";
import ImageSlider from "./ImageSwipe/ImageSwipe.jsx";
import SessionOne from "./SessionOne/SessionOne.jsx";
import Vedioes from "./Vedioes/Vedioes.jsx";
import BrandSwipe from "./BrandSwipe/BrandSwipe.jsx";
import Partners from "./Partners/Partners .jsx";
import Pricing from "./Pricing/Pricing.jsx";
import SessionTwo from "./SessionTwo/Sessiontwo.jsx";
import Footer from "./Footer/Footer.jsx";
const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  return (
    <div>
      <Navbar />
      <Header onToggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      <ImageSlider />
      <SessionOne />
      <Vedioes />
      <BrandSwipe />
      <Partners />
      <Pricing />
      <SessionTwo />
      <Footer />

    </div>
  );
};

export default App;
