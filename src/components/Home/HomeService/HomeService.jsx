import { useEffect, useState } from 'react';
import homeService from '../../../../public/homeService/homeService.jpg'
import { FaCheck } from "react-icons/fa";

const HomeService = () => {

  const [listData, setListData] = useState([])


  // data fetch
  useEffect(() => {
    fetch('homeService.json')
    .then((res) => res.json())
    .then((data) => setListData(data))
  })

  return (
    <div className="">
      {/* homeService container section start */}
      <div className="container mx-auto">
        {/* content section start */}
        <div className="md:flex md:justify-between md:items-center md:gap-10 lg:gap-16">
          {/* image section start */}
          <div className="md:flex-1">
            <img className='h-full w-full sm:h-full sm:w-full md:h-[700px] md:w-full lg:w-full lg:h-full sm:p-5 md:p-0' src={homeService}></img>
          </div>
          {/* image section end */}
          {/* list section start */}
          <div className="md:flex-1 space-y-5 p-8 sm:p-12 md:p-0">
            {/* title section start */}
            <h3 className="text-left text-3xl sm:text-3xl md:text-4xl lg:text-4xl text-[#252525]">Home Service</h3>
            {/* title section end */}
            {/* details section start */}
            <p className='text-xl sm:text-lg md:text-xl lg:text-[22px] text-[#252525] font-bold'>Book your appointment from the comfort of your home</p>
            {/* details section end */}
            <ul className='space-y-2'>
              {
                listData.map((data) => <li className='text-lg sm:text-base md:text-lg lg:text-[22px] flex justify-start items-center gap-2 text-[#252525BF] font-semibold' key={data.id}><FaCheck></FaCheck>{data.item}</li>)
              }
            </ul>
          </div>
          {/* list section end */}
        </div>
        {/* content section end */}
        {/* button section start */}
        <div className='mx-auto text-center my-10 md:my-14'>
          <button className='text-[#fff] btn bg-[#2c332f] btn-lg px-6 py-3 sm:px-7 sm:py-3 rounded-md inline-block  hover:shadow-red-200 hover:shadow-xl duration-500 text-base sm:text-base md:text-base lg:text-base'>WhatsApp for Service Details</button>
        </div>
        {/* button section end */}
      </div>
      {/* homeService container section end */}
      
    </div>
  );
};

export default HomeService;