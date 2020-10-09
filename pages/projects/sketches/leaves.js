import Construction from '../../../components/construction'
import Head from 'next/head';
import Layout from '../../../components/layout'
import utilStyles from '../../../styles/utils.module.css'

export default function Leaves() {
    return (
        <Layout>
            <Head>
                <title>Bryce Parkman - Falling, Changing</title>
            </Head>
            <div className={utilStyles.headingMd}>
                <iframe src="https://editor.p5js.org/brycecparkman/embed/C5WPTqD4-" width={640} height={580} frameBorder={0}></iframe>
            </div>
            <p>
                If no sketch appears, make sure all p5.js domains are allowed on any adblockers or privacy tracking browser extensions.
            </p>
        </Layout>
    )
}
