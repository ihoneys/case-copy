import React, { memo, useState, useRef, useEffect } from "react";

export default memo(function IYCountDown(props) {
  const { timeStamp } = props;
  const intervalRef = useRef(null);
  const now = Math.round(new Date().getTime() / 1000).toString(); // 获取当前时间
  const end = timeStamp;

  const [leftTime, setLeftTime] = useState(end - now); // 时间隔
  const [h, setHours] = useState("");
  const [m, setMinutes] = useState("");
  const [s, setSeconds] = useState(""); //秒
  // console.log(leftTime, "now");
  useEffect(() => {
    if (leftTime > 0) {
      intervalRef.current = setInterval(() => {
        const newNow = Math.round(new Date().getTime() / 1000).toString(); // 重新获取当前时间
        const newLeftTime = timeStamp - newNow;
        setLeftTime(() => newLeftTime);

        const countHours = Math.floor((newLeftTime / 60 / 60) % 24); // 小时
        const countMinutes = Math.floor((newLeftTime / 60) % 60); // 分钟
        const hours = countHours < 10 ? `0${countHours}` : countHours;
        const minutes = countMinutes < 10 ? `0${countMinutes}` : countMinutes;
        const seconds = Math.floor(newLeftTime % 60) < 10 ? `0${Math.floor(newLeftTime % 60)}` : Math.floor(newLeftTime % 60);

        setHours(() => hours);
        setHours(() => minutes);
        setSeconds(() => seconds) 
      });
    } else {
      setLeftTime(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0)
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div>
      {/* <span>6+66</span> */}
      {
        <span>
          {h}:{m}:{s}
        </span>
      }
    </div>
  );
});
