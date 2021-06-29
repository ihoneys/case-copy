import React, { memo } from "react";

import IYBottomButton from "@/components/bottom-button";

import { ContentWrapper } from "./style";

const styleBtn = {
  width: "100%",
  background: "linear-gradient(90deg, #00D2A3 0%, #02C6B8 100%)",
  color: "#fff",
};

const buttonInfo = [{ style: styleBtn, name: "下一步" }];

export default memo(function IYNotice(props) {
  const router = props.history;
  const handleNext = () => {
    router.push("/write");
  }
  return (
    <ContentWrapper>
      <h3 className="headerline">病案复印须知</h3>
      <div dangerouslySetInnerHTML={{ __html: "<span>hello world</span>" }}></div>
      <IYBottomButton buttonInfo={buttonInfo} handleRight={handleNext}/>
    </ContentWrapper>
  );
});
