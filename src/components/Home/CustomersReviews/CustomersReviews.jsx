import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar } from "react-icons/fa";

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
    <div className="my-10">
      {/* customersReviews container section start */}
      <div className="container mx-auto">
        {/* content section start */}
        {/* title section start */}
        <h3 className="text-center lg:text-4xl text-[#252525]">3000+ Satisfied Customers</h3>
        {/* title section end */}
        {/* user details section start */}
        <div>
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
              <div className='text-center mx-auto py-10'>
                <p>{data.descriptions}</p>
                <ul className='flex justify-center items-center my-4'>
                  <li><FaStar className='mx-auto text-center lg:text-2xl'></FaStar></li>
                  <li><FaStar className='mx-auto text-center lg:text-2xl'></FaStar></li>
                  <li><FaStar className='mx-auto text-center lg:text-2xl'></FaStar></li>
                  <li><FaStar className='mx-auto text-center lg:text-2xl'></FaStar></li>
                  <li><FaStar className='mx-auto text-center lg:text-2xl'></FaStar></li>
                </ul>
                <h4>{data.name}</h4>
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