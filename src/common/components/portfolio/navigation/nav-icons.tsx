import { useContext, useState, Dispatch, SetStateAction } from "react";
import iconStyles from "./icons.module.scss";
import { animateScroll as scroll } from "react-scroll";
import { RaptureContext } from "../global-context";

const About : React.FC = () => {
    return (
        <div className={`${iconStyles.linkIcon} ${iconStyles.roundedBorder}`}>
            <div className={iconStyles.aboutHead} />
            <div className={iconStyles.aboutBody} />
        </div>
    )
}

const LinkedIn : React.FC = () => {
    return (
        <div className={`${iconStyles.linkIcon} ${iconStyles.squareBorder}`}>
            <div className={iconStyles.linkedInI} />
            <div className={iconStyles.linkedInN} />
        </div>
    )
}

const Github : React.FC = () => {
    return (
        <div className={`${iconStyles.linkIcon} ${iconStyles.roundedBorder}`}>
            <div className={iconStyles.githubBody} />
            <div className={iconStyles.githubBodyL} />
            <div className={`${iconStyles.githubBodyL} ${iconStyles.none}`} />
            <div className={iconStyles.githubBodyR} />
            <div className={`${iconStyles.githubBodyR} ${iconStyles.none}`} />
            <div className={iconStyles.githubNeck} />
            <div className={iconStyles.githubHead} />
            <div className={iconStyles.githubHeadL} />
            <div className={iconStyles.githubHeadR} />
            <div className={iconStyles.githubEarL} />
            <div className={iconStyles.githubEarR} />
            <div className={iconStyles.githubTailE} />
            <div className={iconStyles.githubTailB} />
            <div className={`${iconStyles.githubTailE} ${iconStyles.none}`} />            
            <div className={`${iconStyles.githubTailB} ${iconStyles.none}`} />
            <div className={iconStyles.githubTailT} />
        </div>
    )
}

const Resume : React.FC = () => {
    return (
        <div className={`${iconStyles.linkIcon} ${iconStyles.squareBorder}`} style={{ overflow: "visible" }}>
            <div className={iconStyles.resumeFlip} style={{ background: "var(--none-color)" }}>
                <div className={iconStyles.resumeStrike} />
            </div>
            <div className={iconStyles.resumeLines} style={{ backgroundColor: "unset" }}>
                {Array.from(Array(4)).map((_, i)=>{
                    return <div key={i} className={iconStyles.resumeLine} style={{width: i == 3 ? "60%" : "100%"}}/>
                })}
            </div>
        </div>
    )
}

const Phone : React.FC = () => {
    return (
        <div className={`${iconStyles.linkIcon} ${iconStyles.roundedBorder}`} style={{
            overflow: "visible",
        }}>
            <div className={iconStyles.phoneTriangle} style={{
                background: "unset"
            }}/>
            <div className={iconStyles.phoneHolder} />
            <div className={iconStyles.phoneHolderNone} style={{
                background: "var(--none-color)"
            }}/>
            <div className={iconStyles.phoneEar} />
            <div className={iconStyles.phoneMouth} />
        </div>
    )
}

const Email : React.FC = () => {
    return (
        <div className={`${iconStyles.linkIcon} ${iconStyles.squareBorder} flex items-center justify-center p-2`}>
            <div className={iconStyles.emailShape} style={{
                position: "relative"
            }}/>
        </div>
    )
}


const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
}

const ICONS : {
    [key: string] : {
        element: JSX.Element,
        click: () => void,
    }
} = {
    "about": {
        element: <About />,
        click: () => {
            scroll.scrollTo(document.body.clientHeight, {
                smooth: "easeInQuad",
                duration: 2000,
            });
        }
    },
    "linkedin": {
        element: <LinkedIn />,
        click: () => {
            window.open("https://www.linkedin.com/in/william-sentosatio/");
        }
    },
    "github": {
        element: <Github />,
        click: () => {
            window.open("https://github.com/povertycycle");
        }
    },
    "resume": {
        element: <Resume />,
        click: () => {
            window.open("https://docs.google.com/document/d/1wCx9U0Ecq8Uct1nVCWB16PpNLwkgJvGf");
        }
    },
    "phone": {
        element: <Phone />,
        click: () => {
            copyToClipboard("(+62) 812 8888 1024");
        }
    },
    "email": {
        element: <Email />,
        click: () => {
            copyToClipboard("william.sentosatio@hotmail.com");
        }
    },
}

const ClipboardAlert : React.FC<{
    show: boolean
}> =  ({
    show
}) => {
    return (
        <div className="font-andes text-[#FAFAFA] w-full text-center absolute bottom-[-4.5rem] tracking-[2px] p-4 text-[1rem] sm:text-[1.5rem] transition-opacity" style={{
            opacity: show ? 1 : 0
        }}>Copied to clipboard</div>
    )
}

const NavIcons : React.FC<{ setNeon: Dispatch<SetStateAction<string>> }> = ({ setNeon }) => {
    const [show, setShow] = useState<boolean>(false);
    const [menuPos, setMenuPos] = useState<number>(-1);
    const { dive, setDive } = useContext(RaptureContext);

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

    return (
        <div className={`absolute w-full justify-center items-center bottom-[20%] grid grid-cols-3 sm:flex z-[3] p-4 gap-8 ${iconStyles.navIconsContainer}`}>
            <ClipboardAlert show={show} />
            {
                Object.keys(ICONS).map((key : string, index: number) => {
                    const handleMouseEnter = () => {
                        setNeon(key);
                        setMenuPos(index);
                    }

                    const handleClick = () => {
                        ICONS[key].click();
                        if (key == "phone" || key == "email") {
                            setShow(true);
                            setTimeout(() => {
                                setShow(false);
                            }, 2000)
                        }
                        if (key == "about") {
                            setDive(true);
                        }
                    }

                    return (
                        <button className="active:scale-90 flex items-center justify-center cursor-pointer transition-all opacity-40 hover:opacity-90" key={index} onMouseEnter={handleMouseEnter} onClick={handleClick} style={{
                            opacity: menuPos == index ? "0.9" : ""
                        }}>
                            {ICONS[key].element}
                        </button>
                    )
                })
            }
        </div>
    )
}

export default NavIcons;