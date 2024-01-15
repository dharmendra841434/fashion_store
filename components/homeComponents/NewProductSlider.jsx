import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { newProductmenu } from "../../public/usefullData/MenuOptions";
import { MdKeyboardArrowDown } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { BsCurrencyRupee } from "react-icons/bs";
import Spline from "@splinetool/react-spline";
import { calculateDiscountedPrice } from "../../utils/helper";
import {
  allProductsRequest,
  setfiltredList,
} from "../../app/slice/productSlice";

const NewProductSlider = () => {
  const path = useRouter();
  const filtredList = useSelector((state) => state.product.filteredProductList);
  const productList = useSelector((state) => state.product.productList);
  const [selectedOption, setSelectedOption] = useState(newProductmenu[0].title);
  const [dropDown, setDropDown] = useState(false);
  const [loader, setLoader] = useState(false);

  const [activeItem, setActiveItem] = useState("T-Shirt");
  var settings = {
    slidesToShow: filtredList?.length,
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
    dispatch(allProductsRequest());
    setActiveItem("T-Shirt");
  }, []);

  //console.log(filtredList, "this is list");
  const filtreBasedOnMenu = (menuType) => {
    var list = [...productList];
    //console.log(list, "jhyiuju");
    if (menuType === "Hoodies") {
      let hoodies = list?.filter((item, index) => item?.category === "Hoodies");
      // console.log(hoodies, "hood");
      dispatch(setfiltredList(hoodies));
    }
    return;
  };

  return (
    <div className=" mt-7">
      <div className=" flex items-center justify-between py-5 mx-2 lg:mx-0">
        <h2 className=" font-bold text-gray-700 text-2xl uppercase">
          New Products
        </h2>
        <div className=" hidden lg:block">
          <div className=" flex items-center gap-x-6  ">
            {newProductmenu?.map((item, index) => (
              <div key={index} className=" group cursor-pointer ">
                <h4
                  onClick={() => {
                    filtreBasedOnMenu(item.title);
                    setActiveItem(item.title);
                  }}
                  className={` font-medium ${
                    activeItem == item.title ? "text-appRed" : "text-appBlack"
                  }  text-sm  group-hover:text-appRed`}
                >
                  {item.title}
                </h4>

                <div className=" flex mt-1">
                  <div
                    className={`h-[2px] bg-appRed  transition-all duration-500 ease-in-out  ${
                      activeItem == item.title
                        ? "w-full  bg-appRed h-[2px]"
                        : " w-0 group-hover:w-full"
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" lg:hidden ">
          <button
            onClick={() => {
              setDropDown(!dropDown);
            }}
            className=" flex items-center justify-between border-2 py-1 border-gray-600 rounded-md px-5"
          >
            <p>{selectedOption}</p>
            <MdKeyboardArrowDown
              className={` transition-all duration-300 ease-in-out ml-3 ${
                dropDown ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
        </div>
      </div>
      <div className=" my-10 hidden lg:block">
        <Slider {...settings}>
          {filtredList?.map((item, index) => (
            <div key={index} className="  px-1 group z-20 ">
              <div
                // onMouseOver={() => {
                //   setActiveItem(item?.name);
                // }}
                // onMouseDown={() => {
                //   setActiveItem("");
                // }}
                className=" bg-white  transition-all duration-300 ease-in-out border-2 border-gray-300 hover:border-red-500 cursor-pointer "
              >
                <div className=" px-8 mt-10">
                  <img src={item.coverImage} className=" h-56 w-full" />
                </div>
                <div className=" flex flex-col items-center py-5">
                  <h3 className=" text-sm text-gray-400 font-thin capitalize">
                    {item?.category}
                  </h3>
                  <h3 className=" capitalize mt-1 font-semibold text-gray-900">
                    {item?.product_name}
                  </h3>
                  <div className=" flex items-center my-1">
                    <div className=" flex items-center mx-1">
                      <BsCurrencyRupee className=" text-red-600 text-lg" />
                      <span className=" text-red-600 font-semibold ">
                        {calculateDiscountedPrice(item?.price, item?.discount)}
                        .00
                      </span>
                    </div>
                    <div className=" flex items-center">
                      <BsCurrencyRupee className=" text-sm text-gray-400" />
                      <p className=" text-sm line-through text-gray-400">
                        {item?.price}.00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="  opacity-0 flex flex-col py-5 items-center group-hover:opacity-100 bg-gray-900 transition-all duration-300 ease-in-out -z-20  -translate-y-10 group-hover:translate-y-0">
                <div className="  bg-red-600 rounded-3xl  py-2 px-6 cursor-pointer transition-all duration-300 ease-in-out hover:bg-white border-2 border-red-600 ">
                  <div className=" hidden hover:block">dlfjkd</div>
                  <p className=" text-sm font-semibold text-white transition-all duration-300 ease-in-out hover:text-red-600 ">
                    ADD TO CART
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className=" my-10 md:hidden">
        <Slider {...mobileSlidesettings}>
          {filtredList?.map((item, index) => (
            <div key={index} className="  group z-20 ">
              <div
                // onMouseOver={() => {
                //   setActiveItem(item?.name);
                // }}
                // onMouseDown={() => {
                //   setActiveItem("");
                // }}
                className=" bg-white  transition-all duration-300 ease-in-out border-2 border-gray-300 hover:border-red-500 cursor-pointer "
              >
                <div className=" px-8 mt-10">
                  <img src={item?.coverImage} className=" h-56 w-full" />
                </div>
                <div className=" flex flex-col items-center py-5">
                  <h3 className=" text-sm text-gray-400 font-thin capitalize">
                    {item?.category}
                  </h3>
                  <h3 className=" capitalize mt-1 font-semibold text-gray-900">
                    {item?.product_name}
                  </h3>
                  <div className=" flex items-center my-1">
                    <div className=" flex items-center mx-1">
                      <BsCurrencyRupee className=" text-red-600 text-lg" />
                      <span className=" text-red-600 font-semibold ">
                        {calculateDiscountedPrice(item?.price, item?.discount)}
                        .00
                      </span>
                    </div>
                    <div className=" flex items-center">
                      <BsCurrencyRupee className=" text-sm text-gray-400" />
                      <p className=" text-sm line-through text-gray-400">
                        {item?.price}.00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="  opacity-0 flex flex-col py-5 items-center group-hover:opacity-100 bg-gray-900 transition-all duration-300 ease-in-out -z-20  -translate-y-10 group-hover:translate-y-0">
                <div className="  bg-red-600 rounded-3xl  py-2 px-6 cursor-pointer transition-all duration-300 ease-in-out hover:bg-white border-2 border-red-600 ">
                  <div className=" hidden hover:block">dlfjkd</div>
                  <p className=" text-sm font-semibold text-white transition-all duration-300 ease-in-out hover:text-red-600 ">
                    ADD TO CART
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className=" my-10 hidden md:block lg:hidden">
        <Slider {...tabSlidesettings}>
          {filtredList?.map((item, index) => (
            <div key={index} className="  group z-20   ">
              <div
                // onMouseOver={() => {
                //   setActiveItem(item?.name);
                // }}
                // onMouseDown={() => {
                //   setActiveItem("");
                // }}
                className=" bg-white mx-3  transition-all duration-300 ease-in-out border-2 border-gray-300 hover:border-red-500 cursor-pointer "
              >
                <div className=" px-8 mt-10">
                  <img src={item?.coverImage} className=" h-56 w-full" />
                </div>
                <div className=" flex flex-col items-center py-5">
                  <h3 className=" text-sm text-gray-400 font-thin capitalize">
                    {item?.category}
                  </h3>
                  <h3 className=" capitalize mt-1 font-semibold text-gray-900">
                    {item?.product_name}
                  </h3>
                  <div className=" flex items-center my-1">
                    <div className=" flex items-center mx-1">
                      <BsCurrencyRupee className=" text-red-600 text-lg" />
                      <span className=" text-red-600 font-semibold ">
                        {calculateDiscountedPrice(item?.price, item?.discount)}
                        .00
                      </span>
                    </div>
                    <div className=" flex items-center">
                      <BsCurrencyRupee className=" text-sm text-gray-400" />
                      <p className=" text-sm line-through text-gray-400">
                        {item?.price}.00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="  opacity-0 flex flex-col py-5 items-center group-hover:opacity-100 bg-gray-900 transition-all duration-300 ease-in-out -z-20  -translate-y-10 group-hover:translate-y-0">
                <div className="  bg-red-600 rounded-3xl  py-2 px-6 cursor-pointer transition-all duration-300 ease-in-out hover:bg-white border-2 border-red-600 ">
                  <div className=" hidden hover:block">dlfjkd</div>
                  <p className=" text-sm font-semibold text-white transition-all duration-300 ease-in-out hover:text-red-600 ">
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

export default NewProductSlider;
