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
                <OffHomeNavigation link="../"/>
            }
            {page === 'individualVis' && (
                <OffHomeNavigation link="../../"/>
            )}
            <main>{children}</main>
        </div>
    )
}
