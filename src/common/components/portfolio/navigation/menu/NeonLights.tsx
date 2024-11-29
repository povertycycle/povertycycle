import { BLINK_TIMER, DISPLAY_TEXTS, Menu } from "./constants";
import styles from "./index.module.scss";

type NeonLightsProps = {
    text: Menu;
}

const NeonLights: React.FC<NeonLightsProps> = ({ text }) => {
    const { desktop, mobile } = DISPLAY_TEXTS[text];

    return (
        <div className={`w-full h-full flex flex-col justify-center items-center text-neon font-andes text-[3rem] sm:text-[4rem] text-center user-select-none ${styles.neonContainer}`}>
            <div className="whitespace-nowrap flex sm:tracking-[3px]">
                {desktop.map((t: string, i: number) => {
                    return (
                        <span data-mobiletext={mobile?.[i]} key={i} style={{ animation: text === Menu.NAME ? `${styles.blink} linear ${BLINK_TIMER[i]}s` : "" }}>
                            <span>{t}</span>
                        </span>
                    )
                })}
            </div>
            <div className={`whitespace-nowrap flex tracking-[2px] sm:tracking-[5px] ${styles.neonReflection}`}>
                {desktop.map((t: string, i: number) => {
                    return (
                        <span data-mobiletext={mobile?.[i]} key={i} style={{ animation: text === Menu.NAME ? `${styles.blink} linear ${BLINK_TIMER[i]}s` : "" }}>
                            <span>{t}</span>
                        </span>
                    )
                })}
            </div>
        </div>
    )
}

export default NeonLights;