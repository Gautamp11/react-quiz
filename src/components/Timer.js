import { useEffect, useState } from "react";

function Timer({ dispatch, numQuestions }) {
  const [time, setTime] = useState(numQuestions * 30);
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  useEffect(
    function () {
      const id = setInterval(function () {
        setTime((prevTime) =>
          prevTime > 0 ? prevTime - 1 : dispatch({ type: "finish" })
        );
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );

  return (
    <div className='timer'>
      {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
}

export default Timer;
