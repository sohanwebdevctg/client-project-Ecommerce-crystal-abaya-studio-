import Banner from "../Banner/Banner";
import CustomersReviews from "../CustomersReviews/CustomersReviews";


const Home = () => {
  return (
    <div>
      {/* Banner section start */}
        <Banner></Banner>
      {/* Banner section end */}
      {/* CustomersReviews start */}
      <CustomersReviews></CustomersReviews>
      {/* CustomersReviews end */}
    </div>
  );
};

export default Home;