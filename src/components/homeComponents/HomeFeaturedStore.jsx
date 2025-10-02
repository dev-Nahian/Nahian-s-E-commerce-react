import CommonHeader from "../Common/CommonHeader";
import Container from "../Common/Container";
import DropdownFilter from "../Common/DropdownFilter";

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
              <DropdownFilter options={filterOptions} onSelect={handleFilterChange} />
            </div>
          </div>

          <div className="mt-8"></div>
        </div>
      </Container>
    </div>
  );
}
