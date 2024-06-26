import React, { useState } from "react";

function Toggle() {
    const [isTog, setIsTog] = useState(true);

    const handleClick = () => {
        setIsTog(isTog => !isTog);
        console.log(isTog)
    }

    return (
        <div>
            <button onClick={handleClick}>
                Toggle button
            </button>
            {isTog ? <h1>끔</h1> : <h1>켬</h1>}
            <hr />
        </div>
    )
}

export default Toggle;