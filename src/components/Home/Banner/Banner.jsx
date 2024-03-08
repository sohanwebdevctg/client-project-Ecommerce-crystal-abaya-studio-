import './Banner.css'

const Banner = () => {
  return (
    <div className="bannerCon h-96 sm:h-[450px] md:h-[535px] lg:h-[550px]">
      {/* banner container section start */}
      <div className="container mx-auto h-full">
        {/* content section start */}
        <div className='flex justify-center items-center h-full'>
          <h3 className='text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-normal text-slate-100'>CAS Home Service</h3>
        </div>
        {/* content section end */}
      </div>
      {/* banner container section end */}
      
    </div>
  );
};

export default Banner;