import HomeDepartment from "@/components/homeComponents/HomeDepartment";
import HomeDiscountBanner from "@/components/homeComponents/HomeDiscountBanner";
import HomeFeaturedStore from "@/components/homeComponents/HomeFeaturedStore";
import HomeHero from "@/components/homeComponents/HomeHero";
import HomeReview from "@/components/homeComponents/HomeReview";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeDepartment />
      <HomeFeaturedStore />
      <HomeDiscountBanner />
      <HomeReview />
    </>
  );
}
