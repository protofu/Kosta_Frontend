import React from "react";
import BookData from "./data.json";
import styles from "./book.module.css";

function Book() {
    return (
        <div className={styles.container}>
            {BookData.map((book, idx) => (
                <div key={idx} className={styles.bookItem}>
                    <h1 className={styles.bookTitle}>책 제목: {book.title}</h1>
                    <h2 className={styles.bookAuthor}>저자: {book.author}</h2>
                    <h3 className={styles.bookPages}>페이지 정보: {book.pages}</h3>
                </div>
            ))}
        </div>
    );
}

export default Book;
