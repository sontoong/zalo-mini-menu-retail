import React, { FC } from "react";
import FoodImg from "../../static/food-1.jpg";
import EditIcon from "../../static/edit-icon.png";
import NoteTextIcon from "../../static/note-text.png";
import { Divider } from "antd";
import { formatCurrency } from "../../utils/helpers";
import OrderListEmptyIcon from "../../static/order-list-empty-icon.png";
import { Button } from "../common/button";

const CurrentOrderList = () => {
  return (
    <div className="flex h-full flex-col gap-[12px] px-[16px] py-[20px]">
      {data.length ? (
        data.map((order, index) => <OrderListItem key={index} order={order} />)
      ) : (
        <div className="flex size-full items-center justify-center">
          <div className="flex size-fit -translate-y-[40px] flex-col items-center gap-[20px]">
            <div className="flex flex-col items-center gap-[12px]">
              <img src={OrderListEmptyIcon} alt="" className="size-[80px]" />
              <div className="text-xs font-normal text-gray8">
                Danh sách món đang chọn đang trống
              </div>
            </div>
            <Button
              text={
                <div className="text-xs font-normal text-white">Chọn thêm</div>
              }
              className="h-[31px] w-[87px] flex-none rounded-[40px] bg-primary5"
            />
          </div>
        </div>
      )}
    </div>
  );
};

const OrderListItem: FC<{ order: any }> = ({ order }) => {
  return (
    <div
      className="flex flex-col gap-[8px] rounded-[8px] bg-white p-[12px]"
      style={{ boxShadow: "0px 6px 12px 0px #3F5F7C1A" }}
    >
      <div className="flex items-start gap-[12px]">
        <img
          src={FoodImg}
          alt=""
          className="size-[56px] rounded-[6px] object-cover"
        />
        <div className="flex flex-col gap-[8px]">
          <div className="flex justify-between">
            <div className="text-sm font-medium">1 x Hamburger bò</div>
            <img src={EditIcon} alt="" className="size-[20px] object-cover" />
          </div>
          <div className="text-xs font-normal text-neutral6">
            Phô mai, xà lách
          </div>
          <div className="flex items-center gap-[4px]">
            <div className="size-[20px] shrink-0">
              <img
                src={NoteTextIcon}
                alt=""
                className="size-full object-cover"
              />
            </div>
            <div className="line-clamp-1 text-xs font-normal">
              <span className="text-gray8">Ghi chú: </span>
              <span className="text-gray7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                voluptate excepturi dolor nemo fuga sequi adipisci, rem ut
                quisquam, voluptas corporis nostrum doloribus. Voluptatum veniam
                facilis nemo at? Quidem, nulla.
              </span>
            </div>
          </div>
        </div>
      </div>
      <Divider className="m-0" />
      <div className="text-sm font-normal text-neutral8">
        Tổng tiền:{" "}
        <span className="font-medium text-infor3">
          {formatCurrency(150000)}
        </span>
      </div>
    </div>
  );
};

export { CurrentOrderList };

const data = Array.from({ length: 3 });
// const data = [];
