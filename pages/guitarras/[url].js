import Image from "next/image"
import styles from '../../styles/guitarras.module.css'
import Layout from "@/components/layout"

export default function Producto({guitarra}) {
const { nombre, descripcion, imagen, precio} = guitarra[0].attributes
  return (
    <Layout
        title={`Guitarra: ${nombre}`}
    >
            <div className={styles.guitarra}>
                <Image src={`http://127.0.0.1:1337${imagen?.data?.attributes.url}`} width={600} height={400} alt={`Imagen de Guitarra ${nombre}`}/>
                <div className={styles.contenido}>
                    <h3>{nombre}</h3>
                    <p className={styles.descripcion}>{descripcion}</p>
                    <p className={styles.precio}>${precio}</p>
                    <form className={styles.formulario}>
                        <label htmlFor="cantidad">Cantidad:</label>
                        <select id="cantidad">
                            <option value="0">-- Seleccione --</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <input type="submit" value="Agregar al carrito"/>
                    </form>
                </div>
            </div>
        </Layout>
  )
}

export async function getStaticPaths(){
    const respuesta = await fetch(`${process.env.API_URL}/api/guitarras`)
    const {data} = await respuesta.json()
    const paths = data.map(guitarra => ({
        params: {
            url : String(guitarra.attributes.URL)
        }
    }))
    return {
        paths,
        fallback: false
    }
}
 
export async function getStaticProps({params: {url}}) {
 
    const respuesta = await fetch(`${process.env.API_URL}/api/guitarras?filters[url]=${url}&populate=imagen`)
    const {data: guitarra} = await respuesta.json()
    return {
        props: {
            guitarra
        }
    }
}
