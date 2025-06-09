import React from "react";
import { TabsProps } from "antd";
import { Tabs as OriginalTabs } from "../common/tabs";
import { CurrentOrderList } from "./current-order-list";
import { HistoryOrderList } from "./history-order-list";

const Tabs = () => {
  return (
    <OriginalTabs
      items={tabs}
      centered
      className="custom-tabs h-full"
      tabBarStyle={{
        marginBottom: "0px",
        backgroundColor: "#fff",
      }}
      selectColor="#04A9E0"
    />
  );
};

export default Tabs;

const tabs: TabsProps["items"] = [
  {
    key: "1",
    label: "Món đang chọn",
    children: <CurrentOrderList />,
  },
  {
    key: "2",
    label: "Món đã gọi",
    children: <HistoryOrderList />,
  },
];
