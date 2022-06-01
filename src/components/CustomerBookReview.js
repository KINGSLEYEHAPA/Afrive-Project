import React from "react";
import RatingStars from "./RatingStars";

export const ViewReview = ({ title }) => {
  return (
    <div className="w-full h-[100px]  mt-[32px] flex gap-[20px] mb-[61px]">
      <div className="flex justify-start items-start w-[201px] ">
        <h3 className="bodyL text-neutral-50 font-reg">{title}</h3>
      </div>
      <div className="w-[871px] h-[64px] ">
        <RatingStars />
        <p className="mt-[11.63px] text-[rgba(0,0,0,0.90)] text-buttonT2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat ac
          turpis id imperdiet ipsum tincidunt nunc ipsum. Ac vitae, imperdiet
          aliquam tortor. Porttitor sed at bibendum pellentesque.
        </p>
      </div>
    </div>
  );
};

const CustomerBookReview = () => {
  return (
    <div className="w-screen max-w-[1440px] mx-auto h-[468px] bg-primary-10 mt-[112.30px]  px-[182px] pt-[55.43px] pb-[98px] ">
      <div className="w-full h-full overflow-hidden overflow-y-auto  scrollbar-hide">
        <div className="w-full h-[32px]  flex justify-between items-center">
          <h3 className="text-h3 font-reg text-neutral-80">
            Customers Reviews
          </h3>
          <p className=" text-neutral-30 text-bodyL hover:text-neutral-80 cursor-pointer">
            see more
          </p>
        </div>
        <ViewReview title="Kingsley Ehapa" />
        <ViewReview title="Joshua Oyedepo" />
        <ViewReview title="Patrick Njoli" />
        <ViewReview title="Faith Obodo" />
      </div>
    </div>
  );
};

export default CustomerBookReview;
