import "remixicon/fonts/remixicon.css";
import { Fragment, Dispatch, SetStateAction, memo, useContext, useState, useRef } from "react";
import talentData from "./talents.json";
import styles from "./talents.module.scss";
import { AspectType, AspectsContext, ResourceType, Talent, TalentIcon, TalentType, ViewMode } from "./constants";

const { SIZE, GAP }  = { SIZE: 3, GAP: 1.5 };
const TALENTS = talentData.talents as { [ key: string ] : Talent | undefined };
const MAX_WIDTH = 9;
const MAX_HEIGHT = 10;

const BRANCHES : { [key in AspectType] : TalentType[] } = {
    [AspectType.SCIENCE]: [TalentType.ENGINEERING, TalentType.STUDY],
    [AspectType.ARTS]: [TalentType.FORM, TalentType.THEORY],
    [AspectType.PHYSIQUE]: [TalentType.SPORT, TalentType.KNOWLEDGE],
    [AspectType.GENERAL]: [TalentType.ESSENCE, TalentType.APPLICATION],
}

const ICON_COLORS : { [key in AspectType] : string } = {
    [AspectType.SCIENCE]: "bg-aspect-green-darker",
    [AspectType.ARTS]: "bg-aspect-blue-darker",
    [AspectType.PHYSIQUE]: "bg-aspect-red-darker",
    [AspectType.GENERAL]: "bg-aspect-yellow-darker"
}

const RESOURCE_COLORS : { [key in ResourceType] : string } = {
    [ResourceType.MANA]: "text-mana-cost",
}

const TALENT_TREES : { [key in TalentType] : TalentIcon[] } = {
    [TalentType.ENGINEERING]: [    ], //mobile-development web-development game-development system-engineering
    [TalentType.STUDY]: [
        { id: 0, x: 4, y: 0, children: [1, 0, 1] },
        { id: 1, x: 3, y: 1, children: [1, 0] }, { id: 2, x: 4, y: 1, children: [1, 0] }, { id: 3, x: 5, y: 1, children: [null, 0, 1] },
        { id: 4, x: 2, y: 2, children: [1.4, 4.3, 1.4] }, { id: 5, x: 3, y: 2, children: [null, 0, 1.4] }, { id: 6, x: 4, y: 2, children: [null, 0] }, { id: 7, x: 5, y: 2, children: [1.4, 0] }, { id: 8, x: 6, y: 2, children: [1.4, null, 1] },
        { id: 9, x: 1, y: 3, children: [1.4, 0, 1] }, { id: 10, x: 3, y: 3, children: [1, null, 1.4] }, { id: 11, x: 4, y: 3, children: [null, 0] }, { id: 12, x: 5, y: 3, children: [1.4, null, 1.4] }, { id: 13, x: 7, y: 3, children: [1.4, 0, 1.4] },
        { id: 14, x: 0, y: 4, children: [null, 4.3, 1] }, { id: 15, x: 1, y: 4 }, { id: 16, x: 2, y: 4, children: [null, 0] }, { id: 17, x: 4, y: 4, children: [1.4, 0, 1] }, { id: 18, x: 6, y: 4, children: [null, 0, 1.4] }, { id: 19, x: 7, y: 4, children: [null, 0] }, { id: 20, x: 8, y: 4, children: [null, 4.3] },
        { id: 21, x: 1, y: 5 }, { id: 22, x: 2, y: 5, children: [null, 0] }, { id: 23, x: 3, y: 5, children: [1, 0] }, { id: 24, x: 4, y: 5, children: [1, 0, 1.4] }, { id: 25, x: 5, y: 5, children: [null, 0] }, { id: 26, x: 6, y: 5, children: [1.4, 0] }, { id: 27, x: 7, y: 5, children: [1, null, 1] },
        { id: 28, x: 0, y: 6 }, { id: 29, x: 2, y: 6, children: [null, 0] }, { id: 30, x: 3, y: 6, children: [null, 0] }, { id: 31, x: 4, y: 6, children: [1.4, 0, 1.4] }, { id: 32, x: 5, y: 6, children: [null, 0] }, { id: 33, x: 6, y: 6, children: [null, 0] }, { id: 34, x: 8, y: 6 },
        { id: 35, x: 2, y: 7, children: [null, 4.3, 1] }, { id: 36, x: 3, y: 7 }, { id: 37, x: 4, y: 7, children: [1, 0, 1] }, { id: 38, x: 5, y: 7 }, { id: 39, x: 6, y: 7, children: [1, 4.3] }, 
        { id: 40, x: 3, y: 8, children: [null, 0] }, { id: 41, x: 4, y: 8, children: [1.4, 0, 1.4] }, { id: 42, x: 5, y: 8, children: [null, 0, 1] },
        { id: 43, x: 2, y: 9 }, { id: 44, x: 3, y: 9 }, { id: 45, x: 4, y: 9 }, { id: 46, x: 5, y: 9 }, { id: 47, x: 6, y: 9 },
    ],
    [TalentType.FORM]: [],
    [TalentType.THEORY]: [], // fine-arts", "music", "writings" "theme", "color", "structure" "documentation" "typography" "markup", "accessibility" "design-hierarchy" "uiux"
    [TalentType.SPORT]: [], // "strength", "agility", "dexterity" endurance", "motor soccer 
    [TalentType.KNOWLEDGE]: [],
    [TalentType.ESSENCE]: [], // logic", "initiative", "versatility" analysis", "management cross-referencing research
    [TalentType.APPLICATION]: [],
}

