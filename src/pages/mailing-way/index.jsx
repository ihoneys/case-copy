import React, { memo, useState } from "react";

import { Flex } from "antd-mobile";
import { MailingWayWrapper } from "./style";

import { mailingSteps } from "@/common/local-data";

import IYRadioItem from "@/components/radio";
import IYSteps from "@/components/steps";
import IYColumn from "@/components/column";
import IYBottomButton from "@/components/bottom-button";

import nextIcon from "@/assets/img/next.png";

const buttonInfo = [
  {
    style: {
      width: "167px",
      background: "linear-gradient(90deg, #00D2A3 0%, #02C6B8 100%)",
      border: "1px solid #00C6B8",
      color: "#fff",
    },
    name: "下一步",
  },
  {
    style: {
      width: "167px",
      color: "#00C6B8",
      border: "1px solid #00C6B8",
      boxShadow: "none",
    },
    name: "上一步",
  },
];

const IYTips = () => {
  return (
    <div className="user-tips">
      <div>温馨提示：</div>
      <div className="tips-content">除年龄小于1岁患者可由委托人网上预约病案复印，其他患者仅由本人网上申请，如需要委托人办理，请到窗口办理。</div>
    </div>
  );
};

const RenderColumn = (props) => {
  const { isTake } = props;
  if (!isTake) {
    return (
      <>
        <IYColumn name="快递公司">
          <div className="pr-15">EMS</div>
        </IYColumn>
        <IYColumn name="邮寄地址" style={{ borderBottom: "none" }}>
          <Flex className="pr-6">
            <span>请选择</span>
            <img className="next-icon" src={nextIcon} alt="next" />
          </Flex>
        </IYColumn>
      </>
    );
  } else {
    return (
      <>
        <IYColumn style={{ border: "none", paddingBottom: "0px" }} name="院内取件地址"></IYColumn>
        <p className="address-content">南山医院门诊综合楼负一楼病案管理科 备注： 取件时间：工作日：8:00-12:00</p>
      </>
    );
  }
};

export default memo(function IYMailingWay(props) {
  const router = props.history;
  const [isToPay, setIsToPay] = useState(true);
  const [isTake, setIsTake] = useState(false);

  const handleToPay = () => {
    setIsToPay(true);
    setIsTake(false);
  };

  const handleTake = () => {
    setIsToPay(false);
    setIsTake(true);
  };

  const handlePrev = () => {
    router.go(-1);
  };

  const handleNext = () => {
    router.push("/detail");
  };
  return (
    <MailingWayWrapper>      
      <IYSteps steps={mailingSteps} currentIndex={1} />
      <IYColumn name="领取方式">
        <Flex className="pr-15">
          <Flex style={{ marginRight: ".3rem" }} onClick={(e) => handleToPay()}>
            <IYRadioItem isSelected={isToPay} />
            <span>邮寄到付</span>
          </Flex>
          <Flex onClick={(e) => handleTake()}>
            <IYRadioItem isSelected={isTake} />
            <span>到院自取</span>
          </Flex>
        </Flex>
      </IYColumn>
      <RenderColumn isTake={isTake} />
      <IYTips />
      <IYBottomButton buttonInfo={buttonInfo} isSingle={false} onClickLeft={handlePrev} onClickRight={handleNext} />
    </MailingWayWrapper>
  );
});
