import styles from "./content.module.scss";
import talentStyles from "./talents.module.scss";
import { useState, useContext, Dispatch, SetStateAction, CSSProperties } from "react";
import talentData from "./talents.json";
import ControlsDescription from "./controls-description";
import { TALENT_TREES, TalentIcon } from "./skill-tree";
import { AspectsContext } from "../../global-context";

interface Talent {
    name: string,
    active: boolean,
    points?: string,
}

interface Aspect { 
    description: string,
    colorBase: string[],
    branches: string[],
}

const TALENTS = talentData.talents as { [key: string] : Talent | undefined };
const MAX_WIDTH = 9;
const ASPECTS : { [key: string] : Aspect } =  {
    "science": {
        description: "An aspect assembled from the uncharted depths of knowledge; the mind revels in its enigmatic concepts.",
        colorBase: ["from-aspect-green/40", "from-aspect-green via-aspect-green", "group-hover/aspects:bg-aspect-green/50"],
        branches: ["engineering", "study"],
    }, 
    "arts": {
        description: "An aspect crafted from the endless well of imagination; the soul wallows in the beauty it evokes.",
        colorBase: ["from-aspect-blue/40", "from-aspect-blue via-aspect-blue", "group-hover/aspects:bg-aspect-blue/50"],
        branches: ["forms", "theory"],
    }, 
    "physique": {
        description: "An aspect forged from the pinnacle of extreme discipline; the body basks in all of its vigorous glory.",
        colorBase: ["from-aspect-red/40", "from-aspect-red via-aspect-red", "group-hover/aspects:bg-aspect-red/50"],
        branches: ["sports", "knowledge"],
    }, 
    "general": {
        description: "An aspect molded from the vast history of men; none knows the full potential of its reaches.",
        colorBase: ["from-aspect-yellow/40", "from-aspect-yellow via-aspect-yellow", "group-hover/aspects:bg-aspect-yellow/50"],
        branches: ["essence", "application"],
    }
};


const TalentDescription : React.FC<{ highlight: number }> = ({ highlight }) => {
    const talentDetails = TALENTS[highlight.toString()];

    return (
        <div className="w-full h-full bg-gradient-to-l select-none from-black flex flex-col p-4 gap-[1.5rem] tracking-[0px]">
            <div className="bg-white w-[8rem] h-[8rem]"></div>
            <div className="flex flex-col">
                <span className="text-[2rem]">{talentDetails?.name}</span>
                <span>Talent ID: #{highlight.toString().padStart(3, "0")}</span>
            </div>
        </div>
    )
}

const TalentTree : React.FC<{ aspect: string }> = ({ aspect }) => {
    return (
        <div className="flex flex-col p-4 items-center w-full text-[1.25rem]">
            {/* <span>{section.toUpperCase()}</span>
            <span>0 POINTS AVAILABLE</span> */}
            <div className="h-full flex flex-col relative items-center" style={{
                width: `${(MAX_WIDTH * 3) + (MAX_WIDTH - 1) + 0.2}rem`
            }}>
                {
                    TALENT_TREES[aspect].map((icon: TalentIcon, index: number) => {
                        const talent = TALENTS[icon.id];

                        return (
                            <div className="absolute" style={{
                                left: `${icon.x * 4.5}rem`,
                                top: `${0 + icon.y * 4.5}rem`
                            }}>
                                <div key={index} className={`flex justify-center w-[3rem] h-[3rem] bg-white shadow-[inset_0_0_4px_black] border-2 border-gold absolute ${talent?.active ? "rounded-[0.35rem]" : "rounded-full"}`}>
                                    {
                                        icon.children?.map((magnitude: number | null, index: number)=> {
                                            return (
                                                magnitude !== null ? 
                                                <div key={index} className={`z-[-1] top-[1.5rem] absolute h-[2.5rem] w-[0.2rem] bg-gold ${talentStyles.talentArrow}`} style={{
                                                    height: `${2.55 + (4.5 * magnitude) + Math.abs((index - 1) * magnitude)}rem`,
                                                    marginLeft: `${(index - 1) * 4.15}rem`,
                                                    transform: `rotate(${(index - 1) * -45}deg)`,
                                                }} /> :
                                                null
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const AspectIcon : React.FC<{ color: string, background: string }> = ({ color, background }) => {
    const SIZE = 64;
    const BORDER = 8;

    return (
        <div className="flex gap-2 w-full items-center justify-center relative z-[3]">
            <div className={`transition-width duration-500 group-hover/aspects:w-full w-0 h-[0.25rem] bg-gradient-to-l ${color} rounded-l-[100%]`}></div>
            <div className="shrink-0 flex items-center justify-center rounded-full bg-gradient-to-bl from-white to-black" style={{ width: `${SIZE + BORDER}px`, height: `${SIZE + BORDER}px` }}>
                <div className={`rounded-full bg-white ${background} duration-500 transition-colors`}  style={{ width: `${SIZE}px`, height: `${SIZE}px` }}>
                </div>
            </div>
            <div className={`transition-width duration-500 group-hover/aspects:w-full w-0 h-[0.25rem] bg-gradient-to-r ${color} rounded-r-[100%]`}></div>
        </div>
    )
}

const AspectDescription : React.FC<{ aspect: string }> = ({ aspect }) => {
    const aspectData = ASPECTS[aspect];

    return (
        <div className={"group/aspects flex flex-col items-center relative gap-[1.5rem] justify-center w-full p-4"}>
            <div className={`absolute z-[0] h-full w-full to-transparent bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] opacity-0 group-hover/aspects:opacity-100 duration-500 ${aspectData.colorBase[0]}`} />
            <div className={`text-[2rem] relative bg-gradient-to-r ${aspectData.colorBase[1]} via-50% to-white to-50% bg-[length:200%_100%] text-transparent [background-position-x:100%] bg-clip-text duration-500 group-hover/aspects:[background-position:0_100%]`}>{aspect}</div>
            <AspectIcon color={aspectData.colorBase[0]} background={aspectData.colorBase[2]} />
            <span className={`relative tracking-[0px] font-century-gothic text-center`}>{aspectData.description}</span>
            
            
            {/* 



            



            
            <div className="flex gap-4">
                {

                }
            </div> */}
        </div>
    )
}

const AspectSection : React.FC<{ aspect: string, active: boolean, setActiveAspect: Dispatch<SetStateAction<string>> }> = ({ aspect, active, setActiveAspect }) => {
    const { isAspects, setIsAspects } = useContext(AspectsContext);
    const handleSetActive = () => {
        setActiveAspect(aspect);
        setIsAspects(false);
    }

    return (
        <div className={`flex h-full ${isAspects ? "w-full" : (active ? "w-full" : "w-0") } shrink-1 cursor-pointer`} onClick={handleSetActive}>
            {
                isAspects ?
                <AspectDescription aspect={aspect} /> :
                (
                    active ? 
                    <>
                        {
                            ASPECTS[aspect].branches.map((tree: string, index: number) => {
                                return <TalentTree key={index} aspect={tree} />
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
                            {index !== 0 && <div className={`shrink-0 bg-gradient-to-b from-transparent via-gold rounded-[100%] ${isAspects ? "h-full w-[0.2rem]" : "h-0 w-0"}`}/>}
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
