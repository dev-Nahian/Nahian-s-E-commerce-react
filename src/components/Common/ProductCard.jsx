import { Link } from "react-router-dom";

export default function ProductCard({
  productImage,
  productName,
  gene,
  discountedPrice,
  price,
}) {
  return (
    <div className="px-[9px] pt-1 pb-[25px] rounded-[14px] bg-[#FDFDFD] transition-all ease-linear duration-150 hover:scale-105 customShadows">
      <div className="w-full h-[300px]">
        <img
          className="w-full h-full object-cover rounded-[10px]"
          src={productImage}
          alt="not found"
        />
      </div>
      <div className="mt-[18px]">
        <h3 className="text-[#1A1A1A] text-[18px] font-semibold leading-[30px] capitalize line-clamp-2">
          {productName}
        </h3>
        <div className="mt-2">
          <h4 className="text-[#5A5C5F] text-[14px] leading-[23px]">
            Gene: <span>{gene}</span>
          </h4>
        </div>
        <div className="mt-[20px] flex items-center gap-[10px]">
          <h5 className="discountedPrice">{discountedPrice}</h5>
          <h5 className="originalPrice">{price}</h5>
        </div>
      </div>
      <div className="mt-5">
        <Link className="py-4 rounded-[8px] border-1 border-[#5A5C5F] flex gap-[10px] items-center justify-center transition-all ease-linear duration-150 text-[#1A1A1A] text-[16px] font-bold leading-[26px] hover:bg-black hover:text-white">
          <span className="">
            Shop Now
          </span>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
            >
              <path
                d="M11 4.25L16.25 9.5M16.25 9.5L11 14.75M16.25 9.5L2.75 9.5"
                stroke="#1A1A1A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
}
