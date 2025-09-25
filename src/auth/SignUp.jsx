import AuthHeader from "@/components/Common/AuthHeader";
import Container from "@/components/Common/Container";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  // States
  const [isPassShow, setISPassShow] = useState(true);

    // for navigation
    const navigate = useNavigate()   

  //  Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Submit data
  const onSubmitData = (data) => {
    console.log( 'Sign Up Data' ,data);
    reset();
    setInterval(() => {
        navigate('/auth/sign-up-verification')
    }, 1000);
  };

  return (
    <section className="py-20">
      <Container>
        <div className="py-20 w-full inset-shadow-custom rounded-2xl">
          <div>
            <div className="flex flex-col justify-center items-center gap-5">
              <AuthHeader content="Sign Up" />
            </div>
            <div className="mt-[28px] flex flex-col justify-center items-center">
              <form
                className="flex flex-col gap-[20px]"
                onSubmit={handleSubmit(onSubmitData)}
              >
                <div
                  className={`w-[650px] py-[30px] px-[20px] bg-[#FAFBFC] border ${
                    errors.firstName ? " border-red-400" : " border-[#DFE1E6]"
                  } rounded-[8px]`}
                >
                  <input
                    className="w-full h-full outline-0"
                    placeholder="First Name"
                    name="firstName"
                    id="firstName"
                    type="text"
                    {...register("firstName", { required: true })}
                  />
                </div>

                <div
                  className={`w-[650px] py-[30px] px-[20px] bg-[#FAFBFC] border ${
                    errors.lastName ? " border-red-400" : " border-[#DFE1E6]"
                  } rounded-[8px]`}
                >
                  <input
                    className="w-full h-full outline-0"
                    placeholder="Last Name"
                    name="lastName"
                    id="lastName"
                    type="text"
                    {...register("lastName", { required: true })}
                  />
                </div>

                <div
                  className={`w-[650px] py-[30px] px-[20px] bg-[#FAFBFC] border ${
                    errors.email ? " border-red-400" : " border-[#DFE1E6]"
                  } rounded-[8px]`}
                >
                  <input
                    className="w-full h-full outline-0"
                    placeholder="Email Address"
                    name="email"
                    id="email"
                    type="email"
                    {...register("email", { required: true })}
                  />
                </div>

                <div
                  className={`w-[650px] py-[30px] px-[20px] bg-[#FAFBFC] border ${
                    errors.password ? " border-red-400" : " border-[#DFE1E6]"
                  } rounded-[8px] flex justify-between items-center`}
                >
                  <input
                    className="w-[90%] h-full outline-0"
                    placeholder="password"
                    name="password"
                    id="password"
                    type={`${isPassShow ? "password" : "text"}`}
                    {...register("password", { required: true })}
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
                
                <div
                  className={`w-[650px] py-[30px] px-[20px] bg-[#FAFBFC] border ${
                    errors.confirmPassword ? " border-red-400" : " border-[#DFE1E6]"
                  } rounded-[8px] flex justify-between items-center`}
                >
                  <input
                    className="w-[90%] h-full outline-0"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    id="confirmPassword"
                    type={`${isPassShow ? "password" : "text"}`}
                    {...register("confirmPassword", { required: true })}
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

                <button className="py-[10px] bg-[#1A1A1A] text-white rounded-[8px] text-[20px] font-bold leading-8">
                  Sign Up
                </button>
              </form>
            </div>
            <Link to="/auth" className="text-[#5A5C5F] text-[18px] font-semibold leading-6 tracking-[-0.36px] flex justify-center mt-5">
              Al Ready Have Account?{" "}
              <span className="text-[#1A1A1A] font-bold border-b border-b-[#1A1A1A]">
                {" "}
                Click Hare
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
