import React, { FC } from "react";
import FoodImg from "../../static/food-1.jpg";
import { StarFilled } from "@ant-design/icons";

const HighRatingServices = () => {
  return (
    <div className="flex flex-col gap-[8px] bg-[#F7F9FC] pb-[4px] pt-[8px]">
      <div className="px-[16px] text-[15px] font-medium">
        Dịch vụ đánh giá cao
      </div>
      <div className="flex gap-[12px] overflow-auto px-[16px] py-1 hide-scrollbar">
        {Array.from({ length: 5 }).map((_, index) => (
          <HighRatingServiceItem key={index} />
        ))}
      </div>
    </div>
  );
};

const HighRatingServiceItem = () => {
  return (
    <div
      className="flex w-[140px] shrink-0 items-center gap-[8px] rounded-[8px] bg-white p-[8px]"
      style={{
        boxShadow:
          " 0px 0px 0.84px 0px #30497433, 0px 0.84px 4px -1px #2E4F8833",
      }}
    >
      <div className="size-[28px] overflow-hidden rounded-[3px]">
        <img src={FoodImg} alt="" className="size-full object-cover" />
      </div>
      <div className="flex flex-col">
        <div className="text-xs font-medium">Cắt tóc</div>
        <div className="flex gap-[2px]">
          <div className="text-2xs font-normal text-neutral8">5</div>
          <StarFilled className="text-2xs text-yellow5" />
          <div className="text-2xs font-normal text-neutral5">(21)</div>
        </div>
      </div>
    </div>
  );
};

export default HighRatingServices;
