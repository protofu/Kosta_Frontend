import React from "react";

function NumberList(){
    const numbers = [11, 42, 78, 32, 90];

    const listItem = numbers.map((num, idx)=>
        <li key={idx}>{num}</li>
    )

    return (
        <ul>
            {listItem}
        </ul>
    )
}

export default NumberList;