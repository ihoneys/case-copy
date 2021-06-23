import React, { memo } from "react";

import IYBottomButton from "@/components/bottom-button";

import { ContentWrapper } from "./style";

const styleBtn = {
  width: "100%",
  background: "linear-gradient(90deg, #00D2A3 0%, #02C6B8 100%)",
  color: "#fff"
};

const buttonInfo = [{ style: styleBtn, name: "下一步" }];

export default memo(function IYNotice() {
  return (
    <ContentWrapper>
      <h3 className="headerline">病案复印须知</h3>
      <IYBottomButton buttonInfo={buttonInfo} />
    </ContentWrapper>
  );
});
