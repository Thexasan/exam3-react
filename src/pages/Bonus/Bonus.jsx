import React from "react";
import BTN from "../../components/button/BTN";
import Title from "../../components/Title/Title";
import foto from '../../assets/Group.svg'
import raketa from '../../assets/Group.png'

const Bonus = () => {
  return (
    <div>
      <section className="max-w-[100%] mt-[50px]">
        <div className="container picture">
          <div className="p-14">
            <h1 className="lg:text-[48px] md:text-[36px] text-[24px] font-[800] text-[#FFFF]">
              Бонусы и партнёрская программа
            </h1>
            <p className="lg:text-[24px] text-[18px] font-[700] py-[20px] text-[#FFF]">
              Платим $3 с каждой отправленной посылки
            </p>
            <BTN btn="Начать зарабатывать" />
          </div>
        </div>
      </section>

      <section className="max-w-[100%] mt-[150px]">
        <div className="container">
          <div>
            <h1 className="text-[#FFFF] font-[800] md:text-[36px] text-[24px] lg:text-[44px]">Зарабатывать с нами — проще простого:</h1>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-[20px]">
            <Title img={foto} text='Дарим скидку 10% вашим друзьям и подписчикам' text2='На их первую отправленную посылку. Вам есть чем мотивировать зарегистрироваться именно по вашему реферальному коду или ссылке.' />
            <Title img={foto} text='Платим по £3 за отправленную посылку ' text2='Когда клиент, привлеченный по вашей ссылке, отправляет посылку – на ваш счет поступает $3. Вы можете оплачивать этими деньгами ваши посылки или выводить их себе на счет.' />
            <Title img={foto} text='Промо на любой вкус' text2='Автоматические или персональные реферальные коды для отправки друзьям или подписчикам в мессенджеры или социальные сети, а также реферальные ссылки и баннеры для ваших сайтов.' />
            <Title img={foto} text='Выплаты по запросу' text2='На их первую отправленную посылку. Вам есть чем мотивировать зарегистрироваться именно по вашему реферальному коду или ссылке.' />
            <Title img={foto} text='Начисляем кэшбэк £1 на 1 посылку' text2='На их первую отправленную посылку. Вам есть чем мотивировать зарегистрироваться именно по вашему реферальному коду или ссылке.' />
          </div>
        </div>
      </section>

      <section className="max-w-[100%] mt-[100px]">
        <div className="container picture">
          <div className="flex lg:flex-row flex-col justify-around gap-[60px] items-center p-10">
            <div>
              <img src={raketa} alt="" />
            </div>
            <div className="lg:w-[70%]">
              <h1 className="lg:text-[44px] md:text-[36px] text-[24px] font-[800] text-[#FFF]">Готовы начать зарабатывать вместе с нами?</h1>
              <p className="lg:text-[20px] text-[18px] text-[#FFF] font-[300] py-[20px]">Присоединяйтесь к партнерской программе Okeypost.com уже сегодня!</p>
              <BTN btn='Присоедениться' />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bonus;
