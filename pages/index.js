import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Welcome to my homepage..! I'm so glad to show my first homepage with next.js. I think next.js is awesome framework for React.</p>
        <p>
          This is a sample website. Read{' '}
          <Link href="https://nextjs.org/learn">
            <a>our Next.js tutorial</a>
          </Link>
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              Title:{' '}{title}
              <br />
              Id:{' '}{id}
              <br />
              Date:{' '}{date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}