import Loading from '@/common/components/loading'
import MainContainer from '@/common/components/portfolio/MainContainer'
import { Suspense } from 'react'

export default function Page() {
    return (
        <Suspense fallback={<Loading />}>
            <MainContainer />
        </Suspense>
    )
}