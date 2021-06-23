import React, { memo } from "react";

import { RecordWrapper, ContentWrapper, ColumnList, ButtonWrapper, BottomBtn } from "./style";

export default memo(function IYRecord() {
  return (
    <RecordWrapper>
      <ContentWrapper>
        <ColumnList>
          <li>
            <div>申请人：李米</div>
            <div>待支付</div>
          </li>
          <li>
            <div>患者姓名：小米</div>
          </li>
          <li>
            <div>提交日期：2021-04-20 22:4</div>
          </li>
          <li>
            <div>就诊时间：2021-04-20至2021</div>
          </li>
        </ColumnList>
        <BottomBtn>
          <ButtonWrapper className="orange">
            支付
          </ButtonWrapper>
          <ButtonWrapper className="black">
            取消订单
          </ButtonWrapper>
          <ButtonWrapper className="green">
            补充资料
          </ButtonWrapper>
          <ButtonWrapper className="black no-default-width ">
            查看自提点
          </ButtonWrapper>
        </BottomBtn>
      </ContentWrapper>
    </RecordWrapper>
  );
});
