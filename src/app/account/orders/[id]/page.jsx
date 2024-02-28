"use client";
import HeaderMobileView from "@/components/account/HeaderMobileView";
import { sortString } from "@/utils/helper";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SingleOrder = ({ params }) => {
  const userOrdersData = useSelector((state) => state.user?.userOrdersData);
  const userData = useSelector((state) => state.user?.userDetails);
  const [singleData, setSingleData] = useState();
  const router = useRouter();
  //console.log(userOrdersData);

  useEffect(() => {
    const f = userOrdersData?.filter((item, index) => item?._id == params?.id);
    //console.log(f);
    setSingleData(f[0]);
  }, []);

  return (
    <div>
      <HeaderMobileView
        title={`${singleData?.productDetails?.product_name} ${singleData?.productDetails?.type}`}
      />
      <div className="min-h-screen px-5 my-3 ">
        <div className="p-3 border border-gray-300">
          <h2 className="font-semibold text-appTextBlack">Delivery Address</h2>
          <h3 className="mt-2 text-sm font-semibold capitalize text-appTextBlack">
            {singleData?.address?.firstName} {singleData?.address?.lastName}
          </h3>
          <div className="flex mt-1 text-sm gap-x-1 ">
            <p className="capitalize ">
              {singleData?.address?.calonyORvillage}
            </p>
            <p className="capitalize ">{singleData?.address?.houseNumber}</p>
            <p className="capitalize ">{singleData?.address?.city}</p>
            <p className="capitalize ">{singleData?.address?.landmark}</p>
            <p className="capitalize ">{singleData?.address?.state}</p>-{" "}
            <p className="font-medium capitalize ">
              {singleData?.address?.pinCode}
            </p>
          </div>
          <h3 className="mt-1 text-sm font-semibold capitalize text-appTextBlack">
            Phone Numbers
          </h3>
          <div className="flex items-center mt-1 gap-x-2">
            <p className="text-sm capitalize ">{userData?.phone}</p>
            <p className="text-sm capitalize ">
              {singleData?.address?.alternativePhone}
            </p>
          </div>
        </div>
        <div className="py-4 mt-5 border border-gray-300 lg:px-3">
          <div className="flex items-center lg:w-[30%] m ">
            <img
              src={singleData?.productDetails?.selectedColor}
              className="w-20 h-20 "
            />
            <div className="ml-1 ">
              <h3 className="text-sm font-medium capitalize text-appTextBlack ">
                {sortString(
                  `${singleData?.productDetails?.product_name}
                ${singleData?.productDetails?.type} 
                ${singleData?.productDetails?.category}`,
                  55
                )}
              </h3>
              <h3 className="text-[13px] font-medium text-gray-400  capitalize ">
                Seller : Dev-Trendy
              </h3>
              <h3 className="text-[10px] font-medium text-gray-400  capitalize mt-1 ">
                id - {sortString(singleData?._id, 20)}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleOrder;
