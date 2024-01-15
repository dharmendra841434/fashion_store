import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import NewProductSlider from "../components/homeComponents/NewProductSlider";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  // const selectedMovie = useSelector((state) => state.app.selectedMovie);

  // console.log(selectedMovie);
  return (
    <div className=" py-6">
      <div className=" max-w-7xl mx-auto px-3 ">
        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-10 px-2">
          <div className=" relative flex items-center group  bg-appGray/70 justify-center  h-[15rem] overflow-hidden ">
            <Image
              src="/images/tshirt.png"
              height={240}
              width={240}
              className=" transition-all duration-300 ease-in-out group-hover:scale-110"
            />
            <div className={`${styles.overlay}`}></div>
            <div className=" absolute left-0 top-0 pt-8 px-3 cursor-auto ">
              <h2 className=" font-bold text-3xl text-white">T-Shirts</h2>
              <p className=" w-[65%] text-white mt-2">
                we make a perfect designed and with best material t-shirts for
                developers
              </p>
              <div className=" flex items-center mt-4">
                <h3 className=" font-semibold text-white uppercase">
                  Shop Now
                </h3>
                <button className=" mx-2">
                  <BsFillArrowRightCircleFill className=" text-white  text-xl" />
                </button>
              </div>
            </div>
          </div>
          <div className=" relative flex items-center group bg-appGray/70  justify-center  h-[15rem] overflow-hidden">
            <Image
              src="/images/tanktop.png"
              height={240}
              width={240}
              className=" transition-all duration-300 ease-in-out group-hover:scale-110"
            />
            <div className={`${styles.overlay}`}></div>
            <div className=" absolute left-0 top-0 pt-8 px-3 cursor-auto ">
              <h2 className=" font-bold text-3xl text-white">Tank-Top</h2>
              <p className=" w-[65%] text-white mt-2">
                we make perfect Comfertable designed and with best material
                tank-top
              </p>
              <div className=" flex items-center mt-4">
                <h3 className=" font-semibold text-white uppercase">
                  Shop Now
                </h3>
                <button className=" mx-2">
                  <BsFillArrowRightCircleFill className=" text-white  text-xl" />
                </button>
              </div>
            </div>
          </div>
          <div className=" relative flex group bg-appGray/70  items-center justify-center h-[15rem] overflow-hidden">
            <Image
              src="/images/hoodies.png"
              height={240}
              width={240}
              className=" transition-all duration-300 ease-in-out group-hover:scale-110"
            />
            <div className={`${styles.overlay}`}></div>
            <div className=" absolute left-0 top-0 pt-8 px-3 cursor-auto ">
              <h2 className=" font-bold text-3xl text-white">Hoodies</h2>
              <p className=" w-[65%] text-white mt-2">
                we make warm and with best material Hoodies for you
              </p>
              <div className=" flex items-center mt-4">
                <h3 className=" font-semibold text-white uppercase">
                  Shop Now
                </h3>
                <button className=" mx-2">
                  <BsFillArrowRightCircleFill className=" text-white  text-xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" px-3">
          <NewProductSlider />
        </div>
      </div>
    </div>
  );
};

export default Home;
