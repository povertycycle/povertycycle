import { useEffect, useState, useRef } from "react";
import styles from "./index.module.scss";
import { CONTENTS } from "./content-panel";

const NavigationTabs : React.FC<{
    active: string,
    handleSetActive: (active: string) => void,
}> = ({
    active,
    handleSetActive
}) => {
    // const [gamepad, setGamepad] = useState<Gamepad | null>();
    // const interval = useRef<NodeJS.Timeout | undefined>();

    // useEffect(() => {
    //     interval.current = !gamepad ? undefined : setInterval(() => {
    //         const control = navigator.getGamepads()[0];
    //         if (!control) return;
    //         const xAxis = control.axes[0];
    //         const yAxis = control.axes[1];
    //         const padButton = control.buttons;
    //         if (padButton[0].pressed) {
    //             console.log("X");
    //         };
    //         if (padButton[1].pressed) {
                
    //         };
    //         if (padButton[2].pressed) {
                
    //         };
    //         if (padButton[3].pressed) {
                
    //         };
    //         if (padButton[4].pressed) {
    //             console.log("L1")
                
    //         };
    //         if (padButton[5].pressed) {
    //             console.log("R1")
                
    //         };
    //         if (padButton[6].pressed) {
                
    //         };
    //         if (padButton[7].pressed) {
                
    //         };
    //     }, 100);

    //     const handleGamepadConnected = (event: GamepadEvent) => {
    //     }

    //     const handleGamepadDisconnected = (event: GamepadEvent) => {
    //         setGamepad(null);
    //         window.clearInterval(interval.current);
    //     }

    //     window.addEventListener('gamepadconnected', handleGamepadConnected);
    //     window.addEventListener('gamepaddisconnected', handleGamepadDisconnected);

    //     return () => {
    //         window.removeEventListener('gamepadconnected', handleGamepadConnected);
    //         window.removeEventListener('gamepaddisconnected', handleGamepadDisconnected);
    //         window.clearInterval(interval.current);
    //     };
    // }, [gamepad]);

    const ControllerTabbing : React.FC<{ children: React.ReactNode }> = ({ children }) => {
        return (
            <button className={`${styles.controllerTab} active:scale-90 px-4 py-[0.15rem] bg-white bg-opacity-90 text-black`}>
                {children}
            </button>
        )
    }

    return (
        <div className={`w-full h-[5rem] overflow-hidden flex items-center justify-center gap-4 text-[1.5rem] ${styles.navTabAnimation}`}>
            <ControllerTabbing>L1</ControllerTabbing>
            <div className="flex">
                {
                    Object.keys(CONTENTS).map((key: string, index: number) => {
                        const handleChangeTab = () => {
                            handleSetActive(key);
                        }

                        return (
                            <div key={index} className={`${styles.navigationTab} px-4 border-b-2 text-white border-white ${active === key ? "opacity-100" : "opacity-40 hover:opacity-80"}`} onClick={handleChangeTab}>
                                <span className="z-[2]">{key.toUpperCase()}</span>
                            </div>
                        )
                    })
                }
            </div>
            <ControllerTabbing>R1</ControllerTabbing>
        </div>
    )
}

export default NavigationTabs;