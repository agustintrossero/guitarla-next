import Layout from '@/components/layout';
import ListadoGuitarras from '@/components/listado-guitarras';

export default function Tienda({guitarras}){
    //console.log(guitarras);
    return(
        <Layout
            title={"Tienda Virtual"}
            description='Tienda virtual, guitarLA, Tienda de musica, venta de guitarras'
        >
            <main className='contenedor'>
                <h1 className='heading'>Nuestra Colección</h1>
                <div className='contenido'>
                    <ListadoGuitarras
                        
                    
                    />
                </div>
            </main>
        </Layout>
    )
}

export async function getStaticProps(){
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
    const {data: guitarras} = await respuesta.json()
    //console.log(guitarras)
    return{
        props:{
            guitarras
        }
    }
}