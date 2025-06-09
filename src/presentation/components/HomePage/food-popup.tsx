import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import { Sheet } from "zmp-ui";
import CloseIcon from "../../static/close-icon.png";
import FoodImg from "../../static/food-1.jpg";
import { formatCurrency } from "../../utils/helpers";
import { Checkbox, Divider, Input } from "antd";
import { Form } from "../common/form";
import { Button } from "../common/button";
import MinusIcon from "../../static/minus-icon.png";
import AddIcon from "../../static/add-icon.png";
import { Radio } from "../common/radio";
import { useNavigate } from "react-router-dom";

const FoodPopup: FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [visible, setVisible] = useState<boolean>(false);

  const onFinish = (value: any) => {
    navigate("/order");
  };

  const initialValues = {
    quantity: 0,
    notes: "",
  };

  return (
    <>
      {children({ open: () => setVisible(true) })}
      {createPortal(
        <Sheet
          title={
            (
              <div className="absolute inset-x-[16px] flex items-center">
                <div
                  className="absolute right-0 ml-auto size-[12px]"
                  onClick={() => setVisible(false)}
                >
                  <img
                    src={CloseIcon}
                    alt=""
                    className="size-full object-cover"
                  />
                </div>
              </div>
            ) as unknown as string
          }
          visible={visible}
          onClose={() => {
            setVisible(false);
            form.resetFields();
          }}
          mask
          handler={false}
          unmountOnClose
          height={"90vh"}
          style={{
            background: "#FFF",
            borderRadius: "8px 8px 0 0",
          }}
        >
          <Form
            form={form}
            onFinish={onFinish}
            autoComplete="off"
            initialValues={initialValues}
            className="flex-1 overflow-auto"
          >
            <Form.Item name="quantity" hidden />
            <div className="flex flex-col gap-[20px] overflow-y-auto px-[16px] pb-[150px]">
              {/* Brief */}
              <div className="flex flex-col gap-[12px]">
                <div className="flex flex-col gap-[4px]">
                  <div className="flex justify-between">
                    <div className="text-xl font-medium">Hamburger bò</div>
                    <div className="flex flex-col items-end justify-between">
                      <div className="text-xl font-medium">
                        {formatCurrency(120000)}
                      </div>
                      <div className="text-[15px] font-normal text-gray6 line-through">
                        {formatCurrency(120000)}
                      </div>
                    </div>
                  </div>
                  <div className="text-sm font-normal text-gray9">
                    Hamburger gồm bò, xà lách, phô mai mỏng dai
                  </div>
                </div>
                <div className="h-[140px] overflow-hidden rounded-[12px]">
                  <img
                    src={FoodImg}
                    alt=""
                    className="size-full object-cover"
                  />
                </div>
              </div>
              {/* Options */}
              <div className="flex flex-col gap-[24px]">
                <Form.Item name="options" noStyle>
                  <div className="flex flex-col gap-[12px]">
                    <div className="text-[15px] font-medium">
                      {options.title}
                    </div>
                    <Checkbox.Group>
                      <div className="flex w-full flex-col gap-[12px]">
                        {options.options.map((option, index) => (
                          <React.Fragment key={index}>
                            <Checkbox
                              value={option.value}
                              className="custom-checkbox"
                            >
                              <div className="flex justify-between">
                                <div className="text-sm font-normal">
                                  {option.label.title}
                                </div>
                                <div className="text-sm font-medium text-gray8">
                                  {formatCurrency(option.label.price)}
                                </div>
                              </div>
                            </Checkbox>
                            {index < options.options.length - 1 && (
                              <Divider className="m-0" />
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </Checkbox.Group>
                  </div>
                  <div className="flex flex-col gap-[12px]">
                    <div className="text-[15px] font-medium">
                      {options2.title}
                    </div>
                    <Radio.Group
                      items={options2.options}
                      render={(option) => (
                        <div className="flex justify-between">
                          <div className="text-sm font-normal">
                            {option?.label.title}
                          </div>
                          <div className="text-sm font-medium text-gray8">
                            {formatCurrency(option?.label.price)}
                          </div>
                        </div>
                      )}
                      className="flex flex-col gap-[12px]"
                      divider={<Divider className="m-0" />}
                    />
                  </div>
                </Form.Item>
                <Form.Item
                  name="notes"
                  label={<div className="text-[15px] font-medium">Ghi chú</div>}
                  labelCol={{ className: "!pb-0" }}
                >
                  <Input.TextArea
                    placeholder="Nhập ghi chú"
                    autoSize={{ minRows: 3, maxRows: 6 }}
                  />
                </Form.Item>
              </div>
            </div>
            {/* Footer */}
            <div
              className="fixed inset-x-0 bottom-0 flex flex-col bg-white"
              style={{ boxShadow: "0px -2px 12px 0px #0000000F" }}
            >
              {/* Total Price */}
              <div className="flex items-center justify-between px-[16px] pb-[20px] pt-[12px]">
                <div className="text-[15px] font-medium text-gray8">
                  Tổng tiền
                </div>
                <Form.Item
                  noStyle
                  shouldUpdate={(prevValues, curValues) =>
                    prevValues.quantity !== curValues.quantity
                  }
                >
                  {() => (
                    <div className="flex items-center gap-[16px]">
                      <Button.Icon
                        icon={<img src={MinusIcon} />}
                        className="size-[24px] bg-primary1"
                        onClick={() => {
                          const currQuantity = form.getFieldValue("quantity");
                          const nextQuantity = Math.max(currQuantity - 1, 0);
                          form.setFieldValue("quantity", nextQuantity);
                        }}
                      />
                      <div className="text-[20px] font-medium">
                        {form.getFieldValue("quantity")}
                      </div>
                      <Button.Icon
                        icon={<img src={AddIcon} />}
                        className="size-[24px] bg-primary4"
                        onClick={() => {
                          const currQuantity = form.getFieldValue("quantity");
                          form.setFieldValue("quantity", currQuantity + 1);
                        }}
                      />
                    </div>
                  )}
                </Form.Item>
                <div className="text-lg font-medium">
                  {formatCurrency(240000)}
                </div>
              </div>
              <Divider className="m-0" />
              {/* Buttons */}
              <div className="flex gap-[12px] px-[16px] pb-[40px] pt-[12px]">
                <Button
                  text={
                    <div className="text-[15px] font-medium text-primary5">
                      Bỏ qua
                    </div>
                  }
                  className="h-[37px] rounded-[40px] border-[1.5px] border-primary5"
                  onClick={() => setVisible(false)}
                />
                <Button
                  text={
                    <div className="text-sm font-normal text-white">
                      Xác nhận
                    </div>
                  }
                  className="h-[37px] rounded-[40px] bg-primary5"
                  onClick={form.submit}
                />
              </div>
            </div>
          </Form>
        </Sheet>,
        document.body,
      )}
    </>
  );
};

export { FoodPopup };

type Props = {
  children: (methods: { open: () => void }) => React.ReactNode;
};

const options = {
  title: "Topping thêm",
  options: [
    {
      label: { title: "Phô mai", price: 40000 },
      value: "1",
    },
    {
      label: { title: "Xà lách", price: 40000 },
      value: "2",
    },
  ],
};

const options2 = {
  title: "Độ chín",
  options: [
    {
      label: { title: "Chín kĩ", price: 40000 },
      value: "1",
    },
    {
      label: { title: "Chín tới", price: 40000 },
      value: "2",
    },
  ],
};
