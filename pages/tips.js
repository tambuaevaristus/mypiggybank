import React from "react"; import Navbar from "../components/Navbar";
import Tips from "../components/Tips";
import RQBudjet from "../components/Test";

export default function tips() {
  return (
    <div>
      <Navbar />
      <div class="d-flex">
        <div class="overflow-auto">
            <RQBudjet />
        </div>
      </div>
    </div>
  );
}
