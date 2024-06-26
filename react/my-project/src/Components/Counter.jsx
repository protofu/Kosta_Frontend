import React from "react";
import { useState } from "react";


// const [변수명, set함수명] = useState(0)


function Counter(props) {
    const [cnt, setCnt] = useState(0);

    return (
        <div>
            <p>총 {cnt} 회 클릭 중</p>
            <button onClick={() => { setCnt(cnt+1) }}>
                click
            </button>
        </div>
    )
}

export default Counter;