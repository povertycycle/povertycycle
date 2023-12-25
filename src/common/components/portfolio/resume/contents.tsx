import { RaptureContext } from "../global-context";
import ContentPanel from "./contents/content-panel";
import NavigationTabs from "./contents/nav-tabs";
import { useContext, useState, useEffect } from "react";

const Contents : React.FC = () => {
    const [active, setActive] = useState<string>("codex");
    const { dive } = useContext(RaptureContext);

    useEffect(() => {

    }, [dive]);

    return (
        <div className="w-full h-full absolute top-0 z-[2] font-market-deco text-[#FAFAFA] flex flex-col gap-[0.25rem]">
            {dive && <NavigationTabs active={active} setActive={setActive} />}
            {dive && <ContentPanel active={active} />}
        </div>
    )
}

export default Contents;