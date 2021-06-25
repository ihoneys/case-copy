import React, { memo, useState } from "react";

import { Flex, Picker, List, Modal } from "antd-mobile";
import { CopyLabelWrapper } from "./style";

import { district } from "antd-mobile-demo-data";

import IYLabelComponent from "@/components/label-component";
import IYBottomButton from "@/components/bottom-button";
const region = [
  [
    {
      label: "浙江省",
      value: "2013",
    },
    {
      label: "广东省",
      value: "2014",
    },
  ],
  [
    {
      label: "杭州",
      value: "杭州",
    },
    {
      label: "西湖",
      value: "西湖",
    },
  ],
];
console.log(district);

const buttonInfo = [
  {
    style: {
      width: "167px",
      background: "linear-gradient(90deg, #00D2A3 0%, #02C6B8 100%)",
      border: "1px solid #00C6B8",
      color: "#fff",
    },
    name: "上一步",
  },
  {
    style: {
      width: "167px",
      color: "#00C6B8",
      border: "1px solid #00C6B8",
    },
    name: "下一步",
  },
];

const utilityData = Array.from({ length: 10 }).map((item, i) => {
  return { name: "医药报销", key: i, checked: false };
});

const copyContentData = Array.from({ length: 10 }).map((item, i) => {
  return { name: "医药报销", key: i, checked: false };
});

export default memo(function IYCopyLabel() {
  let [count, setCount] = useState(0);
  const [pickerValue, setPickerValue] = useState([]);
  const getCallbackData = (data) => {
    // console.log(data);
  };

  const reduce = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const increase = () => {
    setCount(count + 1);
  };

  return (
    <CopyLabelWrapper>
      <IYLabelComponent title="复印用途" data={utilityData} getSelectedData={getCallbackData} />
      <div className="list-wrapper">
        <Picker title="选择地区" extra="请选择(可选)" cascade={false} data={region} value={pickerValue} onChange={(v) => setPickerValue(v)} onOk={(v) => setPickerValue(v)}>
          <List.Item style={{ width: "100%" }} arrow="horizontal">
            保险所在地
          </List.Item>
        </Picker>
      </div>
      <IYLabelComponent title="复印内容" data={copyContentData} getSelectedData={getCallbackData} />

      <List.Item>
        <Flex justify="between" className="print">
          <div>打印份数</div>
          <Flex>
            <div className={["count", count === 0 ? "over-reduce" : null].join(" ")} onClick={(e) => reduce()}>
              -
            </div>
            <div className="numbers">{count}</div>
            <div className="count" onClick={(e) => increase()}>
              +
            </div>
          </Flex>
        </Flex>
      </List.Item>
      <IYBottomButton buttonInfo={buttonInfo} isSingle={false} />
    </CopyLabelWrapper>
  );
});
