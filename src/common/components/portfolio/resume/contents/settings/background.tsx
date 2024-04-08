import { useContext, useState } from "react";
import { GraphicOptions } from "../../../config";
import { RaptureContext } from "../../../global-context";
import { OPTION_LABEL_STYLE, SettingsContext } from "./context";

const GRAPHICS_MAP: GraphicOptions[] = [
    {
        bubbles: false,
        buildings: 0,
        fishes: 0,
        effects: 0,
        overall: 0
    },
    {
        bubbles: true,
        buildings: 5,
        fishes: 2,
        effects: 0,
        overall: 1
    },
    {
        bubbles: true,
        buildings: 10,
        fishes: 5,
        effects: 1,
        overall: 2
    },
    {
        bubbles: true,
        buildings: 15,
        fishes: 7,
        effects: 2,
        overall: 3
    },
    {
        bubbles: true,
        buildings: 20,
        fishes: 10,
        effects: 3,
        overall: 4
    },
    {
        bubbles: true,
        buildings: 20,
        fishes: 10,
        effects: 3,
        overall: 5
    },
]

const GRAPHICS_LEVEL = [
    "None",
    "Low",
    "Medium",
    "High",
    "Ultra",
    "Custom"
]

const BackgroundSettings: React.FC = () => {
    const { userSettings, setUserSettings } = useContext(RaptureContext);
    const [settings, setSettings] = useState<GraphicOptions>(userSettings.graphicOptions);
    const hasChanges = (userSettings.graphicOptions.bubbles !== settings.bubbles) || (userSettings.graphicOptions.buildings !== settings.buildings) || (userSettings.graphicOptions.effects !== settings.effects) || (userSettings.graphicOptions.fishes !== settings.fishes);

    const saveChanges = () => {
        setUserSettings({ ...userSettings, graphicOptions: settings });
    }

    return (
        <div className={`flex flex-col gap-4`}>
            <span className="text-[2rem] bg-gradient-to-r px-4 py-1 from-sea-blue-dark rounded-l-[2px]">Background</span>
            <div className="flex flex-col gap-2 w-full px-4">
                <SettingsContext.Provider value={{ settings, setSettings }}>
                    <OverallSettings />
                    <div className="w-full h-[2px] bg-white mt-8" />
                    <div className="flex flex-col gap-4">
                        <BubblesSettings />
                        <BuildingsSettings />
                        <EffectSettings />
                        <FishesSettings />
                    </div>
                    <div className="h-[3rem] leading-[1.75rem] overflow-hidden w-full text-[1.75rem]">
                        <div className={`h-full flex items-center justify-center transition-transform cursor-pointer ${hasChanges ? "translate-y-0" : "translate-y-[-100%]"}`} onClick={saveChanges}>Apply Changes</div>
                    </div>
                </SettingsContext.Provider>
            </div>
        </div>
    )
}

const OverallSettings: React.FC = () => {
    const STROKE_WIDTH = 48;
    const { settings, setSettings } = useContext(SettingsContext);

    return (
        <div className="text-[1.5rem] flex w-full justify-between gap-8 items-center h-[48px]">
            <div className={OPTION_LABEL_STYLE}>Graphics Settings</div>
            <div className="flex items-center justify-center text-[1.25rem] relative">
                <div className="h-[2px] bg-white" style={{ width: `${GRAPHICS_LEVEL.length * (STROKE_WIDTH + 32) - STROKE_WIDTH}px` }} />
                {
                    GRAPHICS_LEVEL.map((level: string, i: number) => {
                        const setChanges = () => {
                            setSettings(GRAPHICS_MAP[i]);
                        }

                        return (
                            <div key={i} className="w-[32px] h-[32px] absolute shrink-0 flex items-center justify-center" style={{ left: `${i * (STROKE_WIDTH + 32)}px` }}>
                                <div onClick={setChanges} className={`${settings.overall === i ? "scale-[1.5]" : "cursor-pointer transition-transform hover:scale-[1.25]"} w-[32px] h-[32px] bg-sea-blue-dark rounded-[24px] flex items-center justify-center border-2 border-white`} >
                                    <span>{i + 1}</span>
                                </div>
                                <div className={`absolute tracking-[0.5px] top-full mt-4 text-[0.875rem] ${settings.overall === i ? "scale-[1.5]" : ""}`}>{level}</div>
                            </div>
                        )
                    })
                }
                <div className="absolute w-[32px] h-[32px] rounded-full bg-white transition-[left]" style={{ left: `${settings.overall * (STROKE_WIDTH + 32)}px` }} />
            </div>
        </div>
    )
}

