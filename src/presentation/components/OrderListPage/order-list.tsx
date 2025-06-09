import { Divider } from "antd";
import React, { FC } from "react";
import FoodImg from "../../static/food-1.jpg";
import { formatCurrency } from "../../utils/helpers";
import { useNavigate } from "react-router-dom";
import { orderMethods } from "../../constants/orderMethods";

const OrderList: FC<{ orders: any[] }> = ({ orders }) => {
  return (
    <div className="flex flex-col gap-[14px]">
      {orders.map((order, index) => (
        <OrderListItem key={index} order={order} />
      ))}
    </div>
  );
};

const OrderListItem = ({ order }) => {
  const navigate = useNavigate();

  const goTo = () => {
    if (order.method === orderMethods["1"].key) {
      navigate(`/table-orders/${order.id}`, { state: order });
    } else {
      navigate(`/orders/${order.id}`, { state: order });
    }
  };

  return (
    <div
      className="flex flex-col gap-[12px] rounded-[12px] bg-white p-[12px] shadow-md"
      onClick={goTo}
    >
      <div className="flex h-[22px] justify-between">
        {/* Order id */}
        <div className="text-xs font-normal">Đơn #{order.id}</div>
        {/* Tag */}
        {order.status ? (
          <div
            className="flex h-full items-center rounded-[20px] px-[6px]"
            style={{ background: order.status.bgColor }}
          >
            <div
              className="text-xs font-medium"
              style={{ color: order.status.color }}
            >
              {order.status.label}
            </div>
          </div>
        ) : null}
      </div>
      <div className="flex flex-col gap-[4px]">
        {order.items.map((item, index) => (
          <React.Fragment key={index}>
            <div className="flex gap-[8px] p-[6px]">
              <div className="size-[32px] overflow-hidden rounded-[3.2px]">
                <img src={FoodImg} alt="" className="size-full object-cover" />
              </div>
              <div className="flex flex-col gap-[4px]">
                <div className="text-xs font-normal">
                  {item.quantity} x {item.name}
                </div>
                <div className="text-xs font-normal text-gray8">
                  {item.notes}
                </div>
              </div>
            </div>
            {index != order.items.length - 1 && <Divider className="m-0" />}
          </React.Fragment>
        ))}
      </div>
      <div className="flex justify-between">
        <div className="text-xs font-normal text-gray6">
          Đặt lúc {order.time}
        </div>
        <div className="text-xs font-medium text-neutral6">
          Tổng tiền:{" "}
          <span className="text-black">{formatCurrency(order.totalprice)}</span>
        </div>
      </div>
    </div>
  );
};

export { OrderList };
