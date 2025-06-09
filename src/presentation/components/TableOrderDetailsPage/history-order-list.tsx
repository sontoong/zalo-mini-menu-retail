import React, { FC } from "react";
import { formatCurrency } from "../../utils/helpers";
import { Divider } from "antd";
import { Tag } from "../common/tag";
import PaymentMethodIcon from "../../static/payment-method-icon.png";
import NoteTextIcon from "../../static/note-text.png";

const HistoryOrderList = () => {
  return (
    <div className="flex flex-col gap-[12px] py-[20px]">
      {Array.from({ length: 2 }).map((order, index) => (
        <HistoryOrderListItem key={index} order={order} />
      ))}
      <div
        className="flex flex-col gap-[14px] bg-white px-[16px] py-[12px]"
        style={{ boxShadow: "0px 4px 12px 0px #0000000A" }}
      >
        <div className="flex flex-col gap-[12px]">
          <div className="flex justify-between">
            <div className="text-sm font-normal">Tổng tiền</div>
            <div className="text-sm font-medium">{formatCurrency(320000)}</div>
          </div>
          <Divider className="m-0" variant="dashed" />
          <div className="flex justify-between">
            <div className="text-sm font-normal">Tổng thanh toán</div>
            <div className="text-sm font-medium">{formatCurrency(250000)}</div>
          </div>
        </div>
        <div className="flex flex-col gap-[12px]">
          <div className="flex justify-between">
            <div className="text-sm font-medium">Hình thức thanh toán</div>
            <Tag bordered={false} color="#EEF5FC" className="!mr-0">
              <div className="text-xs font-medium text-infor3">
                Chưa thanh toán
              </div>
            </Tag>
          </div>
          <div className="flex items-center gap-[8px]">
            <div className="size-[32px]">
              <img
                src={PaymentMethodIcon}
                alt=""
                className="size-full object-cover"
              />
            </div>
            <div className="text-sm font-normal">Thanh toán tại cửa hàng</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HistoryOrderListItem: FC<{ order: any }> = ({ order }) => {
  return (
    <div
      className="flex flex-col gap-[10px] bg-white px-[16px] py-[12px]"
      style={{ boxShadow: "0px 4px 12px 0px #0000000A" }}
    >
      <div className="flex items-center gap-[4px]">
        <img src={NoteTextIcon} alt="" className="size-[20px] object-cover" />
        <div className="text-base font-medium">Order lần 1 - 14:00</div>
      </div>
      <Divider className="m-0" />
      <div className="flex flex-col gap-[12px]">
        {Array.from({ length: 3 }).map((item, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col gap-[8px]">
              <div className="flex justify-between">
                <div className="text-sm font-medium">1 x Hamburger bò</div>
                <div className="text-sm font-medium text-neutral6">
                  {formatCurrency(150000)}
                </div>
              </div>
              <div className="text-xs font-normal text-neutral6">
                Phô mai, xà lách
              </div>
              <div className="line-clamp-1 text-xs font-normal">
                <span className="text-gray8">Ghi chú: </span>
                <span className="text-gray7">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                  voluptate excepturi dolor nemo fuga sequi adipisci, rem ut
                  quisquam, voluptas corporis nostrum doloribus. Voluptatum
                  veniam facilis nemo at? Quidem, nulla.
                </span>
              </div>
            </div>
            {index < 2 && <Divider className="m-0" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export { HistoryOrderList };
