import React, { memo, useState, useRef } from "react";

import { InputItem, Flex, Radio, TextareaItem, ImagePicker, WhiteSpace } from "antd-mobile";

import IYSteps from "@/components/steps";
import IYBottomButton from "@/components/bottom-button";
import IYRadioItem from "@/components/radio";

import { HeaderWrapper, TabsWrapper, FormWrapper, FormItem, RecordBotttomWrapper, RecordHeader, UploaderWrapper, WriteWrapper } from "./style";

const tabsList = ["本人办理", "他人代办"];

const Tabs = (props) => {
  const { getCurrentIndex } = props;
  const [curIndex, setcurIndex] = useState(0);
  const handleTabs = (index) => {
    setcurIndex(index);
    getCurrentIndex(index);
  };
  return (
    <TabsWrapper>
      {tabsList.map((item, i) => {
        return (
          <div key={item} className={["tabs-item", curIndex === i ? "active" : ""].join(" ")} onClick={(e) => handleTabs(i)}>
            {item}
          </div>
        );
      })}
    </TabsWrapper>
  );
};

const inputStyle = {
  textAlign: "right",
  border: "none",
  flex: "1",
};

const files = [];

const OthersFromListItem = () => {
  const onChange = () => {};
  return (
    <>
      <UploaderWrapper>
        <div className="card-id">
          <span className="label-icon">*</span>
          <label>患者证件（身份证）</label>
        </div>
        <div className="uploader-wrapper">
          <div className="uploader-flex">
            <ImagePicker length={1} files={files} onChange={onChange} onImageClick={(index, fs) => console.log(index, fs)} selectable={files.length < 7} />
            <span className="card-name">上传身份证正面</span>
          </div>
          <div className="uploader-flex">
            <ImagePicker length={1} files={files} onChange={onChange} onImageClick={(index, fs) => console.log(index, fs)} selectable={files.length < 7} />
            <span className="card-name">上传身份证反面</span>
          </div>
        </div>
      </UploaderWrapper>
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
};

const FromListItem = () => {
  const onChange = () => {};
  return (
    <>
      <UploaderWrapper>
        <div className="card-id">
          <span className="label-icon">*</span>
          <label>患者证件（身份证）</label>
        </div>
        <div className="uploader-wrapper">
          <div className="uploader-flex">
            <ImagePicker length={1} files={files} onChange={onChange} onImageClick={(index, fs) => console.log(index, fs)} selectable={files.length < 7} />
            <span className="card-name">上传身份证正面</span>
          </div>
          <div className="uploader-flex">
            <ImagePicker length={1} files={files} onChange={onChange} onImageClick={(index, fs) => console.log(index, fs)} selectable={files.length < 7} />
            <span className="card-name">上传身份证反面</span>
          </div>
        </div>
      </UploaderWrapper>
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
};

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
      boxShadow: "none",
    },
    name: "暂存",
  },
];

const data = [
  { value: 0, label: "doctor" },
  { value: 1, label: "bachelor" },
];

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

const newSteps = [
  {
    title: "填写信息",
  },
  {
    title: "补充资料",
  },
  {
    title: "领取方式",
  },
  {
    title: "预缴费用",
  },
];

export default memo(function IYWriteInfo() {
  const [tabsIndex, setTabsIndex] = useState(0);
  const [isRead, setIsRead] = useState(false);
  const [value, setValue] = useState(0);

  const getCurrentIndex = (index) => {
    console.log(index);
    setTabsIndex(index);
  };
  return (
    <WriteWrapper>
      <HeaderWrapper>
        <IYSteps steps={tabsIndex === 0 ? steps : newSteps} currentIndex={0} />
      </HeaderWrapper>
      <Tabs getCurrentIndex={getCurrentIndex} />
      <FormWrapper>
        <FromListItem />
      </FormWrapper>
      <WhiteSpace />
      {tabsIndex === 1 && (
        <FormWrapper>
          <OthersFromListItem />
        </FormWrapper>
      )}
      <IYBottomButton buttonInfo={buttonInfo} isSingle={false} />
      <RecordHeader className="headerline">住院记录</RecordHeader>
      <RecordBotttomWrapper>
        <div className="title">华中科技大学协和深圳医院</div>
        {data.map((i) => (
          <Flex justify="between" className="record-list" key={i.value}>
            <span>2021-03-30至2021-04-20</span>
            <Radio className="my-radio" key={i.value} checked={value === i.value} onChange={() => setValue(i.value)}></Radio>
          </Flex>
        ))}
        <div className="remarks-wrapper">
          <div>备注</div>
          <TextareaItem rows={4} className="remarks" placeholder="请输入反馈的内容" />
        </div>
        <Flex onClick={() => setIsRead(!isRead)}>
          <IYRadioItem isSelected={isRead} />
          <span className="agreement">我已阅读并同意</span>
          <span className="protocol">《病例复印协议》</span>
        </Flex>
      </RecordBotttomWrapper>
    </WriteWrapper>
  );
});
