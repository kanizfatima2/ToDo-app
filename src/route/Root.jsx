import { Outlet } from "react-router-dom";
import Navbar from "../Layout/Navbar";
import Sidebar from "../Layout/Sidebar";

const Root = () => {
  return (
    <>
      <Sidebar></Sidebar>
      <div className="p-4 sm:ml-64">
        {/* navbar */}
        <Navbar />

        {/* content here  */}
        <Outlet />
      </div>
    </>
  );
};

export default Root;
