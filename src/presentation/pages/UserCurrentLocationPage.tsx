import React from "react";
import { Header, Page } from "zmp-ui";
import ArrowLeftIcon from "../static/arrow-left-blue.png";
import { UserCurrentLocationPageMap } from "../components/UserCurrentLocationPage";

const UserCurrentLocationPage = () => {
  return (
    <Page className="page-content relative flex flex-1 flex-col bg-white">
      <Header
        title={
          (
            <div className="flex w-[calc(100%-32px)] justify-center">
              Vị trí của bạn
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
      <div className="flex-1 overflow-hidden">
        <UserCurrentLocationPageMap />
      </div>
    </Page>
  );
};

export default UserCurrentLocationPage;
