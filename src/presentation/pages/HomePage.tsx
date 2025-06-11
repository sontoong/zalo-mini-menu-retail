import React, { FC, useContext, useState } from "react";
import { Header, Page } from "zmp-ui";
import {
  HomePageCartButton,
  HomePageHeadButtons,
  HomePageHeader,
  HomePageFoodList,
  HomePageFilters,
} from "../components/HomePage";
import { Footer } from "../components/common/footer";
import Promotion from "../components/HomePage/promotion";

const HomePage: FC = () => {
  return (
    <Page className="page-content relative flex flex-1 flex-col bg-[#fafbff]">
      <HomePageHeader />
      <div className="homepage-scroll-container flex-1 overflow-auto bg-white">
        <div className="relative h-[250px] w-full">
          <div
            className="pointer-events-none absolute inset-0 z-10"
            style={{
              background:
                "linear-gradient(180.52deg, rgba(255, 255, 255, 0.544) 0.45%, rgba(255, 255, 255, 0) 35.76%)",
            }}
          />
          <Promotion />
        </div>
        <div className="relative flex flex-col gap-[8px] pb-[100px]">
          <div className="absolute inset-x-0 top-0 z-20 -translate-y-1/2">
            <HomePageHeadButtons />
          </div>
          <div className="flex flex-col gap-[14px] pt-[38px]">
            <div className="px-[16px]">
              <HomePageFilters />
            </div>
            <HomePageFoodList />
          </div>
        </div>
        <HomePageCartButton />
      </div>
      <Footer />
    </Page>
  );
};

export default HomePage;
