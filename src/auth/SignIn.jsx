import { useState } from "react";
import AuthHeader from "../components/Common/AuthHeader";
import AuthSubHeading from "../components/Common/AuthSubHeading";
import Container from "../components/Common/Container";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function SignIn() {
  // States
  const [isPassShow, setISPassShow] = useState(true);

    //  Hook Form
    const{
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm()


    // Submit data
    const onSubmitData = (data) => {
        console.log(data)
        reset()
    }

  return (
    <section className="py-20">
      <Container>
        <div className="py-20 w-full inset-shadow-custom rounded-2xl">
          <div>
            <div className="flex flex-col justify-center items-center gap-5">
              <AuthHeader content="Sign In" />
              <AuthSubHeading content="Welcome back! Sign In to continue." />
            </div>
            <div className="mt-[28px] flex flex-col justify-center items-center">
              <form className="flex flex-col gap-[20px]" onSubmit={handleSubmit(onSubmitData)}>
                <div className={`w-[650px] py-[30px] px-[20px] bg-[#FAFBFC] border ${errors.email ? " border-red-400" : " border-[#DFE1E6]"} rounded-[8px]`}>
                  <input
                    className="w-full h-full outline-0"
                    placeholder="Email Address"
                    name="email"
                    id="email"
                    type="email"
                    {...register("email", {required: true})}
                  />
                </div>
                <div className={`w-[650px] py-[30px] px-[20px] bg-[#FAFBFC] border ${errors.password ? " border-red-400" : " border-[#DFE1E6]"} rounded-[8px] flex justify-between items-center`}>
                  <input
                    className="w-[90%] h-full outline-0"
                    placeholder="password"
                    name="password"
                    id="password"
                    type={`${isPassShow ? "password" : "text"}`}
                    {...register("password", {required: true})}
                  />
                  <div
                    onClick={() => setISPassShow((prevState) => !prevState)}
                    className="cursor-pointer"
                  >
                    {isPassShow ? (
                      <FaRegEyeSlash className="text-[20px]" />
                    ) : (
                      <FaRegEye className="text-[20px]" />
                    )}
                  </div>
                </div>
                <div className="my-[20px] flex justify-center">
                    <Link to="/auth/forget-password" className="text-[#5A5C5F] text-[18px] font-semibold leading-6 tracking-[-0.36px]">Forgot Password? <span className="text-[#1A1A1A] font-bold">Click Here</span></Link>
                </div>

                <button className="py-[10px] bg-[#1A1A1A] text-white rounded-[8px] text-[20px] font-bold leading-8">Sign In</button>
              </form>
            </div>
            <Link to="/auth/sign-up" className="text-[#5A5C5F] text-[18px] font-semibold leading-6 tracking-[-0.36px] flex justify-center mt-5">New Here? <span className="text-[#1A1A1A] font-bold border-b border-b-[#1A1A1A]"> Register Today</span></Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
