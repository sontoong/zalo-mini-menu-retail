import React, { useState } from "react";
import SearchIcon2 from "../../static/search-icon-2.png";
import FoodIcon from "../../static/food-icon.png";
import DrinksIcon from "../../static/drinks-icon.png";
import FilterIcon from "../../static/filter-icon.png";
import { Button } from "../common/button";
import { Radio } from "../common/radio";
import { Form } from "../common/form";
import { Tag } from "../common/tag";
import { FilterPopup } from "./filter-popup";
import { useNavigate } from "react-router-dom";

const Filters = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  return (
    <Form form={form}>
      <div className="flex flex-col gap-[12px]">
        {/* Search */}
        <div className="flex gap-[12px]">
          <Button.Icon
            icon={<img src={SearchIcon2} />}
            className="h-[36px] w-[40px] shrink-0 !rounded-[8px] bg-neutral2"
            onClick={() => navigate("/search-product")}
          />
          <div className="overflow-auto hide-scrollbar">
            <Form.Item name="type" noStyle>
              <Radio.ButtonGroup
                items={options}
                render={(item) => (
                  <div className="flex h-[36px] items-center justify-center gap-[12px] rounded-[8px] border-[1.5px] border-transparent !bg-neutral2 pl-[8px] pr-[12px]">
                    {item?.icon ? (
                      <div className="size-[32px]">
                        <img
                          src={item?.icon}
                          className="size-full object-cover"
                        />
                      </div>
                    ) : null}
                    <div className="whitespace-nowrap text-xs font-medium">
                      {item?.label}
                    </div>
                  </div>
                )}
                activeRender={(item) => (
                  <div className="flex h-[36px] items-center justify-center gap-[12px] rounded-[8px] border-[1.5px] border-primary !bg-infor1 pl-[8px] pr-[12px]">
                    {item?.icon ? (
                      <div className="size-[32px]">
                        <img
                          src={item?.icon}
                          className="size-full object-cover"
                        />
                      </div>
                    ) : null}
                    <div className="whitespace-nowrap text-xs font-medium">
                      {item?.label}
                    </div>
                  </div>
                )}
                className="flex gap-[12px]"
              />
            </Form.Item>
          </div>
        </div>
        {/* Filters */}
        <div className="flex items-center gap-[8px]">
          <FilterPopup>
            {({ open }) => (
              <div className="size-[24px] shrink-0" onClick={open}>
                <img
                  src={FilterIcon}
                  alt=""
                  className="size-full object-cover"
                />
              </div>
            )}
          </FilterPopup>

          <div className="flex items-center gap-[12px] overflow-auto hide-scrollbar">
            {tags.map((tag, index) => (
              <Tag
                key={index}
                className="m-0 flex h-[30px] items-center justify-center rounded-[20px] !border-stroke1"
                color="#fff"
                closable
              >
                <div className="mr-[5px] text-xs font-medium text-black">
                  {tag.label}
                </div>
              </Tag>
            ))}
          </div>
        </div>
      </div>
    </Form>
  );
};

export default Filters;

const options = [
  {
    label: "Tất cả",
    value: "food",
  },
  {
    label: "Đồ uống",
    value: "drink",
    icon: FoodIcon,
  },
  {
    label: "Bánh kẹo",
    value: "snack",
    icon: DrinksIcon,
  },
];

const tags = [
  {
    label: "Nước giải khát",
    value: "drink",
  },
  {
    label: "Sữa tươi",
    value: "milk",
  },
  {
    label: "Nước ngọt",
    value: "softDrink",
  },
];
