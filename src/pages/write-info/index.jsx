import React, { memo, useState } from "react";

import { List, InputItem } from "antd-mobile";
import IYSteps from "@/components/steps";
import { HeaderWrapper, TabsWrapper } from "./style";
// import "@/assets/css/antd-style.less";
const steps = [
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

const tabsList = ["本人办理", "他人代办"];

function Tabs() {
  const [curIndex, setcurIndex] = useState(0);
  return (
    <TabsWrapper>
      {tabsList.map((item, i) => {
        return (
          <div className={["tabs-item", curIndex === i ? "active" : ""].join(" ")} onClick={(e) => setcurIndex(i)}>
            {item}
          </div>
        );
      })}
    </TabsWrapper>
  );
}

export default memo(function IYWriteInfo() {
  return (
    <>
      <HeaderWrapper>
        <IYSteps steps={steps} currentIndex={0} />
      </HeaderWrapper>
      <Tabs />
    </>
  );
});
