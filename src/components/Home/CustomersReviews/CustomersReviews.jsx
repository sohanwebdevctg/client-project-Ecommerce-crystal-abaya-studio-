import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar, FaCheckCircle } from "react-icons/fa";
import comma from '../../../../public/reviews/comma.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';

const CustomersReviews = () => {

  const [usersData, setUsersData] = useState([])


  // data fetch
  useEffect(() => {
    fetch('customersReviews.json')
    .then((res) => res.json())
    .then((data) => setUsersData(data))
  })


  return (
    <div className="my-12">
      {/* customersReviews container section start */}
      <div className="container mx-auto">
        {/* content section start */}
        {/* title section start */}
        <h3 className="text-center text-3xl sm:text-4xl md:text-4xl lg:text-4xl text-[#252525]">3000+ Satisfied <br className='block sm:hidden'></br>Customers</h3>
        {/* title section end */}
        {/* user details section start */}
        <div className='px-1 sm:px-2 lg:px-20'>
          <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {
            usersData.map((data) => <SwiperSlide key={data.id}>
              <div className='text-center mx-auto py-6 px-6 sm:px-7 sm:py-6 lg:py-10 lg:px-14'>
                <img  className='text-center mx-auto w-[30%] sm:w-[20%] md:w-[22%] lg:w-[13%]' src={comma}></img>
                <p className='text-xl sm:text-2xl md:text-3xl lg:text-4xl my-5 sm:my-7 md:my-9 lg:my-10'>{data.descriptions}</p>
                <ul className='flex justify-center items-center my-4'>
                  <li><FaStar className='mx-auto text-center text-xl sm:text-2xl md:text-3xl lg:text-3xl'></FaStar></li>
                  <li><FaStar className='mx-auto text-center text-xl sm:text-2xl md:text-3xl lg:text-3xl'></FaStar></li>
                  <li><FaStar className='mx-auto text-center text-xl sm:text-2xl md:text-3xl lg:text-3xl'></FaStar></li>
                  <li><FaStar className='mx-auto text-center text-xl sm:text-2xl md:text-3xl lg:text-3xl'></FaStar></li>
                  <li><FaStar className='mx-auto text-center text-xl sm:text-2xl md:text-3xl lg:text-3xl'></FaStar></li>
                </ul>
                <h4 className='flex justify-center items-center gap-2 text-lg sm:text-xl md:text-2xl lg:text-xl'>{data.name}<FaCheckCircle></FaCheckCircle></h4>
              </div>
            </SwiperSlide>
            )
          }
          </Swiper>
        </div>
        {/* user details section end */}
        {/* content section end */}
      </div>
      {/* customersReviews container section end */}
      
    </div>
  );
};

export default CustomersReviews;