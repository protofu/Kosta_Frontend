import React from "react";
import Test from "./test";

function Team(props) {
    return (
        <div>
            <Test playerName="김밥" playerNumber="28" />
            <Test playerName="라면" playerNumber="77" />
            <Test playerName="떡볶이" playerNumber="11" />
            <Test playerName="만두" playerNumber="52" />
        </div>
    )
}

export default Team;