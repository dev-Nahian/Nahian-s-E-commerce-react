import Container from "@/components/Common/Container";
import mens from "@/assets/mensDepartment.png";
import womenDep from "@/assets/womensDepartment.png";
import childrenDep from "@/assets/childDepartment.png";

const DepartMents = [
  {
    id: 0,
    images: mens,
    types: "Men's Wear",
  },
  {
    id: 1,
    images: womenDep,
    types: "Woman's Wear",
  },
  {
    id: 2,
    images: childrenDep,
    types: "Kid's Wear",
  },
];

export default function HomeDepartment() {
  return (
    <section className="py-[120px]">
      <Container>
        <div>
          <h2 className="text-[#1A1A1A] text-[48px] font-extrabold leading-[64px] text-center">
            Choose a department
          </h2>
          <div className="mt-[64px] relative">
            <div className="grid grid-cols-3 gap-5 relative z-40">
              {DepartMents.map((item) => (
                <div
                  key={item.id}
                  className="h-[270px] transition-all ease-linear duration-150 hover:scale-105 relative rounded-[8px]"
                >
                  <img
                    className="w-full h-full rounded-[8px]"
                    src={item?.images}
                    alt="not found"
                  />
                  <div className="layout_cover flex items-center justify-center rounded-[8px]">
                    <h2 className="text-white text-[40px] font-bold leading-[52px] tracking-[-0.8px]">
                      {item?.types}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
            <div className=" absolute right-0 top-[-50px] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="164"
                height="79"
                viewBox="0 0 164 79"
                fill="none"
              >
                <g opacity="0.76" clip-path="url(#clip0_10153_5632)">
                  <path
                    d="M1.5 77.8C1.6 69.4 5.3 61.7 9.7 54.6C13.9 47.7 18.7 41.1 24 35C29.3 28.9 35 23.1 41.1 17.9C47.3 12.6 54 7.39996 61.6 4.19996C68.8 1.19996 77 0.399959 84.1 4.09996C90.2 7.29996 94.6 12.8 97.8 18.7C99.5 21.8 100.9 25.1 102 28.4C103 31.5 103.8 34.9 105.7 37.6C107.6 40.4 110.5 42 113.9 42.4C117.7 42.8 121.4 41.9 125.2 41.7C141.9 40.8 154.5 55.1 159.8 69.6C160.5 71.4 161.1 73.3 161.6 75.2C162 76.7 164.4 76 163.9 74.6C161 67 157.7 59.4 152.4 53.1C147.5 47.2 140.8 42.5 133.2 40.7C129.3 39.8 125.5 39.9 121.6 40.4C117.8 40.9 113.4 41.6 110 39.4C106.7 37.4 105.5 33.4 104.4 29.9C103.3 26.5 102.1 23.2 100.6 20.1C97.6 14 93.5 8.19996 87.8 4.29996C81.4 0.0999599 73.8 -1.00004 66.5 0.89996C58.5 2.89996 51.4 7.69996 45 12.8C38.4 18 32.2 23.7 26.6 29.9C21 36 15.9 42.4 11.4 49.3C6.7 56.1 2.2 63.6 0.6 71.9C0.2 73.9 0 75.8 0 77.8C0 78.7 1.5 78.7 1.5 77.8Z"
                    fill="#5A5C5F"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_10153_5632">
                    <rect width="163.9" height="78.5" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
