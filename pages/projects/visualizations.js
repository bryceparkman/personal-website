import Construction from '../../components/construction'
import Head from 'next/head';
import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'

export default function Visualizations() {
    return (
        <Layout>
            <Head>
                <title>Visualizations</title>
            </Head>
            <Construction/>
            <div className={utilStyles.headingMd}>
                <iframe src="https://editor.p5js.org/brycecparkman/embed/C5WPTqD4-" width={640} height={560}></iframe>
            </div>
        </Layout>
    )
}
