import Image from "next/image"
import Link from "next/link"
import styles from '../styles/guitarras.module.css'

export default function Guitarra({guitarra}) {
  //console.log(guitarra)
  const {nombre, descripcion, precio, imagen, URL} = guitarra

  return (
    <div className={styles.guitarra}>
      <Image src={`http://127.0.0.1:1337${imagen?.data?.attributes?.formats?.medium.url}`} width={600} height={400} alt={`Imagen de Guitarra ${nombre}`}/>
      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>${precio}</p>
        <Link legacyBehavior href={`/guitarras/${URL}`}>
          <a className={styles.enlace}>Ver Producto</a>
        </Link>
      </div>
    </div>
  )
}
