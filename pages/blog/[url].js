import Image from "next/image"
import Layout from "@/components/layout"
import { formatearFecha } from "@/utils/helpers"
import styles from '../../styles/blog.module.css'

export default function Post({post}) {
    const {contenido, imagen, titulo, URL, publishedAt} = post[0].attributes
    return (
        <Layout
            title={titulo}
        >
            <article className={`${styles.post} ${styles['mt-3']}`}>
                <Image src={`http://127.0.0.1:1337${imagen?.data?.attributes?.url}`} width={1000} height={400} alt={`Imagen de Post ${titulo}`}></Image>
                <div className={styles.contenido}>
                    <h3>{titulo}</h3>
                    <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                    <p className={styles.texto}>{contenido}</p>
                </div>
            </article>
        </Layout>
  )
}

export async function getServerSideProps({query:{url}}){
    const respuesta = await fetch(`${process.env.API_URL}/api/posts??filters[url]=${url}&populate=imagen`)
    const {data: post} = await respuesta.json()
    return {
        props: {
            post
        }
    }
}