import React from "react";
import { Header, Page } from "zmp-ui";
import ArrowLeftIcon from "../static/arrow-left-blue.png";
import { Footer } from "../components/common/footer";
import { OrderListPageTabs } from "../components/OrderListPage";
import { Button } from "../components/common/button";
import { useNavigate } from "react-router-dom";

const OrderListPage = () => {
  const navigate = useNavigate();

  return (
    <Page className="page-content relative flex flex-1 flex-col bg-surface">
      <Header
        title={
          (
            <div className="flex justify-between pl-[31%]">
              <div className="text-lg font-medium">Đơn hàng</div>
              <Button
                text={
                  <div className="text-sm font-medium text-blue5">Lịch sử</div>
                }
                className="h-[29px] flex-none rounded-[24px] bg-blue1 px-[10px]"
                onClick={() => navigate("/order-history")}
              />
            </div>
          ) as unknown as string
        }
        className="topbar no-border h-auto flex-none !bg-surface pl-4"
        backIcon={
          <div className="absolute inset-1/2 flex size-[40px] -translate-x-1/3 -translate-y-1/2 items-center justify-center rounded-full bg-surface">
            <img src={ArrowLeftIcon} />
          </div>
        }
      />
      <div className="flex-1 overflow-auto">
        <OrderListPageTabs />
      </div>
      <Footer />
    </Page>
  );
};

export default OrderListPage;
