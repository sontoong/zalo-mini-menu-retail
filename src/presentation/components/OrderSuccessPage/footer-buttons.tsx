import React from "react";
import { Button } from "../common/button";
import { CancelOrder } from "./cancel-order";

const FooterBottons = () => {
  return (
    <div className="flex h-[33px] gap-[12px]">
      <CancelOrder>
        {({ open }) => (
          <Button
            text={
              <div className="text-[15px] font-medium text-gray7">Huỷ đơn</div>
            }
            className="rounded-[40px] bg-gray2"
            onClick={open}
          />
        )}
      </CancelOrder>
      <Button
        text={
          <div className="text-sm font-normal text-white">Về trang chủ</div>
        }
        className="rounded-[40px] bg-primary5"
      />
    </div>
  );
};

export default FooterBottons;
