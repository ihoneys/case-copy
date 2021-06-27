import React, { memo } from "react";
import { RaidoItemWrapper } from "./style";

import ovalIcon from "@/assets/img/oval-icon.png";
import fillOvalIcon from "@/assets/img/fill-oval.png";
export default memo(function IYRadioItem(props) {
  const { isSelected = false } = props;
  return (
    <RaidoItemWrapper>
      {isSelected ? (
        <img className="radio" src={fillOvalIcon} alt="" />
      ) : (
        <img className="radio" src={ovalIcon} alt="" />
      )}
    </RaidoItemWrapper>
  );
});
