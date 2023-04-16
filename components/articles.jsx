import React from "react";
import Link from "next/link";
import styles from "./articles.module.css";

export default function Articles(){
    return(
        <div className={styles.container}>
            <div className={styles.article}>
                <Link href="/posts/first-post">
                    <h2>
                        First Post
                    </h2>
                </Link>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, veniam reiciendis expedita quisquam, unde repellendus dolore assumenda ratione neque doloribus sunt. Doloremque sequi voluptatem laboriosam odit illo amet totam quis!              
                </p>
                <Link href="/posts/first-post">Leer Más</Link>
            </div>
        </div>
    )
}