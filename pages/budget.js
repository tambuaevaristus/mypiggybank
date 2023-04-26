import React from "react";
import Navbar from "../components/Navbar";
import Income from "../components/Income";
import Budget from "../components/Budget";

export default function budget() {
  return (
    <div className="">
      <Navbar />
      <div className="p-4">
        {/* <Income /> */}
        <Budget />
      </div>
    </div>
  );
}
