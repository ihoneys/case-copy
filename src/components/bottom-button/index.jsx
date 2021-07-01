import React, { memo } from "react";

import { Button } from "antd-mobile";

import { PositionBtn } from "./style";

const IsEvenShow = function (props) {
  const { isSingle, buttonInfo,onClick } = props;
  if (!isSingle) {
    return (
      <Button className="handle-btn" style={buttonInfo[1].style} onClick={onClick}>
        {buttonInfo[1].name}
      </Button>
    );
  }
  return <></>;
};

const IYBottomButton = function (props) {
  const { buttonInfo, isSingle = true, onClickRight = () => {} ,onClickLeft = () => {}} = props;
  const content = buttonInfo[0];
  return (
    <PositionBtn>
      <IsEvenShow isSingle={isSingle} buttonInfo={buttonInfo} onClick={onClickLeft}/>
      <Button className="handle-btn" style={content.style} onClick={onClickRight}>
        {content.name}
      </Button>
    </PositionBtn>
  );
};

export default memo(IYBottomButton);
