import React, { memo, useState } from "react";

import { LabelWrapper } from "./style";
import { Flex } from "antd-mobile";

const IYLabelComponent = memo(function (props) {
  const { data, title, getSelectedData } = props;
  const [labelData, setLabelData] = useState(data);
  const handleCheck = (i) => {
    labelData[i].checked = !labelData[i].checked;
    setLabelData([...labelData]);
  };
  getSelectedData(labelData);
  return (
    <LabelWrapper>
      <Flex align="end">
        <div className="title">{title}</div>
        <div className="describe">（可多选）</div>
      </Flex>
      <Flex wrap="wrap" className="label-flex">
        {labelData.map((item, i) => (
          <div key={i} className={["label", item.checked ? "active-color" : null].join(" ")} onClick={(e) => handleCheck(i)}>
            {item.name}
          </div>
        ))}
      </Flex>
    </LabelWrapper>
  );
});

export default IYLabelComponent;
