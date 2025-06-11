import { Divider } from "antd";
import React, { FC } from "react";
import { formatCurrency } from "../../utils/helpers";
import NoteTextIcon from "../../static/note-text.png";
import EditIcon from "../../static/edit-icon.png";
import { orderStatus, OrderStatusType } from "../../constants/orderStatus";

type SummaryProps = {
  status: OrderStatusType;
};

export const Summary: FC<SummaryProps> = ({ status }) => {
  return (
    <div className="flex flex-col gap-[8px] px-[16px]">
      <div className="text-[15px] font-medium">Danh sách sản phẩm</div>
      <div className="flex flex-col gap-[12px]">
        <div className="flex flex-col gap-[12px]">
          {data.map((product, index: number) => (
            <React.Fragment key={index}>
              <SummaryItem product={product} status={status} />
              {index < data.length - 1 && <Divider className="m-0" />}
            </React.Fragment>
          ))}
        </div>
        <Divider className="m-0" variant="dashed" />
        <div className="flex flex-col gap-[4px]">
          <div className="flex justify-between">
            <div className="text-[15px] font-normal">Tổng tiền</div>
            <div className="text-[15px] font-medium">
              {formatCurrency(320000)}
            </div>
          </div>
          <div className="flex justify-between">
            <div className="text-sm font-normal text-gray8">Giảm giá</div>
            <div className="text-sm font-normal text-gray8">
              -{formatCurrency(70000)}
            </div>
          </div>
        </div>
        <Divider className="m-0" variant="dashed" />
        <div className="flex justify-between">
          <div className="text-[15px] font-normal">Tổng thanh toán</div>
          <div className="text-[15px] font-medium">
            {formatCurrency(250000)}
          </div>
        </div>
      </div>
    </div>
  );
};

const SummaryItem: FC<{ product: any; status: OrderStatusType }> = ({
  product,
  status,
}) => {
  return (
    <div className="flex flex-col gap-[10px]">
      <div className="flex justify-between">
        {/* Title */}
        <div className="flex items-center gap-[12px]">
          <div className="text-sm font-normal text-gray8">
            x{product.quantity}
          </div>
          <div className="flex flex-col gap-[4px]">
            <div className="text-sm font-medium">{product.title}</div>
            <div className="text-xs font-normal text-gray8">
              {product.description}
            </div>
          </div>
        </div>
        {/* Edit */}

        <div className="flex flex-col items-end justify-between">
          {status === orderStatus["1"].key ? (
            <div className="size-[20px]">
              <img src={EditIcon} alt="" className="size-full object-cover" />
            </div>
          ) : null}
          <div className="text-sm font-normal">
            {formatCurrency(product.price)}
          </div>
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    title: "Coca cola không calo lon 2025",
    description: "Lon 150ml, nguyên bản",
    price: 125000,
    quantity: 1,
  },
  {
    title: "Nước cam nguyên chất  Juice",
    description: "",
    price: 250000,
    quantity: 2,
  },
];
