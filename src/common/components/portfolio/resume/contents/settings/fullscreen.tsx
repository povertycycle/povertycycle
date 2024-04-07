import { useState } from "react";
import { LayeredBorder } from "@/common/components/utils/borders";
import { NAV_HEIGHT, NAV_ID } from "../nav-tabs";
import { SETTINGS_ID } from "./settings";

function collapseNav(show: boolean) {
    const div = document.getElementById(NAV_ID) as HTMLDivElement;
    div.style.height = `${show ? NAV_HEIGHT : 0}rem`;
    const settings = document.getElementById(SETTINGS_ID) as HTMLDivElement;
    settings.style.height = `${show ? 100 : 0}%`;
}

const FullscreenSettings: React.FC = () => {
    const [view, setView] = useState<boolean>(false);

    const setFullscreen = () => {
        collapseNav(view);
        setView(prev => !prev)
    }

    return (
        <div className="flex gap-4 mt-4 mr-4 justify-between items-center h-[48px]">
            <div className="group/fs w-[32px] hover:w-[128px] transition-width h-[32px] cursor-pointer" onClick={setFullscreen}>
                <LayeredBorder xAxis={{ start: 8, step: 1, unit: "px" }} yAxis={{ start: 8, step: 1, unit: "px" }}>
                    <div className="group-hover/fs:w-full overflow-hidden w-0 transition-width flex items-center justify-center tracking-[0.5px] h-full overflow-hidden">
                        <span>{view ? "Return" : "Fullscreen"}</span>
                    </div>
                </LayeredBorder>
            </div>
        </div>

    )
}

export default FullscreenSettings;