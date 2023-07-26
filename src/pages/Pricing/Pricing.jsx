import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import shadow from "../../assets/Ресурс 1 3.png";
import { Button } from "@mui/material";
import shadow2 from "../../assets/Group copy.png";
import shadow3 from "../../assets/Group copy 2.png";
import shadow4 from "../../assets/Group copy 3.png";
import NativeSelectDemo from "../../components/Select/Select";
import BTN from "../../components/button/BTN";
import icon from "../../assets/Иконка copy.svg";
import qwer from '../../assets/Ресурс 1 6.png'
import whatsap from '../../assets/Ватсап.svg'
import vayb from '../../assets/Вайбер.svg'
import chat from '../../assets/Чат.svg'

const Pricing = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="max-w-[100%] mt-[40px]">
        <div className="container picture">
          <div className="p-10 ">
            <h1 className="md:ml-[4%] ml-0 text-center md:text-start text-[32px] md:text-[48px] text-[#FFFF] font-[800]">
              Услуги доставки из Великобритании
            </h1>
          </div>
        </div>
      </section>

      <section className="max-w[100%] mt-[100px]">
        <div className="container">
          <div data-aos="flip-down" className="flex lg:flex-row flex-col gap-[20px] items-center justify-around">
            <div >
              <img src={shadow} alt="" />
              <div className="lg:w-[90%]">
                <h1 className="text-[24px] text-[#FFFF] font-[700]">
                  Ваш личный адрес для покупок
                </h1>
                <p className="text-[18px] font-[300] py-[20px]">
                  на нашем современном автоматизированном складе в безналоговом
                  Делавэре
                </p>
                <Button variant="contained">Бесплатно</Button>
              </div>
            </div>
            <div>
              <img src={shadow2} alt="" />
              <div className="lg:w-[90%]">
                <h1 className="text-[24px] text-[#FFFF] font-[700]">
                  Ваш личный адрес для покупок
                </h1>
                <p className="text-[18px] font-[300] py-[20px]">
                  на нашем современном автоматизированном складе в безналоговом
                  Делавэре
                </p>
                <Button variant="contained">от £10.00</Button>
              </div>
            </div>
            <div>
              <img src={shadow3} alt="" />
              <div className="lg:w-[90%]">
                <h1 className="text-[24px] text-[#FFFF] font-[700]">
                  Ваш личный адрес для покупок
                </h1>
                <p className="text-[18px] font-[300] py-[20px]">
                  на нашем современном автоматизированном складе в безналоговом
                  Делавэре
                </p>
                <Button variant="contained">Бесплатно</Button>
              </div>
            </div>
            <div>
              <img src={shadow4} alt="" />
              <div className="lg:w-[90%]">
                <h1 className="text-[24px] text-[#FFFF] font-[700]">
                  Ваш личный адрес для покупок
                </h1>
                <p className="text-[18px] font-[300] py-[20px]">
                  на нашем современном автоматизированном складе в безналоговом
                  Делавэре
                </p>
                <Button variant="contained">от £10.00</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[100%] mt-[100px]">
        <div className="container">
          <div className="w-[70%] ml-[4%]">
            <h1 className="text-[#FFFF] md:text-[44px] text-[32px] font-[800]">
              Онлайн-калькулятор стоимости доставки товара
            </h1>
            <p className="text-[20px] font-[300] ">
              Задайте необходимые параметры посылки, и калькулятор рассчитает
              приблизительную стоимость доставки вашей посылки из Англии.
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
        <div className="container hidden lg:block">
          <div className="flex  bg-gray-500 p-10 mt-[30px] rounded-[20px] justify-around">
            <div className="flex items-center gap-2">
              <img src={icon} alt="" />
              <h1 className="text-[18px] text-[#FFF]">Почта России</h1>
            </div>
            <div className="flex gap-[100px] justify-between">
              <div className="border-l border-[#fefefe] pl-4">
                <h1 className="text-[14px] text-[#fefefe]">Сроки:</h1>
                <h1 className="text-[#FFFF] font-[700]">10-14 дней</h1>
              </div>
              <div className="border-l border-[#fefefe] pl-4">
                <h1 className="text-[14px] text-[#fefefe]">
                  Стоимость доставки:
                </h1>
                <h1 className="text-[#FFFF] font-[700]">от £27.00</h1>
              </div>
              <div className="border-l border-[#fefefe] pl-4">
                <h1 className="text-[14px] text-[#fefefe]">Итого:</h1>
                <h1 className="text-[#FFFF] font-[700]">£41.99</h1>
              </div>
            </div>
          </div>
          <div className="flex  bg-gray-500 p-10 mt-[30px] rounded-[20px] justify-around">
            <div className="flex items-center gap-2">
              <img src={icon} alt="" />
              <h1 className="text-[18px] text-[#FFF]">EMS ПОЧТА РОССИЯ</h1>
            </div>
            <div className="flex gap-[100px] justify-between">
              <div className="border-l border-[#fefefe] pl-4">
                <h1 className="text-[14px] text-[#fefefe]">Сроки:</h1>
                <h1 className="text-[#FFFF] font-[700]">9-12 дней</h1>
              </div>
              <div className="border-l border-[#fefefe] pl-4">
                <h1 className="text-[14px] text-[#fefefe]">
                  Стоимость доставки:
                </h1>
                <h1 className="text-[#FFFF] font-[700]">от £40.00</h1>
              </div>
              <div className="border-l border-[#fefefe] pl-4">
                <h1 className="text-[14px] text-[#fefefe]">Итого:</h1>
                <h1 className="text-[#FFFF] font-[700]">£54.55</h1>
              </div>
            </div>
          </div>
          <div className="flex  bg-gray-500 p-10 mt-[30px] rounded-[20px] justify-around">
            <div className="flex items-center gap-2">
              <img src={icon} alt="" />
              <h1 className="text-[18px] text-[#FFF]">
                ПОЧТА РОССИИ МЕЛКИЕ ПАКЕТЫ
              </h1>
            </div>
            <div className="flex gap-[100px] justify-between">
              <div className="border-l border-[#fefefe] pl-4">
                <h1 className="text-[14px] text-[#fefefe]">Сроки:</h1>
                <h1 className="text-[#FFFF] font-[700]">10-14 дней</h1>
              </div>
              <div className="border-l border-[#fefefe] pl-4">
                <h1 className="text-[14px] text-[#fefefe]">
                  Стоимость доставки:
                </h1>
                <h1 className="text-[#FFFF] font-[700]">от £13.00</h1>
              </div>
              <div className="border-l border-[#fefefe] pl-4">
                <h1 className="text-[14px] text-[#fefefe]">Итого:</h1>
                <h1 className="text-[#FFFF] font-[700]">£90.50</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[100%] mt-[100px]">
        <div className="container">
          <div className="md:w-[70%] ml-[4%]">
            <h1 className="text-[#FFFF] text-[44px] font-[800]">
              Услуги склада
            </h1>
            <div className="flex 2xl:flex-row m-auto flex-col items-center gap-[50px] justify-between">
              <div className="">
                <div className="flex lg:flex-row flex-col  justify-between gap-0 w-[100%] text-center lg:text-start lg:w-auto m-auto lg:gap-[280px] bg-gray-800 p-5 rounded-[10px] mt-[20px]">
                  <h1 className="text-[18px] text-[#FFFF] font-[700]">
                    Консолидация{" "}
                  </h1>
                  <p className="text-[16px] text-[#FFF] font-[700] lg:border-l-[2px] border-gray-400 pl-[10px]">
                    £1.00/1 трек
                  </p>
                </div>
                <div className="flex lg:flex-row flex-col  justify-between gap-0 w-[100%] text-center lg:text-start lg:w-auto m-auto lg:gap-[280px] bg-gray-800 p-5 rounded-[10px] mt-[20px]">
                  <h1 className="text-[18px] text-[#FFFF] font-[700]">
                    Дополнительная упаковка{" "}
                  </h1>
                  <p className="text-[16px] text-[#FFF] font-[700] lg:border-l-[2px] border-gray-400 pl-[10px]">
                    £1.00/1 трек
                  </p>
                </div>
                <div className="flex lg:flex-row flex-col  justify-between gap-0 w-[100%] text-center lg:text-start lg:w-auto m-auto lg:gap-[280px] bg-gray-800 p-5 rounded-[10px] mt-[20px]">
                  <h1 className="text-[18px] text-[#FFFF] font-[700]">
                    Заполнение декларации{" "}
                  </h1>
                  <p className="text-[16px] text-[#FFF] font-[700] lg:border-l-[2px] border-gray-400 pl-[10px]">
                    £1.00/1 трек
                  </p>
                </div>
              </div>
              <div>
              <div className="flex lg:flex-row flex-col  justify-between gap-0 w-[100%] text-center lg:text-start lg:w-auto m-auto lg:gap-[280px] bg-gray-800 p-5 rounded-[10px] mt-[20px]">
                  <h1 className="text-[18px] text-[#FFFF] font-[700]">
                    Заполнение декларации{" "}
                  </h1>
                  <p className="text-[16px] text-[#FFF] font-[700] lg:border-l-[2px] border-gray-400 pl-[10px]">
                    £1.00/1 трек
                  </p>
                </div>
                <div className="flex lg:flex-row flex-col  justify-between gap-0 w-[100%] text-center lg:text-start lg:w-auto m-auto lg:gap-[280px] bg-gray-800 p-5 rounded-[10px] mt-[20px]">
                  <h1 className="text-[18px] text-[#FFFF] font-[700]">
                    Упаковка предметов{" "}
                  </h1>
                  <p className="text-[16px] text-[#FFF] font-[700] lg:border-l-[2px] border-gray-400 pl-[10px]">
                    £1.00/1 трек
                  </p>
                </div>
                <div className="flex lg:flex-row flex-col  justify-between gap-0 w-[100%] text-center lg:text-start lg:w-auto m-auto lg:gap-[280px] bg-gray-800 p-5 rounded-[10px] mt-[20px]">
                  <h1 className="text-[18px] text-[#FFFF] font-[700]">
                    Разделение заказа{" "}
                  </h1>
                  <p className="text-[16px] text-[#FFF] font-[700] lg:border-l-[2px] border-gray-400 pl-[10px]">
                    £1.00/1 трек
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[40px] bg-gray-600 p-7 rounded-[20px] flex items-center justify-between">
            <div>
              <h1 className="text-[18px] text-[#FFF] font-[700]">
                Фото содержимого входящей посылки
              </h1>
              <p className="text-[14px] text-[#FFF] font-[400]">
                3 фото за $5 или 10 фото за $8, а ещё можно попросить
                сфотографировать бирку или подарочный сертификат
              </p>
            </div>
            <div className="border-l-[2px] border-white md:w-[20%] pl-[20px]">
              <h1 className="font-[700] text-[#FFF]">£1.00 за 1 фото</h1>
            </div>
          </div>
          <div className="mt-[40px] bg-gray-600 p-7 rounded-[20px] flex items-center justify-between">
            <div>
              <h1 className="text-[18px] text-[#FFF] font-[700]">
                Сборка исходящей посылки вне очереди или экспресс сборка
              </h1>
              <p className="text-[14px] text-[#FFF] font-[400]">
                Чтобы сэкономить время
              </p>
            </div>
            <div className="border-l-[2px] border-white md:w-[20%] pl-[20px]">
              <h1 className="font-[700] text-[#FFF]">£5.00</h1>
            </div>
          </div>
          <div className="mt-[40px] bg-gray-600 p-7 rounded-[20px] flex items-center justify-between">
            <div>
              <h1 className="text-[18px] text-[#FFF] font-[700]">
                Возврат вещей в магазин
              </h1>
              <p className="text-[14px] text-[#FFF] font-[400]">
                В случае, если вещи нельзя отправить в страну назначения,
                возврат в магазин для услуги "Виртуальный адрес"
              </p>
            </div>
            <div className="border-l-[2px] border-white md:w-[20%] pl-[20px]">
              <h1 className="font-[700] text-[#FFF]">£10 + почтовые расходы</h1>
            </div>
          </div>
          <div className="mt-[40px] bg-gray-600 p-7 rounded-[20px] flex items-center justify-between">
            <div>
              <h1 className="text-[18px] text-[#FFF] font-[700]">
                Проверка техники на работоспособность
              </h1>
              <p className="text-[14px] text-[#FFF] font-[400]">
                Проверка электроники на включение/выключение (запрос через
                тикеты).
              </p>
            </div>
            <div className="border-l-[2px] md:w-[20%] border-white pl-[20px]">
              <h1 className="font-[700] text-[#FFF]">£10</h1>
            </div>
          </div>
          <div className="mt-[40px] bg-gray-600 p-7 rounded-[20px] flex items-center justify-between">
            <div>
              <h1 className="text-[18px] text-[#FFF] font-[700]">
                Удаление инвойса
              </h1>
              <p className="text-[14px] text-[#FFF] font-[400]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
            <div className="border-l-[2px] md:w-[20%] border-white pl-[20px]">
              <h1 className="font-[700] text-[#FFF]">£1.00 за 1 фото</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[100%] mt-[140px]">
        <div className="container">
          <div className="lg:w-[93%] lg:ml-[4%]">
            <h1 className="text-[#FFFF] text-[44px] font-[800]">
              Покупки с операторами Okeypost.com
            </h1>
            <div className="mt-[40px] bg-gray-600 p-7 rounded-[20px]  flex lg:flex-row flex-col items-center justify-between">
              <div>
                <h1 className="text-[18px] text-[#FFF] font-[700]">
                  Быстрое оформление покупок в интернет-магазинах
                </h1>
                <p className="text-[14px] text-[#FFF] font-[400]">
                  Вы присылаете ссылки, а оформлением заказов занимаются
                  операторы Почтой.ком. Они сделают покупки за вас,
                  проконтролируют доставку на склад и сообщат, когда всё будет
                  готово.
                </p>
              </div>
              <div className="lg:border-l-[2px] pt-[20px] lg:pt-0 border-white pl-[20px]">
                <h1 className="font-[700] text-[#FFF]">
                  5% от стоимости товаров минимум £7 для каждого магазина Но не
                  менее £7 для каждого лота eBay
                </h1>
              </div>
            </div>
            <div className="mt-[40px] bg-gray-600 p-7 rounded-[20px]  flex lg:flex-row flex-col items-center justify-between">
              <div>
                <h1 className="text-[18px] text-[#FFF] font-[700]">
                Фото товара по услуге "Покупка с операторами"
                </h1>
                <p className="text-[14px] text-[#FFF] font-[400]">
                Три фото выбранного вами товара, приобретенного по услуге "Полное сопровождение"
                </p>
              </div>
              <div className="lg:border-l-[2px] pt-[20px] lg:pt-0 border-white pl-[20px]">
                <h1 className="font-[700] text-[#FFF]">
                £2
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[100%] mt-[100px]">
        <div className="container picture">
          <div className="flex lg:flex-row flex-col justify-around gap-[30px] items-center p-10">
            <div>
              <img src={qwer} alt="" />
            </div>
            <div className="lg:w-[80%] ">
              <h1 className="text-[22px] lg:text-[30px] text-[#FFF] font-[700]">Попробуйте заказывать с оператором прямо сейчас. Пришлите ссылку на товар, его купят и доставят на наш склад в кратчайшие сроки.</h1>
              <p className="text-[16px] py-[30px]">Введите ссылку на товар</p>
              <div className="border-b border-white lg:w-[50%] mb-[40px]">
              </div>
              <div className="flex lg:flex-row flex-col justify-between items-center lg:w-[80%]">
              <BTN btn="Отправить"/>
              <h1 className="text-[14px] lg:w-[70%] font-[400] text-white">Нажимая на кнопку вы подтверждаете согласие с правилами предоставления услуги и политикой конфиденциальности</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[100%] mt-[100px]">
        <div className="container">
        <div className="md:w-[93%] ml-[4%]">
            <h1 className="text-[#FFFF] text-[44px] font-[800]">
            Страхование
            </h1>
            <div className="mt-[40px] bg-gray-600 p-7 rounded-[20px]  flex items-center justify-between">
              <div>
                <h1 className="text-[18px] text-[#FFF] font-[700]">
                Дополнительное страxование                </h1>
              </div>
              <div className="border-l-[2px] md:w-[50%] border-white pl-[20px]">
                <h1 className="font-[700] text-[#FFF]">
                5% от суммы на которую xотите застраxовать
                </h1>
              </div>
            </div>
            <div className="mt-[40px] bg-gray-600 p-7 rounded-[20px]  flex items-center justify-between">
              <div>
                <h1 className="text-[18px] text-[#FFF] font-[700]">
                Почта России и ЕМС             </h1>
              </div>
              <div className="border-l-[2px] md:w-[50%] border-white pl-[20px]">
                <h1 className="font-[700] text-[#FFF]">
                Застраxовано по умолчанию на £50.00
                </h1>
              </div>
            </div>
            <div className="mt-[40px] bg-gray-600 p-7 rounded-[20px]  flex items-center justify-between">
              <div>
                <h1 className="text-[18px] text-[#FFF] font-[700]">
                Мелкие пакеты            </h1>
              </div>
              <div className="border-l-[2px] md:w-[50%] border-white pl-[20px]">
                <h1 className="font-[700] text-[#FFF]">
                Застраxовано на £20.00
                </h1>
              </div>
            </div>
            </div>
            
        </div>
      </section>

      <section className="max-w-[100%] mt-[100px]">
        <div className="container picture">
          <div className="p-10 flex lg:flex-row flex-col justify-around">
            <h1 className="text-[44px] text-[#FFF] font-[700]">Остались вопросы? Спросите нас в соцсетях!</h1>
            <div className="flex xl:flex-row lg:flex-col flex-row justify-center lg:justify-start gap-[5px]">
              <img src={whatsap} alt="" />
              <img src={vayb} alt="" />
              <img src={chat} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
