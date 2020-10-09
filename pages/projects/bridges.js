import Construction from '../../components/construction'
import Head from 'next/head';
import Layout from '../../components/layout'
import ProjectHeader from '../../components/websiteHeader'

export default function Bridges() {
    return (
        <Layout>
            <Head>
                <title>Bryce Parkman - Student Bridges</title>
            </Head>
            <Construction/>
            {ProjectHeader('https://studentbridgesagency.org/','https://github.com/build-umass/student-bridges')}
        </Layout>
    )
}