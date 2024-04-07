import BackgroundSettings from "./background";
import FullscreenSettings from "./fullscreen";
import SoundSettings from "./sound";

export const SETTINGS_ID = "D938Dixgz7yEwNivJmrCMT0RjzSeecsB";

const Settings: React.FC = () => {
    return (
        <div className="h-full flex justify-between font-market-deco select-none w-full">
            <div id={SETTINGS_ID} className="duration-[500ms] flex flex-col gap-4 overflow-hidden transition-height" style={{ height: "100%" }}>
                <BackgroundSettings />
                <SoundSettings />
            </div>
            <FullscreenSettings />
        </div>
    )
}

export default Settings;