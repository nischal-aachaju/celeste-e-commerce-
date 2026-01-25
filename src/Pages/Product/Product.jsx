import { SaveLaterBTN } from "../../Components/common/Buttons";
import { BreadCrumb, BasicInfo, Desc, Policy } from "./Comps";
import { useContext, useEffect } from "react";

import Tags from "./Tags";
import Dimensions from "./Dimensions";
import Review from "./Review";
import Imgs from "./Images";
import LoadingPage from "../LoadingPage";
import { useParams } from "react-router-dom";
import { ApiDataContext } from "../../Context/ContextApi";
import AddToCartBtn from "../../Components/common/AddToCart";
const Product = () => {
  const { id } = useParams();

  useEffect(() => window.scrollTo(0, 0), []);
  const data = useContext(ApiDataContext); // gives the whole fetched array

  const productData = data.find((el) => el.id == id); //Dumbass Find wrong use garexau ani ka chalxa ta (Provides the el if matches or else undefined)

  const {
    title,
    description: desc,
    price,
    category,
    rating,
    tags,
    brand,
    reviews,
    warrantyInformation: warrInfo,
    shippingInformation: shipInfo,
    returnPolicy: returnInfo,
    availabilityStatus: stockInfo,
    dimensions: { width, height, depth },
    images,
    thumbnail,
  } = productData;

  return (
    <div className="bg-[#f9fafb] mt-14">
      <BreadCrumb category={category} title={title} />

      <main className="w-full px-6 h-fit 0 md:flex-col md:px-12 lg:px-20 ">
        <div className="justify-center w-full gap-8 h-fit md:flex">
          <Imgs images={images} thumbnail={thumbnail} bannerTag={brand} />
          <div className="w-full h-fit md:w-[50%] max-w-124 mx-auto md:max-w-90.5 lg:max-w-117.5 ">
            <BasicInfo
              title={title}
              price={price}
              rating={rating}
              reviews={reviews}
              stock={stockInfo}
            />
            <AddToCartBtn />
            <SaveLaterBTN />
            <Dimensions width={width} height={height} depth={depth} />
            <Desc desc={desc} />
            <Tags tags={tags} />
            <Policy
              warrInfo={warrInfo}
              shipInfo={shipInfo}
              returnInfo={returnInfo}
            />
          </div>
        </div>
        <Review reviews={reviews} rating={rating} />
      </main>
    </div>
  );
};

export default Product;
