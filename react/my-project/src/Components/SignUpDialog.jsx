import React, { useState } from "react";
import Dialog from "./Dialog";

let room = [];

function SignUpDialog(props) {
  const [userName, setUserName] = useState('');

  const userNameHandle = (e) => {
    setUserName(e.target.value);
  }

  const handleClick = () => {
    room.push(userName);
    alert(`어서옵쇼! ${userName} 님 환영합니다!`)
    setUserName('');
  }

  return (
    <Dialog
      title="스터디 팀 참여"
      message="이름을 입력하세요"
    >
      <input type="text" value={userName} onChange={userNameHandle} />
      <button onClick={handleClick}>참여하기</button>
      <div>
        {
          room.map((per, idx) => {
            return (
              <p key={idx}>{per}</p>
            )
          })
        }
      </div>
    </Dialog>
  )
}

export default SignUpDialog;