const BubblesSettings: React.FC = () => {
    const { settings, setSettings } = useContext(SettingsContext);

    const turnOff = () => {
        setSettings({ ...settings, bubbles: false, overall: 5 });
    }

    const turnOn = () => {
        setSettings({ ...settings, bubbles: true, overall: 5 });
    }

    return (
        <div className="text-[1.5rem] leading-[1.5rem] flex w-full gap-8 items-center">
            <div className={OPTION_LABEL_STYLE}>Bubbles</div>
            <div className="flex justify-start text-[1.25rem] gap-1 p-1 w-full h-[36px] rounded-[6px] relative">
                <div className="z-[0] left-0 top-0 w-[50%] h-full absolute p-1" onClick={turnOff}>
                    <div className={`h-full w-full rounded-[6px] flex items-center justify-center transition-colors ${settings.bubbles ? "hover:bg-white/15 hover:text-white text-gold-gray cursor-pointer" : "text-transparent"}`}>Off</div>
                </div>
                <div className="z-[0] right-0 top-0 w-[50%] h-full absolute p-1" onClick={turnOn}>
                    <div className={`h-full w-full rounded-[6px] flex items-center justify-center transition-colors ${!settings.bubbles ? "hover:bg-white/15 hover:text-white text-gold-gray cursor-pointer" : "text-transparent"}`}>On</div>
                </div>
                <div className={`z-[1] w-[50%] h-full bg-white rounded-[6px] text-sea-blue-dark flex items-center justify-center transition-transform ${settings.bubbles ? "translate-x-[calc(100%+4px)]" : "translate-x-0"}`}>
                    {settings.bubbles ? "On" : "Off"}
                </div>
            </div>
        </div>
    )
}

const BuildingsSettings: React.FC = () => {
    const { settings, setSettings } = useContext(SettingsContext);

    return (
        <div className="text-[1.5rem] leading-[1.5rem] flex w-full gap-8 items-end">
            <div className={OPTION_LABEL_STYLE}>Buildings</div>
            <div className="flex justify-between items-end w-full h-[36px] relative text-base">
                {
                    [
                        "None",
                        "Sparse",
                        "Few",
                        "Moderate",
                        "Adequate",
                        "Abundant",
                        "Substantial",
                        "Luxurious",
                        "Prosperous"
                    ].map((tag: string, i: number) => (
                        <div onClick={() => { setSettings({ ...settings, buildings: Math.ceil(i * 2.5), overall: 5 }) }} key={i} className={`${settings.buildings === Math.ceil(i * 2.5) ? "h-full w-[25%] bg-white text-sea-green-dark" : "text-[0.875rem] h-[50%] hover:h-[75%] w-[8%] hover:bg-sea-green-bleak hover:text-white bg-sea-green-dark text-gold-gray"} cursor-pointer rounded-t-[4px] transition-[height,width] flex items-center justify-center `}>
                            {Math.ceil(i * 2.5) === settings.buildings ? tag : i}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

const FishesSettings: React.FC = () => {
    const { settings, setSettings } = useContext(SettingsContext);

    const AMOUNT = [
        "None",
        "Scarce",
        "Ample",
        "Bountiful",
        "Brimming",
    ]

    return (
        <div className="text-[1.5rem] leading-[1.5rem] flex w-full gap-8 items-start">
            <div className={OPTION_LABEL_STYLE}>Fishes</div>
            <div className="flex flex-col justify-center items-start w-full h-[36px] relative text-base rounded-[6px] overflow-hidden">
                <div className="w-full h-full flex overflow-hidden z-[1] cursor-pointer">
                    {
                        AMOUNT.map((amount: string, i: number) => (
                            <div key={i} className={`w-full h-full ${Math.floor(i * 2.5) === settings.fishes ? "bg-transparent text-white" : "text-gold-gray hover:text-white bg-black/75 hover:bg-black/25"} flex items-center justify-center transition-colors`} onClick={() => { setSettings({ ...settings, fishes: Math.floor(i * 2.5), overall: 5 }) }}>
                                {amount}
                            </div>
                        ))
                    }
                </div>
                <div className="absolute z-[0] w-full h-full" style={{ background: "linear-gradient(90deg,#000000,#043C61,#7701AD,#8F0380,#FF6F1D,#D38565)" }} />
            </div>
        </div>
    )
}

const EffectSettings: React.FC = () => {
    const { settings, setSettings } = useContext(SettingsContext);

    return (
        <div className="text-[1.5rem] leading-[1.5rem] flex w-full gap-8 items-end">
            <div className={OPTION_LABEL_STYLE}>Effects</div>
            <div className="flex justify-center items-center w-full h-[36px] rounded-[6px] relative overflow-hidden cursor-pointer text-base" style={{ background: "linear-gradient(90deg,black,#136087,#1a827c,#67aba8)" }}>
                {
                    [
                        "None",
                        "Slight",
                        "Decent",
                        "High",
                    ].map((option: string, i: number) => (
                        <div key={i} onClick={() => { setSettings({ ...settings, effects: i, overall: 5 }) }} className={`${settings.effects === i ? "text-white" : "hover:text-[1.5rem] hover:text-white text-gold-gray"} relative z-[1] transition-[colors,font-size] h-full w-full flex items-center justify-center`}>
                            <span>{option}</span>
                        </div>
                    ))
                }
                <div className="w-full h-full absolute z-[0] right-0 top-0 bg-sea-green-dark transition-width" style={{ width: `${100 - (settings.effects + 1) * 25}%` }} />
            </div>
        </div>
    )
}

export default BackgroundSettings;