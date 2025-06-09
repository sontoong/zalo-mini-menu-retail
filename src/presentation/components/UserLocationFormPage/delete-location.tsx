import React, { FC, useState } from "react";
import { Modal, Picker } from "zmp-ui";
import { Button } from "../common/button";
import { useNavigate } from "react-router-dom";
import { Input } from "antd";
import ArrowDown from "../../static/chevron-down.png";
import { createPortal } from "react-dom";

const DeleteLocation: FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState<boolean>(false);

  function handleCancel() {
    setVisible(false);
  }

  function handleFinish() {
    setVisible(false);
    navigate("/order-cancel");
  }

  return (
    <>
      {children({ open: () => setVisible(true) })}
      {createPortal(
        <Modal
          visible={visible}
          title={
            (
              <>
                <div className="text-balance text-lg font-medium">Xác nhận</div>
              </>
            ) as unknown as string
          }
          onClose={() => {
            setVisible(false);
          }}
          verticalActions
        >
          <div className="flex flex-col gap-[12px]">
            <div className="text-pretty text-center text-sm font-normal text-gray8">
              Bạn chắc chắn muốn xoá{" "}
              <span className="font-medium text-black">Nhà</span> khỏi{" "}
              <span className="font-medium text-black">Sổ địa chỉ?</span>
            </div>
            <div className="flex">
              <Button
                text={<div className="text-sm font-medium">Hủy</div>}
                className="rounded-[4px] px-3 py-[10px]"
                onClick={handleCancel}
              />
              <Button
                text={<div className="text-sm font-medium text-red5">Xóa</div>}
                className="rounded-[4px] px-3 py-[10px]"
              />
            </div>
          </div>
        </Modal>,
        document.body,
      )}
    </>
  );
};

export { DeleteLocation };

type Props = {
  children: (methods: { open: () => void }) => React.ReactNode;
};
