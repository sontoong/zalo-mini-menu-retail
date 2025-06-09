import React from "react";
import { useLocation } from "react-router-dom";
import { Header, Page } from "zmp-ui";
import ArrowLeftIcon from "../static/arrow-left-blue.png";
import { TableOrderDetailsPageTabs } from "../components/TableOrderDetailsPage";

const TableOrderDetailsPage = () => {
  const { state } = useLocation();
  const order = state;

  return (
    <Page className="page-content relative flex flex-1 flex-col bg-white">
      <Header
        title={
          (
            <div className="flex w-[calc(100%-32px)] justify-center">
              <div className="text-lg font-medium">
                {`Đơn hàng #${order.id}`}
              </div>
            </div>
          ) as unknown as string
        }
        className="topbar no-border h-auto flex-none !bg-white pl-4"
        backIcon={
          <div className="absolute inset-1/2 flex size-[40px] -translate-x-1/3 -translate-y-1/2 items-center justify-center rounded-full bg-surface">
            <img src={ArrowLeftIcon} />
          </div>
        }
      />
      <div className="flex-1 overflow-auto bg-surface">
        <TableOrderDetailsPageTabs />
      </div>
    </Page>
  );
};

export default TableOrderDetailsPage;
