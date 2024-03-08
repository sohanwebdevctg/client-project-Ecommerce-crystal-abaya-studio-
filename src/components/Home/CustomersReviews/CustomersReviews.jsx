import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import { useEffect } from 'react';

const CustomersReviews = () => {


  // data fetch
  useEffect(() => {
    fetch('customersReviews.json')
    .then((res) => res.json())
    .then((data) => console.log(data))
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
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
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