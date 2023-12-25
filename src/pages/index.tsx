import Loading from '@/common/components/loading'
import Portfolio from '@/common/components/portfolio/portfolio'
import { Suspense } from 'react'

export default function Page() {
    return (
        <Suspense fallback={<Loading />}> 
            <Portfolio />
        </Suspense>
    )
}