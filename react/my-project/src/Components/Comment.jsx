import React from "react";
import Udata from "../Data/Udata.json";
import styles from "../Styles/comment.module.css";


function Comment() {
    return (
        <div className={styles.container}>
            {Udata.map((data, idx) => (
                <div className={styles.items} key={idx}>

                    <img className={styles.imgsize} src={data.imgUrl} alt=">" />
                    <div className={styles.textbox}>
                        <div className={styles.maintext}>
                            <h1 className={styles.title}>{data.userName}</h1>
                            <h3 className={styles.content}>{data.content}</h3>
                        </div>
                        <h4 className={styles.replybox}>
                            {data.reply.map((itm, idx2) => (
                                <div key={idx2} className={styles.reply}>
                                    <p>{itm.text}</p>
                                    <p>{itm.date}</p>
                                </div>
                            ))}
                        </h4>
                    </div>
                </div>
            ))}
        </div>

    )
}

export default Comment;