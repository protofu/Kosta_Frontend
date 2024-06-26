import React, { useState } from "react";
import ToolBar from "./ToolBar";

function MainPage() {

    // isLogin Toolbar => 로그인 상태 전달, 로그인 핸들러, 로그아웃 핸들러
    
    const [isLogin, setIsLogin] = useState(false);

    const loginhandle = () => {
        setIsLogin(isLogin => !isLogin);
    }

    return (
        <ToolBar isLogin={isLogin} logHandle={loginhandle}/>
    )


}

export default MainPage;