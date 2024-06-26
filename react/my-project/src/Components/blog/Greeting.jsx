import React from "react";

function UserGreeting() {
    return (
        <h1>Welcome, User!!!</h1>
    )
}

function GuestGreeting() {
    return (
        <div>
            <h1>Welcome, if you want more service,</h1>
            <h1>plz, sign up!!</h1>
        </div>
    )
}

function Greeting({ props }) {
    const isLogin = props;
    // if (isLogin) {
    //     return (
    //         <UserGreeting />
    //     )
    // } else {
    //     return (
    //         <GuestGreeting />
    //     )
    // }
    return (
        <>
            {isLogin ? <UserGreeting /> : <GuestGreeting />}
        </>
    )
}

export default Greeting;