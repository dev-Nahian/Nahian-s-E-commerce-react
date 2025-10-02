import { Link } from "react-router-dom";
import Container from "../Common/Container";
import HeroBgOne from "@/assets/HeroBannerOne.png";
import HeroBgTwo from "@/assets/HeroBannerTwo.png";
import CardSlides from "../Common/CardSlides";

export default function HomeHero() {
  return (
    <section className="pt-[80px] pb-[30px] backGroundBg">
      <Container>
        <div className="flex gap-[120px] items-center">
          <div className="min-w-[560px] max-w-[560px]">
            <h3 className="text-[#FAFBFC] text-[18px] font-normal tracking-[0.9px] flex items-center gap-2">
              Bringing Elegance Inside You{" "}
              <div className="h-[1px] w-[20px] bg-[#FAFBFC]"></div>{" "}
            </h3>

            <h1 className="text-[#FFF] text-[72px] font-extrabold leading-[90px] tracking-[-0.72px] mt-4">
              You Can Never Go Wrong With Our Quality
            </h1>

            <div className="mt-[48px]">
              <Link className="py-4 px-5 rounded-[8px] border-1 border-[#FFF] bg-[#1A1A1A] w-max flex gap-2 items-center">
                <span className="text-white font-bold leading-[26px] ">
                  Explore more{" "}
                </span>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                    fill="none"
                  >
                    <path
                      d="M9.5 1.75L14.75 7M14.75 7L9.5 12.25M14.75 7L1.25 7"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>{" "}
              </Link>
            </div>
          </div>

          <div>
            <div className="flex items-end gap-[45px]">
              <div className="w-[380px] h-[600px] rounded-[44%]">
                <img
                  className="w-full h-full object-cover rounded-[44%]"
                  src={HeroBgOne}
                  alt="not found"
                />
              </div>
              <div className="w-[231px] h-[392px] rounded-[44%] mb-[60px]">
                <img
                  className="w-full h-full rounded-[44%]"
                  src={HeroBgTwo}
                  alt="not found"
                />
              </div>
            </div>

            <div className="customBgBanner relative top-[-50px] left-[30px]">
              <div className="">
                <CardSlides />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
