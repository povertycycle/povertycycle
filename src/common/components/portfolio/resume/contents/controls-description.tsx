import styles from "./animations.module.scss";
import controls from "./controller.module.scss";
import { animateScroll as scroll } from "react-scroll";

const returnToMainMenu = () => {
    scroll.scrollTo(-document.body.clientHeight, {
        smooth: "easeInQuad",
        duration: 2000,
    });
}

const CONTROLS_STYLES: { [key: string]: string } = {
    "cross": controls.actionCross,
    "circle": controls.actionCircle,
    "triangle": controls.actionTriangle,
    "square": controls.actionSquare,
    "up": controls.actionUp,
    "down": controls.actionDown,
}

const ActionButton: React.FC<{ tag: string, action: string, onClick?: () => void }> = ({ tag, action, onClick }) => {
    const style = {
        ...(tag === "triangle" ? { "--a": "1.5rem" } as React.CSSProperties : ""),
    }
    return (
        <div className="text-white flex items-center gap-2 text-[1.75rem] whitespace-nowrap" onClick={onClick}>
            <div className={`${tag === "up" || tag === "down" ? "" : "border-[3px] border-white rounded-full"} active:scale-90 h-[2.5rem] w-[2.5rem] bg-black flex items-center justify-center hover:scale-110 transition-transform cursor-pointer`} style={style}>
                <div className={CONTROLS_STYLES[tag]} />
            </div>
            <span className="select-none">{action}</span>
        </div>
    )
}

const CONTROLS_ICONS: { [key: string]: (action: string, index: number) => JSX.Element } = {
    "X/A": (action: string, index: number) => { return <ActionButton key={index} tag={"cross"} action={action} /> },
    "O/B": (action: string, index: number) => { return <ActionButton key={index} tag={"circle"} action={action} onClick={returnToMainMenu} /> },
    "T/Y": (action: string, index: number) => { return <ActionButton key={index} tag={"triangle"} action={action} /> },
    "S/X": (action: string, index: number) => { return <ActionButton key={index} tag={"square"} action={action} /> },
    "UP": (action: string, index: number) => { return <ActionButton key={index} tag={"up"} action={action} /> },
    "DOWN": (action: string, index: number) => { return <ActionButton key={index} tag={"down"} action={action} /> }
}

const SECTION_CONTROLS: { [key: string]: { control: string, action: string }[] } = {
    "codex": [
        { control: "X/A", action: "Select" },
        { control: "O/B", action: "Back" },
    ],
    "skills": [
        { control: "X/A", action: "Select" },
        { control: "O/B", action: "Back" },
        { control: "T/Y", action: "Details" },
    ],
    "map": [
        { control: "X/A", action: "Select" },
        { control: "O/B", action: "Back" },
        { control: "UP", action: "Zoom Out" },
        { control: "DOWN", action: "Zoom In" },
    ]
}

const ControlsDescription: React.FC<{ tag: string }> = ({ tag }) => {
    return (
        <div className={`w-full bg-gradient-to-l from-black to transparent flex gap-4 justify-end py-2 px-16 ${styles.controlsAnimation}`}>
            {
                SECTION_CONTROLS[tag].map((control, index: number) => {
                    return CONTROLS_ICONS[control.control](control.action, index);
                })
            }
        </div>
    )
}

export default ControlsDescription;