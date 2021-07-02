import React, { memo } from "react";

import { PayOrderWrapper, InfoWrapper } from "./style";

import IYApplyInfo from "@/components/apply-info";
import IYSteps from "@/components/steps";
import IYBottomButton from "@/components/bottom-button";

const steps = [
  {
    title: "填写信息",
  },
  {
    title: "补充资料",
  },
  {
    title: "领取方式",
  },
  {
    title: "预缴费用",
  },
];

const styleBtn1 = {
    width: "1.67rem",
    background: "#FFAE17",
    color: "#fff",
    boxShadow: "none",
  };
  
  const styleBtn2 = {
    width: "1.67rem",
    border: "1px solid #00C6B8",
    color: "#00C6B8",
    boxShadow: "none",
  };
  
  const buttonInfo = [
    { style: styleBtn1, name: "去支付" },
    { style: styleBtn2, name: "取消申请" },
  ];

export default memo(function IYPayOrder() {
  return (
    <PayOrderWrapper>
      <IYSteps steps={steps} currentIndex={3} />
      <InfoWrapper>
        <IYApplyInfo />
      </InfoWrapper>
      <IYBottomButton buttonInfo={buttonInfo} isSingle={false} />
    </PayOrderWrapper>
  );
});
