import React from "react";
import { Map } from "../common/map";
import { Button } from "../common/button";

const MapContainer = () => {
  return (
    <div className="h-[calc(100vh-100px)] w-full">
      <Map lat={51.505} long={-0.09} centerButton={true} />
      <div className="absolute inset-x-[16px] bottom-[20px] z-[9999]">
        <Button
          text={
            <div className="text-[15px] font-medium text-white">
              Chọn vị trí này
            </div>
          }
          className="h-[44px] w-full rounded-[40px] bg-primary5"
        />
      </div>
    </div>
  );
};

export default MapContainer;
