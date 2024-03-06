import Warning from '../../../components/p5warning'
import Head from 'next/head';
import Layout from '../../../components/layout'
import utilStyles from '../../../styles/utils.module.css'

export default function Recaman() {
    return (
        <Layout page='individualVis'>
            <Head>
                <title>Bryce Parkman - Recaman Sequence</title>
            </Head>
            <div className={utilStyles.headingMdPadding}>
                <iframe src="https://editor.p5js.org/brycecparkman/embed/L2YG0FptR" width={640} height={640} frameBorder={0}></iframe>
            </div>
            <Warning />
        </Layout>
    )
}
