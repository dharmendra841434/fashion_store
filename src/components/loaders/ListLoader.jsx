import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ListLoader = () => {
  return (
    <div className="flex gap-4 ">
      {[1, 2, 3, 4, 5, 6]?.map((item, index) => (
        <Skeleton key={index} height={400} width={190} count={1} />
      ))}
    </div>
  );
};

export default ListLoader;
