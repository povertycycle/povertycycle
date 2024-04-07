import { Dispatch, SetStateAction } from "react";
import styles from "./index.module.scss";
import { CONTENTS } from "./content-panel";
import { getAge } from "@/common/utils/math";
import { PLAYTIME, RESOURCE_COLORS, ResourceType } from "./constant";

export const NAV_ID = "SKNrYypdREXlfPeWP9MVomFjvAWD6aOA";
export const NAV_HEIGHT = 5;

const CharacterStatus: React.FC = () => {
    const today = new Date();
    const remainingDays = Math.ceil((new Date(today.getFullYear(), 11, 31).getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    const resourceStyles = {
        [ResourceType.LIFE]: ["border-life-cost", "bg-life-cost"],
        [ResourceType.MANA]: ["border-mana-cost", "bg-mana-cost"],
        [ResourceType.FLAIR]: ["border-flair-cost", "bg-flair-cost"],
        [ResourceType.FOCUS]: ["border-focus-cost", "bg-focus-cost"],
    }

    return (
        <div className={`absolute right-0 hidden xl:flex flex-col h-full select-none items-center w-[366px] ${styles.statusAnimation}`}>
            <div className="absolute w-[130%] right-[-1rem] h-full skew-x-[-30deg] rounded-[0.2rem] bg-gradient-to-l from-sea-green/50 from-75%"></div>
            <div className="w-full p-2 z-[1] flex text-[1.25rem] whitespace-nowrap h-full gap-4">
                <div className="grid grid-cols-2 gap-x-4 justify-start h-full flex-row-reverse shrink-0">
                    {
                        Object.entries(RESOURCE_COLORS).map((entry: [string, string], index: number) => (
                            <div key={index} className={`${entry[1]} flex gap-4 h-full items-center justify-end`}>
                                <span>{entry[0]}</span>
                                <div className={`h-[70%] shrink-0 w-[60px] rounded-[4px] border-2 flex justify-end p-[2px] ${resourceStyles[entry[0] as ResourceType][0]}`}>
                                    <div className={`h-full peer rounded-[2px] ${resourceStyles[entry[0] as ResourceType][1]}`} style={{ width: `${Math.round(remainingDays / 365 * 100)}%` }}></div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="h-full aspect-square border-2 border-white rounded-[4px] text-[2rem] leading-[2rem] flex justify-center items-center relative">
                    {/* <ExperienceBar currentExp={365 - remainingDays} /> */}
                    <span>{getAge()}</span>
                </div>
            </div>
        </div>
    )
}

const ExperienceBar: React.FC<{ currentExp: number }> = ({ currentExp }) => {
    const threshold = 365 / 4;

    return (
        <>
            <div className="absolute h-[6px] bg-gold left-0 top-0" style={{ width: currentExp >= threshold ? "100%" : `${currentExp / threshold * 100}%` }} />
            <div className="absolute w-[6px] bg-gold right-0 top-0" style={{ height: currentExp >= threshold * 2 ? "100%" : `${(currentExp - threshold) / threshold * 100}%` }} />
            <div className="absolute h-[6px] bg-gold right-0 bottom-0" style={{ width: currentExp >= threshold * 3 ? "100%" : `${(currentExp - threshold * 2) / threshold * 100}%` }} />
            <div className="absolute w-[6px] bg-gold bottom-0 left-0" style={{ height: currentExp >= threshold * 4 ? "100%" : `${(currentExp - threshold * 3) / threshold * 100}%` }} />
        </>
    )
}

const NavigationTabs: React.FC<{
    active: string,
    setActive: Dispatch<SetStateAction<string>>,
}> = ({ active, setActive }) => {
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

    const ControllerTabbing: React.FC<{ children: React.ReactNode, onClick: () => void }> = ({ children, onClick }) => {
        return (
            <button className={`${styles.controllerTab} active:scale-90 px-4 flex items-center justify-center bg-white text-black`} onClick={onClick}>
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
        <div id={NAV_ID} className={`select-none relative z-[1] w-full transition-height overflow-hidden flex items-center justify-center gap-4 text-[1.25rem] ${styles.navTabAnimation}`} style={{ height: `${NAV_HEIGHT}rem` }}>
            <Playtime />
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

const Playtime: React.FC = () => {

    return (
        <div className="group/tips absolute left-0 bottom-0 p-1 flex gap-1 whitespace-nowrap text-base tracking-[0.5px]">
            <span className="group-hover/tips:opacity-0 transition-opacity">Hours Played: {PLAYTIME} Hrs</span>
            <div className="left-[4px] bg-gradient-to-r from-black to-transparent h-full absolute top-0 flex items-center font-century-gothic group-hover/tips:w-[480px] w-0 overflow-hidden transition-width">Time spent researching, designing, and developing the website</div>
        </div>
    )
}

export default NavigationTabs;