import { useState } from "react";
import resultToString from "./ResultToString";

export default function App() {
  const [count, setCount] = useState(0);

  function onClick() {
    setCount(count + 1);
  }

  function Mobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }

  return (
    <div>
      <h1 className="title">테스트</h1>
      <p>Netlify 배포 연습</p>
      <button onClick={onClick}>버튼</button>
      <p>{`${count}개 x 5,000원 = ` + resultToString(count)}원</p>
      {Mobile() ? <div>mobile</div> : <div>desktop</div>}
    </div>
  );
}
