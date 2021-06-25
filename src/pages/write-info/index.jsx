import React, { memo, useState } from "react";

import { InputItem, Flex, Radio, TextareaItem } from "antd-mobile";
import IYSteps from "@/components/steps";
import IYBottomButton from "@/components/bottom-button";
import { HeaderWrapper, TabsWrapper, FormWrapper, FormItem, RecordBotttomWrapper, RecordHeader } from "./style";
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
          <div key={item} className={["tabs-item", curIndex === i ? "active" : ""].join(" ")} onClick={(e) => setcurIndex(i)}>
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
        <InputItem style={inputStyle} clear={true} type="text" placeholder="请输入住院患者姓名" />
      </FormItem>
      <FormItem>
        <div className="label-item">
          <span className="label-icon">*</span>
          <label>患者姓名</label>
        </div>
        <InputItem style={inputStyle} clear={true} type="text" placeholder="请输入患者姓名" />
      </FormItem>
      <FormItem>
        <div className="label-item">
          <span className="label-icon">*</span>
          <label>证件号码</label>
        </div>
        <InputItem style={inputStyle} clear={true} type="text" placeholder="请输入患者姓名" />
      </FormItem>
      <FormItem>
        <div className="label-item">
          <span className="label-icon">*</span>
          <label>住院号</label>
        </div>
        <InputItem style={inputStyle} clear={true} type="text" placeholder="请输入住院号" />
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

const data = [
  { value: 0, label: "doctor" },
  { value: 1, label: "bachelor" },
];

export default memo(function IYWriteInfo() {
  const [isRead, setIsRead] = useState(false);
  const [value, setValue] = useState(0);
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
        <div className="title">华中科技大学协和深圳医院</div>
        {data.map((i) => (
          <Flex justify="between" className="record-list">
            <span>2021-03-30至2021-04-20</span>
            <Radio className="my-radio" key={i.value} checked={value === i.value} onChange={() => setValue(i.value)}></Radio>
          </Flex>
        ))}
        <div className="remarks-wrapper">
          <div>备注</div>
          <TextareaItem rows={4} className="remarks" placeholder="请输入反馈的内容" />
        </div>
        <Flex>
          <Radio className="my-radio" checked={isRead} onClick={() => setIsRead(!isRead)}></Radio>
          <span className="agreement">我已阅读并同意</span>
          <span className="">《病例复印协议》</span>
        </Flex>
      </RecordBotttomWrapper>
    </>
  );
});
