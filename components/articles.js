import React from "react";
import Link from "next/link";
import styles from "./articles.module.css";
import Date from "./date.js";

// export default function Articles({ id, name, status, species }){
//     return(
//         <div className={styles.container}>
//             <div className={styles.article}>
//                 <Link href="/posts/first-post">
//                     <h2>
//                         {name}
//                     </h2>
//                 </Link>
//                 <p>{id}</p>
//                 <p>{name}</p>
//                 <p>{status}</p>
//                 <p>{species}</p>
//                 <Link href="/posts/first-post">Leer Más</Link>
//             </div>
//         </div>
//     )
// }

export default function Articles({ id, date, title }){
    return(
        <div className={styles.container}>
            <div className={styles.article}>
                <Link href={`/posts/${id}`}>
                    <h2>
                        {title}
                    </h2>
                </Link>
                <p>{id}</p>
                <small>
                    <Date dateString={date}/>
                </small>
                <br />
                <Link href={`/posts/${id}`}>Leer Más</Link>
            </div>
        </div>
    )
}