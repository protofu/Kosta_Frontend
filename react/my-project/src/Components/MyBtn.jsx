import React from "react";

function MyBtn() {

    const handleDelete = (id, e) => {
        alert('Hi!')
        console.log(id, e.target);
    }

    return (
        <button onClick={(e) => handleDelete(1, e)}>
            Delete
        </button>
    )
}

export default MyBtn;