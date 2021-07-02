import React, { Component } from "react";

import { ListView } from "antd-mobile";
import { RecordWrapper, ContentWrapper, ColumnList, ButtonWrapper, BottomBtn } from "./style";

const data = [];

const mockData = () => {
  return Array.from({ length: 50 }).forEach((item, index) => {
    console.log(66);
    data.push({
      name: "李米" + index,
      orderStatus: Math.floor(Math.random() * 10) + 1,
      patientName: "小米" + index,
      date: "2021-04-20 22:4",
      treatmentDate: "2021-04-20",
    });
  });
};
mockData();
class IYRecord extends Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
      dataSource,
    };
  }
  UNSAFE_componentWillMount() {
    // 初始化数据
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(data),
    });
  }
  UNSAFE_componentWillReceiveProps(nextProps) {}
  render() {
    const statusObj = {
      1: {
        color: "#FF9F4F",
        name: "暂存",
      },
      2: {
        color: "#FF9F4F",
        name: "待支付",
      },
      3: {
        color: "#FF9F4F",
        name: "已取消",
      },
      4: {
        color: "#FF9F4F",
        name: "待审核",
      },
      5: {
        color: "#5ACF83",
        name: "审核通过",
      },
      6: {
        color: "#FA5151",
        name: "审核失败",
      },
      7: {
        color: "#FA5151",
        name: "审核失败",
      },
      8: {
        color: "#00C6B8",
        name: "待收货",
      },
      9: {
        color: "#00C6B8",
        name: "待自提",
      },
      10: {
        color: "#00C6B8",
        name: "已收货",
      },
    };
    const { dataSource } = this.state;
    const MyRecordList = (rowData, sectionID, rowID) => {
      const { orderStatus } = rowData;
      const MyButton = () => {
        if (orderStatus === 2) {
          return <ButtonWrapper className="orange">支付</ButtonWrapper>;
        } else if (orderStatus === 4) {
          return <ButtonWrapper className="black">取消订单</ButtonWrapper>;
        } else if (orderStatus === 6) {
          return (
            <>
              <ButtonWrapper className="black">取消订单</ButtonWrapper>
              <ButtonWrapper className="orange">补充资料</ButtonWrapper>
            </>
          );
        } else if (orderStatus === 8) {
          return <ButtonWrapper className="black">查看物流</ButtonWrapper>;
        } else if (orderStatus === 9) {
          return <ButtonWrapper className="black">查看自提点</ButtonWrapper>;
        } else if (orderStatus === 10) {
          return <ButtonWrapper className="black">查看详情</ButtonWrapper>;
        } else {
          return null;
        }
      };
      return (
        <ContentWrapper>
          <ColumnList>
            <li>
              <div>申请人：{rowData.name}</div>
              <div style={{ color: statusObj[rowData.orderStatus].color }}>{statusObj[rowData.orderStatus].name}</div>
            </li>
            <li>
              <div>患者姓名：{rowData.patientName}</div>
            </li>
            <li>
              <div>提交日期：{rowData.date}</div>
            </li>
            <li>
              <div>就诊时间：2021-04-20至2021</div>
            </li>
          </ColumnList>
          {MyButton() && (
            <BottomBtn>
              <MyButton />
            </BottomBtn>
          )}
        </ContentWrapper>
      );
    };
    return (
      <RecordWrapper>
        <ListView
          ref={(el) => (this.lv = el)}
          dataSource={dataSource}
          renderRow={MyRecordList}
          renderFooter={() => <div style={{ textAlign: "center" }}>{true ? "加载中..." : "哎呀，到底了"}</div>}
          initialListSize={10}
          useBodyScroll={true}
          pageSize={5}
        />
      </RecordWrapper>
    );
  }
}
export default IYRecord;
