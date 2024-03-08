import { Outlet } from "react-router-dom";


const MainLayout = () => {
  return (
    <div>
      {/* all data here start */}
      <Outlet></Outlet>
      {/* all data here end */}
    </div>
  );
};

export default MainLayout;