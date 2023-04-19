import React from "react";
import Link from "next/link";
import styles from "./articles.module.css";

export default function Articles({ title, id, date }){
    return(
        <div className={styles.container}>
            <div className={styles.article}>
                <Link href="/posts/first-post">
                    <h2>
                        {title}
                    </h2>
                </Link>
                <p>{id}</p>
                <p>{date}</p>
                <Link href="/posts/first-post">Leer Más</Link>
            </div>
        </div>
    )
}