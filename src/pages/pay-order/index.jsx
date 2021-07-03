import React, { memo } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { PayOrderWrapper, InfoWrapper } from "./style";

import IYApplyInfo from "@/components/apply-info";
import IYSteps from "@/components/steps";
import IYBottomButton from "@/components/bottom-button";

import { defineSteps } from "../../store/utils";

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
  // redux
  const { isMyself } = useSelector(
    (state) => ({
      isMyself: state.getIn(["writeInfo", "isMyself"]),
    }),
    shallowEqual
  );
  return (
    <PayOrderWrapper>
      <IYSteps steps={defineSteps(isMyself)} currentIndex={isMyself ? 2 : 3} />
      <InfoWrapper>
        <IYApplyInfo />
      </InfoWrapper>
      <IYBottomButton buttonInfo={buttonInfo} isSingle={false} />
    </PayOrderWrapper>
  );
});
