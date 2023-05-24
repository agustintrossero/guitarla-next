import Link from 'next/link';
import Post from '@/components/post';
import Guitarra from '@/components/guitarra';
import Layout from '@/components/layout';
import styles from '../styles/grid.module.css'

export default function Home({guitarras, posts}) {
  //console.log(guitarras)
  //console.log(posts)
  return (
    <>
    <Layout
      title={"Inicio"}
      description='Blog de música, venta de guitarras y mas'
    >
      <main className='contenedor'> 
        <h1 className='heading'></h1>
        <div className={styles.grid}>
          {guitarras.map(guitarra => (
          <Guitarra
              key={guitarra.id}
              guitarra={guitarra.attributes}
          />
          )
        )}
        </div>
      </main>
      <section>
            <h2 className='heading'>Blog</h2>
            <div className={styles.grid}>
              {posts?.map(post => (
                  <Post
                      key={post.id}
                      post={post.attributes}
                  />
                  )
              )}
              </div>
      </section>
    </Layout>
    </>
  )
}

export async function getStaticProps() {
  const urlGuitarras = `${process.env.API_URL}/api/guitarras?populate=imagen`
  const urlPosts = `${process.env.API_URL}/api/posts?populate=imagen`
  const [resGuitarras, resPosts] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlPosts)
  ])
  const [{data: guitarras}, {data:posts}] = await Promise.all([
    resGuitarras.json(), 
    resPosts.json(), 
  ])
  return {
    props:{
      guitarras,
      posts
    }
  }
}