import { Divider } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import HomeIconBlue from "../../static/home-blue.png";
import AddIconBlue from "../../static/add-icon-blue.png";

const OptionMenu = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-[12px] bg-white px-[16px] py-[20px]">
      {data.map((location, index) => (
        <React.Fragment key={index}>
          <OptionMenuItem location={location} />
          {index <= data.length - 1 && <Divider className="m-0" />}
        </React.Fragment>
      ))}
      {/* Add more button */}
      <div className="flex items-center gap-[20px]">
        {/* Icon */}
        <div className="flex size-[40px] items-center justify-center rounded-full bg-primary1">
          <div className="size-[20px]">
            <img src={AddIconBlue} alt="" className="size-full object-cover" />
          </div>
        </div>
        {/* Location */}
        <div
          className="flex flex-col"
          onClick={() => navigate("/user-location-form")}
        >
          <div className="text-[15px] font-medium text-blue5">Thêm mới</div>
          <div className="text-xs font-normal text-gray7">
            Lưu địa chỉ của bạn
          </div>
        </div>
      </div>
    </div>
  );
};

const OptionMenuItem = ({ location }) => {
  return (
    <div className="flex items-center gap-[20px]">
      {/* Icon */}
      <div className="flex size-[40px] items-center justify-center rounded-full bg-primary1">
        <div className="size-[20px]">
          <img src={location.icon} alt="" className="size-full object-cover" />
        </div>
      </div>
      {/* Location */}
      <div className="flex flex-col">
        <div className="text-[15px] font-medium">{location.name}</div>
        <div className="flex gap-[4px]">
          <div className="text-xs font-normal text-gray8">
            {location.distance}
          </div>
          <div className="text-xs font-normal text-gray7">
            {location.address}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionMenu;

const data = [
  {
    name: "Nhà",
    distance: "0.9km",
    address: "Quận 4, Thành phố Hồ Chí Minh",
    icon: HomeIconBlue,
  },
  {
    name: "Công ty",
    distance: "0.9km",
    address: "Quận 4, Thành phố Hồ Chí Minh",
    icon: HomeIconBlue,
  },
];
