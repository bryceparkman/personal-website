import Head from 'next/head';
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

export default function Nadine() {
    return (
        <Layout>
            <Head>
                <title>Nadine El Nesr</title>
            </Head>
            <section className={utilStyles.headingMd} style={{marginTop: '20px'}}>
                <i className="fa fa-exclamation-triangle fa-5x" style={{color: '#FFCC00'}}></i>
                <p style={{marginTop: '30px'}}>This page is under construction. Come back later!</p>
            </section>
        </Layout>
    )
}
