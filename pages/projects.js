import Head from 'next/head';
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Project() {
    return (
        <Layout>
            <Head>
                <title>Projects</title>
            </Head>
            <section className={utilStyles.headingMd} style={{marginTop: '20px'}}>
                <i className="fa fa-exclamation-triangle fa-5x" style={{color: '#FFCC00'}}></i>
                <p style={{marginTop: '30px'}}>This page is under construction. Come back later!</p>
            </section>
        </Layout>
    )
}
