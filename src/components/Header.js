import React from "react";
import logo from "../images/logo.png";
import fon from "../images/Fon.png";

const Header = () => {
  return (
    <>
      <div className="fixed left-10 right-10 top-0 z-10 flex  h-[150px] flex-row items-center justify-between bg-white ">
        <img
          src={logo}
          alt="Logo"
          className="h-[50px] w-[50px] md:h-[75px] md:w-[75px] xl:h-[100px] xl:w-[100px]"
        />
        <div className=" flex flex-row items-center gap-[10px] md:flex-row">
          <label className=" hidden font-bold md:block">
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
        className="mt-[150px]"
      >
        <div className="mt-10 flex flex-col items-center justify-center gap-[30px] scroll-smooth">
          <h3 className="text-center font-sans text-[25px] font-bold">
            S&E-Energy Обеспечит вас бесконечной энергией
          </h3>
          <label className="text-center font-serif text-[18px] xl:w-[800px]">
            В S&E-Energy мы считаем, что каждый должен иметь доступ к энергии.
            Поэтому мы создали систему автономного электроснабжения -
            Стационарно Портативную электростанцию, которая обеспечит надежное и
            бесперебойное электроснабжение вашего дома.
          </label>
        </div>
      </div>
    </>
  );
};

export default Header;
