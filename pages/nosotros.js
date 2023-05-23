
import Image from 'next/image';
import Layout from '@/components/layout';
import styles from '../styles/nosotros.module.css'    

export default function Nosotros(){
    return(
        <Layout
            title={"Nosotros"}
            description='Sobre nosotros, guitarLA, Tienda de musica'
        >
            <main className="contenedor">
                <h1 className='heading'>Nosotros</h1>
                <div className={styles.contenido}>
                    <Image src="/img/nosotros.jpg" width={1000} height={800} alt='banner sobre nosotros'/>
                    <div>
                        <p>
                        lorem ipsum dolor sit amet, consectetur adip
                        lorem ipsum dolor sit amet, consectetur adip
                        lorem ipsum dolor sit amet, consectetur adip
                        lorem ipsum dolor sit amet, consectetur adip
                        lorem ipsum dolor sit amet, consectetur adip
                        lorem ipsum dolor sit amet, consectetur adip
                        </p>

                        <p>
                        lorem ipsum dolor sit amet, consectetur adip
                        lorem ipsum dolor sit amet, consectetur adip
                        lorem ipsum dolor sit amet, consectetur adip
                        lorem ipsum dolor sit amet, consectetur adip
                        lorem ipsum dolor sit amet, consectetur adip
                        lorem ipsum dolor sit amet, consectetur adip
                        </p>
                    </div>
                </div>
            </main>
        </Layout>
    )
}