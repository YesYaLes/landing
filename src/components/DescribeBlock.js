import React from "react";
import video from "../videos/S_E_sound.mp4";
import img1 from "../images/DSC6.png";
import img2 from "../images/DSC4.1.png";
import img3 from "../images/DSC5.png";
import img4 from "../images/SPPP-1.JPG";
const DescribeBlock = () => {
  return (
    <div className="pt-[100px]">
      {/* Video Block */}
      <div>
        <div
          className="flex flex-col items-center justify-center gap-[10px]"
          data-aos="fade-in"
          data-aos-duration="1000"
        >
          <h3 className="text-[21px] font-bold ">Автономное электричество </h3>
          <label className="text-center font-serif text-[18px] xl:w-[800px]">
            Происходят стихийные бедствия, проживаете в труднодоступных районах,
            находитесь в кемпинге, путешествуете с семьей, устраиваете вечеринку
            на берегу океана или в лесу, или просто нуждаетесь в бесперебойной
            работе бытовых приборов, холодильника с продуктами или медицинских
            устройств…
          </label>
        </div>
        <div
          className="mt-5 flex flex-col items-center justify-center gap-5"
          data-aos="fade-in"
          data-aos-duration="1000"
        >
          <video
            src={video}
            autoPlay
            muted
            className="w-[100%] rounded-[10px] object-fill md:w-[80%] lg:w-[70%]"
            controls
            loop
          />
          <label
            className="scroll-smooth text-center font-serif text-[18px]"
            id="characteristics"
          >
            Стационарно Портативная электростанция, одно решение для всех ваших
            нужд и потребностей.
          </label>
        </div>
      </div>

      {/* Photos Block */}
      <div className="mt-[100px] flex flex-col gap-[80px]">
        <div
          className="flex flex-col items-center justify-center gap-5 md:flex-row"
          data-aos="fade-in"
          data-aos-duration="1000"
        >
          <img
            src={img1}
            alt="Some_image"
            className="w-[100%] rounded-[10px] md:w-[60%] xl:w-[40%]"
          ></img>
          <label className="w-[100%] text-center font-serif text-[17px] md:w-[300px]">
            Электростанция оснащена новейшими технологиями, такими как генерация
            энергии внутри системы и усовершенствованная система управления
            батареями, которые обеспечивают максимальную эффективность и
            надежность. Основными преимуществами данной разработки является
            полная автономность работы и не подверженность кибернетическим
            атакам. Устройство обладает широким спектром выходных параметров, 2
            розетки переменного тока общей мощностью 3 Квт
          </label>
        </div>
        <div
          className="flex flex-col-reverse items-center justify-center gap-5 md:flex-row"
          data-aos="fade-in"
          data-aos-duration="1000"
        >
          <label className="w-[100%] text-center font-serif text-[17px] md:w-[300px]">
            8 USB-портов трёх типов (Type A, C, QC 3.0)с общей мощностью в 40 Вт
            и возможностью одновременного заряда 8 устройств.
          </label>
          <img
            src={img2}
            alt="Some_image"
            className="w-[100%] rounded-[10px] md:w-[60%] xl:w-[40%]"
          ></img>
        </div>
        <div
          className="flex flex-col items-center justify-center gap-5 md:flex-row"
          data-aos="fade-in"
          data-aos-duration="1000"
        >
          <img
            src={img3}
            alt="Some_image"
            className="w-[100%] rounded-[10px] md:w-[60%] xl:w-[40%]"
          ></img>
          <label className="w-[100%] text-center font-serif text-[17px] md:w-[300px]">
            2 порта (гнёзда 12V по 10A), для питания таких систем как: “Умный
            Дом”, видеонаблюдения и т.д., 2 порта для альтернативных источников
            энергии.Что делает её универсальной и уникальной в любых ситуациях.
          </label>
        </div>
      </div>

      {/* Overall Info Block */}

      <div
        className="mt-[100px] flex flex-col items-center justify-center scroll-smooth"
        id="usage"
        data-aos="fade-in"
        data-aos-duration="1000"
      >
        <h1 className="mb-[40px] text-center font-sans text-[25px] font-bold">
          Униварсальность испозьзования
        </h1>
        <label className="mb-[30px] text-center font-serif text-[18px] xl:w-[800px]">
          SPPP-1+ Power Wall 8000, и вы никогда не останетесь без
          электроэнергии. Наша система автономного электроснабжения проста в
          установке и требует минимального обслуживания, она спроектирована так,
          чтобы ее можно было масштабировать, а излишки энергии продавать в сеть
        </label>
        <img
          src={img4}
          alt="Some_image"
          className="mb-[20px] w-[100%] rounded-[10px] md:w-[70%]"
        />
        <label className="mb-[30px] text-center font-serif text-[18px] xl:w-[800px]">
          SPPP-1+ Power Wall 8000 (аккумуляторная система хранения энергии 8000
          Вт) легко работает с устройствами с большими нагрузками, такими как:
        </label>
        <img
          src=""
          alt="Фото Таблица"
          className="w-[100%] rounded-[10px] md:w-[70%]"
        />
      </div>

      {/* Payment Block */}

      <div
        className="mt-[100px] flex flex-col items-center justify-center"
        data-aos="fade-in"
        data-aos-duration="1000"
      >
        <h1 className="mb-[40px] text-center font-sans text-[25px] font-bold">
          Предпродажный депозит $ 100 (доллар США)
        </h1>
        <label className="mb-[30px] text-center font-serif text-[18px] xl:w-[800px]">
          Вы получите один из самых первых продуктов в этой линейке. Чем больше
          станет наше сообщество, тем лучше мы сможем сделать продукт и главное
          снизить цену на наши устройства. Наша компания отличается от того, к
          чему вы обычно привыкли, так как мы первые кто будет принимать оплату
          за SPPP-1+ Power Wall 8000 не только в $ США, но и в криптовалюте. Во
          время нашей 100-дневной кампании, вы можете внести депозит в $100,
          который даст вам скидку 30% от рекомендованной цены розничной цены
          2024 года.
        </label>
        <h1 className="mb-[40px] text-center font-sans text-[20px] font-bold">
          * Рекомендуемая розничная цена за комплект SPPP-1+ Power Wall 8000 - $
          8500.
        </h1>
      </div>
    </div>
  );
};

export default DescribeBlock;
