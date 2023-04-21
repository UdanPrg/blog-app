// Necesitamos trabajar con un state para que funcione
import { React, useState } from 'react';
import Link from 'next/link';
// import Date from '../components/date.js';

import Head from 'next/head';
import Layout, {siteTitle} from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import uuid from 'react-uuid';
// Componentes
import Articles from '../components/articles';


import { getSortedPostsData } from '../lib/posts';
import { getSortedPostsDataAPI } from '../lib/external-api-data';

export async function getStaticProps() {
  const staticAllPostsData = getSortedPostsData();
  const apiAllPostData = await getSortedPostsDataAPI();
  return {
    props: {
      staticAllPostsData,
      apiAllPostData,
    },
  };
}

export default function Home({staticAllPostsData, apiAllPostData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hola, soy <b>Uriel</b>. Soy Fullstack developer y un gran curiosos natural sobre todo.</p>
        <p> Puedes contactar conmigo, por <a href='https://www.linkedin.com/in/urielarana/' target='_blank'>Linkedin</a></p>
        <p>
          (Esto es un sitio simple - puedes construir un sitio como este en {' '}
          <a href="https://nextjs.org/learn" target='_blank'>el tutorial de Next.js </a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        
        <section className='flex'>

          <ul className={utilStyles.list}>
            <li>
              <h2 className={utilStyles.headingLg}>Static Blog</h2>
            </li>
              {staticAllPostsData.map(({ id, date, title }) => (
                  (<li className={utilStyles.listItem} key={id}>
                    <Link href={`/posts/${id}`}>{title}</Link>
                    <br />
                    <small className={utilStyles.lightText}>
                      {/* <Date dateString={date} /> */}
                      {date}
                    </small>
                    <br/>
                    <Link href={`/posts/${id}`}>Leer más</Link>
                  </li>)
                ))
              }
          </ul>
          <ul className={utilStyles.list}>
            <li>
              <h2 className={utilStyles.headingLg}>External API Blog</h2>
            </li>
            {
              apiAllPostData.results.map(({ id, name, status, species }) => (
                <Articles id={id} name={name} status={status} species={species} key={uuid()} />
              )) 
            }
          </ul>
        </section>
      </section>
    </Layout>
  );
}
