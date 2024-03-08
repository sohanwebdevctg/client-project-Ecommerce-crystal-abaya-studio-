import homeService from '../../../../public/hoemService/hoemService.jpg'

const HomeService = () => {
  return (
    <div className="">
      {/* homeService container section start */}
      <div className="container mx-auto">
        {/* content section start */}
        <div className="flex justify-between items-center gap-20">
          {/* image section start */}
          <div className="flex-1">
            <img className='lg:w-full lg:h-full' src={homeService}></img>
          </div>
          {/* image section end */}
          {/* list section start */}
          <div className="flex-1">
            <ul>
              <li>one</li>
              <li>one</li>
              <li>one</li>
              <li>one</li>
              <li>one</li>
            </ul>
          </div>
          {/* list section end */}
        </div>
        {/* content section end */}
      </div>
      {/* homeService container section end */}
      
    </div>
  );
};

export default HomeService;