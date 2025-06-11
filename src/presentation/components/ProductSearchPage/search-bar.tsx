import React from "react";
import SearchIcon from "../../static/search-icon-blue.png";
import ChevronLeftIcon from "../../static/chevron-left.png";
import { Input } from "antd";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center gap-[12px] pt-[8px]">
      <div className="size-[24px]" onClick={() => navigate(-1)}>
        <img src={ChevronLeftIcon} alt="" className="size-full object-cover" />
      </div>
      <Input
        prefix={<img src={SearchIcon} className="pr-3" />}
        placeholder="Coca cola"
        className="h-[32px] rounded-[20px] text-xs font-normal"
      />
    </div>
  );
};

export default SearchBar;
