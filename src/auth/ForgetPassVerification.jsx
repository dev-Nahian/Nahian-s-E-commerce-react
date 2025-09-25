import { useEffect, useState } from "react";
import AuthHeader from "../components/Common/AuthHeader";
import AuthSubHeading from "../components/Common/AuthSubHeading";
import Container from "../components/Common/Container";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export default function ForgetPassVerification() {
  const [otp, setOtp] = useState("");

  console.log(otp.length == 4 )

  useEffect(() => {

    otp.length == 4 && console.log("loader..")

  }, [otp])
  

  return (
    <section className="py-20">
      <Container>
        <div className="py-20 w-full inset-shadow-custom rounded-2xl">
          <div>
            <div className="flex flex-col justify-center items-center gap-5">
              <AuthHeader content="Enter The Code" />
              <AuthSubHeading content="Enter the code just sent your email to reset your password." />
            </div>
            <div className="mt-[64px] flex flex-col justify-center items-center">
              <InputOTP
                maxLength={4}
                value={otp}
                onChange={(value) => setOtp(value)}
              >
                <InputOTPGroup className="space-x-2">
                  <InputOTPSlot
                    index={0}
                    className="bg-secondary rounded-md border-l border-accent shadow-none font-semibold"
                  />
                  <InputOTPSlot
                    index={1}
                    className="bg-secondary rounded-md border-l border-accent shadow-none font-semibold"
                  />
                  <InputOTPSlot
                    index={2}
                    className="bg-secondary rounded-md border-l border-accent shadow-none font-semibold"
                  />
                  <InputOTPSlot
                    index={3}
                    className="bg-secondary rounded-md border-l border-accent shadow-none font-semibold"
                  />
                </InputOTPGroup>
              </InputOTP>

              {/* For testing purpose */}
              <p className="mt-4 text-sm text-gray-500">
                Entered OTP: {otp}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
