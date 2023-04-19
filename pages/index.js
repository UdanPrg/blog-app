// Necesitamos trabajar con un state para que funcione
import { React, useState } from 'react';

import Head from 'next/head';
import Layout, {siteTitle} from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import uuid from 'react-uuid';

import { getSortedPostsDataAPI } from '../lib/external-api-data';

import Articles from '../components/articles';

export default function Home() {
  // Declaramos un nueo estado para manejar los datos con un array vacio.
  const [allPostsData, setAllPostsData] = useState([]);

  // Traemos la promesa que se conecta a a la API de Rick y Morty
  getSortedPostsDataAPI()
  // y seguido la resolvemos con una funcion anónima
  .then(
    // Dentro de la funcion modificamos el estado allPostsData
    // Asi cuando la petición se resuelva por completo se puede usar sin ningun problema la data recibida
    res => setAllPostsData(res.results)
  )
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
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {/* Luego iteramos en nuestra variable estado verificando  que tengo info */
            allPostsData.length > 0 
            /* Si tiene más de un datos (si ya conecto) mostramos todos los articles */
            ? allPostsData.map(({ id, name, status, species }) => (
              <Articles id={id} name={name} status={status} species={species} key={uuid()} />
            )) 
            /* Si no asumimos que aun está "Cargando" */
            : <h2>Cargando</h2>
          } 
        </ul>
      </section>
    </Layout>
  );
}
