import React, { memo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getHospitalNoticeAction } from "./store/actionCreators";

import IYBottomButton from "@/components/bottom-button";

import { ContentWrapper } from "./style";

const styleBtn = {
  width: "100%",
  background: "linear-gradient(90deg, #00D2A3 0%, #02C6B8 100%)",
  color: "#fff",
};

const buttonInfo = [{ style: styleBtn, name: "下一步" }];

export default memo(function IYNotice(props) {
  const router = props.history;

  const { hospitalNotice } = useSelector((state) => {
    return {
      hospitalNotice: state.getIn(["hospitalNoticeConfig", "hospitalNotice"]),
    };
  });

  
  const dispatch = useDispatch();
  useEffect(() => {
    const unitdId = 11;
    dispatch(getHospitalNoticeAction(unitdId));
    console.log(hospitalNotice,'hospitalNotice');
  }, []);


  const handleNext = () => {
    router.push("/write");
  };
  return (
    <ContentWrapper>
      <h3 className="headerline">病案复印须知</h3>
      <div dangerouslySetInnerHTML={{ __html: hospitalNotice }}></div>
      <IYBottomButton buttonInfo={buttonInfo} onClickRight={handleNext} />
    </ContentWrapper>
  );
});
