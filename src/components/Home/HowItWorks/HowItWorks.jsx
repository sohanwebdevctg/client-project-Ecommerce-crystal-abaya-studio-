import customer from '../../../../public/works/customer-service.png';
import calender from '../../../../public/works/calendar_1.png';
import truck from '../../../../public/works/moving-truck.png';
import checkOut from '../../../../public/works/check-out.png';
import deliveryMan from '../../../../public/works/delivery-man.png';

const HowItWorks = () => {
  return (
    <div className="my-8">
      {/* homeService container section start */}
      <div className="container mx-auto my-20 px-3 md:px-2 lg:px-0">
        {/* title section start */}
        <h3 className="text-left text-3xl sm:text-3xl md:text-4xl lg:text-4xl text-[#252525]">How It Works</h3>
            {/* title section end */}
        {/* content section start */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  gap-10 md:gap-5 lg:gap-10 mt-7">
          {/* item1 start */}
          <div className='mx-auto text-center'>
            <img className='w-[40%] h-[50%] sm:w-[35%] sm:h-[45%] md:w-[30%] md:h-[35%] lg:w-[40%] lg:h-[60%] text-center mx-auto' src={customer}></img>
            <h3 className='text-xl sm:text-base md:text-sm lg:text-lg text-[#252525] my-3'>Step 1</h3>
            <p className='text-xl sm:text-base md:text-sm lg:text-lg text-[#252525]'>Our sales team contacts you in 1 working day</p>
          </div>
          {/* item1 end */}
          {/* item2 start */}
          <div className='mx-auto text-center'>
            <img className='w-[40%] h-[50%] sm:w-[35%] sm:h-[45%] md:w-[30%] md:h-[35%] lg:w-[40%] lg:h-[60%] text-center mx-auto' src={calender}></img>
            <h3 className='text-xl sm:text-base md:text-sm lg:text-lg text-[#252525] my-3'>Step 2</h3>
            <p className='text-xl sm:text-base md:text-sm lg:text-lg text-[#252525]'>We book an appointment date you prefer</p>
          </div>
          {/* item2 end */}
          {/* item3 start */}
          <div className='mx-auto text-center'>
            <img className='w-[40%] h-[50%] sm:w-[35%] sm:h-[45%] md:w-[30%] md:h-[35%] lg:w-[40%] lg:h-[60%] text-center mx-auto' src={truck}></img>
            <h3 className='text-xl sm:text-base md:text-sm lg:text-lg text-[#252525] my-3'>Step 3</h3>
            <p className='text-xl sm:text-base md:text-sm lg:text-lg text-[#252525]'>We bring the new collection to your door step</p>
          </div>
          {/* item3 end */}
          {/* item4 start */}
          <div className='mx-auto text-center'>
            <img className='w-[40%] h-[50%] sm:w-[35%] sm:h-[45%] md:w-[30%] md:h-[35%] lg:w-[40%] lg:h-[60%] text-center mx-auto' src={checkOut}></img>
            <h3 className='text-xl sm:text-base md:text-sm lg:text-lg text-[#252525] my-3'>Step 4</h3>
            <p className='text-xl sm:text-base md:text-sm lg:text-lg text-[#252525]'>You place your order in the comfort of your home with customized measurements</p>
          </div>
          {/* item4 end */}
          {/* item5 start */}
          <div className='mx-auto text-center'>
            <img className='w-[40%] h-[50%] sm:w-[35%] sm:h-[45%] md:w-[30%] md:h-[35%] lg:w-[40%] lg:h-[60%] text-center mx-auto' src={deliveryMan}></img>
            <h3 className='text-xl sm:text-base md:text-sm lg:text-lg text-[#252525] my-3'>Step 5</h3>
            <p className='text-xl sm:text-base md:text-sm lg:text-lg text-[#252525]'>We deliver your order to you within 15-21 business days</p>
          </div>
          {/* item5 end */}
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

export default HowItWorks;