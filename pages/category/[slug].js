//this page is for dynamic routing in next which is known as slug in the programming language
import Wrapper from "@/components/Wrapper";
import ProductCard from "@/components/ProductCard";
//here router hooks in next js is used for dynamic routing in next js
// import { useRouter } from "next/router";

const category = () => {
  // const router = useRouter();
  //destructuring the file name called slug
  // const { slug } = router.query;
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Running Shoes
          </div>
        </div>
        {/* product grid section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-15 px-5 md:px-0">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Wrapper>
    </div>
  );
};

export default category;
