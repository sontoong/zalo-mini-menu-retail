import React, { useEffect, useState } from "react";
import { Button } from "../common/button";
import SearchIcon from "../../static/search-icon-blue.png";
import ChevronLeftIcon from "../../static/chevron-left.png";
import { Select } from "../common/select";
import { Input } from "antd";
import { Header as HeaderZMP } from "zmp-ui";
import clsx from "clsx";
import { HomePageFilters } from ".";

const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      const scrollTop = event.target.scrollTop;
      setScrollY(scrollTop);
    };

    const scrollContainer = document.querySelector(
      ".homepage-scroll-container",
    );

    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll, {
        passive: true,
      });

      return () => {
        scrollContainer.removeEventListener("scroll", handleScroll);
      };
    } else {
      console.log("Scroll container not found");
      return;
    }
  }, []);

  const opacity = Math.min(scrollY / 200, 1);

  return (
    <HeaderZMP
      title={
        (
          <div className="relative flex flex-col gap-[12px] pb-[8px] pt-[34px]">
            <div className="text-xl font-medium">Tạp hóa ABC</div>
            <HomePageFilters />
          </div>
        ) as unknown as string
      }
      className={clsx(
        "topbar no-border !fixed !z-30 h-auto flex-none !pb-0 pl-4",
        { "pointer-events-none": opacity != 1 },
      )}
      showBackIcon={false}
      style={{ boxShadow: "0px 2px 12px 0px #0000000F", opacity: opacity }}
    />
  );
};

export default Header;
