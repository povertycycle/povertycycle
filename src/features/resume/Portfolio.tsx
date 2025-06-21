import { UserSettings } from "@/interfaces/user";
import { RaptureContext } from "@/stores/rapture";
import { useEffect, useState } from "react";
import { Bubbles } from "./components/backgrounds/bubbles/Bubbles";
import { Fishes } from "./components/backgrounds/fishes/Fishes";
import { Rapture } from "./components/backgrounds/rapture/Rapture";
import { Contents } from "./components/contents/Contents";
import { DEFAULT_DESKTOP, DEFAULT_MOBILE } from "./constants/constants";

/**
 * Portfolio container
 */
export const Portfolio: React.FC = () => {
    const [settings, setSettings] = useState<UserSettings | null>(null);

    useEffect(() => {
        if (window && window.innerWidth < 640) {
            setSettings(DEFAULT_MOBILE);
        } else {
            setSettings(DEFAULT_DESKTOP);
        }
    }, []);

    const updateSettings = (newSettings: UserSettings) => {
        setSettings(newSettings);
    };

    return (
        <div className="w-full h-dvh sm:h-screen overflow-hidden relative">
            {settings && (
                <RaptureContext.Provider value={{ settings, updateSettings }}>
                    {settings && (
                        <>
                            <div className="w-full h-full relative z-1">
                                <Bubbles />
                                <Fishes />
                                <Rapture />
                            </div>
                            <Contents />
                        </>
                    )}
                </RaptureContext.Provider>
            )}
        </div>
    );
};
