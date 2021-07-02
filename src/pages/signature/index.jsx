import React, { memo, useRef, useState } from "react";

import SignatureCanvas from "react-signature-canvas";

import { WhiteSpace, Icon } from "antd-mobile";

import { SignWrapper, MaskWrapper, ContentWrapper } from "./style";

import IYBottomButton from "@/components/bottom-button";
import IYSteps from "@/components/steps";

const steps = [
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

const buttonInfo = [
  {
    style: {
      width: "167px",
      background: "linear-gradient(90deg, #00D2A3 0%, #02C6B8 100%)",
      color: "#fff",
    },
    name: "下一步",
  },
  {
    style: {
      width: "167px",
      color: "#00C6B8",
      border: "1px solid #00C6B8",
    },
    name: "上一步",
  },
];

const HandWriteSignature = (props) => {
  const { closeSign, getImageBase64 } = props;

  const signCanvas = useRef();
  const clearSign = () => {
    signCanvas.current.clear();
  };

  const createSignImg = async () => {
    const imageBase64 = signCanvas.current.toDataURL("image/png");
    getImageBase64(imageBase64);
  };

  return (
    <MaskWrapper>
      <ContentWrapper>
        <div className="close-sign" onClick={closeSign}>
          <Icon type="cross-circle" />
        </div>
        <div className="title">被委托人签名</div>
        <div className="sign-area">
          <SignatureCanvas
            backgroundColor="#fff"
            penColor="#000"
            canvasProps={{
              className: "write-name-canvas",
            }}
            ref={signCanvas}
          />
        </div>
        <div className="confirm-btn">
          <button className="confirm reset" onClick={clearSign}>
            重置
          </button>
          <button className="confirm" onClick={createSignImg}>
            确认
          </button>
        </div>
      </ContentWrapper>
    </MaskWrapper>
  );
};

export default memo(function IYSignature() {
  const [isCloseSign, setIsCloseSign] = useState(false);
  const [imgBase64, setImgBase64] = useState(null);
  const closeSign = () => {
    setIsCloseSign(true);
    console.log(66);
  };
  const showSign = () => {
    console.log(666);
    setIsCloseSign(false);
  };
  const getImageBase64 = (data) => {
    setImgBase64(data)
    setIsCloseSign(true)
  };
  return (
    <SignWrapper>
      <IYSteps steps={steps} currentIndex={1} />
      <div className="content">
        <h4 className="title">病案复印授权委托书</h4>
        <ul className="content-list">
          <li>
            <span className="column-name">委托人姓名：</span>
            <span className="">213123</span>
          </li>
          <li>
            <span className="column-name">委托人身份证：</span>
            <span>4564321858050045</span>
          </li>
          <li>
            <span className="column-name">被委托人姓名：</span>
            <span>侯德胜</span>
          </li>
          <li>
            <span className="column-name">被委托人身份证：</span>
            <span>4564321858050045</span>
          </li>
          <li>
            <span className="column-name">委托事项：</span>
            <span className="matter">因复印需要，委托我的xx关系xx姓名为我 的代理人，前往xxx医院复印我在xx科室住院治疗的 病例资料，委托人签署该授权委托书真实有效，如有 不实，本人承担全部法律责任。</span>
          </li>
        </ul>
        <WhiteSpace size="xl" />
        <div className="signature-column">
          <span className="column-width">被委托人签名：</span>
          {imgBase64 ? <img className="sign-image" src={imgBase64} alt="sign"/> : null}
        </div>
        <div className="signature-column">
          <span className="column-width">时间：</span>
          <span>2021年10月10日</span>
        </div>
        <button className="entrusted" onClick={showSign}>
          被委托人签名
        </button>
      </div>
      <IYBottomButton buttonInfo={buttonInfo} isSingle={false} />
      {!isCloseSign ? <HandWriteSignature closeSign={closeSign} getImageBase64={getImageBase64} /> : null}
    </SignWrapper>
  );
});
