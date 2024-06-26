import React, { useState } from "react";

function SignUp(props) {
    const [userName, setUserName] = useState('');
    const [gender, setGender] = useState('male');

    const nameHandle = (e) => {
        setUserName(e.target.value);
    };

    const genderHandle = (e) => {
        setGender(e.target.value);
    };

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                alert(`이름은 ${userName} 성별은 ${gender}`)
            }}>
                <label>Name - </label>
                <input type="text" value={userName} onChange={nameHandle} /> <br />
                <label>Gender - </label>
                <select value={gender} onChange={genderHandle}>
                    <option value="male">male</option>
                    <option value="female">female</option>
                </select>
                <br />
                <button type="submit">Submit</button>
            </form>
            <hr />
            <h1>안녕 내 이름은! -- {userName} </h1>
            <h1>안녕 내 성별은! -- {gender} </h1>
        </div>
    )


}

export default SignUp;