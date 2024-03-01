import ProductDetails from "@/components/product/ProductDetails";
import React from "react";

const SingleHoodies = ({ params }) => {
  return (
    <div className="mx-auto lg:px-4 max-w-7xl">
      <ProductDetails id={params?.id} />
    </div>
  );
};

export default SingleHoodies;
