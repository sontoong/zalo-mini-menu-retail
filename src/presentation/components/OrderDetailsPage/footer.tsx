import React, { FC } from "react";
import { formatCurrency } from "../../utils/helpers";
import { Divider } from "antd";
import { Button } from "../common/button";
import { orderStatus } from "../../constants/orderStatus";

export const Footer: FC<Props> = ({ onSubmit, status }) => {
  return <FooterButton status={status} onSubmit={onSubmit} />;
};

const FooterButton: FC<{
  status: keyof typeof orderStatus;
  onSubmit?: () => void;
}> = ({ status, onSubmit }) => {
  if (status === orderStatus["1"].key) {
    return (
      <div className="pb-[150px]">
        <div
          className="fixed inset-x-0 bottom-0 flex flex-col bg-white"
          style={{ boxShadow: "0px -2px 12px 0px #0000000F" }}
        >
          {/* Total Price */}
          <div className="flex items-center justify-between px-[16px] pb-[12px] pt-[12px]">
            <div className="text-[15px] font-medium text-gray8">Tổng tiền</div>
            <div className="flex items-center gap-[4px]">
              <div className="text-base font-normal text-gray5 line-through">
                {formatCurrency(340000)}
              </div>
              <div className="text-lg font-medium">
                {formatCurrency(240000)}
              </div>
            </div>
          </div>
          <Divider className="m-0" />
          {/* Buttons */}
          <div className="flex px-[16px] pb-[40px] pt-[12px]">
            <Button
              text={
                <div className="text-sm font-normal text-white">Đặt đơn</div>
              }
              className="h-[37px] rounded-[40px] bg-primary5"
              onClick={onSubmit}
            />
          </div>
        </div>
      </div>
    );
  }

  if (status === orderStatus["5"].key) {
    return (
      <div className="p-[16px]">
        <Button
          text={
            <div className="text-sm font-medium text-primary6">Đặt lại</div>
          }
          className="h-[33px] w-full rounded-[40px] border-[1.5px] border-primary5 bg-white"
          onClick={onSubmit}
        />
      </div>
    );
  }

  return (
    <div className="p-[16px]">
      <Button
        text={
          <div className="text-sm font-medium text-primary6">
            Đánh giá đơn hàng
          </div>
        }
        className="h-[33px] w-full rounded-[40px] border-[1.5px] border-primary5 bg-white"
        onClick={onSubmit}
      />
    </div>
  );
};

type Props = {
  onSubmit?: () => void;
  status: keyof typeof orderStatus;
};
