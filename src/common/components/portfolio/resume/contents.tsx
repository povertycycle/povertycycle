import { RaptureContext } from "../global-context";
import ContentPanel from "./contents/content-panel";
import NavigationTabs from "./contents/nav-tabs";
import { useContext, useState, useEffect } from "react";

const Contents : React.FC = () => {
    const [active, setActive] = useState<string>("codex");
    const [display, setDisplay] = useState<boolean>(false);
    const { dive } = useContext(RaptureContext);

    useEffect(() => {
        if (dive) setTimeout(() => {
            setDisplay(true);
        }, 5000);
    }, [dive]);

    const handleSetActive = (active: string) => {
        setActive(active)
    }

    return (
        <div className="w-full h-full absolute top-0 z-[2] font-market-deco text-[#FAFAFA] flex flex-col gap-[1rem] items-center tracking-[-1px]">
            {display && <NavigationTabs active={active} handleSetActive={handleSetActive} />}
            {display && <ContentPanel active={active} />}
        </div>
    )
}

export default Contents;