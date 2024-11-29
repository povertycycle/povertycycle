import { DEFAULT_DESKTOP } from "@/common/constants/configs";
import { AudioOptions, GraphicOptions } from "@/common/interfaces/user";
import { createContext, Dispatch, SetStateAction } from "react";

export const OPTION_LABEL_STYLE = "py-2 whitespace-nowrap w-[240px] shrink-0";

type SettingsProps = {
    settings: GraphicOptions,
    setSettings: Dispatch<SetStateAction<GraphicOptions>>
}

export const SettingsContext = createContext<SettingsProps>({
    settings: DEFAULT_DESKTOP.graphicOptions,
    setSettings: () => { }
})

type AudioSettingsProps = {
    settings: AudioOptions,
    setSettings: Dispatch<SetStateAction<AudioOptions>>
}

export const AudioSettingsContext = createContext<AudioSettingsProps>({
    settings: DEFAULT_DESKTOP.audioOptions,
    setSettings: () => { }
})