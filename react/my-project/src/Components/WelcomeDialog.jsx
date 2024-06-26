import React from "react";
import Dialog from "./Dialog";

function WelcomeDialog(props) {
    return (
        <Dialog title="환영합니다" message="회원 정보 확인 부탁드립니다.">
            <button> 정보 수정 하기 </button>
        </Dialog>
    )
}

export default WelcomeDialog;