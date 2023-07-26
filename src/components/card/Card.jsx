import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const Card = (props) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div data-aos="fade-left"
    data-aos-anchor="#example-anchor"
    data-aos-offset="500"
    data-aos-duration="500" className='flex md:flex-row flex-col items-start  gap-[10px]'>
        <img src={props.Imgteg} alt="" />
        <div className="xl:w-[60%]">
            <h1 className='text-[22px] font-[700] text-[#FFF] pt-[20px]'>{props.title}</h1>
            <p className='text-[16px] font-[300] text-[#FFFF] py-[20px]'>{props.title2} </p>
            <p className='text-[16px] font-[300] text-[#FFFF] py-[20px]'>{props.title3} <span className='font-[600] text-[#01CD7D]'>{props.span2}</span> </p>
            <button className='text-[15px] font-[700] pt-[20px] text-[#01CD7D]'>{props.btn2}→</button>
        </div>
    </div>
  )
}

export default Card