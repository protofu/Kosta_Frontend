import React from "react";

function Test(props) {
    return (
        <div>
            <div>
                선수 정보 출력
            </div>
            <ul>
                <li>선수 이름 : {props.playerName}</li>
                <li>선수 번호 : {props.playerNumber}</li>
            </ul>
        </div>
    )
}

export default Test;
