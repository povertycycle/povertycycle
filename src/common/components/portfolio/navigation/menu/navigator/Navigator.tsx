import { Dispatch, SetStateAction } from "react";
import { Menu } from "../constants";
import iconStyles from "../index.module.scss";
import { About, Email, Github, LinkedIn, Phone, Resume } from "./Icons";

const Navigator: React.FC<{ setText: Dispatch<SetStateAction<Menu>> }> = ({ setText }) => {
    return (
        <div className={`absolute px-8 max-sm:w-full sm:left-1/2 sm:-translate-x-[50%] justify-center items-center bottom-[32px] sm:bottom-[20%] z-[3] flex max-sm:flex-wrap gap-4 sm:gap-8 ${iconStyles.navIconsContainer}`}>
            {
                Object.values(Menu).filter(m => m !== Menu.NAME).map((menu: Menu, i: number) => (
                    <button onMouseEnter={() => { setText(menu); }} key={i}
                        className="w-fit active:scale-90 flex items-center justify-center cursor-pointer transition-[opacity,transform] opacity-40 hover:opacity-90">
                        {
                            (() => {
                                switch (menu) {
                                    case Menu.ABOUT:
                                        return <About />;
                                    case Menu.LINKEDIN:
                                        return <LinkedIn />;
                                    case Menu.GITHUB:
                                        return <Github />;
                                    case Menu.RESUME:
                                        return <Resume />;
                                    case Menu.PHONE:
                                        return <Phone />;
                                    case Menu.EMAIL:
                                        return <Email />;
                                    case Menu.NAME:
                                    default:
                                        return null;
                                }
                            })()
                        }
                    </button>
                ))
            }
        </div>
    )
}

export default Navigator;


// useEffect(() => {
// const handleGamepadConnected = (event: GamepadEvent) => {
//     setGamepad(event.gamepad);
// }

// const handleGamepadDisconnected = (event: GamepadEvent) => {
//     setGamepad(null);
//     window.clearInterval(interval.current);
// }

// if (dive) {
//     console.log("CLEARING MAIN MENU CONTROLLER STATE");
//     if (interval.current) window.clearInterval(interval.current);
//     window.removeEventListener('gamepadconnected', handleGamepadConnected);
//     window.removeEventListener('gamepaddisconnected', handleGamepadDisconnected);
//     return;
// };
// const lowerThreshold = 0;
// const upperThreshold = Object.keys(ICONS).length - 1;
// interval.current = !gamepad ? undefined : setInterval(() => {
//     const control = navigator.getGamepads()[0];
//     if (!control) return;
//     const xAxis = control.axes[0];
//     const padButton = control.buttons;
//     if (padButton[0].pressed) {
//         setMenuPos(prev => {
//             Object.values(ICONS)[prev].click();
//             if (prev === 4 || prev === 5) {
//                 setShow(true);
//                 setTimeout(() => {
//                     setShow(false);
//                 }, 2000)
//             }
//             if (prev === 0) {
//                 setDive(true);
//             }
//             return prev;
//         })
//     };
//     if (xAxis) {
//         if (xAxis > 0.8) {
//             setMenuPos(prev => {
//                 const newPos = prev + 1 > upperThreshold ? lowerThreshold : prev + 1
//                 handleChangeNeon(Object.keys(ICONS)[newPos]);
//                 return newPos;
//             });
//         } else if (xAxis < -0.8) {
//             setMenuPos(prev => {
//                 const newPos = prev - 1 < lowerThreshold ? upperThreshold : prev - 1;
//                 handleChangeNeon(Object.keys(ICONS)[newPos]);
//                 return newPos;
//             });
//         }
//     };
// }, 100);

// window.addEventListener('gamepadconnected', handleGamepadConnected);
// window.addEventListener('gamepaddisconnected', handleGamepadDisconnected);

// return () => {
//     window.removeEventListener('gamepadconnected', handleGamepadConnected);
//     window.removeEventListener('gamepaddisconnected', handleGamepadDisconnected);
//     window.clearInterval(interval.current);
// };
// }, [gamepad, dive]);
