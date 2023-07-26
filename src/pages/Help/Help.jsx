import React from 'react'
import Searching from '../../components/Search/Search'
import ControlledAccordions from '../../components/Accordion/Accordion'
import whatsap from '../../assets/Ватсап.svg'
import vayb from '../../assets/Вайбер.svg'
import chat from '../../assets/Чат.svg'

const Help = () => {
  return (
    <div className='overflow-hidden'>
      <section className='max-w-[100%] mt-[50px]'>
        <div data-aos="fade-up-left" className="container picture">
          <div className='lg:ml-[4%] p-10'>
            <h1 className='lg:text-[48px] text-[28px] text-[#FFFF] font-[800]'>Отвечаем на вопросы доставки</h1>
          </div>
        </div>
      </section>

      <section className='max-w-[100%] mt-[100px]'>
        <div className="container">
          <div className='text-start bg-[#FEFEfe] rounded-[20px] p-6 w-[60%] m-auto'>
            <h1 className='text-[#000] ml-[7%] py-[20px]'>Поиск в вопросах и ответах:</h1>
            <div className='text-center'>
            <Searching />
            </div>
          </div>
        </div>
      </section>

      <section className='max-w-[100%] mt-[100px]'>
        <div className="container">
          <div className='lg:ml-[4%]'>
            <h1 className='lg:text-[44px] text-[30px] font-[700] text-[#FFFF]'>Виртуальный адрес в Великобритании</h1>
            <div className='py-[30px]'>
              <ControlledAccordions/>
            </div>
          </div>
        </div>
      </section>

      <section className='max-w-[100%] mt-[100px]'>
        <div className="container">
          <div className='lg:ml-[4%]'>
            <h1 className='lg:text-[44px] text-[30px] font-[700] text-[#FFFF]'>Покупки в магазинаx Англии, скидки и промкода</h1>
            <div className='py-[30px]'>
              <ControlledAccordions/>
            </div>
          </div>
        </div>
      </section>

      <section className='max-w-[100%] mt-[100px]'>
        <div className="container">
          <div className='lg:ml-[4%]'>
            <h1 className='lg:text-[44px] text-[30px] font-[700] text-[#FFFF]'>Доставка из Англии</h1>
            <div className='py-[30px]'>
              <ControlledAccordions/>
            </div>
          </div>
        </div>
      </section>

      <section className='max-w-[100%] mt-[100px]'>
        <div className="container">
          <div className='lg:ml-[4%]'>
            <h1 className='lg:text-[44px] text-[30px] font-[700] text-[#FFFF]'>Общие вопросы</h1>
            <div className='py-[30px]'>
              <ControlledAccordions/>
            </div>
          </div>
        </div>
      </section>

      <section className='max-w-[100%] mt-[100px]'>
        <div className="container">
          <div className='lg:ml-[4%]'>
            <h1 className='lg:lg:text-[44px] text-[30px] font-[700] text-[#FFFF]'>Посылки</h1>
            <div className='py-[30px]'>
              <ControlledAccordions/>
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
    </div>
  )
}

export default Help