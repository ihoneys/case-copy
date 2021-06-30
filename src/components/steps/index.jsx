import React, { memo } from "react";

import { StepsWrapper } from "./style";

import { Progress } from "antd-mobile";

const stepsMock = [
  {
    title: "填写信息",
  },
  {
    title: "领取方式",
  },
  {
    title: "预缴费用",
  },
];

const style = {
  position: "absolute",
  top: ".42rem",
  width: "66%",
  left: "50%",
  transform: " translateX(-50%)",
  backgroundColor: "#f5f5f5",
  zIndex: "19"
};

export default memo(function IYSteps(props) {
  const { currentIndex = 0, steps = stepsMock } = props;
  const len = steps.length; // 步骤的数量
  const muchNums = (len - 1) * 2; // 分成的份数
  const bPercent = 9; // 小球占的比例
  const currentMuchNums = 2 * currentIndex + 1; // 当前所占的份数
  let percent = ((100 - (len - 2 - currentIndex) * bPercent) / muchNums) * currentMuchNums;
  if (currentIndex === len - 1) {
    percent = 100;
  }
  return (
    <StepsWrapper>
      {steps.map((s, i) => {
        return (
          <div className="steps-list" key={i}>
            <div className={["current-index", currentIndex === i || currentIndex >= i ? "active" : null].join(" ")}>{i + 1}</div>
            <div className={["steps-title", currentIndex === i || currentIndex >= i ? "active-color" : null].join(" ")}>{s.title}</div>
          </div>
        );
      })}
      <Progress style={style} percent={percent} />
    </StepsWrapper>
  );
});
