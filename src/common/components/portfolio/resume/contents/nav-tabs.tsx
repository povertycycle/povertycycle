import { useState } from "react";
import styles from "./index.module.scss";

const TABS = {
    "skills": {

    },
    "map": {

    },
    "codex": {

    }
}

const NavigationTabs : React.FC = () => {
    const [tabs, setTabs] = useState<boolean>(false);

    const handleGenerateTabs = () => {
        setTabs(true);
    }

    const ControllerTabbing : React.FC<{ children: React.ReactNode }> = ({ children }) => {
        return (
            <div className={`${styles.controllerTab} bg-sea-green`}>
                {children}
            </div>
        )
    }

    return (
        <div className={`w-full bg-sea-green bg-opacity-10 flex items-center justify-start gap-2 py-2 px-4 text-[1.5rem] ${styles.navTabContainer}`} onAnimationEnd={handleGenerateTabs}>
            <ControllerTabbing>L1</ControllerTabbing>
            {
                tabs && Object.keys(TABS).map((key: string, index: number) => {
                    return (
                        // TODO : HIGHLIGHT ACTIVE TAB
                        // TODO : HIGHLIGHT ON HOVER
                        // TODO : SHORTCUT ICON
                        <div key={index} className={`bg-sea-green bg-opacity-30 ${styles.navigationTab}`}>
                            <span>{key.toUpperCase()}</span>
                            



                            {/* <div className="absolute rounded-full border-2 border-sea-fluorescent w-[60%] bottom-[-4rem] px-4 text-[1.5rem] flex items-center justify-center">{key.charAt(0).toUpperCase()}</div> */}
                        </div>
                    )
                })
            }
            <ControllerTabbing>R1</ControllerTabbing>
        </div>
    )
}

export default NavigationTabs;