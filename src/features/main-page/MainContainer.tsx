import { DepthContext } from "@/stores/depth";
import { useState } from "react";
import { Portfolio } from "../resume/Portfolio";
import { Directory } from "./Directory";
import styles from "./index.module.scss";

/**
 * Top level container with directory navigation and raindrops effect
 */
export const MainContainer: React.FC = () => {
    const [dive, setDive] = useState<boolean>(false);

    return (
        <div
            className={`${styles.portfolioContainer} items-center w-screen flex flex-col overflow-y-scroll h-[200vh]`}
        >
            <div className="w-full h-full flex flex-col [background:linear-gradient(90deg,_rgba(0,0,0,0.3)_30%,_rgba(0,0,0,0.3)_70%)] sm:[background:linear-gradient(90deg,_rgba(0,0,0,0.5)_0%,_transparent_50%,_rgba(0,0,0,0.5)_100%)]">
                <DepthContext.Provider value={{ dive, setDive }}>
                    <Directory />
                    <Portfolio />
                </DepthContext.Provider>
            </div>
        </div>
    );
};
