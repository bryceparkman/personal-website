import Warning from '../../../components/p5warning'
import Head from 'next/head';
import Layout from '../../../components/layout'
import utilStyles from '../../../styles/utils.module.css'

export default function Wiggle() {
    return (
        <Layout page='individualVis'>
            <Head>
                <title>Bryce Parkman - Perlin Noise Blob</title>
            </Head>
            <div className={utilStyles.headingMdPadding}>
                <iframe src="https://editor.p5js.org/brycecparkman/embed/VKK1mkHne" width={640} height={580} frameBorder={0}></iframe>
            </div>
            <Warning />
        </Layout>
    )
}
