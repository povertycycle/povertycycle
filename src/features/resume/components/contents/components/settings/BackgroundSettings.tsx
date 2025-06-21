import { RaptureContext } from "@/stores/rapture";
import { useContext, useState } from "react";
import { SettingsContext } from "./store";
import { GraphicOptions } from "@/interfaces/user";

const GRAPHICS_MAP: GraphicOptions[] = [
    {
        bubbles: 0,
        buildings: 0,
        fishes: 0,
        effects: 0,
        overall: 0,
    },
    {
        bubbles: 4,
        buildings: 5,
        fishes: 2,
        effects: 0,
        overall: 1,
    },
    {
        bubbles: 8,
        buildings: 10,
        fishes: 5,
        effects: 1,
        overall: 2,
    },
    {
        bubbles: 10,
        buildings: 15,
        fishes: 7,
        effects: 2,
        overall: 3,
    },
    {
        bubbles: 20,
        buildings: 20,
        fishes: 10,
        effects: 3,
        overall: 4,
    },
    {
        bubbles: 20,
        buildings: 20,
        fishes: 10,
        effects: 3,
        overall: 5,
    },
];

const GRAPHICS_LEVEL = ["None", "Low", "Medium", "High", "Ultra", "Custom"];

export const BackgroundSettings: React.FC = () => {
    const { settings: defaultSettings, updateSettings } =
        useContext(RaptureContext);
    const [settings, setSettings] = useState<GraphicOptions>(
        defaultSettings.graphicOptions
    );
    const hasChanges =
        defaultSettings.graphicOptions.bubbles !== settings.bubbles ||
        defaultSettings.graphicOptions.buildings !== settings.buildings ||
        defaultSettings.graphicOptions.effects !== settings.effects ||
        defaultSettings.graphicOptions.fishes !== settings.fishes;

    const saveChanges = () => {
        updateSettings({ ...defaultSettings, graphicOptions: settings });
    };

    return (
        <div className={`flex flex-col gap-4`}>
            <span className="text-xl bg-gradient-to-r px-4 py-1 from-sea-blue-dark">
                Background
            </span>
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
                    <div className="h-16 overflow-hidden w-full text-base">
                        <div
                            className={`h-full flex items-center justify-center transition-transform cursor-pointer ${
                                hasChanges
                                    ? "translate-y-0"
                                    : "translate-y-[-100%]"
                            }`}
                            onClick={saveChanges}
                        >
                            Apply Changes
                        </div>
                    </div>
                </SettingsContext.Provider>
            </div>
        </div>
    );
};

const OverallSettings: React.FC = () => {
    const STROKE_WIDTH = 48;
    const { settings, setSettings } = useContext(SettingsContext);

    return (
        <div className="text-base flex w-full justify-between gap-8 items-center h-12">
            <div>Graphics Settings</div>
            <div className="flex items-center justify-center text-base relative">
                <div
                    className="h-0.5 bg-white"
                    style={{
                        width: `${
                            GRAPHICS_LEVEL.length * (STROKE_WIDTH + 32) -
                            STROKE_WIDTH
                        }px`,
                    }}
                />
                {GRAPHICS_LEVEL.map((level: string, i: number) => {
                    const setChanges = () => {
                        setSettings(GRAPHICS_MAP[i]);
                    };

                    return (
                        <div
                            key={i}
                            className="w-7 absolute shrink-0 flex items-center justify-center"
                            style={{ left: `${i * (STROKE_WIDTH + 32)}px` }}
                        >
                            <div
                                onClick={setChanges}
                                className={`${
                                    settings.overall === i
                                        ? "scale-[1.5]"
                                        : "cursor-pointer transition-transform hover:scale-[1.25]"
                                } w-7 bg-sea-blue-dark rounded-[24px] flex items-center justify-center border-2 border-white`}
                            >
                                <span>{i + 1}</span>
                            </div>
                            <div
                                className={`absolute tracking-[0.5px] top-full mt-4 text-sm ${
                                    settings.overall === i ? "scale-[1.5]" : ""
                                }`}
                            >
                                {level}
                            </div>
                        </div>
                    );
                })}
                <div
                    className="absolute w-7 rounded-full bg-white transition-[left]"
                    style={{
                        left: `${settings.overall * (STROKE_WIDTH + 32)}px`,
                    }}
                />
            </div>
        </div>
    );
};

