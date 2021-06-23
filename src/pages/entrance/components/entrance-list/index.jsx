import React, { memo } from "react";
import PropTypes from "prop-types";

import { ListLayout } from "./style";

const IYEntranceList = function (props) {
  const { list } = props;
  return (
    <ListLayout>
      {list.map((item, index) => {
        return (
          <li className="item-list" key={item.title}>
            <div className="item-column">
              <img className="item-icon" src={item.icon} alt="icon" />
              <div className="item-title">{item.title}</div>
            </div>
            <div className="item-column">
              <div className="item-icon"></div>
              <div className="item-content">{item.content}</div>
            </div>
          </li>
        );
      })}
    </ListLayout>
  );
};
IYEntranceList.propTypes = {
  list: PropTypes.array,
};
export default memo(IYEntranceList);
