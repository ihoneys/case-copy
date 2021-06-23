import React, { memo } from "react";

import { ContentWrapper } from "./style";

export default memo(function IYApplyInfo() {
  return (
    <ContentWrapper>
      <li>
        <span className="headerline">申请信息</span>
      </li>
      <li>
        <span className="content-name">申请人：</span>
        <span className="content-text">毛杜拉</span>
      </li>
      <li>
        <span className="content-name">申请医院：</span>
        <span className="content-text">华中科技大学协和医院</span>
      </li>
      <li>
        <span className="content-name">申请人：</span>
        <span className="content-text">毛杜拉</span>
      </li>
      <li>
        <span className="content-name">申请人证件号：</span>
        <span className="content-text">18023882489</span>
      </li>
      <li>
        <span className="content-name">患者姓名：</span>
        <span className="content-text">袁**</span>
      </li>
      <li>
        <span className="content-name">住院号：</span>
        <span className="content-text">687889</span>
      </li>
      <li>
        <span className="content-name">提交日期：</span>
        <span className="content-text">2021-04-20 22:5</span>
      </li>
      <li>
        <span className="content-name">预交费用：</span>
        <span className="content-text">¥60（预缴费用不等于实际费用不等于实际费用）</span>
      </li>
    </ContentWrapper>
  );
});