const BubblesSettings: React.FC = () => {
    const { settings, setSettings } = useContext(SettingsContext);

    const turnOff = () => {
        setSettings({ ...settings, bubbles: 20, overall: 5 });
    };

    const turnOn = () => {
        setSettings({ ...settings, bubbles: 0, overall: 5 });
    };

    return (
        <div className="text-base flex w-full gap-8 items-center">
            <div>Bubbles</div>
            <div className="flex justify-start text-sm gap-1 p-1 w-full h-8 rounded-semi relative">
                <div
                    className="z-[0] left-0 top-0 w-[50%] h-full absolute p-1"
                    onClick={turnOff}
                >
                    <div
                        className={`h-full w-full rounded-semi flex items-center justify-center transition-colors ${
                            settings.bubbles
                                ? "hover:bg-white/15 hover:text-white text-gold-gray cursor-pointer"
                                : "text-transparent"
                        }`}
                    >
                        Off
                    </div>
                </div>
                <div
                    className="z-[0] right-0 top-0 w-[50%] h-full absolute p-1"
                    onClick={turnOn}
                >
                    <div
                        className={`h-full w-full rounded-[6px] flex items-center justify-center transition-colors ${
                            !settings.bubbles
                                ? "hover:bg-white/15 hover:text-white text-gold-gray cursor-pointer"
                                : "text-transparent"
                        }`}
                    >
                        On
                    </div>
                </div>
                <div
                    className={`z-[1] w-[50%] h-full bg-white rounded-[6px] text-sea-blue-dark flex items-center justify-center transition-transform ${
                        settings.bubbles
                            ? "translate-x-[calc(100%+4px)]"
                            : "translate-x-0"
                    }`}
                >
                    {settings.bubbles ? "On" : "Off"}
                </div>
            </div>
        </div>
    );
};

const BuildingsSettings: React.FC = () => {
    const { settings, setSettings } = useContext(SettingsContext);

    return (
        <div className="text-base leading-[1.5rem] flex w-full gap-8 items-end">
            <div>Buildings</div>
            <div className="flex justify-between items-end w-full h-7 relative text-sm">
                {[
                    "None",
                    "Sparse",
                    "Few",
                    "Moderate",
                    "Adequate",
                    "Abundant",
                    "Substantial",
                    "Luxurious",
                    "Prosperous",
                ].map((tag: string, i: number) => (
                    <div
                        onClick={() => {
                            setSettings({
                                ...settings,
                                buildings: Math.ceil(i * 2.5),
                                overall: 5,
                            });
                        }}
                        key={i}
                        className={`${
                            settings.buildings === Math.ceil(i * 2.5)
                                ? "h-full w-[25%] bg-white text-sea-green-dark"
                                : "text-sm h-[50%] hover:h-[75%] w-[8%] hover:bg-sea-green-bleak hover:text-white bg-sea-green-dark text-gold-gray"
                        } cursor-pointer rounded-t-[4px] transition-[height,width] flex items-center justify-center `}
                    >
                        {Math.ceil(i * 2.5) === settings.buildings ? tag : i}
                    </div>
                ))}
            </div>
        </div>
    );
};

const FishesSettings: React.FC = () => {
    const { settings, setSettings } = useContext(SettingsContext);

    const AMOUNT = ["None", "Scarce", "Ample", "Bountiful", "Brimming"];

    return (
        <div className="text-base flex w-full gap-8 items-start">
            <div>Fishes</div>
            <div className="flex flex-col justify-center items-start w-full h-7 relative text-sm rounded-semi overflow-hidden">
                <div className="w-full h-full flex overflow-hidden z-[1] cursor-pointer">
                    {AMOUNT.map((amount: string, i: number) => (
                        <div
                            key={i}
                            className={`w-full h-full ${
                                Math.floor(i * 2.5) === settings.fishes
                                    ? "bg-transparent text-white"
                                    : "text-gold-gray hover:text-white bg-black/75 hover:bg-black/25"
                            } flex items-center justify-center transition-colors`}
                            onClick={() => {
                                setSettings({
                                    ...settings,
                                    fishes: Math.floor(i * 2.5),
                                    overall: 5,
                                });
                            }}
                        >
                            {amount}
                        </div>
                    ))}
                </div>
                <div
                    className="absolute z-[0] w-full h-full"
                    style={{
                        background:
                            "linear-gradient(90deg,#000000,#043C61,#7701AD,#8F0380,#FF6F1D,#D38565)",
                    }}
                />
            </div>
        </div>
    );
};

const EffectSettings: React.FC = () => {
    const { settings, setSettings } = useContext(SettingsContext);

    return (
        <div className="text-base flex w-full gap-8 items-end">
            <div>Effects</div>
            <div
                className="flex justify-center items-center w-full h-7 rounded-semi relative overflow-hidden cursor-pointer text-sm"
                style={{
                    background:
                        "linear-gradient(90deg,black,#136087,#1a827c,#67aba8)",
                }}
            >
                {["None", "Slight", "Decent", "High"].map(
                    (option: string, i: number) => (
                        <div
                            key={i}
                            onClick={() => {
                                setSettings({
                                    ...settings,
                                    effects: i,
                                    overall: 5,
                                });
                            }}
                            className={`${
                                settings.effects === i
                                    ? "text-white"
                                    : "hover:text-base hover:text-white text-gold-gray"
                            } relative z-[1] transition-[colors,font-size] h-full w-full flex items-center justify-center`}
                        >
                            <span>{option}</span>
                        </div>
                    )
                )}
                <div
                    className="w-full h-full absolute z-[0] right-0 top-0 bg-sea-green-dark transition-width"
                    style={{ width: `${100 - (settings.effects + 1) * 25}%` }}
                />
            </div>
        </div>
    );
};
