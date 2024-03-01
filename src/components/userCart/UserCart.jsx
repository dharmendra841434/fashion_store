"use client";
import React, { useState } from "react";
import HeaderMobileView from "../account/HeaderMobileView";
import { useDispatch, useSelector } from "react-redux";
import { MdClose } from "react-icons/md";
import CustomModal from "../CustomModal";
import CheckBox from "../account/CheckBox";
import { FaLocationCrosshairs } from "react-icons/fa6";
import {
  calculateDiscountedPrice,
  calculateTotalAtualPrice,
  calculateTotalPrice,
  decreasQty,
  getLocation,
  increasQty,
  sizeChart,
} from "@/utils/helper";
import { userAPI } from "@/redux/api/userAPI";
import Rating from "../homeComponents/Ratings";
import { MdOutlineAdd } from "react-icons/md";
import { RiSubtractLine } from "react-icons/ri";
import {
  setCartItems,
  setTotalPrice,
  updateUserCartItems,
} from "@/redux/slice/userSlice";
import { BsCartXFill, BsCurrencyRupee } from "react-icons/bs";
import { useRouter } from "next/navigation";

const UserCart = () => {
  const cartItems = useSelector((state) => state.user.cartItems);
  const userAddress = useSelector((state) => state.user?.userAddresses);
  const userData = useSelector((state) => state.user?.userDetails);
  const totalPrice = useSelector((state) => state.user?.totalPrice);
  const [isChange, setIsChange] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(userAddress[0]);
  const [pinCode, setPinCode] = useState("");
  const dispatch = useDispatch();
  const navigation = useRouter();

  console.log(cartItems, "cartData");

  const decreaseQuantity = (item) => {
    if (item?.quantity > 1) {
      let res = decreasQty(cartItems, item?._id, item?.quantity);
      dispatch(setCartItems(res));
      if (userData !== null) {
        const data = {
          userId: userData?._id,
          cartItems: res,
        };
        dispatch(updateUserCartItems(data));
      }
      dispatch(setTotalPrice(calculateTotalPrice(res)));
    }
  };

  const increaseQuantity = (item) => {
    if (item?.quantity < 9) {
      let res = increasQty(cartItems, item?._id, item?.quantity);
      dispatch(setCartItems(res));
      if (userData !== null) {
        const data = {
          userId: userData?._id,
          cartItems: res,
        };
        dispatch(updateUserCartItems(data));
      }
      dispatch(setTotalPrice(calculateTotalPrice(res)));
    }
  };

  const removeItems = (item) => {
    let t = [...cartItems];
    let res = t.filter((item4, index) => item4?._id !== item?._id);

    dispatch(setCartItems(res));
    if (userData !== null) {
      const data = {
        userId: userData?._id,
        cartItems: res,
      };
      dispatch(updateUserCartItems(data));
    }
    dispatch(setTotalPrice(calculateTotalPrice(res)));
  };

  return (
    <div className="mx-auto max-w-7xl">
      <div className=" lg:hidden">
        <HeaderMobileView title="Cart" isLogo={true} />
      </div>
      <CustomModal isOpen={isChange} className=" bg-[rgba(0,0,0,0.6)]">
        <div className="relative z-40 flex items-center justify-center w-full h-full ">
          <div className="bg-white w-[96%]  lg:w-[30%] h-fit cursor-auto py-3 px-5 rounded-md ">
            <h2 className="mt-4 font-semibold text-appTextBlack">
              Select Delivery Address
            </h2>
            <div>
              {userAddress?.map((item, index) => (
                <div
                  key={index}
                  className="relative flex items-center py-2 transition-all duration-300 ease-in-out cursor-pointer lg:px-3 hover:bg-appRed/5"
                >
                  <CheckBox
                    onChecked={() => {
                      setSelectedAddress(item);
                      setIsChange(!isChange);
                    }}
                    isEdit={true}
                    isChecked={selectedAddress === item}
                  />
                  <div className="ml-2 ">
                    <div className="flex mt-2 text-sm gap-x-1 ">
                      <p className="font-medium capitalize ">
                        {item?.firstName}
                      </p>
                      <p className="font-medium capitalize ">
                        {item?.lastName}
                      </p>
                      <p className="font-medium capitalize ">
                        {userData?.phone}
                      </p>
                      <h2 className="px-1  py-0.5 text-[10px] uppercase bg-gray-200 rounded-md font-medium text-appTextBlack w-fit">
                        {item?.adressType}
                      </h2>
                    </div>
                    <div className="flex mt-1 text-sm gap-x-1 ">
                      <p className="capitalize ">{item?.calonyORvillage}</p>
                      <p className="capitalize ">{item?.houseNumber}</p>
                      <p className="capitalize ">{item?.city}</p>
                      <p className="capitalize ">{item?.landmark}</p>
                      <p className="capitalize ">{item?.state}</p>-{" "}
                      <p className="font-medium capitalize ">{item?.pinCode}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <h2 className="my-3 font-semibold text-appTextBlack">
              Use Pincode to check delivery info
            </h2>
            <div className="flex my-3 mt-2 gap-x-2">
              <input
                onChange={(e) => {
                  const value = e.target.value;
                  const regex = /^[0-9\b]+$/;
                  if (value === "" || regex.test(value)) {
                    setPinCode(value);
                  }
                }}
                value={pinCode}
                placeholder="Enter Pincode"
                className="w-full border-b-2 outline-none border-b-gray-300 placeholder:text-sm"
              />
              <button className="px-4 py-1 text-sm text-white bg-appRed">
                Check
              </button>
            </div>
            <button
              onClick={async () => {
                getLocation()
                  .then(async (coords) => {
                    // console.log(coords, "cords");
                    await userAPI.getLocation(coords).then((res) => {
                      // console.log(res, "result");
                    });
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              }}
              className="flex items-center my-6 gap-x-2"
            >
              <FaLocationCrosshairs className="text-blue-500 " />
              <h3 className="text-sm font-medium text-blue-500 ">
                Use my current location
              </h3>
            </button>
          </div>
          <button
            onClick={() => setIsChange(!isChange)}
            className="absolute text-white top-[20%] right-[32%] z-30 cursor-pointer"
          >
            <MdClose className="text-4xl " />
          </button>
        </div>
      </CustomModal>
      {cartItems?.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white ">
          <BsCartXFill className=" text-[10rem] text-appRed" />
          <h2 className="mt-5 text-lg font-bold text-appBlack">
            Your Cart is empty
          </h2>
          <button
            onClick={() => navigation.push("/")}
            className="mt-3 text-sm font-semibold text-blue-500"
          >
            Back to Home
          </button>
        </div>
      ) : (
        <div className="px-2 lg:px-4 ">
          <div className="flex flex-col lg:flex-row gap-x-4 ">
            <div className=" lg:w-[60%]">
              <div>
                <div className="relative px-3 py-4 my-6 border border-gray-300">
                  <h2 className="px-2 py-1 text-[12px] uppercase bg-gray-300 rounded-md font-medium text-appTextBlack w-fit">
                    {selectedAddress?.adressType}
                  </h2>
                  <div className="flex mt-2 text-sm ">
                    <p className="font-medium capitalize ">
                      {selectedAddress?.firstName}
                    </p>
                    <p className="ml-2 font-medium capitalize ">
                      {selectedAddress?.lastName}
                    </p>
                    <p className="ml-2 font-medium capitalize ">
                      {userData?.phone}
                    </p>
                  </div>
                  <div className="flex mt-1 text-sm gap-x-1 ">
                    <p className="capitalize ">
                      {selectedAddress?.calonyORvillage}
                    </p>
                    <p className="capitalize ">
                      {selectedAddress?.houseNumber}
                    </p>
                    <p className="capitalize ">{selectedAddress?.city}</p>
                    <p className="capitalize ">{selectedAddress?.landmark}</p>
                    <p className="capitalize ">
                      {selectedAddress?.state}
                    </p>-{" "}
                    <p className="font-medium capitalize ">
                      {selectedAddress?.pinCode}
                    </p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <button
                      onClick={() => setIsChange(!isChange)}
                      className="px-4 py-1 text-[12px] font-medium border rounded-md text-appRed border-appRed"
                    >
                      Change
                    </button>
                  </div>
                </div>
              </div>
              <div className="border border-gray-300 gap-x-2">
                {cartItems?.map((item, index) => (
                  <div
                    key={index}
                    className="flex p-3 border-b border-gray-300 gap-x-5"
                  >
                    <div>
                      <img src={item?.selectedColor} className="w-24 h-24 " />
                      <div className="flex items-center mt-4 gap-x-4">
                        <button
                          onClick={() => decreaseQuantity(item)}
                          className="p-1 border border-gray-300 rounded-full "
                        >
                          <RiSubtractLine className="text-lg text-appBlack" />
                        </button>
                        <div>{item?.quantity}</div>
                        <button
                          onClick={() => increaseQuantity(item)}
                          className="p-1 border border-gray-300 rounded-full"
                        >
                          <MdOutlineAdd className="text-lg text-appBlack" />
                        </button>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center font-medium capitalize text-appTextBlack gap-x-1">
                        <h2>{item?.product_name}</h2>
                        <h2>{item?.type}</h2>
                        <p> For </p>
                        <h2>{item?.category}</h2>
                      </div>
                      <span className=" text-[12px] text-gray-600 capitalize -mt-1">
                        Category : <span>{item?.category}</span>
                      </span>
                      <Rating value={4} />
                      <div>
                        <div className="flex items-center my-1 ">
                          <div className="flex items-center mx-1 ">
                            <BsCurrencyRupee className="text-lg text-red-600 " />
                            <span className="font-semibold text-red-600 ">
                              {calculateDiscountedPrice(
                                item?.price,
                                item?.discount
                              )}
                            </span>
                          </div>
                          <div className="flex items-center ">
                            <BsCurrencyRupee className="text-sm text-gray-400 " />
                            <p className="text-sm text-gray-400 line-through ">
                              {item?.price}
                            </p>
                          </div>
                          <div>
                            <span className=" text-[11px] capitalize text-green-500 ml-2 font-semibold">
                              {item?.discount}% discount
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-x-3">
                        <div className="flex items-center text-sm gap-x-2">
                          <p>Size : </p>
                          <div className="flex items-center gap-x-3">
                            {sizeChart?.map((item2, index) => (
                              <button
                                className={` border px-2 ${
                                  item2?.size === item.size
                                    ? " border-appRed"
                                    : "border-appGray"
                                } `}
                              >
                                {item2.size}
                              </button>
                            ))}
                          </div>
                        </div>
                        {/* <div className="flex items-center text-sm gap-x-2">
                          <p>Colors : </p>
                          <div className="flex items-center gap-x-3">
                            {item?.images?.map((item, index) => (
                              <div key={index} className="cursor-pointer ">
                                <img src={item} className="w-10 h-10 " />
                              </div>
                            ))}
                          </div>
                        </div> */}
                      </div>
                      <div className="flex items-center mt-2 text-sm gap-x-5">
                        <button className="font-semibold uppercase">
                          Save for Later
                        </button>
                        <button
                          onClick={() => removeItems(item)}
                          className="font-semibold uppercase"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-row justify-end p-3 mb-10 border shadow-dpShadow">
                <button className="px-20 py-3 text-white bg-appRed">
                  Place Order
                </button>
              </div>
            </div>
            <div className=" lg:w-[40%] py-5 0">
              <div className="border border-gray-30">
                <h2 className="p-3 font-semibold text-gray-400 uppercase border-b border-gray-300">
                  Price Details
                </h2>
                <div className="px-3 py-4 ">
                  <div className="flex items-center justify-between my-3 font-medium capitalize text-appTextBlack">
                    <p>price ({cartItems?.length} items)</p>
                    <div className="flex items-center ">
                      <BsCurrencyRupee className="text-gray-400 " />
                      <p>{calculateTotalAtualPrice(cartItems)}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between my-3 font-medium capitalize text-appTextBlack">
                    <p>Discount</p>
                    <div className="flex items-center ">
                      -<BsCurrencyRupee className="text-gray-400 " />
                      <p>{calculateTotalAtualPrice(cartItems) - totalPrice}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between my-3 font-medium capitalize text-appTextBlack">
                    <p>Delivery Charges</p>
                    <div className="flex items-center ">
                      <BsCurrencyRupee className="text-gray-400 " />
                      <p className="text-gray-400 line-through">40</p>
                      <p className="ml-2 text-green-500">Free </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-3 mt-2 border-t border-b border-gray-300 border-dotted">
                    <p className="font-bold text-appTextBlack">Total Amount</p>
                    <div className="flex items-center ">
                      <BsCurrencyRupee className=" text-appTextBlack" />
                      <p className="font-bold text-appTextBlack">
                        {totalPrice}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserCart;