const TalentsDisplay : React.FC = () => {
    const { aspect } = useContext(AspectsContext);

    return (
        aspect ?
        <>
            {
                BRANCHES[aspect].map((tree: TalentType, index: number) => {
                    return (
                        <Fragment key={index}>
                            { index !== 0 && <div className={`shrink-0 bg-gradient-to-b from-transparent via-gold rounded-[100%] h-full w-[0.2rem]`} /> }
                            <TalentTree category={tree} />
                        </Fragment>
                    )
                })
            }
            <TreeVersion />
        </> :
        null
    )
}

const TalentTree : React.FC<{ category: TalentType }> = ({ category }) => {
    const tree = TALENT_TREES[category];
    const [mode, setMode] = useState<ViewMode>(ViewMode.TREE);

    return (
        <div className="flex flex-col p-[1.25rem] items-center justify-center w-full text-[1.25rem] relative select-none">
            <Navigator category={category} mode={mode} setMode={setMode} />
            <div className={`z-[1] flex flex-col relative items-center`} style={{
                width: `${(MAX_WIDTH * SIZE) + ((MAX_WIDTH - 1) * GAP)}rem`,
                height: `${(MAX_HEIGHT * SIZE) + (MAX_WIDTH * GAP)}rem`,
            }}>
                {
                    tree.length === 0 ? 
                    <div className="h-full w-full flex justify-center items-center">In Progress</div> : 
                    (() => {
                        switch (mode) {
                            case ViewMode.TREE:
                                return <TreeView talents={tree} />;
                            case ViewMode.LIST:
                                return <div className="h-full w-full flex justify-center items-center">In Progress</div>;
                            default:
                                return <div className="h-full w-full flex justify-center items-center">In Progress</div>;
                        }
                    })()
                }
            </div>
        </div>
    )
}

