import { Controllers } from "../controllers/Controllers";
import { useState } from "react";
import { NAV_HEIGHT, NAV_ID } from "../../constants/constants";
import { CONTROLS_ID } from "../controllers/Controllers";
import { LayeredBorder } from "@/common/components/utils/borders";
import styles from "./settings.module.scss";
import { BackgroundSettings } from "./BackgroundSettings";
import { SoundSettings } from "./SoundSettings";

export const SETTINGS_ID = "D938Dixgz7yEwNivJmrCMT0RjzSeecsB";

export const Settings: React.FC = () => {
    return (
        <div
            className={`${styles.settingsAim} flex flex-col w-full h-full items-end justify-center font-market-deco select-none relative`}
        >
            <div className="h-full flex justify-between w-full">
                <div
                    id={SETTINGS_ID}
                    className="duration-[500ms] flex flex-col gap-4 overflow-hidden transition-height"
                    style={{ height: "100%" }}
                >
                    <BackgroundSettings />
                    <SoundSettings />
                </div>
                <Fullscreen />
            </div>
            <Controllers tag="settings" />
        </div>
    );
};

function collapseNav(show: boolean) {
    const div = document.getElementById(NAV_ID) as HTMLDivElement;
    div.style.height = `${show ? NAV_HEIGHT : 0}px`;
    const settings = document.getElementById(SETTINGS_ID) as HTMLDivElement;
    settings.style.height = `${show ? 100 : 0}%`;
    const controls = document.getElementById(CONTROLS_ID) as HTMLDivElement;
    controls.style.width = `${show ? 100 : 0}%`;
}

export const Fullscreen: React.FC = () => {
    const [view, setView] = useState<boolean>(false);

    const setFullscreen = () => {
        collapseNav(view);
        setView((prev) => !prev);
    };

    return (
        <div className="flex gap-4 mt-2 mr-2 justify-between items-center h-12">
            <div
                className="group/fs w-8 hover:w-[128px] transition-width h-8 cursor-pointer"
                onClick={setFullscreen}
            >
                <LayeredBorder
                    xAxis={{ start: 8, step: 1, unit: "px" }}
                    yAxis={{ start: 8, step: 1, unit: "px" }}
                >
                    <div className="group-hover/fs:w-full w-0 transition-width flex items-center justify-center tracking-[0.5px] h-full overflow-hidden">
                        <span>{view ? "Return" : "Fullscreen"}</span>
                    </div>
                </LayeredBorder>
            </div>
        </div>
    );
};
