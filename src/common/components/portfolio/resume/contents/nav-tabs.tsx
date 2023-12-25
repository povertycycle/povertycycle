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
            <div className={`${styles.controllerTab} bg-sea-green`}>
                {children}
            </div>
        )
    }

    return (
        <div className={`w-full bg-sea-green-dark bg-opacity-20 flex items-center justify-start gap-4 px-4 text-[1.5rem]`}>
            <ControllerTabbing>L1</ControllerTabbing>
            <div className="flex gap-2 ml-[2px]">
                {
                    Object.keys(CONTENTS).map((key: string, index: number) => {
                        const handleChangeTab = () => {
                            setActive(key);
                        }

                        return (
                            <div key={index} className={`${styles.navigationTab} border-sea-green ml-[-2px] border-2 bg-sea-green ${active === key ? "bg-opacity-100" : "bg-opacity-0 hover:bg-opacity-30"}`} onClick={handleChangeTab}>
                                <div className={`absolute h-full border-t-[2rem] bottom-0 border-[3rem] bottom-[-4rem] ${active === key ? "border-t-sea-green border-transparent" : "border-transparent"}`}></div>
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