const Navigator : React.FC<{ category: TalentType, mode: ViewMode, setMode: Dispatch<SetStateAction<ViewMode>> }> = ({ category, mode, setMode }) => {
    const treeView = () => {
        if (mode === ViewMode.TREE) return;
        setMode(ViewMode.TREE);
    }

    const listView = () => {
        if (mode === ViewMode.LIST) return;
        setMode(ViewMode.LIST);
    }

    return (
        <div className="z-[2] absolute left-0 top-0 p-4 flex flex-col gap-4">
            <div className="flex flex-col">
                <span className="text-[3rem]">{category.toUpperCase()}</span>
                <span>{0} POINTS AVAILABLE</span>
            </div>
            <div className="flex flex-col gap-4 text-[1.5rem] h-[2.5rem]">
                <div className={`${mode === ViewMode.TREE ? "bg-white text-black w-[11rem]" : "text-white bg-black cursor-pointer hover:w-[11rem] w-[2.5rem]"} border-2 border-white flex relative overflow-hidden shrink-0 justify-end h-full transition-width duration-300 group/tree rounded-[0.25rem]`} onClick={treeView}>
                    <div className="h-full w-full px-4 flex items-center absolute overflow-hidden whitespace-nowrap">Tree View</div>
                    <div className="h-full flex items-center justify-center w-[2.5rem] bg-inherit z-[2] rotate-[180deg]"><i className="ri-git-fork-line" /></div>
                </div>
                <div className={`${mode === ViewMode.LIST ? "bg-white text-black w-[11rem]" : "text-white bg-black cursor-pointer hover:w-[11rem] w-[2.5rem]"} border-2 border-white flex relative overflow-hidden shrink-0 justify-end h-full transition-width duration-300 group/tree rounded-[0.25rem]`} onClick={listView}>                   
                    <div className="h-full w-full px-4 flex items-center absolute overflow-hidden whitespace-nowrap">List View</div>
                    <div className="h-full flex items-center justify-center w-[2.5rem] bg-inherit z-[2]"><i className="ri-align-justify" /></div>
                </div>
            </div>
        </div>
    )
}

const TreeView : React.FC<{ talents: TalentIcon[] }> = ({ talents }) => {
    const { aspect } = useContext(AspectsContext);
    const color = aspect ? ICON_COLORS[aspect] : "bg-sea-blue-dark";

    return (
        talents.map((icon: TalentIcon, index: number) => {
            const talentData = TALENTS[icon.id];
            
            return (
                talentData ? 
                <Talent key={index} icon={icon} talent={talentData} color={color} /> :
                null
            )
        })
    )
}

const Talent : React.FC<{ icon: TalentIcon, talent: Talent, color: string }> = ({ icon, talent, color }) => {
    const [details, setDetails] = useState<boolean>(false);

    const showDetails = () => {
        setDetails(true);
    }

    const hideDetails = () => {
        setDetails(false);
    }

    return (
        <div className="absolute" style={{ 
            zIndex: `${(MAX_WIDTH - icon.x) + (10 - icon.y) * MAX_WIDTH}`,
            left: `${icon.x * (SIZE + GAP)}rem`,
            top: `${icon.y * (SIZE + GAP)}rem`,
            width: `${SIZE}rem`, 
            height: `${SIZE}rem`
        }}>
            <div className="flex w-full h-full justify-center absolute">
                <Icon data={talent} color={color} onMouseEnter={showDetails} onMouseLeave={hideDetails} />
                <Branches branches={icon.children} />
            </div>
            {
                details &&
                <Details data={talent} />
            }
        </div> 
    )
}

