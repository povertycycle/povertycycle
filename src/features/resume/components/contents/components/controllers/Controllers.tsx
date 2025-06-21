import styles from "./controllers.module.scss";

export const CONTROLS_ID = "3co1tZsXzTLMqV32iJ5gBSdazRlwS2cY";

const CONTROLS_STYLES: Record<string, string> = {
    cross: styles.actionCross,
    circle: styles.actionCircle,
    triangle: styles.actionTriangle,
    square: styles.actionSquare,
    up: styles.actionUp,
    down: styles.actionDown,
};

const ActionButton: React.FC<{
    tag: string;
    action: string;
    onClick?: () => void;
}> = ({ tag, action, onClick }) => {
    return (
        <div
            className="text-white flex items-center gap-2 whitespace-nowrap"
            onClick={onClick}
        >
            <div
                className={`${
                    tag === "up" || tag === "down"
                        ? ""
                        : "border sm:border-2 border-white rounded-full"
                } active:scale-90 h-4 w-4 sm:h-8 sm:w-8 bg-black flex items-center justify-center hover:scale-110 transition-transform cursor-pointer`}
            >
                <div className={CONTROLS_STYLES[tag]} />
            </div>
            <span className="select-none text-xs sm:text-base">{action}</span>
        </div>
    );
};

const CONTROLS_ICONS: {
    [key: string]: (action: string, index: number) => JSX.Element;
} = {
    "X/A": (action: string, index: number) => {
        return <ActionButton key={index} tag={"cross"} action={action} />;
    },
    "O/B": (action: string, index: number) => {
        return <ActionButton key={index} tag={"circle"} action={action} />;
    },
    "T/Y": (action: string, index: number) => {
        return <ActionButton key={index} tag={"triangle"} action={action} />;
    },
    "S/X": (action: string, index: number) => {
        return <ActionButton key={index} tag={"square"} action={action} />;
    },
    UP: (action: string, index: number) => {
        return <ActionButton key={index} tag={"up"} action={action} />;
    },
    DOWN: (action: string, index: number) => {
        return <ActionButton key={index} tag={"down"} action={action} />;
    },
};

const SECTION_CONTROLS: {
    [key: string]: { control: string; action: string }[];
} = {
    codex: [
        { control: "X/A", action: "Select" },
        { control: "O/B", action: "Back" },
    ],
    skills: [
        { control: "X/A", action: "Select" },
        { control: "O/B", action: "Back" },
        { control: "T/Y", action: "Details" },
    ],
    map: [
        { control: "X/A", action: "Select" },
        { control: "O/B", action: "Back" },
        { control: "UP", action: "Zoom Out" },
        { control: "DOWN", action: "Zoom In" },
    ],
    inventory: [
        { control: "X/A", action: "Select" },
        { control: "O/B", action: "Back" },
    ],
    settings: [
        { control: "X/A", action: "Select" },
        { control: "O/B", action: "Back" },
    ],
};

export const Controllers: React.FC<{ tag: string }> = ({ tag }) => {
    return (
        <div
            id={CONTROLS_ID}
            className={`bg-gradient-to-l justify-end from-black to transparent flex overflow-hidden transition-width shrink-0 ${styles.controlsAnim}`}
            style={{ width: "100%" }}
        >
            <div className="w-fit h-full flex gap-4 justify-end py-2 px-3">
                {SECTION_CONTROLS[tag].map((control, index: number) => {
                    return CONTROLS_ICONS[control.control](
                        control.action,
                        index
                    );
                })}
            </div>
        </div>
    );
};
