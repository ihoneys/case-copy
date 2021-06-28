import React, { memo } from "react";

import { DetailWrapper, ContentWrapper, AddressWrapper } from "./style";

import IYApplyInfo from "@/components/apply-info";
import IYOrderSteps from "@/components/order-steps";
import IYBottomButton from "@/components/bottom-button";

import addressIcon from "@/assets/img/address-icon.png";
import nextIcon from "@/assets/img/next.png";

function AddressInfo() {
  return (
    <>
      <div className="headerline">领取信息</div>
      <div className="address-info">
        <img className="address-icon" src={addressIcon} alt="address" />
        <div className="info">
          <div>
            <span className="info-name">毛拉啊啊</span>
            <span className="info-phone">15000561564</span>
          </div>
          <p className="info-text">广东省深圳市南山区贝培大道锡山家园274</p>
        </div>
        <img className="arrow-icon" src={nextIcon} alt="next" />
      </div>
    </>
  );
}

const CustomBackground = () => {
  return (
    <>
      <div className="background"></div>
    </>
  );
};

const styleBtn = {
  width: "100%",
  border: "1px solid #00C6B8",
  color: "#00C6B8",
};

const buttonInfo = [{ style: styleBtn, name: "取消申请" }];

export default memo(function IYOrderDetail() {
  // const status = 0;

  return (
    <DetailWrapper>
      <IYOrderSteps currentIndex={1} />
      <ContentWrapper>
        <IYApplyInfo />
      </ContentWrapper>
      <AddressWrapper>
        <AddressInfo />
      </AddressWrapper>
      <CustomBackground />
      <IYBottomButton buttonInfo={buttonInfo} />
    </DetailWrapper>
  );
});
