import React from "react";
import { Header, Page } from "zmp-ui";
import ArrowLeftIcon from "../static/arrow-left-blue.png";
import {
  ProductSearchPageSearchBar,
  ProductSearchPageSearchResultList,
} from "../components/ProductSearchPage";

const ProductSearchPage = () => {
  return (
    <Page className="page-content relative flex flex-1 flex-col bg-white">
      <Header
        title={
          (
            <div className="relative">
              <div className="pb-[8px] text-xl font-medium">Tạp hóa ABC</div>
              <ProductSearchPageSearchBar />
            </div>
          ) as unknown as string
        }
        className="topbar no-border h-auto flex-none border-b-[1px] border-stroke1a !pb-[8px] pl-4"
        showBackIcon={false}
        style={{ boxShadow: "0px 2px 12px 0px #0000000F" }}
      />
      <div className="flex-1 overflow-auto bg-surface">
        <ProductSearchPageSearchResultList />
      </div>
    </Page>
  );
};

export default ProductSearchPage;
