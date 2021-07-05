import React, { memo, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getHomeConfigInfoAction } from "./store/actionCreators";

import { EntranceWrapper, HeaderWrapper, ButtonWrapper, ContentWrapper, BottomWrapper } from "./style";

// import { Button } from "antd-mobile";
import recordIcon from "@/assets/img/record-icon.png";
import applyIcon from "@/assets/img/apply-icon.png";

import { isObjEmpty } from "@/utils/utils";
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

  const [configData, setConfigData] = useState(entranceData);

  const { homeConfig } = useSelector((state) => ({
    homeConfig: state.getIn(["homePage", "homeConfig"]),
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    const unitdId = 11;
    dispatch(getHomeConfigInfoAction(unitdId));
  }, []);

  const dealWithData = () => {
    if (isObjEmpty(homeConfig)) return;
    for (const key in homeConfig) {
      configData[0].content = homeConfig["suitablePeople"];
      configData[1].content = homeConfig["obtainMode"];
      configData[2].content = homeConfig["contactMode"];
    }
  };
  dealWithData();

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
        <IYEntranceList list={configData} />
        <ButtonColumn handleGoRecord={handleGoRecord} handleGoApply={handleGoApply} />
      </ContentWrapper>
    </EntranceWrapper>
  );
});
