import Warning from '../../../components/p5warning'
import Head from 'next/head';
import Layout from '../../../components/layout'
import utilStyles from '../../../styles/utils.module.css'

export default function Impacts() {
    return (
        <Layout>
            <Head>
                <title>Bryce Parkman - Impact Viewer</title>
            </Head>
            <div className={utilStyles.headingMd}>
                <iframe src="https://editor.p5js.org/brycecparkman/embed/kDCirjRv7" width={640} height={580} frameBorder={0}></iframe>
            </div>
            <Warning />
        </Layout>
    )
}
