import Link from 'next/link';
import Layout from '@/components/layout';
export default function Nosotros(){
    return(
        <Layout
            title={"Nosotros"}
            description='Sobre nosotros, guitarLA, Tienda de musica'
        >
            <Link href="/">Volver al Inicio</Link>
        </Layout>
    )
}