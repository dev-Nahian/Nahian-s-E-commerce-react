import { useForm } from "react-hook-form";
import Container from "../components/Common/Container";
import AuthHeader from "../components/Common/AuthHeader";
import AuthSubHeading from "../components/Common/AuthSubHeading";
import { Link } from "react-router-dom";

export default function ForgetPass() {
  //  Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Submit data
  const onSubmitData = (data) => {
    console.log("foegetEmailData", data);
    reset();
  };

  return (
    <section className="py-20">
      <Container>
        <div className="py-20 w-full inset-shadow-custom rounded-2xl">
          <div>
            <div className="flex flex-col justify-center items-center gap-5">
              <AuthHeader content="Forgot Password?" />
              <AuthSubHeading content="Enter your email to get a verification code." />
            </div>
            <div className="mt-[28px] flex flex-col justify-center items-center">
              <form
                className="flex flex-col gap-[20px]"
                onSubmit={handleSubmit(onSubmitData)}
              >
                <div
                  className={`w-[650px] py-[25px] px-[20px] bg-[#FAFBFC] border ${
                    errors.ForgetEmail ? " border-red-400" : " border-[#DFE1E6]"
                  } rounded-[8px]`}
                >
                  <input
                    className="w-full h-full outline-0"
                    placeholder="Email Address"
                    name="ForgetEmail"
                    id="ForgetEmail"
                    type="email"
                    {...register("ForgetEmail", { required: true })}
                  />
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
