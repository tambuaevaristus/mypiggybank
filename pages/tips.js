import React from "react"; import Navbar from "../components/Navbar";
import Tips from "../components/Tips";

export default function tips() {
  return (
    <div>
      <Navbar />
      <div class="d-flex">
        <div class="overflow-auto">
          <Tips
            title="Know the Importance of Saving"
            description="When it comes to saving, one of the most important things to remember is why you need to save in the first place. Keeping the reason at the forefront of your mind will help you from falling off the savings wagon. If you need to write a note to yourself and put it on your bathroom mirror, do it."
            image="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
          />
          <Tips
            title="Make a budget"
            description="Before you start spending your money, make a budget to help you prioritize your expenses."
            image="https://cfoshare.org/wp-content/uploads/2020/12/AdobeStock_113685937-scaled.jpeg"
          />
          <Tips
            title="Track your spending"
            description="Keep track of your expenses so that you know where your money is going. This will help you identify areas where you might be overspending."
            image="https://kenyanwallstreet.com/wp-content/uploads/2020/04/budget-900x400v2.png"
          />
          <Tips
            title="Avoid impulse purchases"
            description="Try not to buy things on a whim. Instead, give yourself time to think about whether you really need the item."
            image="https://edunewsnetwork.files.wordpress.com/2021/07/impulse-buying.jpeg?w=1200"
          />
          <Tips
            title="Shop around"
            description="Don't always go for the first option you see. Take the time to compare prices and find the best deals."
            image="https://www.jobs.ie/job-talk/wp-content/uploads/Jobs-in-retail_header.jpg"

          />
          <Tips
            title="Use cash"
            description="If possible, try to use cash instead of credit cards. This way, you can physically see how much money you are spending and it may help you control your spending better.
"
            image="https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2Ff682327f-6518-4749-b238-1dd8a02b5e05.jpg?fit=scale-down&source=next&width=700"
          />
          <Tips
            title="Save for big purchases"
            description="If you're planning on making a big purchase, save up for it rather than putting it on credit."
            image="https://i0.wp.com/prospectivevs.com/wp-content/uploads/2022/06/how-to-save-money-for-a-big-purchase-pvs-financial-coaching-and-services.png?fit=1200%2C675&ssl=1"

          />
          <Tips
            title="Prioritize debt repayment"
            description="If you have outstanding debts, prioritize paying them off before making any unnecessary purchases."
            image="https://www.debt.com/wp-content/uploads/2022/10/Pay-Off-Debt-with-a-Personal-Loan.jpg"
          />
          <Tips
            title="Invest in experiences"
            description="Consider investing your money in experiences rather than material possessions. Memories last longer than things!"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ZSMMeLDwfOUn_G7xOD4EO-K7YXYP-xMbcEWvp_EHZsA0s5Rr4JZZ_o2YYRbp3i537Ig&usqp=CAU"

          />
          <Tips
            title="Cut down on eating out:"
            description="Eating out can be expensive, so try to cut back and cook more meals at home. You can save a lot of money by cooking your own meals.
"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfdijRJ7BNjrXIVVLCnh2j5_Bssz7jzRbXeA&usqp=CAU"
          />
          <Tips
            title="Use cashback apps"
            description="There are many cashback apps available that can help you save money on everyday purchases. Look for apps like Rakuten, Ibotta, and Fetch Rewards.
"
            image="https://assets.yourlifechoices.com.au/2022/08/14170200/cashback730.jpg"
          />
          <Tips
            title="Shop around for insurance"
            description="Insurance rates can vary widely between providers, so it's important to shop around. Get quotes from different companies and compare them to find the best deal.
"
            image="https://capitalinsuranceservice.com/wp-content/uploads/2020/01/lowest-price-car-insurance-md.jpg"
          />
          <Tips
            title="Take advantage of free activities"
            description="Instead of spending money on expensive entertainment, look for free activities in your area. Go for a hike or visit a local museum, or check out a free concert."
          
            image="https://amazingworld.travel/wp-content/uploads/2023/04/4.-Take-advantage-of-free-activities-like-hiking-visiting-parks-or-exploring-local-attractions.webp"
          />
        </div>
      </div>
    </div>
  );
}
