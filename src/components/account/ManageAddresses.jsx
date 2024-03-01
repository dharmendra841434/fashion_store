"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdAdd } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import InputField from "./InputField";
import StateDropDown from "./StateDropDown";
import { useFormik } from "formik";
import { addressSchema } from "@/utils/addressSchema";
import CustomTextBox from "./CustomTextBox";
import CheckBox from "./CheckBox";
import { userAPI } from "@/redux/api/userAPI";
import { toast } from "react-toastify";
import { setUserAddress } from "@/redux/slice/userSlice";
import AddressCard from "./AddressCard";

const ManageAddresses = () => {
  const userAddress = useSelector((state) => state.user?.userAddresses);
  const userData = useSelector((state) => state.user?.userDetails);
  const [add_address, setAdd_address] = useState(true);
  const [loader, setLoader] = useState(false);

  const dispatch = useDispatch();

  const {
    handleChange,
    handleReset,
    handleSubmit,
    handleBlur,
    setFieldValue,
    values,
    errors,
    touched,
  } = useFormik({
    validationSchema: addressSchema,
    initialValues: {
      firstName: "",
      lastName: "",
      alternativePhone: "",
      pinCode: "",
      state: "",
      city: "",
      calonyORvillage: "",
      addressType: "",
      mobile: "",
      landmark: "",
    },
    enableReinitialize: true,
    onSubmit: () => {
      saveAddress();
    },
  });
  // console.log(userAddress);

  const saveAddress = async () => {
    setLoader(true);
    const addressData = {
      userId: userData?._id,
      firstName: values.firstName,
      lastName: values.lastName,
      adressType: values.addressType,
      calonyORvillage: values.calonyORvillage,
      city: values.city,
      state: values.state,
      pinCode: values.pinCode,
      alternativePhone: values.alternativePhone,
      landmark: values.landmark,
      mobile: values.mobile,
      houseNumber: 0,
    };

    await userAPI
      .saveUserAddress(addressData)
      .then(async (res) => {
        // console.log(res, "result");
        handleReset();
        setAdd_address(!add_address);
        const result = await userAPI.getUserAddress(userData?._id);
        console.log(result);
        dispatch(setUserAddress(result?.addresses));
        setLoader(false);
        toast.success(res?.message, {
          theme: "colored",
          position: "top-center",
          autoClose: 1000,
          progress: false,
          hideProgressBar: true,
          //style: { backgroundColor: "green" },
        });
      })
      .catch((error) => {
        console.log(error);
        setLoader(false);
        toast.error(error?.response?.data?.message, {
          theme: "colored",
          position: "top-center",
          autoClose: 2000,
          progress: false,
          hideProgressBar: true,
          //style: { backgroundColor: "green" },
        });
      });

    //console.log(addressData, "usedgh");
  };

  //sconsole.log(touched.firstName && errors.firstName);
  return (
    <div className="p-6 ">
      <h2 className="text-lg font-bold text-appTextBlack">Manage Addresses</h2>
      {add_address ? (
        <button
          onClick={() => setAdd_address(!add_address)}
          className="flex items-center w-full px-3 py-3 my-5 border border-gray-300 cursor-pointer gap-x-2"
        >
          <MdAdd className="text-xl text-appRed" />
          <h2 className="text-sm font-bold uppercase text-appRed">
            Add a new address
          </h2>
        </button>
      ) : (
        <div className="p-5 my-6 border border-gray-300 bg-appRed/5">
          <h2 className="text-sm font-bold uppercase text-appRed">
            Add a new address
          </h2>
          <form className="mt-5 " onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-x-10 ">
              <InputField
                title="First name"
                name="firstName"
                onChange={handleChange("firstName")}
                Blur={handleBlur("firstName")}
                error={touched.firstName && errors.firstName}
                value={values.firstName}
              />
              <InputField
                title="Last name"
                name="lastName"
                onChange={handleChange("lastName")}
                Blur={handleBlur("lastName")}
                error={touched.lastName && errors.lastName}
                value={values.lastName}
              />
            </div>
            <div className="grid grid-cols-2 mt-4 gap-x-10 ">
              <InputField
                title="PinCode"
                inputMode="numeric"
                name="pinCode"
                onChange={handleChange("pinCode")}
                Blur={handleBlur("pinCode")}
                error={touched.pinCode && errors.pinCode}
                value={values.pinCode}
              />
              <InputField
                title="10-diti mobile number"
                name="mobile"
                onChange={handleChange("mobile")}
                Blur={handleBlur("mobile")}
                error={touched.mobile && errors.mobile}
                value={values.mobile}
              />
            </div>
            <div className="mt-4 ">
              <CustomTextBox
                title="Street & areas"
                inputClass=" h-28"
                name="calonyORvillage"
                onChange={handleChange("calonyORvillage")}
                Blur={handleBlur("calonyORvillage")}
                error={touched.calonyORvillage && errors.calonyORvillage}
                value={values.calonyORvillage}
              />
            </div>
            <div className="grid grid-cols-2 mt-4 gap-x-10 ">
              <InputField
                title=" City/Distric/Town"
                name="city"
                onChange={handleChange("city")}
                Blur={handleBlur("city")}
                error={touched.city && errors.city}
                value={values.city}
              />

              <StateDropDown
                title="State"
                selectedState={values.state}
                setSelectedState={(v) => {
                  setFieldValue("state", v);
                }}
                error={touched.state && errors.state}
                value={values.state}
              />
            </div>
            <div className="grid grid-cols-2 mt-4 gap-x-10 ">
              <InputField
                title="landmark (Optional)"
                name="landmark"
                Blur={handleBlur("landmark")}
                onChange={handleChange("landmark")}
                error={touched.landmark && errors.landmark}
                value={values.landmark}
              />
              <InputField
                title="alternate phone (Optional)"
                name="alternativePhone"
                Blur={handleBlur("alternativePhone")}
                onChange={handleChange("alternativePhone")}
                error={touched.alternativePhone && errors.alternativePhone}
                value={values.alternativePhone}
              />
            </div>
            <div className="flex mt-5 gap-x-3">
              {["Home", "Office"]?.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center gap-x-3"
                >
                  <CheckBox
                    isChecked={values.addressType === item}
                    onChecked={() => {
                      setFieldValue("addressType", item);
                    }}
                    isEdit={true}
                  />
                  <p
                    className={` capitalize ${
                      true ? "text-appTextBlack" : "text-appGray"
                    }`}
                  >
                    {item}
                  </p>
                </div>
              ))}
              <div className="h-6 pt-1 ">
                {touched.addressType && errors.addressType && (
                  <p className="text-[12px] text-appRed">
                    This is required field!!
                  </p>
                )}
              </div>
            </div>
            <div className="flex items-center mt-10 gap-x-5">
              <button
                type="submit"
                className="px-10 py-1 font-medium text-white bg-appRed/80"
              >
                {loader ? "Saving..." : "Save"}
              </button>
              <h2
                onClick={() => setAdd_address(!add_address)}
                className="cursor-pointer text-appBlack"
              >
                Cancel
              </h2>
            </div>
          </form>
        </div>
      )}
      <div>
        {userAddress?.map((item, index) => (
          <AddressCard item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ManageAddresses;
