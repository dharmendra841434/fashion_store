"use client";
import HeaderMobileView from "@/components/account/HeaderMobileView";
import { getUserOrders } from "@/redux/slice/userSlice";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Orders = () => {
  const userData = useSelector((state) => state.user?.userDetails);
  const userOrdersData = useSelector((state) => state.user?.userOrdersData);
  const navigation = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    let id = userData?._id;
    console.log(id);
    dispatch(getUserOrders(id));
  }, []);

  //console.log(userOrdersData);

  return (
    <div>
      <div className="hidden lg:block ">
        <div className="px-6 py-4 border-b border-b-gray-300">
          <h2 className="font-bold text-appTextBlack">My Orders</h2>
        </div>
        <div className="px-20 ">
          {userOrdersData?.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-screen">
              <h2 className="font-medium ">You have no any Orders yet </h2>
              <button
                onClick={() => navigation.push("/")}
                className="px-3 py-1 mt-5 text-white bg-appRed"
              >
                Countinue Shopping
              </button>
            </div>
          ) : (
            <div className="min-h-screen ">
              {userOrdersData?.map((item, index) => (
                <div
                  onClick={() => {
                    navigation.push(`/account/orders/${item?._id}`);
                  }}
                  key={index}
                  className="my-5 border border-gray-300 rounded-md cursor-pointer"
                >
                  <div className="flex items-center ">
                    <img
                      src={item?.productDetails?.selectedColor}
                      className="w-20 h-20 "
                    />
                    <div className="px-2 ">
                      <h3 className="text-sm ">
                        Expect delivery data update soon..
                      </h3>
                      <h3 className="text-[13px] text-appTextBlack  capitalize ">
                        {item?.productDetails?.product_name}
                        {""}
                        {item?.productDetails?.type}{" "}
                        {item?.productDetails?.category}
                      </h3>
                      <h4 className="text-[12px] px-2 mt-2 font-medium text-green-600 capitalize rounded bg-green-100 w-fit ">
                        {item?.orderStatus}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className=" lg:hidden">
        <HeaderMobileView title="My Orders" />
        <div className="px-2 ">
          {userOrdersData?.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-screen">
              <h2 className="font-medium ">You have no any Orders yet </h2>
              <button
                onClick={() => navigation.push("/")}
                className="px-3 py-1 mt-5 text-white bg-appRed"
              >
                Countinue Shopping
              </button>
            </div>
          ) : (
            <div className="min-h-screen ">
              {userOrdersData?.map((item, index) => (
                <div
                  onClick={() => {
                    navigation.push(`/account/orders/${item?._id}`);
                  }}
                  key={index}
                  className="my-5 border border-gray-300 rounded-md"
                >
                  <div className="flex items-center ">
                    <img
                      src={item?.productDetails?.selectedColor}
                      className="w-20 h-20 "
                    />
                    <div className="px-2 ">
                      <h3 className="text-sm ">
                        Expect delivery data update soon..
                      </h3>
                      <h3 className="text-[13px] text-appTextBlack  capitalize ">
                        {item?.productDetails?.product_name}
                        {""}
                        {item?.productDetails?.type}{" "}
                        {item?.productDetails?.category}
                      </h3>
                      <h4 className="text-[12px] px-2 mt-2 font-medium text-green-600 capitalize rounded bg-green-100 w-fit ">
                        {item?.orderStatus}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Orders;
