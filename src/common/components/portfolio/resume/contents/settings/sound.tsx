import { useContext, useState } from "react";
import { RaptureContext } from "../../../global-context";
import styles from "../animations.module.scss";
import { AudioOptions } from "../../../config";
import { AudioSettingsContext, OPTION_LABEL_STYLE } from "./context";
import jsgradient from "@/common/utils/js-gradient";

const SoundSettings: React.FC = () => {
    const { userSettings, setUserSettings } = useContext(RaptureContext);
    const [settings, setSettings] = useState<AudioOptions>(userSettings.audioOptions);
    const hasChanges = (settings.audio !== userSettings.audioOptions.audio) || (settings.volume !== userSettings.audioOptions.volume);

    const saveChanges = () => {
        setUserSettings({ ...userSettings, audioOptions: settings });
    }

    return (
        <div className={`flex flex-col gap-4 ${styles.settingsAnimation}`}>
            <span className="text-[2rem] bg-gradient-to-r px-4 py-1 from-sea-blue-dark rounded-l-[2px]">Audio</span>
            <div className="flex flex-col gap-2 w-full px-4">
                <AudioSettingsContext.Provider value={{ settings, setSettings }}>
                    <AudioStateSettings />
                    <VolumeSettings />
                </AudioSettingsContext.Provider>
                <span className="text-[0.75rem] tracking-[0.5px] w-full text-end">*Music not yet implemented; currently looking for a non-copyrighted version</span>
                <div className="h-[3rem] leading-[1.75rem] overflow-hidden w-full text-[1.75rem]">
                    <div className={`h-full flex items-center justify-center transition-transform cursor-pointer ${hasChanges ? "translate-y-0" : "translate-y-[-100%]"}`} onClick={saveChanges}>Apply Changes</div>
                </div>
            </div>
        </div>
    )
}

const AudioStateSettings: React.FC = () => {
    const { settings, setSettings } = useContext(AudioSettingsContext);

    const turnOff = () => {
        if (settings.audio) setSettings({ volume: 0, audio: false });
    }

    const turnOn = () => {
        if (!settings.audio) setSettings({ volume: 1, audio: true });
    }

    return (
        <div className="text-[1.5rem] leading-[1.5rem] flex w-full gap-8 items-center">
            <div className={OPTION_LABEL_STYLE}>Music</div>
            <div className={`flex justify-start text-[1.25rem] gap-1 p-1 w-full h-[36px] rounded-full relative transition-colors bg-gradient-to-r from-sea-green to-sea-blue-dark`}>
                <div className={`z-[0] w-[50%] rounded-full transition-[transform,colors] flex items-center justify-center ${settings.audio ? "translate-x-[100%] text-neon bg-sea-green-bleak" : "bg-sea-green-dark translate-x-0 text-sea-green"}`}>
                    {settings.audio ? "La Mer" : "Not Playing"}
                </div>
                <div className="z-[1] w-[50%] h-full absolute top-0 left-0 cursor-pointer" onClick={turnOff} />
                <div className="z-[1] w-[50%] h-full absolute top-0 right-0 cursor-pointer" onClick={turnOn} />
            </div>
        </div>
    )
}

const VolumeSettings: React.FC = () => {
    const MAX_VOLUME = 10;
    const { settings, setSettings } = useContext(AudioSettingsContext);
    const GRADIENTS = jsgradient.generateGradient("#1a827c", "#67aba8", MAX_VOLUME);

    return (
        <div className="text-[1.5rem] leading-[1.5rem] flex w-full gap-8 items-start">
            <div className={OPTION_LABEL_STYLE}>Volume</div>
            <div className="flex justify-center items-end w-full h-[36px] relative overflow-hidden rounded-[4px] gap-1">
                {
                    Array.from({ length: MAX_VOLUME }).map((_, i: number) => (
                        <div key={i} className={`group/volume z-[1] w-full cursor-pointer flex items-end px-1 pt-1 rounded-t-[4px]`} style={{ height: `${20 + i * 8}%`, background: i + 1 <= settings.volume ? GRADIENTS[i] : "#0d403d" }} onClick={() => { setSettings({ audio: true, volume: i + 1 }) }}>
                            <div className="group-hover/volume:h-full h-0 bg-neon/50 transition-height w-full rounded-t-[4px]" />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SoundSettings;