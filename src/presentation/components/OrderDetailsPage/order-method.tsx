import React, { FC } from "react";
import { orderMethods } from "../../constants/orderMethods";

export const OrderMethod: FC<Props> = ({ orderMethod = 1 }) => {
  const { icon, key, label } = orderMethods[orderMethod];

  return (
    <div className="flex flex-col gap-[4px] px-[16px]">
      <div className="text-[15px] font-medium">Hình thức</div>
      <div className="flex items-center gap-[8px]">
        <div className="size-[32px]">
          <img src={icon} alt="" className="size-full object-cover" />
        </div>
        <div className="text-sm font-normal text-neutral6">{label}</div>
      </div>
    </div>
  );
};

type Props = {
  orderMethod: keyof typeof orderMethods;
};
