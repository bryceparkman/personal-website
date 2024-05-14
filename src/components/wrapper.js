'use client'

import Navigation from './navigation'
import React from 'react'

export default function Wrapper({ children, page }) {
    return (
        <div>
            <Navigation />
            <main>{children}</main>
        </div>
    )
}
