'use client'

import styles from '../styles/layout.module.css'
import Navigation from './navigation'
import OffHomeNavigation from './offhomenavigation'
import React from 'react'

export default function Wrapper({ children, page }) {
    return (
        <div>
            {page === 'home' &&
                <div>
                    <Navigation />
                </div>
            }
            {page !== 'home' && page !== 'individualVis' &&
                <div className={styles.navbar}>
                    <OffHomeNavigation link="../" title="← Home" />
                </div>
            }
            {page === 'individualVis' && (
                <OffHomeNavigation link="../../" title="← Home" />
            )}
            <main>{children}</main>
        </div>
    )
}
