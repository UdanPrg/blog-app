import Head from 'next/head';
import Layout, {siteTitle} from '../components/layout';
import utilStyles from '../styles/utils.module.css';

import { getSortedPostsData } from '../lib/posts';

import Articles from '../components/articles';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
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
          {allPostsData.map(({ id, date, title }) => (
            <Articles title={title} id={id} date={date}/>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
