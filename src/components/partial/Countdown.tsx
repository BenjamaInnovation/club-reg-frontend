import React, { useEffect } from "react";

type Props = {};

const Countdown = (props: Props) => {
  const [day, setDay] = React.useState(0);
  const [hour, setHour] = React.useState(0);
  const [minute, setMinute] = React.useState(0);
  const [second, setSecond] = React.useState(0);

  const targetDate = new Date("2022-05-24T00:00:00+07:00");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setDay(days);
      setHour(hours);
      setMinute(minutes);
      setSecond(seconds);

      if (distance < 0) {
        clearInterval(interval);
      }
    }, 1000);
  }, [targetDate]);

  return (
    <>
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max mt-20">
        <div className="flex flex-col">
          <span className="countdown font-mono text-7xl">
            {day && (
              <span style={{ "--value": day } as React.CSSProperties}></span>
            )}
          </span>
          วัน
        </div>
        <div className="flex flex-col">
          <span className="countdown font-mono text-7xl">
            {hour && (
              <span style={{ "--value": hour } as React.CSSProperties}></span>
            )}
          </span>
          ชั่วโมง
        </div>
        <div className="flex flex-col">
          <span className="countdown font-mono text-7xl">
            {minute && (
              <span style={{ "--value": minute } as React.CSSProperties}></span>
            )}
          </span>
          นาที
        </div>
        <div className="flex flex-col">
          <span className="countdown font-mono text-7xl">
            {second && (
              <span style={{ "--value": second } as React.CSSProperties}></span>
            )}
          </span>
          วินาที
        </div>
      </div>
    </>
  );
};

export default Countdown;
