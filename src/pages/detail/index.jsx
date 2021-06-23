import React, { memo } from "react";

import { DetailWrapper, ContentWrapper, AddressWrapper } from "./style";

import IYApplyInfo from "@/components/apply-info";

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

export default memo(function IYOrderDetail() {
  return (
    <DetailWrapper>
      <ContentWrapper>
        <IYApplyInfo />
      </ContentWrapper>
      <AddressWrapper>
        <AddressInfo />
      </AddressWrapper>
    </DetailWrapper>
  );
});
