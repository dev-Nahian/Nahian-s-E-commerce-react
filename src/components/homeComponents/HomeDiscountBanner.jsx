import Container from "../Common/Container";


export default function HomeDiscountBanner() {
  return (
    <section className="disCountBannerCustom">
        <Container>
            <div className="flex items-center gap-[24%]">
                <div>
                    <h2 className="text-white text-[116px] font-bold leading-[150px] tracking-[-2.32px]">Big Sale </h2>
                    <h3 className="text-white text-[64px] font-medium leading-[150%] tracking-[-0.64px]">This Weekend!</h3>
                </div>
                <div className="p-3 border-[3px] border-[#5A5C5F] rounded-full w-max relative top-[50px]">
                    <div className="w-[170px] h-[170px] rounded-full bg-[#5A5C5F] flex flex-col justify-center items-center">
                        <h3 className="text-white text-[28px] font-medium">UP TO</h3>
                        <span className="text-white text-[55.998px] leading-[70%] font-bold">50%</span>
                        <h4 className="text-white text-[32px] font-medium leading-normal">OFF</h4>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}
