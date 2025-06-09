import React, { FC } from "react";
import FoodImg1 from "../../static/food-1.jpg";
import FoodImg2 from "../../static/food-2.jpg";
import { formatCurrency } from "../../utils/helpers";
import { FoodPopup } from "./food-popup";

const FoodList = () => {
  return (
    <div className="flex flex-col gap-[12px] px-[16px] pt-[38px]">
      <div className="text-2xl font-medium">Món ăn tiêu biểu</div>
      <div className="grid grid-cols-2 gap-x-[24px] gap-y-[12px]">
        {services.map((item, index) => (
          <FoodPopup key={index}>
            {({ open }) => <FoodItem service={item} onClick={open} />}
          </FoodPopup>
        ))}
      </div>
    </div>
  );
};

const FoodItem: FC<any> = ({ service, onClick }) => {
  return (
    <div className="flex flex-col justify-center gap-[12px]" onClick={onClick}>
      <div className="relative aspect-square w-full overflow-hidden rounded-[24px]">
        <img src={service.image} alt="" className="size-full object-cover" />
        <div className="absolute bottom-[12px] right-[12px] z-10 flex size-[40px] items-center justify-center rounded-full bg-primary4 p-[16.67px]">
          <div className="text-3xl text-white">+</div>
        </div>
      </div>
      <div className="flex flex-col gap-[6px]">
        <div className="text-[20px] font-medium">{service.name}</div>
        <div className="flex items-center gap-[8px]">
          <div className="text-lg font-normal">
            {formatCurrency(service.priceSale)}
          </div>
          <div className="text-base font-normal text-gray7 line-through">
            {formatCurrency(service.price)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodList;

const services = [
  {
    id: 1,
    name: "Hamburger bò",
    price: 50000,
    priceSale: 150000,
    image: FoodImg1,
  },
  {
    id: 2,
    name: "Hamburger",
    price: 50000,
    priceSale: 150000,
    image: FoodImg2,
  },
  {
    id: 3,
    name: "Mì Ý",
    price: 150000,
    priceSale: 50000,
    image: FoodImg2,
  },
  {
    id: 4,
    name: "Bánh trứng",
    price: 150000,
    priceSale: 50000,
    image: FoodImg2,
  },
];
