import { Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar/NavBar";
import Footer from "../pages/Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="w-[96%] max-w-[1200px] mx-auto">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
