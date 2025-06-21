import { DEFAULT_DESKTOP } from "@/features/resume/constants/constants";
import { AudioOptions, GraphicOptions } from "@/interfaces/user";
import { createContext, Dispatch, SetStateAction } from "react";

type SettingsProps = {
    settings: GraphicOptions;
    setSettings: Dispatch<SetStateAction<GraphicOptions>>;
};

export const SettingsContext = createContext<SettingsProps>({
    settings: DEFAULT_DESKTOP.graphicOptions,
    setSettings: () => {},
});

type AudioSettingsProps = {
    settings: AudioOptions;
    setSettings: Dispatch<SetStateAction<AudioOptions>>;
};

export const AudioSettingsContext = createContext<AudioSettingsProps>({
    settings: DEFAULT_DESKTOP.audioOptions,
    setSettings: () => {},
});
