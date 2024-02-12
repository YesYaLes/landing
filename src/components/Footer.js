import React from "react";
import { Typography } from "@material-tailwind/react";
import logo from "../images/logo.png";
const Footer = () => {
  return (
    <footer className="w-full bg-white p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-x-12 gap-y-6 bg-white text-center md:justify-between">
        <img src={logo} alt="logo-ct" className="w-10" />
        <ul className="flex flex-wrap items-center gap-x-8 gap-y-2">
          <li>
            <Typography
              as="a"
              href="#top"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              О нас
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#characteristics"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Характеристики
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#usage"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Применение
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#contact"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Контакты
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="border-blue-gray-50 my-8" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2024 S&E-Energy
      </Typography>
    </footer>
  );
};

export default Footer;
