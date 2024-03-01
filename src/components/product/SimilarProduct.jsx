import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { BsCurrencyRupee } from "react-icons/bs";
import { allProductsRequest } from "@/redux/slice/productSlice";
import Rating from "../homeComponents/Ratings";
import { calculateDiscountedPrice } from "@/utils/helper";
import { useRouter } from "next/navigation";

const SimilarProduct = ({ id }) => {
  const path = useRouter();
  const productList = useSelector((state) => state.product.productList);
  const [similarProducts, setSimilarProducts] = useState();

  var settings = {
    slidesToShow: 5, //similarProducts?.length,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    slickPlay: true,
  };
  var mobileSlidesettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    slickPlay: true,
  };

  var tabSlidesettings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    slickPlay: true,
  };

  const dispatch = useDispatch();

  useEffect(() => {
    //console.log(data?.type);
    let response = productList?.filter((item, index) => item?._id === id);
    //console.log(response, "is");
    let filterList = productList?.filter(
      (item, index) => item?.type === response[0]?.type
    );
    // console.log(filterList);
    let f = filterList?.filter((item, index) => item?._id !== response[0]?._id);
    setSimilarProducts(f);
  }, []);
  //console.log(similarProducts?.length, "filters");

  //console.log(productList);

  return (
    <div className="px-2 mt-6 lg:px-4 ">
      <div className="flex items-center justify-between py-5 lg:mx-0">
        <h2 className="text-2xl font-bold text-gray-700 capitalize lg:w-auto">
          Similar Products
        </h2>
      </div>
      <div className="hidden mb-10 lg:block">
        <Slider {...settings}>
          {similarProducts?.map((item, index) => (
            <button
              onClick={() => path.push(`/product/${item?.type}/${item?._id}`)}
              key={item?.product_name}
              className="z-20 px-1 py-4 group"
            >
              <div className="relative transition-all duration-300 ease-in-out bg-white border border-gray-300 cursor-pointer hover:border-red-500 hover:-translate-y-3">
                <div className="absolute right-0 px-1 text-sm text-white border top-2 bg-appRed border-appRed">
                  {item?.discount}%Off
                </div>
                <div className="px-8 mt-10 ">
                  <img
                    src={item.coverImage}
                    className="w-full h-44 mix-blend-darken"
                  />
                </div>
                <div className="flex flex-col items-center py-5 ">
                  <h3 className="text-sm font-thin text-gray-400 capitalize ">
                    {item?.category}
                  </h3>
                  <h3 className="mt-1 font-semibold text-gray-900 capitalize ">
                    {item?.product_name}
                  </h3>
                  <div className="flex items-center my-1 ">
                    <div className="flex items-center mx-1 ">
                      <BsCurrencyRupee className="text-lg text-red-600 " />
                      <span className="font-semibold text-red-600 ">
                        {calculateDiscountedPrice(item?.price, item?.discount)}
                      </span>
                    </div>
                    <div className="flex items-center ">
                      <BsCurrencyRupee className="text-sm text-gray-400 " />
                      <p className="text-sm text-gray-400 line-through ">
                        {item?.price}
                      </p>
                    </div>
                  </div>
                  <Rating value={4} />
                  <div className="flex justify-center mt-3 translate-x-14 gap-x-3">
                    {item?.images?.map((item, index) => (
                      <div
                        key={index}
                        className={`border-2 border-gray-500 rounded-full bg-white ${
                          index == 1
                            ? "-translate-x-8"
                            : index == 2
                            ? "-translate-x-16"
                            : index == 3
                            ? " -translate-x-24"
                            : ""
                        }`}
                      >
                        <img src={item} className="w-10 h-10 rounded-full" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </Slider>
      </div>
      <div className="my-10 md:hidden">
        <Slider {...mobileSlidesettings}>
          {similarProducts?.map((item, index) => (
            <button
              onClick={() => path.push(`/product/${item?.type}/${item?._id}`)}
              key={item?.product_name}
              className={`  group z-20 px-2  `}
            >
              <div
                className={`  bg-white  transition-all duration-300 ease-in-out border border-gray-300 hover:border-red-500 cursor-pointer`}
              >
                <div className="px-8 mt-10 ">
                  <img src={item?.coverImage} className="w-full h-56 " />
                </div>
                <div className="flex flex-col items-center py-5 ">
                  <h3 className="text-sm font-thin text-gray-400 capitalize ">
                    {item?.category}
                  </h3>
                  <h3 className="mt-1 font-semibold text-gray-900 capitalize ">
                    {item?.product_name}
                  </h3>
                  <div className="flex items-center my-1 ">
                    <div className="flex items-center mx-1 ">
                      <BsCurrencyRupee className="text-lg text-red-600 " />
                      <span className="font-semibold text-red-600 ">
                        {calculateDiscountedPrice(item?.price, item?.discount)}
                      </span>
                    </div>
                    <div className="flex items-center ">
                      <BsCurrencyRupee className="text-sm text-gray-400 " />
                      <p className="text-sm text-gray-400 line-through ">
                        {item?.price}
                      </p>
                    </div>
                  </div>
                  <Rating value={4} />
                  <div className="flex justify-center mt-3 translate-x-8 gap-x-3">
                    {item?.images?.map((item, index) => (
                      <div
                        key={index}
                        className={`border-2 border-gray-500 rounded-full bg-white ${
                          index == 1
                            ? "-translate-x-7"
                            : index == 2
                            ? "-translate-x-14"
                            : index == 3
                            ? " -translate-x-20"
                            : ""
                        }`}
                      >
                        <img src={item} className="w-10 h-10 rounded-full" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </Slider>
      </div>
      <div className="hidden my-10 md:block lg:hidden">
        <Slider {...tabSlidesettings}>
          {similarProducts?.map((item, index) => (
            <div key={item?.product_name} className="z-20 group">
              <div
                // onMouseOver={() => {
                //   setActiveItem(item?.name);
                // }}
                // onMouseDown={() => {
                //   setActiveItem("");
                // }}
                className="mx-3 transition-all duration-300 ease-in-out bg-white border-2 border-gray-300 cursor-pointer hover:border-red-500"
              >
                <div className="px-8 mt-10 ">
                  <img src={item?.coverImage} className="w-full h-56 " />
                </div>
                <div className="flex flex-col items-center py-5 ">
                  <h3 className="text-sm font-thin text-gray-400 capitalize ">
                    {item?.category}
                  </h3>
                  <h3 className="mt-1 font-semibold text-gray-900 capitalize ">
                    {item?.product_name}
                  </h3>
                  <div className="flex items-center my-1 ">
                    <div className="flex items-center mx-1 ">
                      <BsCurrencyRupee className="text-lg text-red-600 " />
                      <span className="font-semibold text-red-600 ">
                        {calculateDiscountedPrice(item?.price, item?.discount)}
                      </span>
                    </div>
                    <div className="flex items-center ">
                      <BsCurrencyRupee className="text-sm text-gray-400 " />
                      <p className="text-sm text-gray-400 line-through ">
                        {item?.price}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center py-5 transition-all duration-300 ease-in-out -translate-y-10 bg-gray-900 opacity-0 group-hover:opacity-100 -z-20 group-hover:translate-y-0">
                <div className="px-6 py-2 transition-all duration-300 ease-in-out bg-red-600 border-2 border-red-600 cursor-pointer rounded-3xl hover:bg-white">
                  <div className="hidden hover:block">dlfjkd</div>
                  <p className="text-sm font-semibold text-white transition-all duration-300 ease-in-out hover:text-red-600">
                    ADD TO CART
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {/* <Spline scene="https://prod.spline.design/fkUGxIlxoTl8ccgO/scene.splinecode" /> */}
    </div>
  );
};

export default SimilarProduct;
