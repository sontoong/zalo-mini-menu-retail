import React from "react";
import { Form } from "../common/form";
import ChevronDown from "../../static/chevron-down.png";
import { Divider } from "antd";
import { Summary } from "./summary";
import { PaymentMethod } from "./payment-method";
import { Footer } from "./footer";
import { useNavigate } from "react-router-dom";
import { DeliveryMethod } from "./delivery-method";
import DeliveryTime from "./delivery-time";
import { Select } from "../common/select";
import { deliveryMethods } from "../../constants/deliveryTypes";

const OrderForm = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  function onFormFinish(values) {
    console.log(values);
    navigate("/order-success");
  }

  const initialValues = {
    delivery: {
      method: "1",
      type: "1",
      time: undefined,
    },
  };

  return (
    <Form form={form} onFinish={onFormFinish} initialValues={initialValues}>
      <div className="flex flex-col gap-[20px] pb-[175px]">
        <div className="flex flex-col gap-[12px] px-[16px] pt-[20px]">
          <Form.Item name={["delivery", "method"]} noStyle>
            <DeliveryMethod />
          </Form.Item>
          <Form.Item
            shouldUpdate={(prevValues, curValues) =>
              prevValues.delivery.method !== curValues.delivery.method
            }
            noStyle
          >
            {({ getFieldValue }) => {
              const deliveryMethod = getFieldValue(["delivery", "method"]);

              return (
                <Form.Item name={["delivery", "type"]} noStyle>
                  <DeliveryTime deliveryMethod={deliveryMethod} />
                </Form.Item>
              );
            }}
          </Form.Item>
          <Form.Item
            shouldUpdate={(prevValues, curValues) =>
              prevValues.delivery.type !== curValues.delivery.type ||
              prevValues.delivery.method !== curValues.delivery.method
            }
            noStyle
          >
            {({ getFieldValue }) => {
              const deliveryType = getFieldValue(["delivery", "type"]);

              if (deliveryType === "2") {
                return (
                  <Form.Item
                    label={
                      <div className="text-sm font-medium text-gray7">
                        Chọn giờ giao
                      </div>
                    }
                    labelCol={{ className: "!p-0" }}
                    className="m-0"
                    name={["delivery", "time"]}
                  >
                    <Select
                      placeholder="19:00 - 19:30"
                      className="h-[45px] rounded-[8px] border-stroke3"
                      suffixIcon={
                        <img src={ChevronDown} alt="" className="size-[15px]" />
                      }
                      options={[
                        { label: "19:00 - 19:30", value: 1 },
                        { label: "19:30 - 20:00", value: 2 },
                      ]}
                    />
                  </Form.Item>
                );
              }

              return null;
            }}
          </Form.Item>
        </div>
        <Summary />
        <Divider className="m-0 border-[2px] border-stroke1a" />
        <PaymentMethod />
        <Footer onDraft={() => {}} onPlaceOrder={form.submit} />
      </div>
    </Form>
  );
};

export default OrderForm;
