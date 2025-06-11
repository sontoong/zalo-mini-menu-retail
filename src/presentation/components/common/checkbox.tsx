import { Checkbox, CheckboxProps, Collapse, Divider } from "antd";
import React, { FC, useState } from "react";
import ChevronBlue from "../../static/chevron-right-blue.png";
import clsx from "clsx";

const NestedCheckbox: FC<NestedCheckboxProps> = ({
  defaultCheckedList,
  option,
}) => {
  const [checkedList, setCheckedList] = useState<string[]>(
    defaultCheckedList ?? [],
  );
  const [checkAll, setCheckAll] = useState(false);

  const indeterminate =
    checkedList?.length > 0 && checkedList?.length < option.children.length;

  const onChildCheckboxChange: CheckboxProps["onChange"] = (e) => {
    const newList = e.target.checked
      ? [...checkedList, e.target.value]
      : checkedList.filter((item) => item !== e.target.value);
    setCheckedList(newList);
    setCheckAll(newList.length === option.children.length);
  };

  const onCheckAllChange: CheckboxProps["onChange"] = (e) => {
    setCheckedList(
      e.target.checked ? option.children.map((child) => child.value) : [],
    );
  };

  return (
    <Collapse
      defaultActiveKey={1}
      ghost
      expandIconPosition="end"
      expandIcon={({ isActive }) => (
        <img
          src={ChevronBlue}
          className={clsx("size-[20px] object-cover", {
            "rotate-90": isActive,
          })}
        />
      )}
      items={[
        {
          key: 1,
          label: (
            <div onClick={(e) => e.stopPropagation()} className="w-fit">
              <Checkbox
                indeterminate={indeterminate}
                onChange={onCheckAllChange}
                checked={checkAll}
              >
                {option.label}
              </Checkbox>
            </div>
          ),
          children: (
            <Checkbox.Group value={checkedList} className="w-full">
              <div className="flex w-full flex-col gap-[12px]">
                <Divider className="mb-0 mt-[12px]" />
                {option.children.map((item, index) => (
                  <React.Fragment key={index}>
                    <Checkbox
                      value={item.value}
                      className="custom-checkbox ml-[12px]"
                      onChange={onChildCheckboxChange}
                      checked={checkedList.includes(item.value)}
                    >
                      {item.label}
                    </Checkbox>
                    {index < option.children.length - 1 && (
                      <Divider className="m-0" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </Checkbox.Group>
          ),
          styles: { header: { padding: 0 }, body: { padding: 0 } },
        },
      ]}
    />
  );
};

export { NestedCheckbox };

type NestedCheckboxProps = {
  value?: any;
  onChange?: (value: any) => void;
  defaultCheckedList?: string[];
  option: {
    label: React.ReactNode;
    children: {
      label: React.ReactNode;
      value: any;
    }[];
  };
};
