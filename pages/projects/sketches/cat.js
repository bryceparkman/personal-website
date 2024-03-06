import Warning from '../../../components/p5warning'
import Head from 'next/head';
import Layout from '../../../components/layout'
import utilStyles from '../../../styles/utils.module.css'

export default function Cat() {
    return (
        <Layout page='individualVis'>
            <Head>
                <title>Bryce Parkman - Image Tile Physics</title>
            </Head>
            <div className={utilStyles.headingMdPadding}>
                <iframe src="https://editor.p5js.org/brycecparkman/embed/a1zLjaEwz" width={640} height={500} frameBorder={0}></iframe>
            </div>
            <Warning />
        </Layout>
    )
}
