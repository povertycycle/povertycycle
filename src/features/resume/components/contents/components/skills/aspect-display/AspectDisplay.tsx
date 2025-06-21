import { Fragment, useContext } from "react";
import { AspectType, SkillTab } from "../constants";
import { AspectColor, AspectColorTypes } from "../interfaces";
import {
    AspectArtsIcon,
    AspectNatureIcon,
    AspectRecreationIcon,
    AspectScienceIcon,
} from "./Icons";
import { AspectsContext } from "../store";

interface Aspect {
    description: string;
    color: AspectColor;
    icon: JSX.Element;
}

const ASPECTS: Record<AspectType, Aspect> = {
    [AspectType.SCIENCE]: {
        description:
            "An aspect assembled from the uncharted depths of knowledge; the mind revels in its enigmatic concepts.",
        color: AspectColor.GREEN,
        icon: <AspectScienceIcon />,
    },
    [AspectType.ARTS]: {
        description:
            "An aspect crafted from the endless well of imagination; the soul wallows in the beauty it evokes.",
        color: AspectColor.BLUE,
        icon: <AspectArtsIcon />,
    },
    [AspectType.RECREATION]: {
        description:
            "An aspect forged from the pinnacle of extreme discipline; the body basks in all of its vigorous glories.",
        color: AspectColor.RED,
        icon: <AspectRecreationIcon />,
    },
    [AspectType.NATURE]: {
        description:
            "An aspect molded from the vast history of men; none knows the full potential of its reaches.",
        color: AspectColor.YELLOW,
        icon: <AspectNatureIcon />,
    },
};

const ASPECTS_COLORS: Record<AspectColor, AspectColorTypes> = {
    [AspectColor.GREEN]: {
        background: "from-aspect-green/30",
        title: "from-aspect-green via-aspect-green",
    },
    [AspectColor.BLUE]: {
        background: "from-aspect-blue/30",
        title: "from-aspect-blue via-aspect-blue",
    },
    [AspectColor.RED]: {
        background: "from-aspect-red/40",
        title: "from-aspect-red via-aspect-red",
    },
    [AspectColor.YELLOW]: {
        background: "from-aspect-yellow/40",
        title: "from-aspect-yellow via-aspect-yellow",
    },
};

export const AspectDisplay: React.FC = () => {
    const { setActiveTab, setAspect } = useContext(AspectsContext);
    const aspects = Object.keys(ASPECTS) as AspectType[];

    return (
        <div className="flex w-full h-full max-sm:flex-col">
            {aspects.map((aspect, i) => {
                const aspectData = ASPECTS[aspect];
                const colors = ASPECTS_COLORS[aspectData.color];
                const setActive = () => {
                    setAspect(aspect);
                    setActiveTab(SkillTab.TALENTS);
                };
                return (
                    <Fragment key={aspect}>
                        {i !== 0 && (
                            <div
                                className={`shrink-0 max-sm:bg-gradient-to-l sm:bg-gradient-to-b from-transparent via-gold rounded-full w-full h-0.5 sm:h-full sm:w-0.5`}
                            />
                        )}
                        <div
                            className="flex h-full w-full cursor-pointer"
                            onClick={setActive}
                        >
                            <div
                                className={
                                    "group/aspects w-full h-full relative p-4 flex items-center justify-center overflow-hidden"
                                }
                            >
                                <div className="relative w-full z-2 flex flex-col gap-2 sm:gap-6 items-center my-auto">
                                    <div
                                        className={`text-base sm:text-lg bg-gradient-to-r ${colors.title} via-50% to-white to-50% bg-[length:200%_100%] [background-position-x:100%] duration-400 group-hover/aspects:[background-position:0_100%] text-transparent bg-clip-text`}
                                    >
                                        {aspect}
                                    </div>
                                    <div className="max-sm:hidden sm:w-20 aspect-square rounded-full shrink-0 relative">
                                        {aspectData.icon}
                                    </div>
                                    <div
                                        className={`text-base max-sm:hidden relative w-full bg-gradient-to-r from-white via-white to-transparent via-50% to-50% bg-[length:200%_100%] [background-position-x:100%] duration-400 group-hover/aspects:[background-position:0_100%] text-transparent font-bold bg-clip-text overflow-hidden tracking-normal font-century-gothic text-center italic`}
                                    >
                                        {aspectData.description}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fragment>
                );
            })}
        </div>
    );
};
