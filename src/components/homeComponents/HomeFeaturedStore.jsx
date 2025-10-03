import CommonHeader from "../Common/CommonHeader";
import Container from "../Common/Container";
import DropdownFilter from "../Common/DropdownFilter";
import ProductCard from "../Common/ProductCard";
import productImage1 from "@/assets/Product1.png";
import productImage2 from "@/assets/Product2.png";
import productImage3 from "@/assets/Product3.png";
import productImage4 from "@/assets/Product4.png";
import productImage5 from "@/assets/Product5.png";
import productImage6 from "@/assets/Product6.png";
import productImage7 from "@/assets/Product7.png";
import productImage8 from "@/assets/Product8.png";
import { Link } from "react-router-dom";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const ProductData = [
  {
    id: 0,
    productName: "Men's Slim-Fit Linen Suit Jackets, Created for Macy's",
    productImage: productImage1,
    gene: "Men",
    discountedPrice: "£1450.99",
    price: "£1370.99",
  },
  {
    id: 1,
    productName: "Men's Slim-Fit Linen Suit Jackets, Created for Macy's",
    productImage: productImage2,
    gene: "Men",
    discountedPrice: "£1450.99",
    price: "£1370.99",
  },
  {
    id: 2,
    productName: "Woman's Slim-Fit Linen Suit Jackets, Created for Macy's",
    productImage: productImage3,
    gene: "Female",
    discountedPrice: "£1450.99",
    price: "£1370.99",
  },
  {
    id: 3,
    productName: "Men's Slim-Fit Linen Suit Jackets, Created for Macy's",
    productImage: productImage4,
    gene: "Men",
    discountedPrice: "£1450.99",
    price: "£1370.99",
  },
  {
    id: 4,
    productName: "Blue Three Pcs Single Button Pantsuit",
    productImage: productImage5,
    gene: "Female",
    discountedPrice: "£1450.99",
    price: "£1370.99",
  },
  {
    id: 5,
    productName: "Blue Three Pcs Single Button Pantsuit",
    productImage: productImage6,
    gene: "Female",
    discountedPrice: "£1450.99",
    price: "£1370.99",
  },
  {
    id: 6,
    productName: "Men's Slim-Fit Linen Suit Jackets, Created for Macy's",
    productImage: productImage7,
    gene: "Men",
    discountedPrice: "£1450.99",
    price: "£1370.99",
  },
  {
    id: 3,
    productName: "Woman's Slim-Fit Linen Suit Jackets, Created for Macy's",
    productImage: productImage8,
    gene: "Female",
    discountedPrice: "£1450.99",
    price: "£1370.99",
  },
];

export default function HomeFeaturedStore() {
  const filterOptions = [
    "Sort by: Popular",
    "Sort by: Newest",
    "Price: Low to High",
    "Price: High to Low",
  ];

  const handleFilterChange = (selected) => {
    console.log("Selected filter:", selected);
    // Apply your filter logic here
  };

  return (
    <div className="py-[120px]">
      <Container>
        <div>
          <CommonHeader content="Our featured store" />
          <div className="mt-[64px] flex justify-between items-center ">
            <div>
              <h2 className="text-[#1A1A1A] text-2xl font-bold leading-8 tracking-[-0.48px]">
                Blazers & Sport Coats{" "}
                <span className="text-[#5A5C5F] text-[14px] font-medium leading-[23px] capitalize">
                  Male & Female
                </span>{" "}
              </h2>
            </div>
            {/* Nahian Hare I need to add dropdown filter */}
            <div>
              <DropdownFilter
                options={filterOptions}
                onSelect={handleFilterChange}
              />
            </div>
          </div>

          <div className="mt-8 grid grid-cols-4 gap-x-5 gap-y-10">
            {ProductData.map((product) => (
              <Link key={product.id}>
                <ProductCard
                  productImage={product?.productImage}
                  productName={product?.productName}
                  discountedPrice={product?.discountedPrice}
                  price={product?.price}
                  gene={product?.gene}
                />
              </Link>
            ))}
          </div>
          <div className="mt-[64px] flex justify-end gap-[250px] items-center">
            <div>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
            <div>
              <Link className="text-[#1A1A1A] text-[14px] font-medium leading-[23px] capitalize flex items-center gap-1">
                View all
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <path
                      d="M8.33594 7.16675L11.6693 10.5001L8.33594 13.8334"
                      stroke="#1A1A1A"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
