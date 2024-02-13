import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { TEInput, TERipple, TETextarea } from "tw-elements-react";

const InfoBlock = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <div>
      <div
        className=" ml-0 w-[100%]  flex-row p-10 md:pl-[10%] md:pr-[10%] xl:ml-[25%] xl:w-[50%] xl:pl-[15%] xl:pr-[15%] "
        data-aos="fade-in"
        data-aos-duration="1000"
      >
        <Accordion
          open={open === 1}
          className="mb-2 rounded-lg border border-blue-gray-100 px-4"
        >
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className={`border-b-0 transition ${
              open === 1 ? "font-bold  hover:opacity-50" : ""
            }`}
          >
            Как будет производиться оплата и доставка?
          </AccordionHeader>
          <AccordionBody className="pt-0 text-base font-normal">
            Окончательный платеж будет производиться непосредственно перед
            отправкой вам электростанции. В течение нескольких дней после
            окончания кампании, вы получите от нас электронное письмо, c
            перечнем наших сервисных центров. Узнаете дату отправки вам
            электростанции и сможете сделать окончательный платеж, за вычетом
            депозита в размере $ 100, который вы заплатили здесь онлайн $ 100
            (доллар США).
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 2}
          className="mb-2 rounded-lg border border-blue-gray-100 px-4"
        >
          <AccordionHeader
            onClick={() => handleOpen(2)}
            className={`border-b-0 transition ${
              open === 2 ? "font-bold hover:opacity-50" : ""
            }`}
          >
            Какие форс-мажоры могут позникнуть?
          </AccordionHeader>
          <AccordionBody className="pt-0 text-base font-normal">
            Для достижения цели необходимы большие производители. Основными
            производителями SPPP-1 и Power Wall 8000, будут известные компании
            из Испании (Европа), и Канады (Северная Америка). Мы рассматриваем
            как риски, так и проблемы в нашем производстве. На данный момент все
            задачи находятся под контролем, и мы уверены, что SPPP-1 + Power
            Wall 8000 ,будет лучшим продуктом на мировом рынке!
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 3}
          className="rounded-lg border border-blue-gray-100 px-4"
        >
          <AccordionHeader
            onClick={() => handleOpen(3)}
            className={`border-b-0 transition ${
              open === 3 ? "font-bold hover:opacity-50" : ""
            }`}
          >
            Смогу ли я отследить доставку , а потом установить оборудование?
          </AccordionHeader>
          <AccordionBody className="pt-0 text-base font-normal">
            Всю дорогу вы будете получать от нашей команды, статус обновления по
            производству. Как только электростанция, прибывает к вашему местному
            дилеру, вы сможете ее забрать, и сертифицированные специалисты
            установят ее вам, и дадут рекомендации по ее обслуживанию.
          </AccordionBody>
        </Accordion>
      </div>

      {/* Summary */}

      <div
        className="mt-[100px] flex flex-col items-center justify-center p-10 md:pl-[10%] md:pr-[10%] xl:pl-[15%] xl:pr-[15%] "
        data-aos="fade-in"
        data-aos-duration="1000"
      >
        <h1 className="mb-[40px]  w-[100%] text-center font-sans text-[25px] font-bold md:w-[800px] ">
          Ответственное отношение к вашим потребностям
        </h1>
        <label className="mb-[30px] text-center font-serif md:text-[18px] xl:w-[800px]">
          Если вы планируете отправиться на природу, просто отключите
          электростанцию SPPP-1 и возьмите ее с собой. А с переносной
          аккумуляторной системой хранения - Power Wall 2000, которая
          представляет собой модульную конструкцию, вы сможете нарастить
          емкостью вашей станции до 10 кВт. И у вас будет достаточно энергии для
          работы и отдыха на природе. Модульность - это вариант для людей,
          которым нужна серьезная мощность.
        </label>
        <label className="mb-[30px] text-center  font-semibold md:text-[18px] xl:w-[800px]">
          Доверьтесь S&E-Energy , и мы поможем вам перейти на чистую энергию,
          сэкономить деньги и снизить воздействие на окружающую среду.
        </label>
      </div>

      {/* Response Block */}

      <div
        className=" background mb-[100px] mt-[50px] flex flex-col items-center justify-center scroll-smooth p-10 md:flex-row md:gap-5 md:pl-[10%] md:pr-[10%] xl:pl-[15%] xl:pr-[15%] "
        id="contact"
        data-aos="fade-in"
        data-aos-duration="1000"
      >
        <div className="mb-5 flex w-[300px] flex-col items-center justify-center">
          <h1 className="mb-[10px] font-sans text-[25px] font-bold text-white">
            Остались вопросы?
          </h1>
          <label className="w-[100%] text-center  text-white md:w-[300px] md:text-[17px]">
            Напишите что вы хотели бы узнать, и наши специалисты свяжутся с вами
            в кратчайшее время
          </label>
        </div>
        <div
          className="dark:bg-neutral-700 block max-w-sm rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
          data-aos="fade-in"
          data-aos-duration="1000"
        >
          <form>
            {/* <!--Name input--> */}
            <TEInput type="text" label="Имя" className="mb-6"></TEInput>
            {/* <!--E-mail input--> */}
            <TEInput
              type="email"
              label="Адресс почты"
              className="mb-6"
            ></TEInput>

            {/* <!--Message textarea--> */}
            <div className="relative mb-6">
              <TETextarea
                id="exampleFormControlTextarea13"
                label="Содержание"
                rows={3}
              />
            </div>

            {/* <!--Checkbox--> */}
            <div className="mb-6 flex min-h-[1.5rem] items-center justify-center pl-[1.5rem]">
              <input
                className="checked:border-primary checked:bg-primary dark:checked:border-primary dark:checked:bg-primary border-neutral-300 dark:border-neutral-600 relative float-left -ml-[1.5rem] mr-[6px] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                type="checkbox"
                value=""
                id="exampleCheck10"
              />
              <label
                className="inline-block pl-[0.15rem] hover:cursor-pointer"
                htmlFor="exampleCheck10"
              >
                Отправить мне копию сообщения
              </label>
            </div>

            {/* <!--Submit button--> */}
            <TERipple rippleColor="light" className="w-full">
              <button
                type="button"
                className="bg-primary hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                Отправить
              </button>
            </TERipple>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InfoBlock;
