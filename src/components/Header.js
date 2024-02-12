import React from "react";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <div data-aos="fade-in" data-aos-duration="1000">
      <div className="flex flex-row justify-between">
        <img
          src={logo}
          alt="Logo"
          className="h-[100px] w-[100px] xl:h-[150px] xl:w-[150px]"
        />
        <div className="absolute right-0 top-0 flex flex-col items-center gap-[10px] md:flex-row">
          <label className="font-serif">Готовы к подзарядке?</label>
          <div className="flex h-[40px] items-center justify-center rounded-[10px] bg-yellow-300 p-[10px] transition hover:bg-yellow-100">
            <label className="font-serif">Свяжитесь с нами</label>
          </div>
        </div>
      </div>

      <div
        className="mt-10 flex flex-col items-center justify-center gap-[30px] scroll-smooth"
        id="top"
      >
        <h3 className="text-center font-sans text-[25px] font-bold">
          S&E-Energy Обеспечит вас бесконечной энергией
        </h3>
        <label className="text-center font-serif text-[18px] xl:w-[800px]">
          В S&E-Energy мы считаем, что каждый должен иметь доступ к энергии.
          Поэтому мы создали систему автономного электроснабжения - Стационарно
          Портативную электростанцию, которая обеспечит надежное и бесперебойное
          электроснабжение вашего дома.
        </label>
      </div>
    </div>
  );
};

export default Header;
