import Warning from '../../../components/p5warning'
import { InteractivesClient } from '../../../components/interactive_client'
import Wrapper from '../../../components/wrapper'
import React, { Suspense } from 'react'


export default function Interactive() {
    return (
        <Wrapper page='individualVis'>
            <Suspense fallback={null}>
                <InteractivesClient/>
            </Suspense>
            <Warning />            
       </Wrapper>
    )
}
