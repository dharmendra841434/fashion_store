import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { newProductmenu } from "../../public/usefullData/MenuOptions";
import { MdKeyboardArrowDown } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { BsCurrencyRupee } from "react-icons/bs";
import { calculateDiscountedPrice } from "../../utils/helper";
import {
  allProductsRequest,
  setfiltredList,
} from "../../app/slice/productSlice";
import DropDown from "./DropDown";

const NewProductSlider = () => {
  const path = useRouter();
  const filtredList = useSelector((state) => state.product.filteredProductList);
  const productList = useSelector((state) => state.product.productList);
  const [selectedOption, setSelectedOption] = useState(
    newProductmenu[0]?.title
  );
  const [dropDown, setDropDown] = useState(false);
  const [loader, setLoader] = useState(false);

  const [activeItem, setActiveItem] = useState("T-Shirt");
  var settings = {
    slidesToShow: 5, //filtredList?.length,
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
    if (menuType === "T-Shirt") {
      let hoodies = list?.filter((item, index) => item?.category === "T-Shirt");
      // console.log(hoodies, "hood");
      dispatch(setfiltredList(hoodies));
    }
  };

  const colors = ["black", "red", "blue", "gray"];

  return (
    <div className="mt-6 ">
      <div className="flex items-center justify-between py-5 lg:mx-0">
        <h2 className="w-1/3 text-2xl font-bold text-gray-700 uppercase lg:w-auto">
          New Products
        </h2>
        <div className="hidden lg:block">
          <div className="flex items-center gap-x-6">
            {newProductmenu?.map((item, index) => (
              <div key={index} className="cursor-pointer group">
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

                <div className="flex mt-1 ">
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
        <div className=" lg:hidden">
          <DropDown
            data={newProductmenu}
            setDropDown={setDropDown}
            dropDown={dropDown}
            selectedItem={selectedOption}
            setSelectedItem={setSelectedOption}
          />
        </div>
      </div>
      <div className="hidden mt-5 mb-10 lg:block">
        <Slider {...settings}>
          {filtredList?.map((item, index) => (
            <div key={item?.product_name} className="z-20 px-1 py-4 group">
              <div className="relative transition-all duration-300 ease-in-out bg-white border-2 border-gray-300 cursor-pointer hover:border-red-500 hover:-translate-y-3">
                <div className="absolute px-1 text-sm border top-2 right-2 text-appRed border-appRed">
                  {item?.discount}%Off
                </div>
                <div className="px-8 mt-10 ">
                  <img
                    src={item.coverImage}
                    className="w-full h-56 mix-blend-darken"
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
                  <div className="flex items-center justify-center w-full ">
                    <h2 className="mt-2 mr-5 text-sm font-medium ">
                      Colors :{" "}
                    </h2>
                    <div className="flex justify-center mt-2 gap-x-3">
                      {colors?.map((item, index) => (
                        <div key={index}>
                          {item === "black" && (
                            <div className=" w-5 h-5 rounded-full bg-[#0a0a09]" />
                          )}
                          {item === "red" && (
                            <div className=" w-5 h-5 rounded-full bg-[#5e040d]" />
                          )}
                          {item === "blue" && (
                            <div className=" w-5 h-5 rounded-full bg-[#242f80]" />
                          )}
                          {item === "gray" && (
                            <div className=" w-5 h-5 rounded-full bg-[#6b6a6b]" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="my-10 md:hidden">
        <Slider {...mobileSlidesettings}>
          {filtredList?.map((item, index) => (
            <div key={item?.product_name} className={`  group z-20 px-2  `}>
              <div
                className={`  bg-white  transition-all duration-300 ease-in-out border-2 border-gray-300 hover:border-red-500 cursor-pointer`}
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
      <div className="hidden my-10 md:block lg:hidden">
        <Slider {...tabSlidesettings}>
          {filtredList?.map((item, index) => (
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

export default NewProductSlider;
