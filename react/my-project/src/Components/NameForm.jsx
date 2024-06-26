import React, { useState } from "react";

function NameForm() {
  const [value, setValue] = useState('');

  const changeHandle = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };

  const submitHandle = (e) => {
    e.preventDefault();
    alert('입력한 이름 : ' + value);
  };


  return(
    <form onSubmit={submitHandle}>
      <label>Name</label>
      <input type="text" value={value} onChange={changeHandle}/>
      <button type="submit">Submit</button>
    </form>
  )
}

export default NameForm;