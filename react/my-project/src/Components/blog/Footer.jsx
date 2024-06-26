import React from "react";
import Styles from "../../Styles/Footer.module.css";

function Footer({copyright}){
    return (
        <div className={Styles.container}>
            <hr />
            <p>{copyright}</p>
        </div>
    )
}

export default Footer;