const Icon = memo(({ data, color, onMouseEnter, onMouseLeave } : { data: Talent, color: string, onMouseEnter: () => void, onMouseLeave: () => void }) => {
    return (
        <div className={`relative z-[2] w-full h-full ${data?.ability.active ? "rounded-[0.375rem]" : "rounded-full"}`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <div className={`${data.rank !== 0 ? `${color} border-gold` : "text-white/50 border-gold-gray bg-sea-blue-gray"} h-full flex items-center justify-center text-[2rem] font-normal w-full z-[2] border-2 shadow-[inset_0_0_8px_black] rounded-[inherit]`}>
                {
                    data.icon.startsWith("ri") ? 
                    <i className={data.icon} /> :
                    <i className="ri-question-mark" />
                }
            </div>
            <div className={`${data.rank ? "text-gold border-gold" : "text-gold-gray border-gold-gray"} absolute rounded-[0.2rem] leading-[1rem] text-[0.9rem] right-[-1.25rem] bottom-[-0.3rem] px-1 z-[3] bg-black border-2`}>
                {data.rank}/{data.maxRank}
            </div>
        </div>
    )
}, (prevData, newData) => { return prevData.data.name === newData.data.name });

const Branches = memo(({ branches } : { branches: (number | null)[] | undefined })  => {
    return (
        branches?.map((magnitude: number | null, index: number)=> {
            return (
                magnitude !== null && 
                (() => {
                    const degree = ((index - 1) * -45);
                    const height = (SIZE / 2 + GAP) / Math.cos(degree) + (index === 1 ? 1 : -1) * (magnitude * 1);
                    const left = - (Math.tan(degree) * (height / 2 - 0.4));
                    const top = SIZE / 2 + ((index - 1)  * Math.sin(degree)) - 0.2;

                    return (
                        <div key={index} className={`z-[1] absolute w-[2px] bg-gold-desaturated ${styles.talentArrow}`} style={{
                            transform: `rotate(${degree}deg)`,
                            height: `${height}rem`,
                            marginLeft: `${left}rem`,
                            top: `${top}rem`,
                        }} />
                    );
                })()
            )
        })
    )
});

const Details : React.FC<{ data: Talent }> = ({ data }) => {
    const expPerRank = Math.round(data.experience / data.rank)
    const p = expPerRank === 0 || data.experience === 0 ? 0 : (data.experience / expPerRank) % 1;
    const req = expPerRank === 0 || data.experience === 0 ? 1 : Math.round((1 - p) * expPerRank * 10) / 10;

    return (
        <div className="absolute z-[100] font-century-gothic tracking-[1px] border-gold/75 border-2 rounded-[0.375rem] w-[16.5rem] select-none bg-black/75 flex flex-col p-[0.75rem] gap-[0.75rem]" style={{
            left: `-${GAP * 2}rem`,
            top: `${SIZE + 1}rem`
        }}>
            <div className="flex flex-col w-full">
                <div className="font-market-deco tracking-[0px] text-[1.25rem] leading-[1.25rem]">{data.name}</div>
                <div className="text-[0.875rem]">Rank {data.rank}/{data.maxRank}</div>
            </div>
            <div className="flex flex-col w-full text-[1.125rem]">
                {
                    data.ability.active ? 
                    <div className="flex flex-col w-full gap-1">
                        { data.ability.resource && <div className={`leading-[1rem] ${RESOURCE_COLORS[data.ability.resource]}`}>{data.ability.cost} {data.ability.resource}</div> }
                        <div className="w-full flex justify-between leading-[1rem]">
                            { data.ability.cast_time && <div>{data.ability.cast_time}</div> }
                            { data.ability.cooldown && <div>{data.ability.cooldown} cooldown</div> }
                        </div>
                    </div> : 
                    <div className="flex w-full justify-between">
                        <div>Passive</div>
                        { data.ability.cooldown && <div>{data.ability.cooldown} cooldown</div> }
                    </div>
                }
            </div>
            <div className="flex flex-col text-[1rem] leading-[1rem] text-gold">
                <div>{data.description === ""? "??????????" : data.description}</div>
            </div>
            <div className="w-full text-[1rem] tracking-[0px]">
                <div className="flex justify-between">
                    <div>Experience</div>
                    <div>{data.experience} year{data.experience > 1 && "s"}</div>
                </div>
                <div className={`w-full rounded-[0.25rem] bg-gold-gray overflow-hidden`}>
                    <div className={`h-[4px] bg-gold`} style={{ width: `${Math.round(p * 100)}%` }}></div>
                </div>
                <div className="text-[0.875rem] tracking-[1px]">{req} year{req > 1 && "s"} needed for next rank</div>
            </div>
        </div>
    )
}

const TreeVersion : React.FC = () => {
    return (
        <div className="absolute bottom-0 right-0 font-century-gothic text-[1.25rem]">Tree v1.0.0.2024.01.20</div>
    )
}

export default TalentsDisplay;