import React from "react";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <div data-aos="fade-in" data-aos-duration="1000">
      <img src={logo} alt="Logo" className="w-[150px] h-[150px]" />
      <div>
        <h3>S&E-Energy Обеспечит вас бесконечной энергией </h3>
        <div>
          В S&E-Energy мы считаем, что каждый должен иметь доступ к энергии.
          Поэтому мы создали систему автономного электроснабжения - Стационарно
          Портативную электростанцию, которая обеспечит надежное и бесперебойное
          электроснабжение вашего дома.
        </div>
      </div>
    </div>
  );
};

export default Header;
