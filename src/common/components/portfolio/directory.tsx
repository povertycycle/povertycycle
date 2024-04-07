import { useState, useEffect } from "react";
import Navigation from "./navigation/navigation";
import Resume from "./resume/resume";
import { GamepadContext, RaptureContext } from "./global-context";
import { DEFAULT_DESKTOP, DEFAULT_MOBILE, UserSettings } from "./config";

const Directory: React.FC = () => {
    const [dive, setDive] = useState<boolean>(false);
    const [userSettings, setUserSettings] = useState<UserSettings>(DEFAULT_DESKTOP);
    const value = { dive, setDive, userSettings, setUserSettings };
    const [gamepad, setGamepad] = useState<Gamepad | null>(null);
    const gamepadValue = { gamepad, setGamepad };

    useEffect(() => {
        if (window.innerWidth <= 640) {
            setUserSettings(DEFAULT_MOBILE)
        }
    }, [])

    return (
        <GamepadContext.Provider value={gamepadValue}>
            <RaptureContext.Provider value={value}>
                <div className="w-full" style={{
                    background: 'linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(255,255,255,0) 50%, rgba(0,0,0,0.5) 100%)'
                }}>
                    <Navigation />
                    <Resume />
                </div>
            </RaptureContext.Provider>
        </GamepadContext.Provider>
    )
}

export default Directory;