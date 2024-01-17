import styles from "../animations.module.scss";
import { useState, useContext, Dispatch, SetStateAction } from "react";
import ControlsDescription from "../controls-description";
import { AspectsContext } from "../../../global-context";
import { TalentTree } from "./talents";
import { AspectArtsIcon, AspectGeneralIcon, AspectPhysiqueIcon, AspectScienceIcon } from "./aspect-icons";

enum AspectColor {
    GREEN = "green",
    BLUE = "blue",
    RED = "red",
    YELLOW = "yellow",
}

interface Aspect { 
    description: string,
    color: AspectColor,
    branches: string[],
    icon: JSX.Element,
}

interface AspectColorTypes {
    background: string,
    title: string,
}

const ASPECTS_COLORS : { [key in AspectColor] : AspectColorTypes } = {
    "green": {
        background: "from-aspect-green/30",
        title: "from-aspect-green via-aspect-green",
    },
    "blue": {
        background: "from-aspect-blue/30",
        title: "from-aspect-blue via-aspect-blue",
    },
    "red": {
        background: "from-aspect-red/40",
        title: "from-aspect-red via-aspect-red",
    },
    "yellow": {
        background: "from-aspect-yellow/40",
        title: "from-aspect-yellow via-aspect-yellow",
    },
}

const ASPECTS : { [key: string] : Aspect } =  {
    "science": {
        description: "An aspect assembled from the uncharted depths of knowledge; the mind revels in its enigmatic concepts.",
        color: AspectColor.GREEN,
        branches: ["engineering", "study"],
        icon: <AspectScienceIcon />,
    }, 
    "arts": {
        description: "An aspect crafted from the endless well of imagination; the soul wallows in the beauty it evokes.",
        color: AspectColor.BLUE,
        branches: ["form", "theory"],
        icon: <AspectArtsIcon />,
    }, 
    "physique": {
        description: "An aspect forged from the pinnacle of extreme discipline; the body basks in all of its vigorous glory.",
        color: AspectColor.RED,
        branches: ["sport", "knowledge"],
        icon: <AspectPhysiqueIcon />,
    }, 
    "general": {
        description: "An aspect molded from the vast history of men; none knows the full potential of its reaches.",
        color: AspectColor.YELLOW,
        branches: ["essence", "application"],
        icon: <AspectGeneralIcon />,
    }
};

const AspectBanner : React.FC<{ aspect: string }> = ({ aspect }) => {
    const aspectData = ASPECTS[aspect];
    const colors = ASPECTS_COLORS[aspectData.color];

    return (
        <div className={"group/aspects w-full h-full relative p-4 flex items-center justify-center overflow-hidden"}>
            <div className={`absolute top-0 left-0 z-[1] transtion-opacity duration-500 opacity-0 group-hover/aspects:opacity-100 h-full w-full bg-gradient-radial ${colors.background}`} />
            <div className="relative w-full h-full z-[2] flex flex-col gap-[1.5rem] items-center pt-[45%]">
                <div className={`text-[2rem] bg-gradient-to-r ${colors.title} via-50% to-white to-50% bg-[length:200%_100%] [background-position-x:100%] duration-400 group-hover/aspects:[background-position:0_100%] text-transparent bg-clip-text`}>{aspect}</div>
                <div className="w-[8rem] h-[8rem] rounded-full shrink-0 relative">{aspectData.icon}</div>
                <div className={`relative w-full bg-gradient-to-r from-white via-white to-transparent via-50% to-50% bg-[length:200%_100%] [background-position-x:100%] duration-400 group-hover/aspects:[background-position:0_100%] text-transparent font-bold bg-clip-text overflow-hidden tracking-[0px] font-century-gothic text-center italic`}>
                    {aspectData.description}
                </div>
            </div>
        </div>
    )
}

const AspectSection : React.FC<{ aspect: string, active: boolean, setActiveAspect: Dispatch<SetStateAction<string>> }> = ({ aspect, active, setActiveAspect }) => {
    const { isAspects, setIsAspects } = useContext(AspectsContext);
    const handleSetActive = () => {
        if (!isAspects) return;
        setActiveAspect(aspect);
        setIsAspects(false);
    }

    return (
        <div className={`flex h-full ${isAspects ? "w-full cursor-pointer" : (active ? "w-full" : "w-0") } shrink-1`} onClick={handleSetActive}>
            {
                isAspects ?
                <AspectBanner aspect={aspect} /> :
                (
                    active ? 
                    <>
                        {
                            ASPECTS[aspect].branches.map((tree: string, index: number) => {
                                return (
                                    <>
                                        {index !== 0 && <div className={`shrink-0 bg-gradient-to-b from-transparent via-gold rounded-[100%] h-full w-[0.2rem]`} />}
                                        <TalentTree key={index} aspect={tree} />
                                    </>
                                )
                            })
                        }
                    </> :
                    null
                )
            }
        </div>
    )
}

const AspectsDisplay : React.FC = () => {  
    const { isAspects } = useContext(AspectsContext);
    const [activeAspect, setActiveAspect] = useState<string>("");

    return (
        <div className={`w-full h-full flex justify-center tracking-[0px] bg-black/40 border-y-[3px] border-gold/75 overflow-hidden ${styles.skillsAnimation}`}>
            {
                Object.keys(ASPECTS).map((aspect: string, index: number) => {
                    return (
                        <>
                            {index !== 0 && isAspects && <div className={`shrink-0 bg-gradient-to-b from-transparent via-gold rounded-[100%] h-full w-[0.2rem]`} />}
                            <AspectSection key={index} aspect={aspect} active={activeAspect === aspect} setActiveAspect={setActiveAspect} />
                        </>
                    )
                })
            }
        </div>
    )
}

const AspectsNavigator : React.FC = () => {
    const { isAspects, setIsAspects } = useContext(AspectsContext);

    const displayAspects = () => {
        setIsAspects(true);
    }

    const displayTalents = () => {
        setIsAspects(false);
    }

    return (
        <div className={`w-full flex gap-4 px-8 select-none h-full overflow-hidden ${styles.aspectsNavAnimation}`}>
            <div className={`${isAspects ? "opacity-100" : "cursor-pointer opacity-50 hover:opacity-75"} h-[75%] px-4 bg-sea-blue-dark flex items-center rounded-b-[0.5rem] border-gold/75 border-x-[3px] border-b-[3px]`} onClick={displayAspects}>Aspects</div>
            <div className={`${!isAspects ? "opacity-100" : "cursor-pointer opacity-50 hover:opacity-75"} h-[75%] px-4 bg-sea-blue-dark flex items-center rounded-b-[0.5rem] border-gold/75 border-x-[3px] border-b-[3px]`} onClick={displayTalents}>Talents</div>
        </div>
    )
}

const Skills : React.FC = () => {
    const [isAspects, setIsAspects] = useState<boolean>(true);
    const value = { isAspects, setIsAspects };

    return (
        <AspectsContext.Provider value={value}>
            <div className={`flex flex-col w-full h-full items-end justify-center text-[1.5rem] font-market-deco`}>
                <AspectsDisplay />
                <div className="flex gap-2 w-full items-between justify-start">
                    <AspectsNavigator />
                    <ControlsDescription tag="skills" />
                </div>
            </div>
        </AspectsContext.Provider>
    )
}

export default Skills;
