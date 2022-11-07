import React from "react";
import Card from "./Card";

export default function Cards() {
  return (
    <div className="container py-5 mt-5">
      <div class="col-lg-8 mx-auto py-4 text-center">
        <h1 class="">Get Some Resource</h1>
        <p class="lead mb-0">
          Using Bootstrap 4 grid and utilities, create a nice team page.
        </p>
        {/* <p class="lead">Snippet by<a href="https://bootstrapious.com/snippets" class="text-white">
                <u>Bootstrapious</u></a>
            </p> */}
      </div>
      <div className=" row ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
