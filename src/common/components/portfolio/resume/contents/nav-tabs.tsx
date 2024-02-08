import { Dispatch, SetStateAction } from "react";
import styles from "./index.module.scss";
import { CONTENTS } from "./content-panel";
import { getAge } from "@/common/utils/math";
import { RESOURCE_COLORS } from "./constant";

const CharacterStatus : React.FC = () => {
    const MAX_HP = 100;
    const today = new Date();
    const remainingDays = Math.ceil((new Date(today.getFullYear(), 11, 31).getTime() - today.getTime()) / (1000 * 60 * 60 * 24));;
    return (
        <div className={`absolute right-0 hidden xl:flex flex-col h-full select-none items-center w-[18rem] ${styles.statusAnimation}`}>
            <div className="absolute w-[130%] right-[-1rem] h-full skew-x-[-30deg] rounded-[0.2rem] bg-gradient-to-l from-sea-green/50 from-75%"></div>
            <div className="w-full p-2 z-[1] flex flex-col text-[1.25rem] whitespace-nowrap h-full">
                <div className="flex gap-8 justify-end">
                    <span>HP {60}/{MAX_HP}</span>
                    <span>Level {getAge()}</span>
                </div>
                <div className="flex gap-4 justify-end h-full">
                    {
                        Object.entries(RESOURCE_COLORS).map((entry: [string, string], index: number) => (
                            <div key={index} className={`${entry[1]} flex gap-2 h-full items-center`}>
                                <span>{entry[0]}</span>
                                <span>{remainingDays}/365</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

const NavigationTabs : React.FC<{
    active: string,
    setActive: Dispatch<SetStateAction<string>>,
}> = ({
    active,
    setActive
}) => {
    const tabs = Object.keys(CONTENTS);

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

    const ControllerTabbing : React.FC<{ children: React.ReactNode, onClick: () => void }> = ({ children, onClick }) => {
        return (
            <button className={`${styles.controllerTab} active:scale-90 px-4 py-[0.15rem] bg-soft-white text-black`} onClick={onClick}>
                {children}
            </button>
        )
    }

    const prevMenu = () => {
        const activeIndex = tabs.indexOf(active);
        setActive(tabs[(activeIndex - 1) < 0 ? tabs.length - 1 : (activeIndex - 1)]);
    }

    const nextMenu = () => {
        const activeIndex = tabs.indexOf(active);
        setActive(tabs[(activeIndex + 1) > (tabs.length - 1) ? 0 : (activeIndex + 1)]);
    }


    return (
        <div className={`relative z-[1] w-full h-[5rem] overflow-hidden flex items-center justify-center gap-4 text-[1.5rem] ${styles.navTabAnimation}`}>
            <ControllerTabbing onClick={prevMenu}>L1</ControllerTabbing>
            <div className="flex">
                {
                    tabs.map((key: string, index: number) => {
                        const handleChangeTab = () => {
                            setActive(key);
                        }

                        return (
                            <div key={index} className={`${styles.navigationTab} px-4 border-b-2 text-white border-white ${active === key ? "opacity-100" : "opacity-40 hover:opacity-80"}`} onClick={handleChangeTab}>
                                <span className="z-[2]">{key.toUpperCase()}</span>
                            </div>
                        )
                    })
                }
            </div>
            <ControllerTabbing onClick={nextMenu}>R1</ControllerTabbing>
            <CharacterStatus />
        </div>
    )
}

export default NavigationTabs;