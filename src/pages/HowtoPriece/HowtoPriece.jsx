import React, { useEffect } from "react";
import "./HowtoPriece.css";
import nigga from "../../assets/Иллюстрация.png";
import NativeSelectDemo from '../../components/Select/Select'

import AOS from "aos";
import "aos/dist/aos.css";
import BTN from "../../components/button/BTN";
import Swipper from "../../components/Swipper/Swipper";
import kurtka from "../../assets/Layer 1 1.png";
import russia from "../../assets/Цена в России.svg";
import uk from "../../assets/Цена в UK.svg";
import mayka from "../../assets/Футболка.svg";
import jins from "../../assets/Джинсы.png";
import vector from "../../assets/Vector 6.svg";
import vector2 from "../../assets/Vector 5.svg";
import icon from "../../assets/Иконка.svg";
import girl from "../../assets/Иллюстрация copy.png";
import svg from "../../assets/Иллюстрация copy 2.png";
import svg2 from "../../assets/Иллюстрация copy 3.png";
import svg3 from "../../assets/Иллюстрация copy 4.png";
import svg4 from "../../assets/Иллюстрация copy 5.png";
import sloy from "../../assets/Слой 2.png";
import iconka from "../../assets/Иконка copy.svg";
import zvezda from "../../assets/рейтинг.svg";
import vew from "../../assets/фон copy.png";
import vew2 from "../../assets/фон copy 2.png";
import vew3 from "../../assets/фон copy 3.png";
import vew4 from "../../assets/фон copy 4.png";
import { useTranslation } from "react-i18next";

