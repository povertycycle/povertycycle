import styles from "./content.module.scss";
import controls from "./controller.module.scss";

const CONTROLS_STYLES : { [key: string] : string } = {
    "cross": controls.actionCross,
    "circle": controls.actionCircle,
    "triangle": controls.actionTriangle,
    "square": controls.actionSquare,
}

const ActionButton : React.FC<{ tag: string, action: string }> = ({ tag, action }) => {
    const style = {
        ...(tag === "triangle" ? { "--a": "1.5rem"} as React.CSSProperties : ""),
    }
    return (
        <div className="text-white flex items-center gap-2 text-[1.75rem]">
            <div className="h-[2.5rem] w-[2.5rem] border-[3px] border-white bg-black rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer" style={style}>
                <div className={CONTROLS_STYLES[tag]} />
            </div>
            <span className="select-none">{action}</span>
        </div>
    )
}

const CONTROLS_ICONS : { [key: string]: (action: string) => JSX.Element } = {
    "X/A": (action: string) => { return <ActionButton tag={"cross"} action={action} /> },
    "O/B": (action: string) => { return <ActionButton tag={"circle"} action={action} /> },
    "T/Y": (action: string) => { return <ActionButton tag={"triangle"} action={action} /> },
    "S/X": (action: string) => { return <ActionButton tag={"square"} action={action} /> }
}

const SECTION_CONTROLS : { [key: string] : { control: string, action: string}[] } = {
    "codex": [
        { control: "X/A", action: "Select" }, 
        { control: "O/B", action: "Back" }, 
    ]
}

const ControlsDescription : React.FC<{ tag: string }> = ( {tag }) => {
    return (
        <div className={`w-full bg-gradient-to-l from-black to transparent flex gap-4 justify-end py-2 px-16 ${styles.controlsAnimation}`}>
            {
                SECTION_CONTROLS[tag].map((control, index: number) => {
                    return CONTROLS_ICONS[control.control](control.action);
                })
            }
        </div>
    )
}

export default ControlsDescription;