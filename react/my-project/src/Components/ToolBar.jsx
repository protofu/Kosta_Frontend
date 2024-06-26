import React from "react";

function ToolBar({isLogin, logHandle}) {
    return (
        <div style={{
            padding: 5,
            borderBottom: '1px solid black'
        }}>
            {isLogin && <h3>환영합니다</h3>}
            {isLogin ?
                <button onClick={logHandle}>로그인</button> : 
                <button onClick={logHandle}>로그아웃</button>}
        </div>
    )

}

export default ToolBar;