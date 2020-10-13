import Warning from '../../../components/p5warning'
import Head from 'next/head';
import Layout from '../../../components/layout'
import utilStyles from '../../../styles/utils.module.css'

export default function Hue() {
    return (
        <Layout>
            <Head>
                <title>Bryce Parkman - I Love Hue Remake</title>
            </Head>
            <div className={utilStyles.headingMd}>
                <iframe src="https://editor.p5js.org/brycecparkman/embed/5Bv_YGAdi" width={640} height={580} frameBorder={0}></iframe>
            </div>
            <Warning />
        </Layout>
    )
}
