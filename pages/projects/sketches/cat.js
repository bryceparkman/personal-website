import Warning from '../../../components/p5warning'
import Head from 'next/head';
import Layout from '../../../components/layout'
import utilStyles from '../../../styles/utils.module.css'

export default function Flock() {
    return (
        <Layout>
            <Head>
                <title>Bryce Parkman - Flocking SImulation</title>
            </Head>
            <div className={utilStyles.headingMd}>
                <iframe src="https://editor.p5js.org/brycecparkman/embed/a1zLjaEwz" width={640} height={500} frameBorder={0}></iframe>
            </div>
            <Warning />
        </Layout>
    )
}
