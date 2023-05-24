
import Image from 'next/image'
import Link from 'next/link'
import {formatearFecha} from '../utils/helpers'
import styles from '../styles/blog.module.css'

export default function Post({post}) {
    const {titulo, imagen, contenido, URL, publishedAt } = post
  return (
    <article>
        <Image src={`http://127.0.0.1:1337${imagen?.data?.attributes?.formats?.small.url}`} width={600} height={400} alt={`Imagen de Post ${titulo}`}></Image>
            <div className={styles.contenido}>
                <h3>{titulo}</h3>
                <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                <p className={styles.resumen}>{contenido}</p>
                <Link legacyBehavior href={`/blog/${URL}`}>
                    <a className={styles.enlace}>Leer Post</a>
                </Link>
            </div>
    </article>
  )
}
