import React, { FC } from "react";
import { Radio } from "../common/radio";
import { deliveryMethods } from "../../constants/deliveryTypes";

const DeliveryTime: FC<Props> = (props) => {
  return (
    <div className="flex flex-col gap-[8px]">
      <div className="text-[15px] font-medium">Thời gian giao</div>
      <Radio.ButtonGroup
        items={Object.values(
          deliveryMethods[props.deliveryMethod].deliveryTypes,
        )}
        render={(item) => (
          <div className="flex h-[56px] items-center gap-[8px] rounded-[12px] border border-strokeNavigation bg-white px-[10px]">
            <div className="size-[24px]">
              <img src={item?.icon} alt="" className="size-full object-cover" />
            </div>
            <div className="flex flex-col gap-[4px]">
              <div className="text-sm font-normal">{item?.label}</div>
              <div className="text-xs font-normal text-neutral6">
                {item?.description}
              </div>
            </div>
          </div>
        )}
        activeRender={(item) => (
          <div className="flex h-[56px] items-center gap-[8px] rounded-[12px] border-[1.5px] border-primary bg-white px-[10px]">
            <div className="size-[24px]">
              <img src={item?.icon} alt="" className="size-full object-cover" />
            </div>
            <div className="flex flex-col gap-[4px]">
              <div className="text-sm font-normal">{item?.label}</div>
              <div className="text-xs font-normal text-neutral6">
                {item?.description}
              </div>
            </div>
          </div>
        )}
        className="flex gap-[12px]"
        direction="column"
        {...props}
      />
    </div>
  );
};

export default DeliveryTime;

type Props = {
  value?: any;
  onChange?: any;
  deliveryMethod: any;
};
