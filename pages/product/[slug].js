import Wrapper from "@/components/Wrapper";
import { IoMdHeartEmpty } from "react-icons/io";
import ProductDetCarousel from "@/components/ProductDetCarousel";


const ProductDetails = () => {
  return (
    <div className="w-full md:py-20 ">
        <Wrapper>
            <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
            {/* this is for left column of the product */}
            <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
                <ProductDetCarousel />
            </div>
            
            {/* this is for right column of the product */}
            <div className="flex-[1] py-3">
                {/* Product title */}
                <div className="text-[34px] font-semibold mb-2">
                    Jordan Retro 6 G
                </div>

                {/* product  subtitle */}
                <div className="text-lg font-semibold mb-5">
                    Men&apos;s Golf Shoes
                </div>

                {/* Product Price */}
                <div className="text-lg font-semibold">
                    MRP: $ 100
                </div>
                <div className="text-md font-medium text-black/[0.5]">
                    incl. of taxes
                </div>
                <div className="text-md font-medium text-black/[0.5] mb-20">
                    {`(Also includes all applicable taxes)`}
                </div>
            </div>
            </div>
        </Wrapper>
    </div>
  )
}

export default ProductDetails;