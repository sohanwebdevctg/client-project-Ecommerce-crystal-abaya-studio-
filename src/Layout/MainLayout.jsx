import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";


const MainLayout = () => {
  return (
    <div>
      {/* Navbar section start */}
      <Navbar></Navbar>
      {/* Navbar section end */}
      {/* all data here start */}
      <Outlet></Outlet>
      {/* all data here end */}
      {/* Footer section start */}
      <Footer></Footer>
      {/* Footer section end */}
    </div>
  );
};

export default MainLayout;