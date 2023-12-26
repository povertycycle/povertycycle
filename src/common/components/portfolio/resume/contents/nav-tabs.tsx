import { useState } from "react";
import styles from "./index.module.scss";
import { CONTENTS } from "./content-panel";

const NavigationTabs : React.FC<{
    active: string,
    setActive: (active: string) => void,
}> = ({
    active,
    setActive
}) => {
    const ControllerTabbing : React.FC<{ children: React.ReactNode }> = ({ children }) => {
        return (
            <button className={`${styles.controllerTab} active:scale-90 px-4 py-[0.15rem] bg-white bg-opacity-90 text-black`}>
                {children}
            </button>
        )
    }

    return (
        <div className={`w-full bg-sea-green-dark bg-opacity-20 flex items-center justify-center gap-4 text-[1.5rem] pt-[1.5rem] ${styles.navigationTabContainer}`}>
            <ControllerTabbing>L1</ControllerTabbing>
            <div className="flex">
                {
                    Object.keys(CONTENTS).map((key: string, index: number) => {
                        const handleChangeTab = () => {
                            setActive(key);
                        }

                        return (
                            <div key={index} className={`${styles.navigationTab} tracking-[-1px] px-2 border-b-2 text-white border-white ${active === key ? "opacity-100" : "opacity-40 hover:opacity-80"}`} onClick={handleChangeTab}>
                                <span className="z-[2]">{key.toUpperCase()}</span>
                            </div>
                        )
                    })
                }
            </div>
            <ControllerTabbing>R1</ControllerTabbing>
        </div>
    )
}

export default NavigationTabs;