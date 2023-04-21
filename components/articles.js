import React from "react";
import Link from "next/link";
import styles from "./articles.module.css";
// import Date from "./date.js";

export default function Articles({ id, name, status, species }){
    return(
        <div className={styles.container}>
            <div className={styles.article}>
                <Link href={`/posts/${id}`}>
                    <h2>
                        {name}
                    </h2>
                </Link>
                <p>{status}</p>
                <p>{species}</p>
                <Link href={`/posts/${id}`}>Leer Más</Link>
            </div>
        </div>
    )
}