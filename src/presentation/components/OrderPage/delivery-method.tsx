import React, { FC } from "react";
import { Radio } from "../common/radio";
import { deliveryMethods } from "../../constants/deliveryTypes";

const DeliveryMethod: FC<Props> = (props) => {
  return (
    <div className="flex flex-col gap-[12px]">
      <div className="flex flex-col gap-[8px]">
        <div className="text-[15px] font-medium">Giao hàng</div>
        <Radio.ButtonGroup
          items={Object.values(deliveryMethods)}
          render={(item) => (
            <div className="flex h-[66px] flex-col items-center justify-center gap-[4px] rounded-[12px] border border-stroke1 bg-white">
              <div className="size-[24px]">
                <img
                  src={item?.icon}
                  alt=""
                  className="size-full object-cover"
                />
              </div>
              <div className="text-xs font-normal text-neutral8">
                {item?.label}
              </div>
            </div>
          )}
          activeRender={(item) => (
            <div className="flex h-[66px] flex-col items-center justify-center gap-[4px] rounded-[12px] border-[1.5px] border-primary bg-[#EEF5FC99]">
              <div className="size-[24px]">
                <img
                  src={item?.activeIcon}
                  alt=""
                  className="size-full object-cover"
                />
              </div>
              <div className="text-xs font-normal text-[#46A3ED]">
                {item?.label}
              </div>
            </div>
          )}
          className="flex gap-[12px]"
          {...props}
        />
      </div>
    </div>
  );
};

export { DeliveryMethod };

type Props = {
  value?: any;
  onChange?: any;
};
