import { BLINK_TIMER, DISPLAY_TEXTS, Menu } from "./constants";
import styles from "./neon.module.scss";

interface NeonLightsProps {
    text: Menu;
}

export const NeonLights: React.FC<NeonLightsProps> = ({ text }) => {
    const { desktop, mobile } = DISPLAY_TEXTS[text];

    return (
        <div
            className={`text-neon font-andes text-3xl sm:text-4xl lg:text-5xl ${styles.container}`}
        >
            <div className="whitespace-nowrap flex sm:tracking-widest">
                {desktop.map((t: string, i: number) => {
                    return (
                        <span
                            data-mobiletext={mobile?.[i]}
                            key={i}
                            style={{
                                animation:
                                    text === Menu.NAME
                                        ? `${styles.blink} linear ${BLINK_TIMER[i]}s`
                                        : "",
                            }}
                        >
                            <span>{t}</span>
                        </span>
                    );
                })}
            </div>
            <div
                className={`whitespace-nowrap flex tracking-wide sm:tracking-widest ${styles.reflection}`}
            >
                {desktop.map((t: string, i: number) => {
                    return (
                        <span
                            data-mobiletext={mobile?.[i]}
                            key={i}
                            style={{
                                animation:
                                    text === Menu.NAME
                                        ? `${styles.blink} linear ${BLINK_TIMER[i]}s`
                                        : "",
                            }}
                        >
                            <span>{t}</span>
                        </span>
                    );
                })}
            </div>
        </div>
    );
};
