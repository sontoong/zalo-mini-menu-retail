import React from "react";
import { Filters } from "./filters";
import { OrderList } from "./order-list";
import { TabsProps } from "antd";
import { Tabs as OriginalTabs } from "../common/tabs";
import { orders1, orders2, orders3 } from "../../constants/data";

const Tabs = () => {
  return (
    <OriginalTabs
      items={tabs}
      centered
      className="custom-tabs"
      tabBarStyle={{
        marginBottom: "20px",
      }}
      selectColor="#04A9E0"
    />
  );
};

export default Tabs;

const tabs: TabsProps["items"] = [
  {
    key: "1",
    label: "Tại bàn",
    children: (
      <div className="flex flex-col gap-[12px] bg-surface px-[16px] pb-[20px]">
        <Filters />
        <OrderList orders={orders1} />
      </div>
    ),
  },
  {
    key: "2",
    label: "Giao hàng",
    children: (
      <div className="flex flex-col gap-[12px] bg-surface px-[16px] pb-[20px]">
        <Filters />
        <OrderList orders={orders2} />
      </div>
    ),
  },
  {
    key: "3",
    label: "Đến lấy",
    children: (
      <div className="flex flex-col gap-[12px] bg-surface px-[16px] pb-[20px]">
        <Filters />
        <OrderList orders={orders3} />
      </div>
    ),
  },
];
