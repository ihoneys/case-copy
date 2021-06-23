import React, { memo } from "react";

import { Button } from "antd-mobile";

import { PositionBtn } from "./style";

const IsEvenShow = function (props) {
  const { isSingle, buttonInfo } = props;
  if (isSingle) {
    return (
      <Button className="handle-btn" style={buttonInfo[1].style}>
        {buttonInfo[1].name}
      </Button>
    );
  }
  return <></>;
};

const IYBottomButton = function (props) {
  const { buttonInfo, isSingle = false } = props;
  const content = buttonInfo[0];
  return (
    <PositionBtn width="100" color={content.color} borderColor={content.borderColor}>
      <IsEvenShow isSingle={isSingle} buttonInfo={buttonInfo} />
      <Button className="handle-btn" style={content.style}>
        {content.name}
      </Button>
    </PositionBtn>
  );
};

export default memo(IYBottomButton);