import React from "react";
import { Form } from "../common/form";
import { Input } from "antd";
import ChevronRightBlue from "../../static/chevron-right-blue5.png";
import { Button } from "../common/button";
import { useNavigate } from "react-router-dom";
import { DeleteLocation } from "./delete-location";

const UserLocationForm = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      className="flex h-full flex-col gap-[14px] px-[16px] pb-[40px] pt-[20px]"
    >
      <Form.Item
        name="name"
        label={<div className="text-sm font-medium text-gray7">Tên</div>}
        rules={[{ required: true, message: "Vui lòng nhập tên" }]}
        labelCol={{ className: "!p-0" }}
        className="m-0"
      >
        <Input className="h-[45px] rounded-[8px]" placeholder="Vd: Nhà" />
      </Form.Item>
      <div className="flex flex-col gap-[4px]">
        <Form.Item
          name="name"
          label={<div className="text-sm font-medium text-gray7">Địa chỉ</div>}
          rules={[{ required: true, message: "Vui lòng nhập tên" }]}
          labelCol={{ className: "!p-0" }}
          className="m-0"
        >
          <Input className="h-[45px] rounded-[8px]" placeholder="Vd:" />
        </Form.Item>
        <Form.Item
          shouldUpdate={(prevValues, currentValues) =>
            prevValues.address !== currentValues.address
          }
          noStyle
        >
          {({ getFieldValue }) => {
            const address = getFieldValue("address");
            return (
              <div
                className="flex items-end justify-end gap-[4px]"
                onClick={() => navigate("/user-location-map")}
              >
                <div className="text-sm font-medium text-blue5">
                  {address ? "Xem trên bãn đồ" : "Chọn trên bản đồ"}
                </div>
                <div className="size-[24px]">
                  <img
                    src={ChevronRightBlue}
                    alt=""
                    className="size-full object-cover"
                  />
                </div>
              </div>
            );
          }}
        </Form.Item>
      </div>
      <Form.Item
        name="address"
        label={
          <div className="text-sm font-medium text-gray7">Chi tiết địa chỉ</div>
        }
        labelCol={{ className: "!p-0" }}
        className="m-0"
      >
        <Input
          className="h-[45px] rounded-[8px]"
          placeholder="Vd: Tầng, số căn hộ"
        />
      </Form.Item>
      <Form.Item
        name="notes"
        label={<div className="text-sm font-medium text-gray7">Ghi chú</div>}
        labelCol={{ className: "!p-0" }}
        className="m-0"
      >
        <Input
          className="h-[45px] rounded-[8px]"
          placeholder="Vd: Tầng, số căn hộ"
        />
      </Form.Item>
      <Form.Item
        name="contactName"
        label={
          <div className="text-sm font-medium text-gray7">
            Tên người liên lạc
          </div>
        }
        labelCol={{ className: "!p-0" }}
        className="m-0"
      >
        <Input
          className="h-[45px] rounded-[8px]"
          placeholder="Vd: Tầng, số căn hộ"
        />
      </Form.Item>
      <Form.Item
        name="contactPhone"
        label={
          <div className="text-sm font-medium text-gray7">
            Số người liên lạc
          </div>
        }
        labelCol={{ className: "!p-0" }}
        className="m-0"
      >
        <Input
          className="h-[45px] rounded-[8px]"
          placeholder="Vd: Tầng, số căn hộ"
        />
      </Form.Item>
      {/* Foot buttons */}
      <div className="inset-0 mt-auto flex gap-[12px]">
        <DeleteLocation>
          {({ open }) => (
            <Button
              text={
                <div className="text-[15px] font-medium text-red5">Xóa</div>
              }
              className="bg-red1 p h-[44px] rounded-[40px]"
              onClick={open}
            />
          )}
        </DeleteLocation>
        <Button
          text={
            <div className="text-[15px] font-medium text-white">
              Lưu địa chỉ
            </div>
          }
          className="h-[44px] rounded-[40px] bg-primary5"
        />
      </div>
    </Form>
  );
};

export default UserLocationForm;
