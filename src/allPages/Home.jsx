import HomeDepartment from "@/components/homeComponents/HomeDepartment";
import HomeFeaturedStore from "@/components/homeComponents/HomeFeaturedStore";
import HomeHero from "@/components/homeComponents/HomeHero";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeDepartment />
      <HomeFeaturedStore />
    </>
  );
}
