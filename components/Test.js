import React from "react";
import { useQuery } from "@tanstack/react-query";
import Tips from "./Tips";

export default function RQBudjet() {
  const { data } = useQuery(
    ["budgets"],
    ()=>  { return  fetch("http://localhost:4000/budjects").then((res) => res.data)}

  );

  console.log("na data this==>", data);
  return (
    <div>
      {data?.data?.map((budjet) => (
        <Tips
          title="yuuuiiopop"
          description="When it comes to saving, one of the most important things to remember is why you need to save in the first place. Keeping the reason at the forefront of your mind will help you from falling off the savings wagon. If you need to write a note to yourself and put it on your bathroom mirror, do it."
          image="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
        />
      ))}
    </div>
  );
}
