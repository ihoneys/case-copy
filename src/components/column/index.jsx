import React, { memo } from "react";
import { Flex } from "antd-mobile";
import { ColumnWrapper } from "./style";

export default memo(function IYColumn(props) {
  const { name, children,style={} } = props;
  return (
    <ColumnWrapper>
      <Flex style={style} className="flex-column" justify="between">
        <Flex>
          <span style={{color: "#F65C44",marginRight: ".07rem"}}>*</span>
          <span>{name}</span>
        </Flex>
        {children}
      </Flex>
    </ColumnWrapper>
  );
});
