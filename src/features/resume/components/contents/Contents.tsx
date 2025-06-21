import { useEffect, useState } from "react";
import { Navigations } from "./Navigations";
import { Codex } from "./components/codex/Codex";
import { Inventory } from "./components/inventory/Inventory";
import { Map } from "./components/map/Map";
import { Skills } from "./components/skills/Skills";
import { Content } from "./interfaces/types";
import { Settings } from "./components/settings/Settings";

/**
 * Resume contents
 */
export const Contents: React.FC = () => {
    const [active, setActive] = useState<Content>("codex");
    const [display, setDisplay] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => {
            setDisplay(true);
        }, 5000);
    }, []);

    return (
        <div className="w-full h-full absolute top-0 left-0 z-20 font-market-deco text-soft-white flex flex-col items-center">
            {display && (
                <>
                    <Navigations active={active} setActive={setActive} />
                    <div
                        className={`relative w-full h-full flex items-center justify-start max-sm:mt-4`}
                    >
                        {(() => {
                            switch (active) {
                                case "codex":
                                    return <Codex />;
                                case "skills":
                                    return <Skills />;
                                case "map":
                                    return <Map />;
                                case "inventory":
                                    return <Inventory />;
                                case "settings":
                                    return <Settings />;
                                default:
                                    return <></>;
                            }
                        })()}
                    </div>
                </>
            )}
        </div>
    );
};
