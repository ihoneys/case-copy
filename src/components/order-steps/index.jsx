import React, { memo } from "react";

import { Flex, Progress } from "antd-mobile";

import { OrderStepsWrapper } from "./style";

import steps0_icon from "@/assets/img/steps0.png";
import steps0_iconFill from "@/assets/img/steps0-fill.png";

import steps1_icon from "@/assets/img/steps1.png";
import steps1_iconFill from "@/assets/img/steps1-fill.png";

import steps2_icon from "@/assets/img/steps2.png";
import steps2_iconFill from "@/assets/img/steps2-fill.png";
import steps2_err from "@/assets/img/steps2-err.png";

import steps3_icon from "@/assets/img/steps3.png";
import steps3_iconFill from "@/assets/img/steps3-fill.png";

import steps4_icon from "@/assets/img/steps4.png";
import steps4_iconFill from "@/assets/img/steps4-fill.png";

const orderSteps = [
  {
    title: "待审核",
    icon: steps0_icon,
    fillIcon: steps0_iconFill,
  },
  {
    title: "审核中",
    icon: steps1_icon,
    fillIcon: steps1_iconFill,
  },
  {
    title: "审核通过",
    icon: steps2_icon,
    fillIcon: steps2_iconFill,
    error: {
      title: "审核失败",
      errIcon: steps2_err,
    },
  },
  {
    title: "等待自提/收货",
    icon: steps3_icon,
    fillIcon: steps3_iconFill,
  },
  {
    title: "已完成",
    icon: steps4_icon,
    fillIcon: steps4_iconFill,
  },
];

const progressStyle = {
  position: "absolute",
  top: "34px",
  width: "87%",
  left: "50%",
  transform: " translateX(-50%)",
  backgroundColor: "#f5f5f5",
};
export default memo(function IYOrderSteps(props) {
  const { currentIndex = 0 , isPass = false} = props;
  let percent;
  if (currentIndex === 3) {
    percent = 70;
  } else {
    if (currentIndex === 4) {
      percent = 100;
    } else {
      percent = currentIndex * 20;
    }
  }

  return (
    <OrderStepsWrapper>
      <Flex justify="between" align="center">
        {orderSteps.map((item, i) => (
          <Flex direction="column" key={i}>
            {currentIndex >= i ? <img className="image-icon" src={item.fillIcon} alt="" /> : <img className="image-icon" src={item.icon} alt="" />}
            <div className={currentIndex >= i ? "active-color" : ""}>{item.title}</div>
          </Flex>
        ))}
      </Flex>
      {isPass && <div className="error-reason">您的个人信息提交有误，请重新提交</div>}
      <Progress style={progressStyle} percent={percent} />
    </OrderStepsWrapper>
  );
});
