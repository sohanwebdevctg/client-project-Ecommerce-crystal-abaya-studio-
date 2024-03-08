import Banner from "../Banner/Banner";
import CustomersReviews from "../CustomersReviews/CustomersReviews";
import HomeService from "../HomeService/HomeService";
import HowItWorks from "../HowItWorks/HowItWorks";


const Home = () => {
  return (
    <div>
      {/* Banner section start */}
        <Banner></Banner>
      {/* Banner section end */}
      {/* CustomersReviews section start */}
      <CustomersReviews></CustomersReviews>
      {/* CustomersReviews section end */}
      {/* HomeService section start */}
      <HomeService></HomeService>
      {/* HomeService section end */}
      {/* HowItWorks section start */}
      <HowItWorks></HowItWorks>
      {/* HowItWorks section end */}
    </div>
  );
};

export default Home;