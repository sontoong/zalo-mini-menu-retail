import React from "react";
import StarIcon from "../../static/ic_round-star.png";
import ChevronRightIcon from "../../static/chevron-right.png";
import MessageIcon from "../../static/messages-3.png";
import { useNavigate } from "react-router-dom";

const HeadButtons = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center gap-[12px] rounded-t-[20px] bg-white px-[16px] pb-[12px] pt-[20px]">
      {/* Ratings */}
      <div
        className="flex h-[36px] w-full items-center justify-between rounded-[24px] px-[12px]"
        style={{
          boxShadow:
            "0px 0px 0.84px 0px #30497433, 0px 0.84px 4px -1px #2E4F881F",
        }}
        onClick={() => navigate("/ratings")}
      >
        <div className="flex items-center gap-[8px]">
          <div className="flex items-center gap-[4px]">
            <div className="size-[24px]">
              <img src={StarIcon} alt="" className="size-full object-contain" />
            </div>
            <div className="text-lg font-medium">4.8</div>
          </div>
          <div className="text-sm font-normal text-neutral6">
            (120 đánh giá)
          </div>
        </div>
        <div className="size-[20px]">
          <img
            src={ChevronRightIcon}
            alt=""
            className="size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeadButtons;
