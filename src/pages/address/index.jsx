import React, { memo } from "react";

import { Flex } from "antd-mobile";

import { AddressWrapper, ListWrapper } from "./style";

import IYBottomButton from "@/components/bottom-button";

import editIcon from "@/assets/img/edit.png";
import notDataIcon from "@/assets/img/no-data.png";

const styleBtn = {
  width: "100%",
  background: "linear-gradient(90deg, #00D2A3 0%, #02C6B8 100%)",
  color: "#fff",
};

const buttonInfo = [{ style: styleBtn, name: "新增地址" }];

const WithoutContent = () => {
  return (
    <Flex direction="column" className="without">
      <img src={notDataIcon} alt="" />
      <div>暂无地址可选</div>
    </Flex>
  );
};

const addressList = [
  { id: 0, name: "啦啦啦", phone: "150231231231", address: "广东省深圳市南山区贝培大道锡山家园274" },
  { id: 1, name: "阿斯顿", phone: "18999992222", address: "广东省深圳市南山区贝培大道锡山家园274广东省深圳市南山区贝培大道锡山家园274广东省深圳市南山区贝培大道锡山家园274" },
];

const AddressList = () => {
  return (
    <>
      {addressList.map((item, i) => (
        <ListWrapper key={item.id}>
          <Flex justify="between">
            <div>
              <span className="address-name">{item.name}</span>
              <span className="address-phone">{item.phone}</span>
            </div>
            <img className="edit-icon" src={editIcon} alt="" />
          </Flex>
          <div className="address-content">{item.address}</div>
        </ListWrapper>
      ))}
    </>
  );
};

export default memo(function IYAddressList() {
  return (
    <AddressWrapper>
      {addressList.length > 0 ? <AddressList /> : <WithoutContent />}
      <IYBottomButton buttonInfo={buttonInfo} />
    </AddressWrapper>
  );
});
