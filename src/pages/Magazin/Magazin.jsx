import React, { useEffect } from "react";
import "./Product.css";
import prim from '../../assets/image 4.svg'
import srx from '../../assets/image 5.svg'
import mango from '../../assets/image 6.svg'
import pagin from '../../assets/Пагинатор.svg'
import whatsap from '../../assets/Ватсап.svg'
import vayb from '../../assets/Вайбер.svg'
import chat from '../../assets/Чат.svg'
import img21 from '../../assets/image 21.svg'

import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
const Magazin = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div>
      <section className="max-w-[100%] mt-[50px]">
        <div className="container picture">
          <div className="p-10 ml-[2%]">
            <h1 className="lg:text-[48px] md:text-[36px] text-[24px] font-[800] text-[#FFFF] ">Популярные магазины</h1>
          </div>
        </div>
      </section>

      <section className="max-w-[100%] mt-[100px]">
        <div className="container">
          <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-[20px]">
            <div className="bg-white p-7 rounded-[20px]">
                <img className="mt-[20px]" src={prim} alt="" />
                <h1 className="font-[700] pt-[25px] text-[#000]  text-[16px]">Primark (Форма заказа)</h1>
            </div>
            <div className="bg-white p-7 rounded-[20px]">
                <img className="mt-[20px]" src={srx} alt="" />
                <h1 className="font-[700] pt-[25px] text-[#000] text-[16px]">H&M</h1>
            </div>
            <div className="bg-white p-7 rounded-[20px]">
                <img className="mt-[20px]" src={mango} alt="" />
                <h1 className="font-[700] pt-[25px] text-[#000] text-[16px]">Mangooutlet</h1>
            </div>
            <div className="bg-white p-7 rounded-[20px]">
                <img className="mt-[20px]" src={img21} alt="" />
                <h1 className="font-[700] pt-[25px] text-[#000] text-[16px]">Puma</h1>
            </div>
            <div className="bg-white p-7 rounded-[20px]">
                <img className="mt-[20px]" src={srx} alt="" />
                <h1 className="font-[700] pt-[25px] text-[#000] text-[16px]">H&M</h1>
            </div>
            <div className="bg-white p-7 rounded-[20px]">
                <img className="mt-[20px]" src={mango} alt="" />
                <h1 className="font-[700] pt-[25px] text-[#000] text-[16px]">Mangooutlet</h1>
            </div>
            <div className="bg-white p-7 rounded-[20px]">
                <img className="mt-[20px]" src={prim} alt="" />
                <h1 className="font-[700] pt-[25px] text-[#000] text-[16px]">Primark (Форма заказа)</h1>
            </div>
            <div className="bg-white p-7 rounded-[20px]">
                <img className="mt-[20px]" src={img21} alt="" />
                <h1 className="font-[700] pt-[25px] text-[#000] text-[16px]">Puma</h1>
            </div>
            <div className="bg-white p-7 rounded-[20px]">
                <img className="mt-[20px]" src={prim} alt="" />
                <h1 className="font-[700] pt-[25px] text-[#000] text-[16px]">Primark (Форма заказа)</h1>
            </div>
            <div className="bg-white p-7 rounded-[20px]">
                <img className="mt-[20px]" src={prim} alt="" />
                <h1 className="font-[700] pt-[25px] text-[#000] text-[16px]">Primark (Форма заказа)</h1>
            </div>
            <div className="bg-white p-7 rounded-[20px]">
                <img className="mt-[20px]" src={mango} alt="" />
                <h1 className="font-[700] pt-[25px] text-[#000] text-[16px]">Mangooutlet</h1>
            </div>
            <div className="bg-white p-7 rounded-[20px]">
                <img className="mt-[20px]" src={prim} alt="" />
                <h1 className="font-[700] pt-[25px] text-[#000] text-[16px]">Primark (Форма заказа)</h1>
            </div>
            <div className="bg-white p-7 rounded-[20px]">
                <img className="mt-[20px]" src={prim} alt="" />
                <h1 className="font-[700] pt-[25px] text-[#000] text-[16px]">Primark (Форма заказа)</h1>
            </div>
            <div className="bg-white p-7 rounded-[20px]">
                <img className="mt-[20px]" src={mango} alt="" />
                <h1 className="font-[700] pt-[25px] text-[#000] text-[16px]">Mangooutlet</h1>
            </div>
            <div className="bg-white p-7 rounded-[20px]">
                <img className="mt-[20px]" src={prim} alt="" />
                <h1 className="font-[700] pt-[25px] text-[#000] text-[16px]">Primark (Форма заказа)</h1>
            </div>
            <div className="bg-white p-7 rounded-[20px]">
                <img className="mt-[20px]" src={prim} alt="" />
                <h1 className="font-[700] pt-[25px] text-[#000] text-[16px]">Primark (Форма заказа)</h1>
            </div>
            <div className="bg-white p-7 rounded-[20px]">
                <img className="mt-[20px]" src={prim} alt="" />
                <h1 className="font-[700] pt-[25px] text-[#000] text-[16px]">Primark (Форма заказа)</h1>
            </div>
            <div className="bg-white p-7 rounded-[20px]">
                <img className="mt-[20px]" src={img21} alt="" />
                <h1 className="font-[700] pt-[25px] text-[#000] text-[16px]">Puma</h1>
            </div>
            <div className="bg-white p-7 rounded-[20px]">
                <img className="mt-[20px]" src={prim} alt="" />
                <h1 className="font-[700] pt-[25px] text-[#000] text-[16px]">Primark (Форма заказа)</h1>
            </div>
            <div className="bg-white p-7 rounded-[20px]">
                <img className="mt-[20px]" src={prim} alt="" />
                <h1 className="font-[700] pt-[25px] text-[#000] text-[16px]">Primark (Форма заказа)</h1>
            </div>
            <div className="bg-white p-7 rounded-[20px]">
                <img className="mt-[20px]" src={prim} alt="" />
                <h1 className="font-[700] pt-[25px] text-[#000]  text-[16px]">Primark (Форма заказа)</h1>
            </div>
            <div className="bg-white p-7 rounded-[20px]">
                <img className="mt-[20px]" src={srx} alt="" />
                <h1 className="font-[700] pt-[25px] text-[#000] text-[16px]">H&M</h1>
            </div>
            <div className="bg-white p-7 rounded-[20px]">
                <img className="mt-[20px]" src={mango} alt="" />
                <h1 className="font-[700] pt-[25px] text-[#000] text-[16px]">Mangooutlet</h1>
            </div>
            <div className="bg-white p-7 rounded-[20px]">
                <img className="mt-[20px]" src={img21} alt="" />
                <h1 className="font-[700] pt-[25px] text-[#000] text-[16px]">Puma</h1>
            </div>
            <div className="bg-white p-7 rounded-[20px]">
                <img className="mt-[20px]" src={srx} alt="" />
                <h1 className="font-[700] pt-[25px] text-[#000] text-[16px]">H&M</h1>
            </div>
            <div className="bg-white p-7 rounded-[20px]">
                <img className="mt-[20px]" src={mango} alt="" />
                <h1 className="font-[700] pt-[25px] text-[#000] text-[16px]">Mangooutlet</h1>
            </div>
            <div className="bg-white p-7 rounded-[20px]">
                <img className="mt-[20px]" src={prim} alt="" />
                <h1 className="font-[700] pt-[25px] text-[#000] text-[16px]">Primark (Форма заказа)</h1>
            </div>
            <div className="bg-white p-7 rounded-[20px]">
                <img className="mt-[20px]" src={img21} alt="" />
                <h1 className="font-[700] pt-[25px] text-[#000] text-[16px]">Puma</h1>
            </div>
            <div className="bg-white p-7 rounded-[20px]">
                <img className="mt-[20px]" src={prim} alt="" />
                <h1 className="font-[700] pt-[25px] text-[#000] text-[16px]">Primark (Форма заказа)</h1>
            </div>
        
            <div className="bg-white p-7 rounded-[20px]">
                <img className="mt-[20px]" src={prim} alt="" />
                <h1 className="font-[700] pt-[25px] text-[#000] text-[16px]">Primark (Форма заказа)</h1>
            </div>
          </div>
          <div className="flex justify-center py-[50px]">
            <img src={pagin} alt="" />
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

export default Magazin;