const HowtoPriece = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <>
      <section className="max-w-[100%] mt-[50px]">
        <div className="container picture ">
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="flex xl:flex-row flex-col justify-around items-center p-10"
          >
            <div className="xl:w-[60%]">
              <h1 className="xl:text-[62px] md:text-[34px] text-[26px] text-[#FFFF] font-[800]">
               {t("sec1.t1")}
              </h1>
              <p className="xl:text-[20px] md:text-[18px] text-[16px] font-[300] py-[30px]">
                {t("sec1.t2")}
              </p>
              <BTN btn="Получить адрес в UK" />
            </div>
            <div>
              <img src={nigga} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[100%] mt-[150px]">
        <div className="container">
          <div data-aos="fade-right" className="md:w-[40%]">
            <h1 className="text-[#FFF] md:text-[44px] text-[32px] font-[800]">
              {t("sec1.t3")}
            </h1>
          </div>
          <div data-aos="fade-up-left">
            <Swipper />
          </div>

          <div className="flex md:flex-row flex-col justify-around py-[100px] items-center">
            <div data-aos="zoom-in">
              <h1 className="text-[26px] text-[#FFFF] font-[700]">
                Columbia Barlow Pass 550 Turbodown Jacket
              </h1>
              <div className="py-[40px]">
                <img src={russia} alt="" />
              </div>
              <div className="flex justify-center items-center gap-[50px]">
                <img src={mayka} alt="" />
                <img src={vector} alt="" />
              </div>
            </div>
            <div data-aos="flip-left">
              <img src={kurtka} alt="" />
              <div className="text-center">
                <h1 className="text-[18px] font-[300]">
                  Срок доставки примерно 10 дней
                </h1>
                <h1 className="text-[26px] font-[700]">
                  Вы экономите до{" "}
                  <span className="text-[#01CD7D]">$119.56</span>{" "}
                </h1>
              </div>
            </div>
            <div data-aos="zoom-in">
              <h1 className="text-[26px] text-[#FFFF] font-[700]">
                Доставка одежды из Великобритании от £7.79
              </h1>
              <div className="py-[40px]">
                <img src={uk} alt="" />
              </div>
              <div className="flex justify-center items-center gap-[50px]">
                <img src={vector2} alt="" />
                <img src={jins} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[100%] mt-[100px]">
        <div className="container">
          <div className="dark:bg-[#FFF] bg-gray-500 hidden lg:flex justify-around p-10 rounded-[20px]">
            <div className="flex gap-[10px] w-[20.5%] border-r border-gray-600 pr-[5px] ">
              <img src={icon} alt="" />
              <h1 className="text-[18px] font-[700] text-[#FFFF] dark:text-[#1F2428]  ">
                Экономия идет до 70%
              </h1>
            </div>
            <div className="flex gap-[10px] w-[20.5%]">
              <img src={icon} alt="" />
              <h1 className="text-[18px] font-[700] text-[#FFFF] dark:text-[#1F2428]  border-r border-gray-600 pr-[5px] ">
                Только подлинная продукция
              </h1>
            </div>
            <div className="flex gap-[10px] w-[20.5%]">
              <img src={icon} alt="" />
              <h1 className="text-[18px] font-[700] text-[#FFFF] dark:text-[#1F2428]  border-r border-gray-600 pr-[5px] ">
                Оперативная доставка
              </h1>
            </div>
            <div className="flex gap-[10px] w-[20.5%]">
              <img src={icon} alt="" />
              <h1 className="text-[18px] font-[700] text-[#FFFF] dark:text-[#1F2428]">
                Огромный выбор товаров
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[100%] mt-[150px]">
        <div className="container picture">
          <div
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
            className="flex lg:flex-row flex-col justify-around gap-[30px] items-center p-10"
          >
            <div>
              <img src={girl} alt="" />
            </div>
            <div className="lg:w-[80%]">
              <h1 className="lg:text-[30px] text-[24px] font-[700] text-[#FFFF]">
                Поручите нашим мастерам шопинга оформить заказы в английских
                магазинах и освободите время для более важных дел.
              </h1>
              <p className="font-[300] py-[30px] text-[16px] lg:text-[18px]">
                Такой способ покупки также подойдёт, если магазин принимает
                только английские карты.
              </p>
              <BTN btn="Попробовать" />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[100%] mt-[100px]">
        <div className="container">
          <div className="lg:w-[70%] text-center lg:text-start">
            <h1 className="lg:text-[44px] text-[32px]  font-[800] text-white">
              OkeyPost удобная и быстрая доставка посылок из Великобритании{" "}
            </h1>
            <p className="lg:text-[20px] text-[18px] py-[20px] font-[300]">
              {" "}
              Рассчитайте стоимость доставки из Англии к вам домой. Мы получим
              ваши посылки на складе, при необходимости объединим несколько
              доставок в одну и отправим их к вам надежно упакованными.
            </p>
          </div>
          <div className=" bg-white p-10 rounded-[20px] mt-[20px]">
            <div className="flex md:flex-row flex-col justify-around">
              <div>
                <NativeSelectDemo />
              </div>
              <div>
                <NativeSelectDemo />
              </div>
              <div>
                <NativeSelectDemo />
              </div>
              <div>
                <NativeSelectDemo />
              </div>
              <div>
                <NativeSelectDemo />
              </div>
            </div>
            <div className="pt-[30px] ml-[4.5%]">
              <BTN btn="Рассчитать" />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[100%] mt-[100px]">
        <div className="container">
          <div className="lg:w-[70%]">
            <h1 className="lg:text-[44px] text-[36px] font-[800] text-white">
              4 простых шага для ваших покупок в Великобритании{" "}
            </h1>
          </div>
          <div className="flex lg:flex-row text-center flex-col justify-around items-center gap-[40px] py-[50px]">
            <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
              <img className="m-auto lg:m-0" src={svg} alt="" />
              <div className="lg:w-[81%]">
                <h1 className="text-[20px] text-[#FFFF] font-[700]">
                  вы ВЫБИРАЕТЕ ТОВАР
                </h1>
                <p className="text-[16px] font-[300]">
                  в английском магазине, оплачиваете и указываете{" "}
                  <span className="text-[#01CD7D]">адрес склада</span> OkeyPost
                </p>
              </div>
            </div>
            <div data-aos="fade-up"
     data-aos-anchor-placement="center-center">
              <img className="m-auto lg:m-0"  src={svg2} alt="" />
              <div className="lg:w-[81%]">
                <h1 className="text-[20px] text-[#FFFF] font-[700]">
                  ПОКУПКИ ПРИХОДЯТ НА СКЛАД
                </h1>
                <p className="text-[16px] font-[300]">
                  в английском магазине, оплачиваете и указываете{" "}
                  <span className="text-[#01CD7D]">адрес склада</span> OkeyPost
                </p>
              </div>
            </div>
            <div data-aos="fade-down-left">
              <img  className="m-auto lg:m-0"  src={svg3} alt="" />
              <div className="lg:w-[81%]">
                <h1 className="text-[20px] text-[#FFFF] font-[700]">
                  ОТПРАВЛЯЕМ ИХ К ВАМ ДОМОЙ
                </h1>
                <p className="text-[16px] font-[300]">
                  в английском магазине, оплачиваете и указываете{" "}
                  <span className="text-[#01CD7D]">адрес склада</span> OkeyPost
                </p>
              </div>
            </div>
            <div data-aos="fade-down-right">
              <img  className="m-auto lg:m-0"  src={svg4} alt="" />
              <div className="lg:w-[81%]">
                <h1 className="text-[20px] text-[#FFFF] font-[700]">
                  ЗАБИРАЕТЕ свою ПОСЫЛКУ
                </h1>
                <p className="text-[16px] font-[300]">
                  в английском магазине, оплачиваете и указываете{" "}
                  <span className="text-[#01CD7D]">адрес склада</span> OkeyPost
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-[60%] text-center md:text-start py-[40px]">
            <h1 className="text-[20px] font-[300] py-[25px]">
              Не хотите разбираться самостоятельно, наши мастера шопинга с
              радостью купят все товары за вас.
            </h1>
            <BTN btn="Быстрая покупка" />
          </div>
        </div>
      </section>

      <section className="max-w-[100%]">
        <div className="container picture">
          <div className="flex lg:flex-row flex-col gap-[30px] justify-around items-center p-10">
            <div>
              <img src={sloy} alt="" />
            </div>
            <div className="lg:w-[80%]">
              <h1 className="lg:text-[44px] text-[36px] font-[700]">
                Виртуальный тур по нашему складу в реальном времени
              </h1>
              <p className="text-[18px] font-[300] py-[20px]">
                Вы можете всегда посмотреть на нашу слаженую работу на складе
              </p>
              <BTN btn="Попробовать" />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[100%] mt-[100px]">
        <div className="container">
          <div className="lg:w-[68%] ml-0 lg:ml-[10%]">
            <h1 className="lg:text-[44px] text-[28px] text-[#FFF] py-[20px] font-[700]">
              120 000 довольных клиентов в России уже сделали свой выбор
            </h1>
            <p className="text-[20px] font-[300]">
              За последний год десятки тысяч наших клиентов заказали товары из
              Англии и оставили 19 633 отзыва
            </p>
          </div>
          <div className="flex lg:flex-row text-center lg:text-start flex-col justify-around py-[70px] lg:ml-[10%] gap-[100px]">
            <div className="bg-gray-500 p-5 box rounded-[15px]">
              <img className="m-auto lg:m-0" src={iconka} alt="" />
              <div>
                <h1 className="text-[18px] text-[#FFFF] font-[700]">
                  Больше не значит дороже
                </h1>
                <p className="text-[16px] font-[300]">
                  С ростом веса посылки цена за каждые 0.5 кг уменьшается в
                  прогрессии.
                </p>
              </div>
            </div>
            <div className="bg-gray-500 box p-5 rounded-[15px]">
              <img className="m-auto lg:m-0" src={iconka} alt="" />
              <div>
                <h1 className="text-[18px] text-[#FFFF] font-[700]">
                  Больше не значит дороже
                </h1>
                <p className="text-[16px] font-[300]">
                  С ростом веса посылки цена за каждые 0.5 кг уменьшается в
                  прогрессии.
                </p>
              </div>
            </div>
            <div className="bg-gray-500 box p-5 rounded-[15px]">
              <img className="m-auto lg:m-0" src={iconka} alt="" />
              <div>
                <h1 className="text-[18px] text-[#FFFF] font-[700]">
                  Больше не значит дороже
                </h1>
                <p className="text-[16px] font-[300]">
                  С ростом веса посылки цена за каждые 0.5 кг уменьшается в
                  прогрессии.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[100%] mt-[100px]">
        <div className="container">
          <div>
            <h1 className="text-[36px] text-[#FFFF] font-[800]">
              Отзывы и цитаты блогеров:
            </h1>
          </div>
          <div className="flex xl:flex-row flex-col justify-around items-center py-[50px] flex-wrap gap-[30px]">
            <div data-aos="flip-left" className="flex md:flex-row flex-col gap-3 xl:w-[45%] items-center px-[7px] xl:px-[17px] rounded-[15px] bg-[#FFFF] ">
              <img src={vew} alt="" />
              <div>
                <h1 className="text-[18px] font-[700] text-black pt-[25px]">
                  NIKOLAY S
                </h1>
                <img src={zvezda} alt="" />
                <br />
                <h1 className="text-[16px] text-black font-[300]">
                  Ваша доставка самая быстрая и дешёвая!!!
                </h1>
                <br />
                <br /> <br />
                <h1 className="text-[14px] text-[#000] font-[700]">
                  Дата:{" "}
                  <span className="text-[14px] font-[300]">16 Ноября 2021</span>
                </h1>
                <h1 className="text-[14px] text-[#000] font-[700]">
                  Город:{" "}
                  <span className="text-[14px] font-[300]">Сант-Петербург</span>
                </h1>
              </div>
            </div>
            <div data-aos="flip-left" className="flex md:flex-row flex-col gap-3 xl:w-[45%] items-center px-[7px] xl:px-[17px] rounded-[15px] bg-[#FFFF] ">
              <img src={vew4} alt="" />
              <div>
                <h1 className="text-[18px] font-[700] text-black pt-[25px]">
                  DMITRIY D
                </h1>
                <img src={zvezda} alt="" />
                <br />
                <h1 className="text-[16px] text-black font-[300]">
                  Пуховик Levi’s c eBay. Всё приехало быстро и целым.
                </h1>
                <br />
                <br />
                <br />
                <h1 className="text-[14px] text-[#000] font-[700]">
                  Дата:{" "}
                  <span className="text-[14px] font-[300]">16 Ноября 2021</span>
                </h1>
                <h1 className="text-[14px] text-[#000] font-[700]">
                  Город:{" "}
                  <span className="text-[14px] font-[300]">Сант-Петербург</span>
                </h1>
              </div>
            </div>
            <div data-aos="flip-left" className="flex md:flex-row flex-col gap-3 xl:w-[45%] items-center px-[7px] xl:px-[17px] rounded-[15px] bg-[#FFFF] ">
              <img src={vew2} alt="" />
              <div>
                <h1 className="text-[18px] font-[700] text-black pt-[25px]">
                  VLADIMIR E
                </h1>
                <img src={zvezda} alt="" />
                <br />
                <h1 className="text-[16px] text-black font-[300]">
                  Огонь, как всегда! Отдельное спасибо за доп.упаковку, часики
                  от Apple пришли в простом бумажном пакете )
                </h1>
                <br />
                <h1 className="text-[14px] text-[#000] font-[700]">
                  Дата:{" "}
                  <span className="text-[14px] font-[300]">16 Ноября 2021</span>
                </h1>
                <h1 className="text-[14px] text-[#000] font-[700]">
                  Город: <span className="text-[14px] font-[300]">Moscowг</span>
                </h1>
              </div>
            </div>
            <div data-aos="flip-left" className="flex md:flex-row flex-col gap-3 xl:w-[45%] items-center px-[7px] xl:px-[17px] rounded-[15px] bg-[#FFFF] ">
              <img src={vew3} alt="" />
              <div>
                <h1 className="text-[18px] font-[700] text-black pt-[25px]">
                  Оксана
                </h1>
                <img src={zvezda} alt="" />
                <br />
                <h1 className="text-[16px] text-black font-[300]">
                  Очень быстро, надежно! Как всегда большое спасибо за работу!
                </h1>
                <br />
                <br />
                <h1 className="text-[14px] text-[#000] font-[700]">
                  Дата:{" "}
                  <span className="text-[14px] font-[300]">16 Ноября 2021</span>
                </h1>
                <h1 className="text-[14px] text-[#000] font-[700]">
                  Город: <span className="text-[14px] font-[300]">Kazan</span>
                </h1>
              </div>
            </div>
          </div>
        <div className="ml-[2%]">
          <BTN btn="Все отзывы" />
        </div>
        </div>
      </section>

      <section className="max-w-[100%] mt-[100px]">
        <div className="container">
          <div className="lg:ml-[4%]">
            <h1 className="lg:text-[44px] md:text-[36px] text-[24px] text-[#FFFF] font-[800]">
              Ваш личный адрес в Великобритании для покупок
            </h1>
            <br />
            <p className="lg:text-[18px] text-[16px] text-[#FFF] font-[300] dark:text-[#1F2428]">
              С нами вы получаете целых два адреса в UK! У нас есть два склада
              для приема посылок – в Лондоне и Манчестере. Указывайте в магазине
              тот из них, отправка на который обойдется дешевле (или покупка
              будет без налогов). Чаще всего в Лондоне наши клиенты заказывают
              одежду и обувь, а в Манчестер идут гаджеты и всё остальное. С
              OkeyPost вы всегда получаете максимальную выгоду! <br />
              <br />
              При доставке из UK в Россию все ваши товары обязательно
              страхуются. Прием посылок на наш склад, их обработка, удаление
              лишних коробок, хранение сроком до 70 дней – у нас полностью
              бесплатно. Мы также бесплатно проводим объединение посылок из
              разных магазинов в одну. Это необходимо для снижения стоимости
              доставки посылок из UK в Россию.
              <br />
              <br />
              У нас самая выгодная доставка! От $11.99 за посылку! А если у вас
              есть какие-то особенные требования, вроде проверки техники или
              дополнительной пленки для самых хрупких товаров, – операторы
              нашего склада с радостью выполнят их по спецзапросу.
              <br />
              <br />
              Okeypost.com – это надежно, быстро и выгодно. А в наших соцсетях
              вы всегда найдете информацию о лучших скидках fyukbqcrb[
              магазинов. Не обязательно заходить в Черную пятницу или Prime Day,
              крутые акции проходят каждый день!
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-[100%] mt-[100px]">
        <div className="container picture">
          <div className="flex justify-around items-center p-10">
            <div>
                <h1 className="text-[#FFFF] text-[30px] font-[700]">Подпишитеть и будьте в курсе всех скидок и акций магазинов Великобритании!</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowtoPriece;
