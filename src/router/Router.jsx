import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../allPages/Home";
import AuthLayout from "../layout/AuthLayout";
import SignIn from "../auth/SignIn";
import ForgetPass from "../auth/ForgetPass";
import ForgetPassVerification from "../auth/ForgetPassVerification";
import ResetPassword from "@/auth/ResetPassword";
import SignUp from "@/auth/SignUp";
import SignUpVerification from "@/auth/SignUpVerification";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <SignIn />,
      },
      {
        path: "forget-password",
        element: <ForgetPass />,
      },
      {
        path: "forget-password-verification",
        element: <ForgetPassVerification />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "sign-up-verification",
        element: <SignUpVerification />,
      },
    ],
  },
]);

export default Router;
