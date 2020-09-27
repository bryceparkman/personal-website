import utilStyles from '../styles/utils.module.css'

export default function Construction() {
    return (
        <section className={utilStyles.headingMd} style={{ marginTop: '20px' }}>
            <i className="fa fa-exclamation-triangle fa-5x" style={{ color: '#FFCC00' }}></i>
            <p style={{ marginTop: '30px' }}>This page is under construction. Come back later!</p>
        </section>
    );
}