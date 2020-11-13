import Construction from '../../components/construction'
import Head from 'next/head';
import Layout from '../../components/layout'

export default function Mask() {
    return (
        <Layout page='individualProj'>
            <Head>
                <title>Bryce Parkman - MASKerAID</title>
            </Head>
            <Construction/>
        </Layout>
    )
}