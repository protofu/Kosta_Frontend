import React from "react";
import Styles from "../../Styles/Header.module.css";

function Header({header}) {
    
    // 블로그 이름, 설명, 객체로 받는다 {title : '', description : ''}

    return (
        <header className={Styles.container}>
            <h1 className={Styles.title}>{header.title}</h1>
            <p className={Styles.desc}>{header.description}</p>
        </header>

    )
}

export default Header;