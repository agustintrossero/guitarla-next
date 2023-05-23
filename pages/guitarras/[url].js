import { useRouter } from "next/router"

export default function Producto(guitarra) {
    //const router = useRouter()
    //console.log(router)
    //console.log(guitarra.guitarra[0].attributes)

  return (
    <div>
      URL
    </div>
  )
}

export async function getServerSideProps({query: {url}}){
    //console.log(datos)
    //console.log(url)
const respuesta = await fetch(`${process.env.API_URL}/api/guitarras?filters[url]=${url}&populate=imagen`)
const {data: guitarra} = await respuesta.json()
//console.log(data)
    return{
        props:{
            guitarra
        }
    }
}