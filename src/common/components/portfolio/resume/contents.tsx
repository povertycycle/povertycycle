import { RaptureContext } from "../global-context";
import ContentPanel from "./contents/content-panel";
import NavigationTabs from "./contents/nav-tabs";
import { useContext, useState, useEffect } from "react";

const Contents : React.FC = () => {
    const [active, setActive] = useState<string>("codex");
    const [display, setDisplay] = useState<boolean>(false);
    const { dive } = useContext(RaptureContext);
    const [isSmall, setIsSmall] = useState<boolean>(false);

    useEffect(() => {
        if (dive) {
            setTimeout(() => {
                if (window.innerWidth < 1080) {
                    setIsSmall(true);
                    return;
                };
                setDisplay(true);
            }, 5000);
        } 
    }, [dive]);

    return (
        <div className="w-full h-full absolute top-0 z-[2] font-market-deco text-[#FAFAFA] flex flex-col items-center tracking-[-1px]">
            { display && <NavigationTabs active={active} setActive={setActive} /> }
            { display && <ContentPanel active={active} /> }
            { isSmall && <div className="w-full h-full relative z-[5] md:text-[2rem] text-white flex items-center justify-center text-center p-4 font-market-deco">Mobile and tablet version is still in development. Please use a desktop version instead.</div> }
        </div>
    )
}

export default Contents;