
import { Outlet } from "react-router-dom";

import BackgroundAnimation from "../Components/BackgroundAnimation/BackgroundAnimation";
import Navbar from "../Components/Navbar/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar/>
      <Outlet />
       <div>
        <BackgroundAnimation />
      </div> 
    </>
  );
};

export default Layout;
