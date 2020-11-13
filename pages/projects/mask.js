import Construction from '../../components/construction'
import Head from 'next/head';
import Layout from '../../components/layout'
import ProjectHeader from '../../components/websiteHeader'

export default function Mask() {
    return (
        <Layout page='individualProj'>
            <Head>
                <title>Bryce Parkman - MASKerAID</title>
            </Head>
            {ProjectHeader('https://devpost.com/software/umass-1','https://github.com/bryceparkman/MASKerAID')}
            <Construction/>
        </Layout>
    )
}