import React, { memo, useState } from "react";

import { List, InputItem, Flex, Radio } from "antd-mobile";
import IYSteps from "@/components/steps";
import IYBottomButton from "@/components/bottom-button";
import {
  HeaderWrapper,
  TabsWrapper,
  FormWrapper,
  FormItem,
  RecordBotttomWrapper,
  RecordHeader,
} from "./style";
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
          <div
            key={item}
            className={["tabs-item", curIndex === i ? "active" : ""].join(" ")}
            onClick={(e) => setcurIndex(i)}
          >
            {item}
          </div>
        );
      })}
    </TabsWrapper>
  );
}

const inputStyle = {
  textAlign: "right",
  border: "none",
  flex: "1",
};

function FromListItem() {
  return (
    <>
      <FormItem>
        <div className="label-item">
          <span className="label-icon">*</span>
          <label>住院患者</label>
        </div>
        <InputItem
          style={inputStyle}
          clear={true}
          type="text"
          placeholder="请输入住院患者姓名"
        />
      </FormItem>
      <FormItem>
        <div className="label-item">
          <span className="label-icon">*</span>
          <label>患者姓名</label>
        </div>
        <InputItem
          style={inputStyle}
          clear={true}
          type="text"
          placeholder="请输入患者姓名"
        />
      </FormItem>
      <FormItem>
        <div className="label-item">
          <span className="label-icon">*</span>
          <label>证件号码</label>
        </div>
        <InputItem
          style={inputStyle}
          clear={true}
          type="text"
          placeholder="请输入患者姓名"
        />
      </FormItem>
      <FormItem>
        <div className="label-item">
          <span className="label-icon">*</span>
          <label>住院号</label>
        </div>
        <InputItem
          style={inputStyle}
          clear={true}
          type="text"
          placeholder="请输入住院号"
        />
      </FormItem>
    </>
  );
}

const buttonInfo = [
  {
    style: {
      width: "167px",
      background: "linear-gradient(90deg, #00D2A3 0%, #02C6B8 100%)",
      border: "1px solid #00C6B8",
      color: "#fff",
    },
    name: "下一步",
  },
  {
    style: {
      width: "167px",
      color: "#00C6B8",
      border: "1px solid #00C6B8",
    },
    name: "暂存",
  },
];

export default memo(function IYWriteInfo() {
  const [recordChecked, setRecordChecked] = useState(false);
  return (
    <>
      <HeaderWrapper>
        <IYSteps steps={steps} currentIndex={0} />
      </HeaderWrapper>
      <Tabs />
      <FormWrapper>
        <FromListItem />
      </FormWrapper>
      <IYBottomButton buttonInfo={buttonInfo} isSingle={false} />
      <RecordHeader className="headerline">住院记录</RecordHeader>
      <RecordBotttomWrapper>
        <div>华中科技大学协和深圳医院</div>
        <Flex>
          <span>2021-03-30至2021-04-20</span>
          <Radio
            className="my-radio"
            defaultChecked={false}
            checked={recordChecked}
            onChange={(e) => {
              
              if(recordChecked) {
                setRecordChecked(false)
              } else {
                setRecordChecked(true)

              }
              console.log(e)
            }}
          />
        </Flex>
      </RecordBotttomWrapper>
    </>
  );
});
