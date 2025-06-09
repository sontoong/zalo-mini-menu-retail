import React from "react";
import { Header, Page } from "zmp-ui";
import { Footer } from "../components/common/footer";
import ArrowLeftIcon from "../static/arrow-left-blue.png";
import { UserLocationListPageOptionMenu } from "../components/UserLocationListPage";

const UserLocationListPage = () => {
  return (
    <Page className="page-content relative flex flex-1 flex-col bg-surface">
      <Header
        title={
          (
            <div className="flex w-[calc(100%-32px)] justify-center">
              Địa chỉ của tôi
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
      <div className="flex-1 overflow-auto">
        <div className="bg-white">
          <UserLocationListPageOptionMenu />
        </div>
      </div>
      <Footer />
    </Page>
  );
};

export default UserLocationListPage;
