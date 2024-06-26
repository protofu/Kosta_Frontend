import React, { useState } from "react";

function ConfirmBtn() {
    const [isConfirmed, setIsConfirmed] = useState(false);

    const confirmHandle = () => {
        setIsConfirmed((preIsConfirmed) => !preIsConfirmed);
    };


    return (
        <button onClick={confirmHandle} disabled={isConfirmed}>
            {isConfirmed ? '확인완료' : '확인하기'}
        </button>
    )
}

export default ConfirmBtn;