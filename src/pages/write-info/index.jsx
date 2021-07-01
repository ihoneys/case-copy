import React, { memo, useState } from "react";

import { InputItem, Flex, Radio, TextareaItem, ImagePicker, WhiteSpace, Picker, List } from "antd-mobile";

import IYSteps from "@/components/steps";
import IYBottomButton from "@/components/bottom-button";
import IYRadioItem from "@/components/radio";

import { HeaderWrapper, TabsWrapper, FormWrapper, FormItem, RecordBotttomWrapper, RecordHeader, UploaderWrapper, WriteWrapper } from "./style";

import { district } from "antd-mobile-demo-data";

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

const files = [
  {
    url: "https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg",
    id: "2121",
  },
];
const file = [];
const relationData = [
  { label: "兄弟", value: "0" },
  { label: "姐妹", value: "1" },
];
const OthersFromListItem = () => {
  const [beTrustPositiveImg, setBeTrustPositiveImg] = useState([]);
  const [beTrustReverseImg, setBeTrustReverseImg] = useState([]);
  const [beTrustHandImg, setBeTrustHandImg] = useState([]);
  const onChange = (files, type, index) => {
    console.log(files, type, index);
  };

  return (
    <>
      <UploaderWrapper>
        <div className="card-id">
          <span className="label-icon">*</span>
          <label>被委托人证件（身份证）</label>
        </div>
        {/* 被委托人身份证正面*/}
        <div className="uploader-wrapper">
          <div className="uploader-flex">
            <ImagePicker
              length={1}
              files={beTrustPositiveImg}
              onChange={(files, type, index) => setBeTrustPositiveImg(files)}
              onImageClick={(index, fs) => console.log(index, fs, 123444)}
              selectable={beTrustPositiveImg.length < 1}
            />
            <div className="card-name">上传身份证正面</div>
          </div>
          {/* 被委托人身份证反面*/}
          <div className="uploader-flex">
            <ImagePicker
              length={1}
              files={beTrustReverseImg}
              onChange={(files, type, index) => setBeTrustReverseImg(files)}
              onImageClick={(index, fs) => console.log(index, fs)}
              selectable={beTrustReverseImg.length < 1}
            />
            <div className="card-name">上传身份证正面</div>
          </div>
          {/* 被委托人手持*/}
          <div className="uploader-flex">
            <ImagePicker length={1} files={beTrustHandImg} onChange={(files, type, index) => setBeTrustHandImg(files)} onImageClick={(index, fs) => console.log(index, fs)} selectable={beTrustHandImg.length < 1} />
            <div className="card-name">手持身份证照</div>
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
      <Picker data={relationData} cols={1} extra="请选择与患者关系">
        <List.Item style={{ paddingLeft: 0 }} arrow="horizontal">
          <span className="label-icon">*</span>
          <label style={{ fontSize: "15px" }}>关系</label>
        </List.Item>
      </Picker>
    </>
  );
};

const FromListItem = (props) => {
  const { currentIndex } = props;
  const [patientPositiveImg, setPatientPositiveImg] = useState([]);
  const [patientReverseImg, setPatientReverseImg] = useState([]);
  const [patientHandImg, setPatientHandImg] = useState([]);
  return (
    <>
      <UploaderWrapper>
        <div className="card-id">
          <span className="label-icon">*</span>
          <label>患者证件（身份证）</label>
        </div>
        {/* 患者身份证正面 */}
        <div className="uploader-wrapper">
          <div className="uploader-flex">
            <ImagePicker
              length={1}
              files={patientPositiveImg}
              onChange={(files, type, index) => setPatientPositiveImg(files)}
              onImageClick={(index, fs) => console.log(index, fs)}
              selectable={patientPositiveImg.length < 1}
            />
            <div className="card-name">上传身份证正面</div>
          </div>
          {/* 患者身份证反面 */}
          <div className="uploader-flex">
            <ImagePicker
              length={1}
              files={patientReverseImg}
              onChange={(files, type, index) => setPatientReverseImg(files)}
              onImageClick={(index, fs) => console.log(index, fs)}
              selectable={patientReverseImg.length < 1}
            />
            <div className="card-name">上传身份证反面</div>
          </div>
          {/* 患者手持 */}
          {currentIndex === 0 && (
            <div className="uploader-flex">
              <ImagePicker length={1} files={patientHandImg} onChange={(files, type, index) => setPatientHandImg(files)} onImageClick={(index, fs) => console.log(index, fs)} selectable={patientHandImg.length < 1} />
              <div className="card-name">手持身份证照</div>
            </div>
          )}
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

export default memo(function IYWriteInfo(props) {
  const router = props.history;
  const [tabsIndex, setTabsIndex] = useState(0);
  const [isRead, setIsRead] = useState(false);
  const [value, setValue] = useState(0);

  const getCurrentIndex = (index) => {
    console.log(index);
    setTabsIndex(index);
  };
  const handleNext = () => {
    const routerUrl = {
      0: "copy",
      1: "/signature",
    };
    router.push(routerUrl[tabsIndex]);
  };
  return (
    <WriteWrapper>
      <HeaderWrapper>
        <IYSteps steps={tabsIndex === 0 ? steps : newSteps} currentIndex={0} />
      </HeaderWrapper>
      <Tabs getCurrentIndex={getCurrentIndex} />
      {tabsIndex === 1 && (
        <FormWrapper>
          <OthersFromListItem curIndex={tabsIndex} />
        </FormWrapper>
      )}
      {tabsIndex === 1 && <WhiteSpace />}
      <FormWrapper>
        <FromListItem currentIndex={tabsIndex} />
      </FormWrapper>
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
      <IYBottomButton buttonInfo={buttonInfo} isSingle={false} onClickRight={handleNext} />
    </WriteWrapper>
  );
});
