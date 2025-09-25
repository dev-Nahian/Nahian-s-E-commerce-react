import AuthHeader from "@/components/Common/AuthHeader";
import AuthSubHeading from "@/components/Common/AuthSubHeading";
import Container from "@/components/Common/Container";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function ResetPassword() {
  // States
  const [isPassShow, setISPassShow] = useState(true);

  //  Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Submit data
  const onSubmitData = (data) => {
    console.log("Reset Pass Data",data);
    reset();
  };

  return (
    <section className="py-20">
      <Container>
        <div className="py-20 w-full inset-shadow-custom rounded-2xl">
          <div>
            <div className="flex flex-col justify-center items-center gap-5">
              <AuthHeader content="Reset Your Password" />
              <AuthSubHeading content="Reset your password to get started." />
            </div>
            <div className="mt-[28px] flex flex-col justify-center items-center">
              <form
                className="flex flex-col gap-[20px]"
                onSubmit={handleSubmit(onSubmitData)}
              >
                <div
                  className={`w-[650px] py-[30px] px-[20px] bg-[#FAFBFC] border ${
                    errors.password ? " border-red-400" : " border-[#DFE1E6]"
                  } rounded-[8px] flex justify-between items-center`}
                >
                  <input
                    className="w-[90%] h-full outline-0"
                    placeholder="New Password"
                    name="newPassword"
                    id="newPassword"
                    type={`${isPassShow ? "password" : "text"}`}
                    {...register("newPassword", { required: true })}
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
                    errors.password ? " border-red-400" : " border-[#DFE1E6]"
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
                  Submit
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </Container>
    </section>
  );
}
