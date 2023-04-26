import React from "react";
import Navbar from "../components/Navbar";
import Income from "../components/Income";
import Budget from "../components/Budget";
import BudgetItem from "../components/BudgetItem";
import BudgetList from "../components/BudgetList";

export default function budget() {
  return (
    <div className="">
      <Navbar />
      <div className="p-4">
        {/* <Income /> */}
        {/* <Budget /> */}
        <BudgetList />
      </div>
    </div>
  );
}
