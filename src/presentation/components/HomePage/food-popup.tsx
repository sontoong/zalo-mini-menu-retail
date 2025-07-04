import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import { Sheet } from "zmp-ui";
import CloseIcon from "../../static/close-icon.png";
import FoodImg from "../../static/food-1.png";
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
            <div className="flex flex-col gap-[20px] overflow-y-auto px-[16px] pb-[200px]">
              {/* Brief */}
              <div className="flex flex-col gap-[12px]">
                <div className="flex justify-between">
                  <div className="text-xl font-medium">
                    Coca cola lon mừng năm mới 2025
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <div className="text-xl font-medium text-primary">
                      {formatCurrency(120000)}
                    </div>
                    <div className="text-[15px] font-normal text-gray6 line-through">
                      {formatCurrency(120000)}
                    </div>
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
              {/* Details */}
              <div className="flex flex-col gap-[12px]">
                <div className="text-lg font-medium">{vol.title}</div>
                <Form.Item name="volumn" noStyle>
                  <Radio.ButtonGroup
                    itemFlex={false}
                    items={vol.options}
                    render={(option) => (
                      <div className="flex h-[37px] items-center justify-center gap-[1.5px] rounded-[8px] border border-stroke1 px-[18px]">
                        {option?.label}
                      </div>
                    )}
                    activeRender={(option) => (
                      <div className="flex h-[37px] items-center justify-center rounded-[8px] border-[1.5px] border-infor3 bg-infor1 px-[18px]">
                        {option?.label}
                      </div>
                    )}
                    className="flex gap-[12px]"
                  />
                </Form.Item>
              </div>
              <div className="flex flex-col gap-[12px]">
                <div className="text-lg font-medium">{calo.title}</div>
                <Form.Item name="calo" noStyle>
                  <Radio.ButtonGroup
                    itemFlex={false}
                    items={calo.options}
                    render={(option) => (
                      <div className="flex h-[37px] w-fit items-center justify-center gap-[1.5px] rounded-[8px] border border-stroke1 px-[18px]">
                        {option?.label}
                      </div>
                    )}
                    activeRender={(option) => (
                      <div className="flex h-[37px] w-fit items-center justify-center rounded-[8px] border-[1.5px] border-infor3 bg-infor1 px-[18px]">
                        {option?.label}
                      </div>
                    )}
                    className="flex gap-[12px]"
                  />
                </Form.Item>
              </div>
              {/* Description */}
              <div className="flex flex-col gap-[8px]">
                <div className="text-lg font-medium">Thông tin sản phẩm</div>
                <div className="text-xs font-normal">
                  Là loại nước ngọt được nhiều người yêu thích với hương vị thơm
                  ngon, sảng khoái. Nước ngọt Coca Cola 320ml chính hãng nước
                  ngọt Coca Cola với lượng gas lớn sẽ giúp bạn xua tan mọi cảm
                  giác mệt mỏi, căng thẳng, đem lại cảm giác thoải mái sau khi
                  hoạt động ngoài trời.
                </div>
                <div className="text-sm font-medium">
                  Thương hiệu: <span className="font-normal">Coca cola</span>
                </div>
                <div className="text-sm font-medium">
                  Sản xuất tại: <span className="font-normal">Mỹ</span>
                </div>
                <div className="text-sm font-medium">
                  Loại nước: <span className="font-normal">Nước ngọt</span>
                </div>
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

const vol = {
  title: "Dung tích",
  options: [
    {
      label: "150ml",
      value: "1",
    },
    {
      label: "250ml",
      value: "2",
    },
  ],
};

const calo = {
  title: "Độ calo",
  options: [
    {
      label: "Không calo",
      value: "1",
    },
    {
      label: "Có calo",
      value: "2",
    },
  ],
};
