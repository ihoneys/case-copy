import React, { memo, useState } from "react";

import { List, InputItem, Picker, WhiteSpace, Switch, Flex } from "antd-mobile";

import { AddressWrapper } from "./style";

import IYBottomButton from "@/components/bottom-button";

const serializData = () => {
  let antdDistrict = [];
  let districtData = require("@/common/location");
  Object.keys(districtData).forEach((index) => {
    let itemLevel1 = {};
    let itemLevel2 = {};
    itemLevel1.value = districtData[index].code;
    itemLevel1.label = districtData[index].name;
    itemLevel1.children = [];
    let data = districtData[index].cities;
    Object.keys(data).forEach((index) => {
      itemLevel2.value = data[index].code;
      itemLevel2.label = data[index].name;
      itemLevel2.children = [];
      let data2 = data[index].districts;
      let itemLevel3 = {};
      itemLevel3.children = [];
      Object.keys(data2).forEach((index) => {
        itemLevel3.value = index;
        itemLevel3.label = data2[index];
        itemLevel2.children.push(itemLevel3);
        itemLevel3 = {};
      });
      itemLevel1.children.push(itemLevel2);
      itemLevel2 = {};
    });
    antdDistrict.push(itemLevel1);
  });
  return antdDistrict;
};

const styleBtn = {
  width: "100%",
  background: "linear-gradient(90deg, #00D2A3 0%, #02C6B8 100%)",
  color: "#fff",
};

const buttonInfo = [{ style: styleBtn, name: "保存" }];

export default memo(function IYAddNewAddress(props) {
  const router = props.history;
  const query = props.location.query;
  const { type } = query;
  const regionData = serializData();
  const [areaValue, setareaValue] = useState([]);
  const [checked, setchecked] = useState(false);

  // 保存
  const handleSave = () => {
    router.go(-1);
  };

  return (
    <AddressWrapper>
      <InputItem placeholder="请输入姓名">姓名</InputItem>
      <InputItem placeholder="请输入收货人手机号">手机号码</InputItem>
      <div className="my-picker">
        <Picker
          title="选择地区"
          extra="请选择省市区县、乡镇"
          data={regionData}
          value={areaValue}
          onChange={(v) => {
            setareaValue(v);
          }}
        >
          <List.Item arrow="horizontal">所在地区</List.Item>
        </Picker>
      </div>

      <InputItem placeholder="街道、楼牌号">详细地址</InputItem>
      <WhiteSpace />
      <div className="tips">
        <List.Item
          extra={
            <Switch
              checked={checked}
              onChange={() => {
                setchecked(!checked);
              }}
            />
          }
        >
          <Flex direction="column" align="start">
            <div>设置默认地址</div>
            <div className="tips-content">提醒：每次下单会默认推荐使用该地址</div>
          </Flex>
        </List.Item>
      </div>
      <IYBottomButton buttonInfo={buttonInfo} onClickRight={handleSave} />
    </AddressWrapper>
  );
});
