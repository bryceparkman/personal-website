import Construction from '../../components/construction'
import Head from 'next/head';
import Layout from '../../components/layout'
import ProjectHeader from '../../components/websiteHeader'

export default function Bridges() {
    return (
        <Layout page='individualProj'>
            <Head>
                <title>Bryce Parkman - Student Bridges</title>
            </Head>
            {ProjectHeader('https://studentbridgesagency.org/','https://github.com/build-umass/student-bridges')}
            <Construction/>
        </Layout>
    )
}