import { Outlet } from "react-router-dom";
import AuthNavbar from "../shared/AuthNavbar";
import Footer from "../shared/Footer";

export default function AuthLayout() {
  return (
    <>
      <AuthNavbar />
        <Outlet />
      <Footer />
    </>
  );
}
