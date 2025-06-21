import { Dispatch, SetStateAction } from "react";
import { Content } from "./interfaces/types";
import styles from "./navigation.module.scss";
import {
    NAV_HEIGHT,
    NAV_ID,
    NAVIGATION,
    PLAYTIME,
} from "./constants/constants";
import { getLevel } from "../../utils/math";
import { RESOURCE_COLORS, ResourceType } from "@/constants/colors";

/**
 * Resume content navigation
 */
export const Navigations: React.FC<{
    active: Content;
    setActive: Dispatch<SetStateAction<Content>>;
}> = ({ active, setActive }) => {
    const nextMenu = (direction: number) => {
        return () => {
            const activeIndex = NAVIGATION.indexOf(active);
            let next = activeIndex + direction;
            if (next < 0) {
                next += NAVIGATION.length;
            }
            setActive(NAVIGATION[next % NAVIGATION.length]);
        };
    };

    return (
        <div
            id={NAV_ID}
            className={`select-none relative z-1 w-full max-sm:pt-8 max-sm:pb-12 transition-height overflow-hidden flex items-center justify-center gap-4 text-xs sm:text-base ${styles.tabAnim}`}
            style={{ height: `${NAV_HEIGHT}px` }}
        >
            <Playtime />
            <ControllerTabbing onClick={nextMenu(-1)}>L1</ControllerTabbing>
            <div className="flex">
                {NAVIGATION.map((menu) => (
                    <div
                        key={menu}
                        className={`px-2 sm:px-4 border-b-2 cursor-pointer text-white border-white ${
                            active === menu
                                ? "opacity-100"
                                : "opacity-40 hover:opacity-80"
                        }`}
                        onClick={() => setActive(menu)}
                    >
                        <span>{menu.toUpperCase()}</span>
                    </div>
                ))}
            </div>
            <ControllerTabbing onClick={nextMenu(1)}>R1</ControllerTabbing>
            <CharacterStatus />
        </div>
    );
};

const CharacterStatus: React.FC = () => {
    const today = new Date();
    const remainingDays = Math.ceil(
        (new Date(today.getFullYear(), 11, 31).getTime() - today.getTime()) /
            (1000 * 60 * 60 * 24)
    );
    const resourceStyles: Record<ResourceType, string[]> = {
        [ResourceType.LIFE]: ["border-life-cost", "bg-life-cost"],
        [ResourceType.MANA]: ["border-mana-cost", "bg-mana-cost"],
        [ResourceType.FLAIR]: ["border-flair-cost", "bg-flair-cost"],
        [ResourceType.FOCUS]: ["border-focus-cost", "bg-focus-cost"],
    };

    return (
        <div
            className={`absolute max-sm:w-full sm:right-0 flex bottom-0 h-7 sm:h-full ${styles.statusAnim}`}
        >
            <div className="absolute w-[90%] sm:w-[130%] -right-4 h-full sm:skew-x-[-30deg] bg-gradient-to-l from-sea-green/50 from-75%"></div>
            <div className="w-full p-1 sm:p-2 flex max-sm:justify-end text-base z-1 relative whitespace-nowrap h-full gap-3">
                <div className="sm:grid sm:grid-cols-2 sm:gap-x-4 sm:gap-y-2 text-xs sm:text-sm/3 max-sm:flex max-sm:gap-3 max-sm:justify-start h-full">
                    {Object.entries(RESOURCE_COLORS).map(([type, value]) => (
                        <div
                            key={type}
                            className={`${value} flex gap-2 h-full items-center justify-end`}
                        >
                            <span>{type}</span>
                            <div
                                className={`h-3 sm:h-full w-8 sm:w-12 rounded-sm border flex justify-end p-0.5 ${
                                    resourceStyles[type as ResourceType][0]
                                }`}
                            >
                                <div
                                    className={`h-full rounded-[1px] ${
                                        resourceStyles[type as ResourceType][1]
                                    }`}
                                    style={{
                                        width: `${Math.round(
                                            (remainingDays / 365) * 100
                                        )}%`,
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="h-full aspect-square border border-white rounded-sm sm:rounded-semi text-xs sm:text-lg flex justify-center items-center relative">
                    <span>{getLevel()}</span>
                </div>
            </div>
        </div>
    );
};

const Playtime: React.FC = () => {
    return (
        <div className="group absolute max-sm:right-0 sm:left-0 max-sm:top-0 sm:bottom-0 p-1 flex max-sm:justify-end gap-1 whitespace-nowrap text-xxs sm:text-sm tracking-wide">
            <span className="group-hover:opacity-0 transition-opacity">
                Hours Played: {PLAYTIME} Hrs
            </span>
            <div
                data-mobiletext="Research, design, and development time"
                className="opacity-0 transition-opacity group-hover:opacity-100 absolute"
            >
                <span>
                    Time spent researching, designing, and developing the
                    website
                </span>
            </div>
        </div>
    );
};

const ControllerTabbing: React.FC<{
    children: React.ReactNode;
    onClick: () => void;
}> = ({ children, onClick }) => {
    return (
        <button
            className={`${styles.controllerTab} active:scale-90 text-xs sm:text-sm h-4 sm:h-6 px-2 sm:px-4 flex items-center justify-center bg-white text-black`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
