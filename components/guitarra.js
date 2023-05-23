import Image from "next/image"
import Link from "next/link"

export default function Guitarra({guitarra}) {
  //console.log(guitarra)
  const {nombre, descripcion, precio, imagen, URL} = guitarra

  return (
    <div>
      <Image src={`http://127.0.0.1:1337${imagen?.data?.attributes?.formats?.medium.url}`} width={600} height={400} alt={`Imagen de Guitarra ${nombre}`}/>
      <div>
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
        <p>${precio}</p>
        <Link href={`/guitarras/${URL}`}>
          Ver producto
        </Link>
      </div>
    </div>
  )
}
