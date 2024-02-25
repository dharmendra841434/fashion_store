"use client";
import { useRouter } from "next/navigation";
import React from "react";

const AccountLayout = ({ children }) => {
  const navigation = useRouter();
  return (
    <div className="grid grid-cols-2 ">
      <div className="flex flex-col ">
        <button onClick={() => navigation.push("/account/option1")}>
          Option1
        </button>
        <button>Option1</button>
        <button>Option1</button>
        <button>Option1</button>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default AccountLayout;
