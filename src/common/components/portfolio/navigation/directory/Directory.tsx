import { DEFAULT_DESKTOP, DEFAULT_MOBILE } from "@/common/constants/configs";
import { GamepadContext, RaptureContext } from "@/common/contexts/global-context";
import { UserSettings } from "@/common/interfaces/user";
import { useEffect, useState } from "react";
import RootResume from "../../resume/RootResume";
import NavMenu from "../menu/NavMenu";

const Directory: React.FC = () => {
    const [dive, setDive] = useState<boolean>(false);
    const [userSettings, setUserSettings] = useState<UserSettings>(DEFAULT_MOBILE);
    const value = { dive, setDive, userSettings, setUserSettings };
    const [gamepad, setGamepad] = useState<Gamepad | null>(null);
    const gamepadValue = { gamepad, setGamepad };

    useEffect(() => {
        if (!!window && window.innerWidth >= 640) setUserSettings(DEFAULT_DESKTOP)
    }, [])

    return (
        <GamepadContext.Provider value={gamepadValue}>
            <RaptureContext.Provider value={value}>
                <div className="w-full [background:linear-gradient(90deg,_rgba(0,0,0,0.7)_40%,_rgba(0,0,0,0.5)_50%,_rgba(0,0,0,0.7)_60%)] sm:[background:linear-gradient(90deg,_rgba(0,0,0,0.5)_0%,_transparent_50%,_rgba(0,0,0,0.5)_100%)]">
                    <NavMenu />
                    <RootResume />
                </div>
            </RaptureContext.Provider>
        </GamepadContext.Provider>
    )
}

export default Directory;