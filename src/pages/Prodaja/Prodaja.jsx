import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import BTN from "../../components/button/BTN";
import Card from "../../components/card/Card";
import wtf from "../../assets/фон copy 5.png";
import victoria from "../../assets/фон copy 6.png";
import victoria2 from "../../assets/фон copy 7.png"
import victoria3 from "../../assets/фон copy 8.png"
import whatsap from '../../assets/Ватсап.svg'
import vayb from '../../assets/Вайбер.svg'
import chat from '../../assets/Чат.svg'


const Prodaja = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <section className="max-w-[100%] mt-[50px]">
        <div data-aos="zoom-in" className="container picture">
          <div className="lg:ml-[6%] p-10">
            <h1 className="lg:text-[48px] md:text-[36px] text-[24px] text-[#FFF] font-[800]">Распродажи</h1>
            <p className="lg:text-[24px] text-[18px] text-[#FFFF] font-[700] py-[25px]">
              ранний доступ к распродажам в магазинах
            </p>
            <BTN btn="Получить адрес в UK" />
          </div>
        </div>
      </section>

      <section className="max-w-[100%] mt-[100px]">
        <div className="container">
          <div className="md:w-[60%] text-center md:text-start md:ml-[6%]">
            <h1 className="md:text-[44px] text-[34px] text-[#FFF] font-[800]">
              Black Friday Early Access ранний доступ к распродажам в магазинах
              Великобритании!
            </h1>
          </div>
        </div>
      </section>

      <section className="max-w-[100%]">
        <div className="container">
          <div  className="grid xl:grid-cols-2 grid-cols-1 gap-[30px]">
            <Card 
              Imgteg={wtf}
              title="Abercrombie & Fitch"
              title2="цены от £7.99 (3365₽) разделе: мужские вещи: CLEARANCE женские вещи: CLEARANCE"
              title3="качественные детские вещи
на "
              span2="Abercrombie kids"
              btn2="Только выкуп с оператором "
            />
            <Card
              Imgteg={victoria2}
              title="Timberland"
              title2="NEW!
Коллаб Tommy Hilfiger x Timberland!"
              title3="Ботинки от £7.99 (3365₽)
Зимние шапки за £7.99 (3365₽)"
              btn2="Только выкуп с оператором "
            />
            <Card
              Imgteg={victoria3}
              title="Polo Ralph Lauren"
              title2="Рубашка за £7.99 (3365₽)
Худи за £7.99 (3365₽)
Свитшот с лого за £7.99 (3365₽)"
              title3="До - 40% в разделе SALE"
              btn2="Только выкуп с оператором "
            />
            <Card
              Imgteg={victoria}
              title="Victoria's Secret"
              title2="Лосьоны и мисты за £7.99 (3365₽)
7 трусиков за £7.99 (3365₽)
Халаты за £7.99 (3365₽)"
              title3="Потрать £7.99 (3365₽) - получи купон на $25 на следующий заказ"
              btn2="В магазин "
            />
            <Card
              Imgteg={wtf}
              title="Abercrombie & Fitch"
              title2="цены от £7.99 (3365₽) разделе: мужские вещи: CLEARANCE женские вещи: CLEARANCE"
              title3="качественные детские вещи
на "
              span2="Abercrombie kids"
              btn2="Только выкуп с оператором "
            />
             <Card
              Imgteg={wtf}
              title="Abercrombie & Fitch"
              title2="цены от £7.99 (3365₽) разделе: мужские вещи: CLEARANCE женские вещи: CLEARANCE"
              title3="качественные детские вещи
на "
              span2="Abercrombie kids"
              btn2="Только выкуп с оператором "
            />
            <Card
              Imgteg={victoria2}
              title="Timberland"
              title2="NEW!
Коллаб Tommy Hilfiger x Timberland!"
              title3="Ботинки от £7.99 (3365₽)
Зимние шапки за £7.99 (3365₽)"
              btn2="Только выкуп с оператором "
            />
            <Card
              Imgteg={victoria3}
              title="Polo Ralph Lauren"
              title2="Рубашка за £7.99 (3365₽)
Худи за £7.99 (3365₽)
Свитшот с лого за £7.99 (3365₽)"
              title3="До - 40% в разделе SALE"
              btn2="Только выкуп с оператором "
            />
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
    </div>
  );
};

export default Prodaja;
