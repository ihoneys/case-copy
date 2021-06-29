import React, { memo } from "react";

import { EntranceWrapper, HeaderWrapper, ButtonWrapper, ContentWrapper, BottomWrapper } from "./style";

// import { Button } from "antd-mobile";
import recordIcon from "@/assets/img/record-icon.png";
import applyIcon from "@/assets/img/apply-icon.png";

import { entranceData } from "@/common/local-data";

import IYEntranceList from "./components/entrance-list";

function ButtonColumn(props) {
  const { handleGoRecord, handleGoApply } = props;

  return (
    <BottomWrapper>
      <ButtonWrapper className="bottom-left" onClick={handleGoRecord}>
        <img className="boottom-icon" src={recordIcon} alt="" />
        <div>申请记录</div>
      </ButtonWrapper>
      <ButtonWrapper className="bottom-right" onClick={handleGoApply}>
        <img className="boottom-icon" src={applyIcon} alt="" />
        <div>立即申请</div>
      </ButtonWrapper>
    </BottomWrapper>
  );
}

export default memo(function IYEnterPage(props) {
  console.log(props);
  const router = props.history;
  const handleGoRecord = () => {
    router.push("/record");
  };
  const handleGoApply = () => {
    router.push("/notice");
  };

  return (
    <EntranceWrapper>
      <HeaderWrapper />
      <ContentWrapper>
        <IYEntranceList list={entranceData} />
        <ButtonColumn handleGoRecord={handleGoRecord} handleGoApply={handleGoApply} />
      </ContentWrapper>
    </EntranceWrapper>
  );
});
