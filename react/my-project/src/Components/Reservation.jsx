import React, { useState } from "react";

function Reservation() {
  const [visitor, setVisitor] = useState(1);
  const [breakfast, setBreakfast] = useState(false);
  const [msg, setMsg] = useState('요청하세요');


  const visitorHandle = (e) => {
    const visitNum = e.target.value;
    if (!isNaN(visitNum)) {
      setVisitor(e.target.value);
    } else {
      alert('숫자를 입력하세요')
    }
  }

  const breakfastHandle = (e) => {
    setBreakfast(e.target.value);
  }

  const msgHandle = (e) => {
    setMsg(e.target.value);
  }

  return (
    <form typeof="submit" onSubmit={(e) => {
      e.preventDefault();
      alert(`방문자 수 :  ${visitor} \n조식여부 : ${breakfast ? '머금' : '안머금'} \n요청사항 : ${msg}`)
    }}>
      <label> 방문자 수 </label>
      <input type="text" value={visitor} onChange={visitorHandle} />
      <br />
      <label> 조식 여부 </label>
      <input type="checkbox" checked={breakfast} onChange={breakfastHandle} />
      <br />
      <label> 요청사항 </label>
      <br />
      <textarea value={msg} onChange={msgHandle}></textarea>
      <br />
      <button type="submit"> 제출 </button>
    </form>
  )
}

export default Reservation;