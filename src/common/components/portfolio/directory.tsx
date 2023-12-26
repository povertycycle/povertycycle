import { useState } from "react";
import Navigation from "./navigation/navigation";
import Resume from "./resume/resume";
import { GamepadContext, RaptureContext } from "./global-context";

const Directory : React.FC = () => {
    const [dive, setDive] = useState<boolean>(false);
    const value = { dive, setDive };
    const [gamepad, setGamepad] = useState<Gamepad | null>(null);
    const gamepadValue = { gamepad, setGamepad };

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