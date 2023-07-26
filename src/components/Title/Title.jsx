import React from 'react'

const Title = (props) => {
  return (
    <div className='bg-gray-500 rounded-[20px] p-7'>
        <img className='py-[10px]' src={props.img} alt="" />
        <div>
            <h1 className='text-[18px] text-[#FFF] font-[700]'>{props.text}</h1>
            <p className='text-[16px] text-[#FFF] py-[20px] font-[300]'>{props.text2}</p>
        </div>
    </div>
  )
}

export default Title