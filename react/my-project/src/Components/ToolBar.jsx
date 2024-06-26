import React from "react";

function ToolBar(isLogin, onClickLoginHandle, onClickLogoutHandle) {
    // {a, b, c}
    // const { isLogin, onClickLoginHandle, onClickLogoutHandle } = props;

    return (
        <div style={{
            padding:5,
            borderBottom: '1px solid black'
        }}>
            {isLogin && <h3>환영합니다</h3>}
            {isLogin ? <button onClick={onClickLogoutHandle}>로그아웃</button> : <button onClick={onClickLoginHandle}>로그인</button>}
        </div>
    )

}

export default ToolBar;