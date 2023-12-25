import { RaptureContext } from "../global-context";
import NavigationTabs from "./contents/nav-tabs";
import { useContext, useEffect } from "react";

const Contents : React.FC = () => {
    const { dive } = useContext(RaptureContext);

    useEffect(() => {

    }, [dive]);

    return (
        <div className="w-full h-full absolute top-0 z-[2] font-market-deco text-[#FAFAFA]">
            {dive && <NavigationTabs />}
        </div>
    )
}

export default Contents;