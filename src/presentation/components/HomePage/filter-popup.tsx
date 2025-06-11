import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import { Sheet } from "zmp-ui";
import CloseIcon from "../../static/close-icon.png";
import { Checkbox, Divider, Input } from "antd";
import { Form } from "../common/form";
import { Button } from "../common/button";
import { NestedCheckbox } from "../common/checkbox";

const FilterPopup: FC<Props> = ({ children }) => {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState<boolean>(false);

  const initialValues = {
    quantity: 0,
    notes: "",
  };

  const handleViFinish = (values: any) => {
    console.log(values);
    // setVisible(false);
  };

  return (
    <>
      {children({ open: () => setVisible(true) })}
      {createPortal(
        <Sheet
          title={
            (
              <div className="relative flex h-full items-center px-[16px]">
                <div className="text-xl font-medium">Bộ lọc</div>
                <div
                  className="absolute right-[16px] ml-auto size-[12px]"
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
            onFinish={handleViFinish}
            autoComplete="off"
            initialValues={initialValues}
            className="flex-1 overflow-auto"
          >
            <div className="flex flex-col gap-[20px] overflow-y-auto px-[16px] pb-[150px] pt-[30px]">
              {/* Options */}
              <div className="flex flex-col gap-[24px]">
                <Form.Item
                  name="options"
                  noStyle
                  className="flex flex-col gap-[12px]"
                  valuePropName="checked"
                >
                  <Checkbox.Group>
                    <div className="flex w-full flex-col gap-[12px]">
                      {options.map((option, index) => (
                        <React.Fragment key={index}>
                          {option.children ? (
                            <NestedCheckbox option={option} />
                          ) : (
                            <Checkbox
                              value={option.value}
                              className="custom-checkbox"
                            >
                              {option.label}
                            </Checkbox>
                          )}
                          {index < options.length - 1 && (
                            <Divider className="m-0" />
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </Checkbox.Group>
                </Form.Item>
              </div>
            </div>
            {/* Footer */}
            <div
              className="fixed inset-x-0 bottom-0 flex flex-col bg-white"
              style={{ boxShadow: "0px -2px 12px 0px #0000000F" }}
            >
              {/* Buttons */}
              <div className="flex gap-[12px] px-[16px] pb-[40px] pt-[12px]">
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

export { FilterPopup };

type Props = {
  children: (methods: { open: () => void }) => React.ReactNode;
};

const transformOption = (option) => ({
  label: <div className="text-[17px] font-normal">{option.label}</div>,
  value: option.value,
  ...(option.children && { children: option.children.map(transformOption) }),
});

const options = [
  {
    label: "Đồ uống",
    children: [
      {
        label: "Nước giải khát",
        value: "2",
      },
      {
        label: "Sữa tươi",
        value: "3",
      },
    ],
  },
  {
    label: "Gia vị",
    value: "4",
  },
  {
    label: "Bánh kẹo",
    value: "5",
  },
  {
    label: "Vệ sinh cá nhân",
    value: "6",
  },
].map(transformOption);
