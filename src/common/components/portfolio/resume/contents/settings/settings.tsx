import BackgroundSettings from "./background";
import FullscreenSettings from "./fullscreen";
import SoundSettings from "./sound";
import styles from "../animations.module.scss";
import ControlsDescription from "../controls-description";

export const SETTINGS_ID = "D938Dixgz7yEwNivJmrCMT0RjzSeecsB";

const Settings: React.FC = () => {
    return (
        <div className={`${styles.settingsAnimation} flex flex-col w-full h-full items-end justify-center font-market-deco select-none relative`}>
            <div className="h-full flex justify-between w-full">
                <div id={SETTINGS_ID} className="duration-[500ms] flex flex-col gap-4 overflow-hidden transition-height" style={{ height: "100%" }}>
                    <BackgroundSettings />
                    <SoundSettings />
                </div>
                <FullscreenSettings />
            </div>
            <ControlsDescription tag="settings" />
        </div>
    )
}

export default Settings;