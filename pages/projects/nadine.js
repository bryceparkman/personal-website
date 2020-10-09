import Construction from '../../components/construction'
import ProjectHeader from '../../components/projectHeader'
import Head from 'next/head';
import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

export default function Nadine() {
    return (
        <Layout>
            <Head>
                <title>Bryce Parkman - Nadine El Nesr</title>
            </Head>
            <Construction />
            {ProjectHeader('https://nadine-elnesr.web.app/','https://github.com/bryceparkman/nadinelnesr/')}
        </Layout>
    )
}
