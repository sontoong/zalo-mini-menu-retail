import React, { FC } from "react";
import { Form } from "../common/form";
import { Divider } from "antd";
import { Footer } from "./footer";
import { useNavigate } from "react-router-dom";
import { Summary } from "./summary";
import { PaymentMethod } from "./payment-method";
import dayjs from "dayjs";
import { OrderStatus } from "./order-status";
import { orderStatus } from "../../constants/orderStatus";
import { OrderMethod } from "./order-method";

const OrderForm: FC<Props> = ({ order }) => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const status = order.status?.key as keyof typeof orderStatus;
  const orderMethod = order.method;

  function onFormFinish() {
    switch (status) {
      case orderStatus["1"].key:
        navigate("/order-success");
        break;

      case orderStatus["2"].key:
        navigate("/rate", { state: order });
        break;

      case orderStatus["3"].key:
        navigate("/rate", { state: order });
        break;

      case orderStatus["4"].key:
        navigate("/rate", { state: order });
        break;

      case orderStatus["5"].key:
        navigate("/order");
        break;

      case orderStatus["6"].key:
        navigate("/rate", { state: order });
        break;

      default:
        break;
    }
  }

  const initialValues = {
    time: dayjs(),
  };

  return (
    <Form form={form} initialValues={initialValues} onFinish={onFormFinish}>
      <div className="flex flex-col gap-[20px] pt-[12px]">
        <div className="flex flex-col gap-[12px]">
          <OrderStatus status={status} />
          <OrderMethod orderMethod={orderMethod} />
          <Divider className="m-0 border-[2px] border-stroke1a" />
        </div>
        <Summary />
        <Divider className="m-0 border-[2px] border-stroke1a" />
        <PaymentMethod />
        <Footer status={status} onSubmit={form.submit} />
      </div>
    </Form>
  );
};

export default OrderForm;

type Props = {
  order: any;
};
