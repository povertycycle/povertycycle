import { useState } from "react";
import styles from "./index.module.scss";

const NEON_DISPLAY : {
    [key: string] : string[]
} = {
    "about": ["About"],
    "name": ["Will", "i", "am", "Sento", "sa", "tio"],
    "linkedin": ["LinkedIn"],
    "github": ["GitHub"],
    "resume": ["Resume"],
    "phone": ["+(62)81288881024"],
    "email": ["william.sentosatio@hotmail.com"],
};

const BLINKS: {
    [key: number] : number
} = {
    0: 1.5,
    1: 4,
    2: 3,
    3: 2,
    4: 5,
    5: 3,
};

const NeonTitle : React.FC<{
    neon: string,
    handleShowMenu: () => void,
}> = ({
    neon,
    handleShowMenu,
}) => {
    const [introduced, setIntroduced] = useState<boolean>(false);

    const finishIntroduction = (e: any) => {
        setIntroduced(true);
        handleShowMenu();
    }

    return (
        <div className={`w-full h-full flex flex-col justify-center items-center text-neon font-andes text-[1.5rem] sm:text-[2.75rem] md:text-[4rem] text-center user-select-none ${styles.neonContainer}`}>
            <div className="flex tracking-[5px]">
                {NEON_DISPLAY[neon].map((text: string, index: number) => {
                    return (
                        <span key={index} style={{ animation: introduced ? "" : `${styles.blink} linear ${BLINKS[index]}s` }}
                            onAnimationEnd={index == 4 ? finishIntroduction : undefined}>
                            {text}
                        </span>
                    )
                })}
            </div>
            <div className={`flex tracking-[5px] sm:tracking-[7px] md:tracking-[10px] ${styles.neonReflection}`}>
                {NEON_DISPLAY[neon].map((text: string, index: number) => {
                    return (
                        <span key={index} style={{
                            animation: introduced ? "" : `${styles.blink} linear ${BLINKS[index]}s`
                        }}>
                            {text}
                        </span>
                    )
                })}
            </div>
        </div>
    )
}

export default NeonTitle;