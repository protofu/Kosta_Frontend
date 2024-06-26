import React from "react";
import Styles from "../../Styles/Nav.module.css";

function Nav({ nav }) {

  // 메뉴 데이터 : 배열 [{name: '', linkUrl: ''}, {}, {}, ...]

  return (
    <nav className={Styles.container}>
      <ul className={Styles.menu}>
        {
          nav.map((item, idx) => {
            return (
              <li key={idx}>
                <a href={item.linkUrl}>{item.name}</a>
              </li>)
          })
        }
      </ul>
      <hr />
    </nav>
  )
}

export default Nav;