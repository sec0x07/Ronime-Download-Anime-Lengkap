import { GetStaticProps, GetStaticPaths } from 'next'
import { join } from 'path'
import { readFileSync } from 'fs'

export const getStaticProps: GetStaticProps = async () => {
  const sitemap = readFileSync(join(process.cwd(), 'public/sitemap.xml')).toString()
  return {
    props: {
      sitemap
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          sitemap: 'sitemap.xml'
        }
      }
    ],
    fallback: false
  }
}

export default ({ sitemap }) => {
  return (
    <>
      <h1>Sitemap</h1>
      <div dangerouslySetInnerHTML={{ __html: sitemap }} />
    </>
  )
}
