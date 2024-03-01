"use client";
import { userAPI } from "@/redux/api/userAPI";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import HeaderMobileView from "../account/HeaderMobileView";
import {
  addingToCart,
  calculateDiscountedPrice,
  calculateTotalPrice,
  isAddedToCart,
  sizeChart,
  sortString,
} from "@/utils/helper";
import { BsCurrencyRupee } from "react-icons/bs";
import Rating from "../homeComponents/Ratings";
import { FaCartPlus } from "react-icons/fa6";
import SimilarProduct from "./SimilarProduct";
import { useDispatch, useSelector } from "react-redux";
import {
  setCartItems,
  setTotalPrice,
  updateUserCartItems,
} from "@/redux/slice/userSlice";
import { BsCartCheckFill } from "react-icons/bs";
import { useRouter } from "next/navigation";

const ProductDetails = ({ id }) => {
  const cartItems = useSelector((state) => state.user.cartItems);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const userData = useSelector((state) => state.user.userDetails);
  //console.log(userData);
  const [productData, setProductData] = useState();
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState(sizeChart[0].size);

  const dispatch = useDispatch();

  const navigation = useRouter();

  const getProduct = async () => {
    await userAPI
      .getSingleProduct(id)
      .then((response) => {
        // console.log(response);
        setProductData(response?.data);
        setSelectedColor(response?.data?.images[0]);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong!!!", {
          theme: "colored",
          position: "top-center",
          autoClose: 2000,
          progress: false,
          hideProgressBar: true,
          //style: { backgroundColor: "green" },
        });
      });
  };

  useEffect(() => {
    getProduct();
  }, []);

  //console.log(productData?.images);

  const addToCart = () => {
    let cartData = addingToCart(
      cartItems,
      productData,
      selectedSize,
      selectedColor
    );
    dispatch(setCartItems(cartData));

    if (userData !== null) {
      const data = {
        userId: userData?._id,
        cartItems: cartData,
      };
      console.log(data);
      dispatch(updateUserCartItems(data));
    }
    let t = calculateTotalPrice(cartData);
    dispatch(setTotalPrice(t));
    // console.log(cartData);
  };

  return (
    <div className=" lg:py-3">
      <div className=" lg:hidden">
        <HeaderMobileView title={productData?.product_name} />
      </div>
      <div className="flex flex-col px-2 mt-6 lg:flex-row lg:px-0 lg:mt-0 ">
        <div className=" w-full lg:w-[50%] flex gap-x-4">
          <div className=" w-[20%]">
            {productData?.images?.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => setSelectedColor(item)}
                  className={`p-2 my-3 overflow-hidden transition-all duration-300 ease-in-out border  rounded-md cursor-pointer w-fit group hover:border-appRed ${
                    selectedColor === item ? "border-appRed" : "border-gray-300"
                  }`}
                >
                  <img
                    src={item}
                    className="w-20 h-16 transition-all duration-300 ease-in-out lg:h-24 group-hover:scale-125 "
                  />
                </div>
              );
            })}
          </div>
          <div className=" w-[80%] ">
            <img src={selectedColor} className=" h-[22rem] lg:h-[30rem]" />
          </div>
        </div>
        <div className=" lg:w-[50%] pt-10 pb-24  lg:py-20 relative">
          <h2 className="text-lg font-semibold capitalize text-appTextBlack">
            {productData?.product_name} {productData?.type} for {""}
            {productData?.category}
          </h2>
          <p className=" text-[12px] text-gray-600 capitalize">
            Category : {productData?.category}
          </p>
          <div className="my-1">
            <Rating value={4} />
          </div>
          <div className="flex items-center ">
            <p className="text-lg font-medium ">Price : </p>
            <div className="flex items-center my-1 ">
              <div className="flex items-center mx-1 ">
                <BsCurrencyRupee className="text-lg text-red-600 " />
                <span className="text-lg font-semibold text-red-600 ">
                  {calculateDiscountedPrice(
                    productData?.price,
                    productData?.discount
                  )}
                </span>
              </div>
              <div className="flex items-center ">
                <BsCurrencyRupee className="text-sm text-gray-400 " />
                <p className="text-sm text-gray-400 line-through ">
                  {productData?.price}
                </p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-[13px]  text-appTextBlack">Size Chart</h4>
            <div className="flex mt-2 gap-x-3">
              {sizeChart?.map((item, index) => (
                <button
                  onClick={() => setSelectedSize(item?.size)}
                  className={` border px-2 cursor-pointer ${
                    selectedSize === item.size
                      ? "border-appRed"
                      : "border-gray-300"
                  } `}
                >
                  <p className="text-sm font-medium ">{item.size}</p>
                </button>
              ))}
            </div>
          </div>
          <div className="mt-3 ">
            <p className="text-sm font-medium ">Description </p>
            <p className="lg:ml-10 text-[13px] text-gray-500 capitalize">
              {sortString(productData?.description, 200)}
            </p>
          </div>
          <div className="absolute flex items-center bottom-4 gap-x-4 ">
            {isAddedToCart(cartItems, productData?._id) ? (
              <button
                onClick={() => navigation.push("/cart")}
                className="flex items-center px-3 py-1 border border-green-600 rounded gap-x-2"
              >
                <BsCartCheckFill className="text-lg text-green-600" />{" "}
                <p className="text-green-600 ">Added</p>
              </button>
            ) : (
              <button
                onClick={() => addToCart()}
                className="flex items-center px-3 py-1 border rounded gap-x-2 border-appRed"
              >
                <FaCartPlus className="text-lg text-appRed" />{" "}
                <p className=" text-appRed">Add to Cart</p>
              </button>
            )}

            <button
              onClick={() => {
                let isAdded = isAddedToCart(cartItems, productData?._id);
                if (isAdded) {
                  navigation.push("/cart");
                } else {
                  addToCart();
                  navigation.push("/cart");
                }
              }}
              className="px-8 py-1 text-white rounded bg-appRed"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10 ">
        <SimilarProduct id={id} />
      </div>
    </div>
  );
};

export default ProductDetails;
