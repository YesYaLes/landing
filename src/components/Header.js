import React from "react";
import logo from "../images/logo.png";
import "./Header.css";
const Header = () => {
  return (
    <div className="background p-10 md:pl-[10%] md:pr-[10%] xl:pl-[15%] xl:pr-[15%]">
      <div className="background fixed left-0 top-0 z-10 flex h-[70px]  w-[100vw] flex-row items-center justify-between pl-10 pr-10 md:h-[85px] xl:h-[100px]">
        <div className="flex h-[50px] w-[50px] items-center justify-center rounded-[50px] bg-white p-1 md:h-[65px] md:w-[65px] xl:h-[80px] xl:w-[80px]">
          <img
            src={logo}
            alt="Some_image"
            className="rounded-[50px] pl-[2px]"
          ></img>
        </div>
        <div className=" flex flex-row items-center gap-[10px] md:flex-row">
          <label className=" hidden font-bold text-white md:block">
            Готовы к подзарядке?
          </label>
          <ul className="flex  items-center justify-center rounded-[10px] bg-yellow-300 p-[10px] transition hover:bg-yellow-100">
            <a className="" href="#contact">
              Свяжитесь с нами
            </a>
          </ul>
        </div>
      </div>
      <div
        data-aos="fade-in"
        data-aos-duration="1000"
        id="top"
        className="mt-[50px] md:mt-[100px]"
      >
        <div className="mt-10 flex flex-col items-center justify-center gap-[30px] scroll-smooth">
          <h3 className="text-center font-sans text-[25px] font-bold text-white">
            S&E-Energy Обеспечит вас бесконечной энергией
          </h3>
          <label className=" text-white md:text-[18px] xl:w-[800px]">
            В S&E-Energy мы считаем, что каждый должен иметь доступ к энергии.
            Поэтому мы создали систему автономного электроснабжения -
            Стационарно Портативную электростанцию, которая обеспечит надежное и
            бесперебойное электроснабжение вашего дома.
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
