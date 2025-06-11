import React, { FC } from "react";
import FoodImg1 from "../../static/food-1.png";
import FoodImg2 from "../../static/food-2.png";
import { formatCurrency } from "../../utils/helpers";
import { FoodPopup } from "./food-popup";
import { Divider } from "antd";

const SearchResultList = () => {
  return (
    <div className="flex flex-col gap-[12px] p-[18px]">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <FoodPopup key={index}>
            {({ open }) => <FoodItem item={item} onClick={open} />}
          </FoodPopup>
          {index !== items.length - 1 && <Divider className="m-0" />}
        </React.Fragment>
      ))}
    </div>
  );
};

const FoodItem: FC<any> = ({ item, onClick }) => {
  return (
    <div className="relative flex gap-[12px]" onClick={onClick}>
      <div className="size-[68px] shrink-0 overflow-hidden rounded-[10px]">
        <img src={item.image} alt="" className="size-full object-cover" />
      </div>
      <div className="flex flex-col justify-between">
        <div className="text-lg font-medium leading-5">{item.name}</div>
        <div className="flex items-center gap-[8px]">
          <div className="text-base font-medium text-infor3">
            {formatCurrency(item.priceSale)}
          </div>
          <div className="text-sm font-normal text-gray7 line-through">
            {formatCurrency(item.price)}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-[12px] z-10 flex size-[28px] items-center justify-center rounded-full bg-primary p-[11.67px]">
        <div className="text-lg text-white">+</div>
      </div>
    </div>
  );
};

export default SearchResultList;

const items = [
  {
    id: 1,
    name: "Coca cola lon mừng năm mới 2025",
    price: 20000,
    priceSale: 25000,
    image: FoodImg1,
  },
  {
    id: 2,
    name: "Nước ngọt rồng đỏ Sting lon 200ml",
    price: 20000,
    priceSale: 25000,
    image: FoodImg2,
  },
  {
    id: 3,
    name: "Nước ngọt Fanta lon 320ml",
    price: 20000,
    priceSale: 25000,
    image: FoodImg2,
  },
  {
    id: 4,
    name: "Sữa tươi Vinamilk 1 lít tiệt trùng",
    price: 20000,
    priceSale: 25000,
    image: FoodImg2,
  },
  {
    id: 5,
    name: "Sữa socola vinamilk 220ml",
    price: 20000,
    priceSale: 25000,
    image: FoodImg2,
  },
  {
    id: 6,
    name: "Sữa socola vinamilk 220ml",
    price: 20000,
    priceSale: 25000,
    image: FoodImg2,
  },
  {
    id: 7,
    name: "Sữa socola vinamilk 220ml",
    price: 20000,
    priceSale: 25000,
    image: FoodImg2,
  },
];
