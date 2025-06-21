import { RootPageLoader } from "@/components/Loaders";
import { MainContainer } from "@/features/main-page/MainContainer";
import { Suspense } from "react";

export default function Page() {
    return (
        <Suspense fallback={<RootPageLoader />}>
            <MainContainer />
        </Suspense>
    );
}
