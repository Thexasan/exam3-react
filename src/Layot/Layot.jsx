import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button, Drawer } from "antd";
import { useState } from "react";

import logo from "../assets/Лого.svg";
import user from "../assets/User.svg";
import icons from "../assets/Соцсети.svg";
import "./Layot.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { Link, Outlet } from "react-router-dom";
import BTN from "../components/button/BTN";
import Switcher from "../Dark/Switcher";
const Layot = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="dark:bg-blue-300">
      <header className="max-w-[100%]">
        <div className="container">
          <nav className="flex xl:flex-row flex-row lg:flex-col justify-between gap-[10px] h-[150px] xl:h-[100px] items-center">
            <div>
              <img className="rotate-diagonal-2" src={logo} alt="" />
            </div>
            <ul className="lg:flex hidden items-center text-[#FFFF] dark:text-[#000000] gap-[30px]">
              <Link  to={"/howtopriece"}>
                <li >Как покупать</li>
              </Link>
              <Link to={"/prodaja"}>
                <li>Распродажи</li>
              </Link>
              <Link to={"/priecing"}>
                <li>Цены</li>
              </Link>
              <Link to={"/help"}>
                <li>Помощь</li>
              </Link>
              <Link to={"/bonus"}>
                <li>Бонусы</li>
              </Link>
              <Link to={"/"}>
                <li>Блог</li>
              </Link>
              <Link to={"/magazine"}>
                <li>Магазины</li>
              </Link>
            </ul>

            <div className="lg:flex hidden gap-[30px] items-center">
              <button className="flex bg-gray-500 p-2 rounded-[20px] gap-[5px] text-[#FFFF] items-center">
                {" "}
                <img src={user} alt="" /> Вход
              </button>
              <BTN btn="Связаться с нами" />
              <Switcher />
            </div>

            <div className="lg:hidden ">
              <Button type="primary" onClick={showDrawer}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                  />
                </svg>
              </Button>
              <Drawer
                title="Basic Drawer"
                bodyStyle={{ backgroundColor: "gray" }}
                placement="left"
                onClose={onClose}
                open={open}
              >
                <Link  onClick={onClose} to={"/howtopriece"}>
                  <li  className="list-none hover:text-green-500 active:text-black drop-shadow-lg text-[20px] font-[700] text-[#FFF]">{t("nav.t1")}</li>
                </Link>
                <Link onClick={onClose} to={"/prodaja"}>
                  <li className="list-none hover:border-b-2 hover:border-white w-fit  hover:text-green-500 active:text-black drop-shadow-lg text-[20px] font-[700] text-[#FFF]">{t("nav.t5")}</li>
                </Link>
                <Link onClick={onClose} to={"/priecing"}>
                  <li className="list-none hover:border-b-2 hover:border-white w-fit  hover:text-green-500 active:text-black drop-shadow-lg text-[20px] font-[700] text-[#FFF]">{t("nav.t4")}</li>
                </Link>
                <Link onClick={onClose} to={"/help"}>
                  <li className="list-none hover:border-b-2 hover:border-white w-fit  hover:text-green-500 active:text-black drop-shadow-lg text-[20px] font-[700] text-[#FFF]">{t("nav.t3")}</li>
                </Link>
                <Link onClick={onClose} to={"/bonus"}>
                  <li className="list-none hover:border-b-2 hover:border-white w-fit  hover:text-green-500 active:text-black drop-shadow-lg text-[20px] font-[700] text-[#FFF]">{t("nav.t6")}</li>
                </Link>
                <Link  onClick={onClose} to={"/"}>
                  <li className="list-none hover:border-b-2 hover:border-white w-fit  hover:text-green-500 active:text-black drop-shadow-lg text-[20px] font-[700] text-[#FFF]">{t("nav.t2")}</li>
                </Link>
                <Link onClick={onClose} to={"/magazine"}>
                  <li className="list-none  hover:border-b-2 hover:border-white w-fit hover:text-green-500 active:text-black drop-shadow-lg text-[20px] font-[700] text-[#FFF]">{t("nav.t7")}</li>
                </Link>
                <button className="flex bg-gray-500 p-2 rounded-[10px] gap-[5px] text-[#FFFF] items-center">
                  {" "}
                  {t("nav.btn")}
                </button>
                <BTN onClick={onClose} btn={t("sec2.t2")} />
                <div className="flex justify-between">
                <Switcher />
                <select onChange={(e)=>changeLanguage(e.target.value)}>
                  <option  value="ru">RU</option>
                  <option  value="en">EN</option>
                </select>
                </div>
              </Drawer>
            </div>
          </nav>
        </div>
      </header>
    <Outlet/>
      <footer className="max-w-[100%] border-b border-gray-500 py-[50px]">
        <div className="container">
          <div className="flex flex-wrap justify-around  items-center text-center lg:text-start lg:items-start">
            <div>
              <img src={logo} alt="" />
              <img className="py-[30px]" src={icons} alt="" />
            </div>
            <div>
              <h1 className="dark:text-[#000] text-[#FFFF] text-[16px] font-[700]">
                О компании
              </h1>
              <p>Услуги</p>
              <p>Цены</p>
              <p>Отзывы</p>
              <p>Контакты</p>
              <p>Вакансии</p>
              <p>Соглашение о персональных данных</p>
              <p>Условия использования</p>
            </div>
            <div>
              <h1 className="dark:text-[#000] text-[#FFFF] text-[16px] font-[700]">
                Полезное
              </h1>
              <p>Как работает наш сервис</p>
              <p>Как покупать с оператором</p>
              <p>Ответы на частые вопросы</p>
              <p>Популярные магазины</p>
              <p>Черный список магазинов</p>
              <p>Актуальные распродажи</p>
            </div>
            <div>
              <h1 className="dark:text-[#000] text-[#FFFF] text-[16px] font-[700]">
                Спецпроекты
              </h1>
              <p>Как работает наш сервис</p>
              <p>Как покупать с оператором</p>
              <p>Ответы на частые вопросы</p>
              <p>Популярные магазины</p>
              <p>Черный список магазинов</p>
            </div>
          </div>
        </div>
      </footer>
      <div className="container">
        <div className="py-[30px] text-center">
          <h1 className="text-gray-500">
            © 2021 Okeypost . Все права защищены.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Layot;
