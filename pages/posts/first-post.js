import Head from "next/head";
import Script from "next/script";
import Link from "next/link";

import Layout from "../../components/layout";

export default function FirstPost(){
    return(
        <Layout>
            <Head>
                <title> First Post</title>
            </Head>
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                    console.log('script loaded correctly, window.FB has been populated')
                }
            />
            <h1>First Post</h1>
            <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, veniam reiciendis expedita quisquam, unde repellendus dolore assumenda ratione neque doloribus sunt. Doloremque sequi voluptatem laboriosam odit illo amet totam quis!  
            </p>
        </Layout>
    )
}