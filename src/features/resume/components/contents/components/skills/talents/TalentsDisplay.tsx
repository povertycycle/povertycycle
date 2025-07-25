import {
    checkOverlap,
    getLevel,
    getExperienceData,
} from "@/features/resume/utils/math";
import React, {
    Dispatch,
    Fragment,
    SetStateAction,
    memo,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";
import { AspectType } from "../constants";
import { TalentType } from "../interfaces";
import { PATCH_NOTES } from "../patch-notes/PatchNotesDisplay";
import { AspectsContext } from "../store";
import { Talent, TalentAbility, ViewMode } from "./interfaces";
import talentData from "./talents.json";
import { CUSTOM_ICONS } from "@/constants/icons";
import { RESOURCE_COLORS, ResourceType } from "@/constants/colors";

const { SIZE, GAP } = { SIZE: 48, GAP: 24 };
const OFFSET_IN_PX = SIZE + 4;
const TALENTS = talentData.talents as Record<string, Talent | undefined>;
const MAX_WIDTH = 9;
const MAX_HEIGHT = 10;
const TALENTS_WIDTH = MAX_WIDTH * SIZE + (MAX_WIDTH - 1) * GAP;
const TALENTS_HEIGHT = MAX_HEIGHT * SIZE + MAX_WIDTH * GAP;

const BRANCHES: Record<AspectType, TalentType[]> = {
    [AspectType.SCIENCE]: [TalentType.ENGINEERING, TalentType.THEORY],
    [AspectType.ARTS]: [TalentType.FORM, TalentType.STUDY],
    [AspectType.RECREATION]: [TalentType.ENTERTAINMENT, TalentType.KNOWLEDGE],
    [AspectType.NATURE]: [TalentType.APPLICATION, TalentType.ESSENCE],
};

const VIEW_MODE_ICON: { [key in ViewMode]: string } = {
    [ViewMode.TREE]: "ri-git-fork-line",
    [ViewMode.LIST]: "ri-align-justify",
};

const ICON_COLORS: { [key in AspectType]: string } = {
    [AspectType.SCIENCE]: "bg-aspect-green-darker",
    [AspectType.ARTS]: "bg-aspect-blue-darker",
    [AspectType.RECREATION]: "bg-aspect-red-darker",
    [AspectType.NATURE]: "bg-aspect-yellow-darker",
};

const LIST_COLORS: { [key in AspectType]: string[] } = {
    [AspectType.SCIENCE]: [
        "via-aspect-green-darker/50",
        "from-aspect-green/75",
    ],
    [AspectType.ARTS]: ["via-aspect-blue-darker/50", "from-aspect-blue/75"],
    [AspectType.RECREATION]: ["via-aspect-red-darker/50", "from-aspect-red/75"],
    [AspectType.NATURE]: [
        "via-aspect-yellow-darker/50",
        "from-aspect-yellow/75",
    ],
};

const TALENT_TREES: { [key in TalentType]: number[] } = {
    [TalentType.ENGINEERING]: Array.from(
        { length: 95 - 48 },
        (_, index) => index + 48
    ),
    [TalentType.THEORY]: Array.from({ length: 48 }, (_, index) => index),
    [TalentType.FORM]: Array.from(
        { length: 199 - 151 },
        (_, index) => index + 151
    ),
    [TalentType.STUDY]: Array.from(
        { length: 151 - 95 },
        (_, index) => index + 95
    ),
    [TalentType.ENTERTAINMENT]: Array.from(
        { length: 300 - 245 },
        (_, index) => index + 245
    ),
    [TalentType.KNOWLEDGE]: Array.from(
        { length: 245 - 199 },
        (_, index) => index + 199
    ),
    [TalentType.APPLICATION]: Array.from(
        { length: 384 - 339 },
        (_, index) => index + 339
    ),
    [TalentType.ESSENCE]: Array.from(
        { length: 339 - 300 },
        (_, index) => index + 300
    ),
};

export const TalentsDisplay: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const { aspect } = useContext(AspectsContext);

    const scrollTo = (dir: -1 | 1) => {
        return () => {
            scrollRef.current?.scrollBy({
                left: dir === -1 ? 0 : window.innerWidth * 2,
                behavior: "smooth",
            });
        };
    };

    return (
        aspect && (
            <div
                ref={scrollRef}
                className="flex w-full max-sm:overflow-x-scroll relative h-full overflow-y-hidden"
            >
                {BRANCHES[aspect].map((category: TalentType, index: number) => {
                    return (
                        <Fragment key={category}>
                            {index !== 0 && (
                                <>
                                    <div
                                        className={`shrink-0 bg-gradient-to-b from-transparent via-gold rounded-full h-full w-0.5`}
                                    />
                                    <div
                                        className="absolute z-10 right-1 top-1 sm:hidden"
                                        onClick={scrollTo(1)}
                                    >
                                        <i className="ri-arrow-right-s-line" />
                                    </div>
                                </>
                            )}
                            {index === 0 && (
                                <div
                                    className="absolute z-10 -right-[calc(100%-4px)] top-1 sm:hidden"
                                    onClick={scrollTo(-1)}
                                >
                                    <i className="ri-arrow-left-s-line" />
                                </div>
                            )}
                            <TalentContents category={category} pos={index} />
                        </Fragment>
                    );
                })}
                <TreeVersion />
            </div>
        )
    );
};

const TalentContents: React.FC<{ category: TalentType; pos: number }> = ({
    category,
    pos,
}) => {
    const [mode, setMode] = useState<ViewMode>(ViewMode.TREE);

    return (
        <div
            className="flex flex-col p-2 sm:p-4 max-sm:w-screen max-sm:shrink-0 sm:w-full relative select-none h-full"
            style={{ zIndex: 2 - pos }}
        >
            <Navigator title={category} mode={mode} setMode={setMode} />
            <div
                className={`z-2 max-sm:mt-12 sm:m-auto h-full flex flex-col relative items-center`}
            >
                {(() => {
                    switch (mode) {
                        case ViewMode.TREE:
                            return <TreeView category={category} />;
                        case ViewMode.LIST:
                            return <ListView category={category} />;
                        default:
                            return null;
                    }
                })()}
            </div>
        </div>
    );
};

const Navigator: React.FC<{
    title: TalentType;
    mode: ViewMode;
    setMode: Dispatch<SetStateAction<ViewMode>>;
}> = ({ title, mode, setMode }) => {
    const REMAINING_POINTS =
        getLevel() * 3 -
        TALENT_TREES[title].reduce(
            (acc: number, id: number) => (acc += TALENTS[id]?.rank ?? 0),
            0
        );

    return (
        <div className="z-1 absolute left-0 top-0 p-2 sm:p-4 flex sm:flex-col gap-4 sm:gap-2">
            <div className="flex flex-col">
                <span>{title.toUpperCase()}</span>
                <span className="text-xs sm:text-sm">
                    {REMAINING_POINTS} POINTS AVAILABLE
                </span>
            </div>
            <div className="flex sm:flex-col gap-2">
                {(Object.values(ViewMode) as ViewMode[]).map((m) => (
                    <div
                        key={m}
                        className={`${
                            mode === m
                                ? "bg-white text-black"
                                : "text-white bg-black cursor-pointer hover:max-w-full max-w-6"
                        } border border-white flex relative overflow-hidden justify-end h-6 transition-max-width rounded-sm`}
                        onClick={() => setMode(m)}
                    >
                        <div className="h-full w-full px-4 flex items-center sm:absolute overflow-hidden whitespace-nowrap text-xs sm:text-sm">
                            {m.toUpperCase().replace("_", " ")}
                        </div>
                        <div className="flex items-center justify-center h-full aspect-square shrink-0 bg-inherit z-2 rotate-180 text-sm">
                            <i className={VIEW_MODE_ICON[m]} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

type TierList = { [key: string]: number[] };

const ListView: React.FC<{ category: TalentType }> = ({ category }) => {
    const tiers = TALENT_TREES[category].reduce((acc: TierList, id: number) => {
        const y = TALENTS[id]?.y ?? 0;
        if (!acc[y]) acc[y] = [];
        acc[y].push(id);
        return acc;
    }, {});

    return Object.keys(tiers).length === 0 ? (
        <div className="h-full w-full flex justify-center items-center">
            In Progress
        </div>
    ) : (
        <div
            className={`w-full max-w-[480px] h-0 grow flex flex-col px-4 gap-4 overflow-y-scroll form__scrollbar--custom`}
        >
            {Object.keys(tiers).map((tier) => {
                return (
                    <TieredTalents
                        key={tier}
                        tier={tier}
                        talents={tiers[tier]}
                    />
                );
            })}
        </div>
    );
};

const TieredTalents: React.FC<{ tier: string; talents: number[] }> = ({
    tier,
    talents,
}) => {
    const { aspect } = useContext(AspectsContext);
    const color = aspect
        ? [...LIST_COLORS[aspect], ICON_COLORS[aspect]]
        : ["via-bg-sea-blue-dark", "from-sea-blue-dark-50", "bg-sea-blue-dark"];
    const [selected, setSelected] = useState<number[]>([]);

    const collapse = () => {
        setSelected([]);
    };

    return (
        <div className="w-full flex flex-col relative">
            <div
                className={`flex h-full justify-between py-1 bg-gradient-to-r from-transparent via-10% tracking-wider ${color[0]} px-8 text-sm`}
            >
                <div>Tier {parseInt(tier) + 1}</div>
                {selected.length > 0 ? (
                    <div className="cursor-pointer text-sm" onClick={collapse}>
                        <i className="ri-contract-up-down-line" />
                    </div>
                ) : null}
            </div>
            <div className="w-full bg-gradient-to-r from-transparent via-10% via-gold h-0.5 shrink-0" />
            <div className="flex flex-col w-full px-2 py-1 gap-2">
                {talents.map((talent: number, index: number) => {
                    const talentData = TALENTS[talent];
                    return (
                        talentData && (
                            <ListedTalent
                                id={talent}
                                active={selected.includes(talent)}
                                setSelected={setSelected}
                                talent={talentData}
                                color={color}
                                key={index}
                            />
                        )
                    );
                })}
            </div>
            <div className="w-full bg-gradient-to-r from-transparent via-10% via-gold h-0.5 shrink-0" />
        </div>
    );
};

const ListedTalent = memo(
    ({
        id,
        active,
        talent,
        color,
        setSelected,
    }: {
        id: number;
        active: boolean;
        talent: Talent;
        color: string[];
        setSelected: Dispatch<SetStateAction<number[]>>;
    }) => {
        const { p, req } = getExperienceData(
            talent.experience,
            talent.rank,
            talent.maxRank
        );
        const activate = () => {
            setSelected((prev) => {
                if (prev.includes(id))
                    return prev.filter((val) => {
                        return val != id;
                    });
                return prev.concat([id]);
            });
        };

        return (
            <div
                className="group/listed w-full relative flex flex-col cursor-pointer px-2"
                onClick={activate}
            >
                <div className="z-2 text-xs sm:text-sm flex items-center justify-between px-4">
                    <span className="group-hover/listed:translate-x-2 transition-transform">
                        {talent.name}
                    </span>
                    <div className="h-full flex justify-end gap-4">
                        <span>{`${talent.experience} ${
                            talent.experience > 1 ? "years" : "year"
                        }`}</span>
                        <div className="flex -skew-x-[24deg] gap-0.5 sm:gap-1 h-full items-center">
                            {Array.from({ length: talent.maxRank })
                                .map((_, index: number) => (
                                    <div
                                        className={`${
                                            index < talent.rank
                                                ? "bg-gold"
                                                : "bg-gold-gray"
                                        } h-2 aspect-square`}
                                    />
                                ))
                                .reverse()}
                        </div>
                    </div>
                </div>
                <div
                    className={`${
                        active ? "max-h-96" : "max-h-0"
                    } duration-400 transition-[max-height] w-full px-4 overflow-hidden`}
                >
                    <div className="w-full h-full flex flex-col gap-2 justify-center py-4">
                        <div className="w-full flex gap-4">
                            <IconImage
                                active={talent.ability.active}
                                taken={talent.rank > 0}
                                icon={talent.icon}
                                color={color[2]}
                            />
                            <div className="flex flex-col justify-center tracking-wider text-xxs sm:text-sm">
                                <span>
                                    Experience: {talent.experience}{" "}
                                    {talent.experience > 1 ? "years" : "year"}
                                </span>
                                <p>{req}</p>
                            </div>
                        </div>
                        <div className="w-full h-1 rounded-full overflow-hidden bg-gold-gray">
                            <div
                                className="h-full bg-gold/75"
                                style={{
                                    width: active
                                        ? `${Math.round(p * 100)}%`
                                        : 0,
                                }}
                            ></div>
                        </div>
                        <div className="flex flex-col w-full text-xs sm:text-sm">
                            <AbilityDescription ability={talent.ability} />
                        </div>
                        <div className="flex flex-col font-century-gothic text-sm font-medium text-gold">
                            <p>
                                {talent.description === ""
                                    ? "??????????"
                                    : talent.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
);

interface DetailsPayload {
    talent: Talent;
    x: number;
    bottom: number;
}

const TreeView: React.FC<{ category: TalentType }> = ({ category }) => {
    const [details, setDetails] = useState<DetailsPayload | null>(null);

    return (
        <div className="max-sm:scale-50 max-sm:h-0 max-sm:grow sm:h-fit my-auto relative flex items-center justify-center">
            <div
                className="absolute max-sm:my-auto"
                style={{
                    width: `${TALENTS_WIDTH}px`,
                    height: `${TALENTS_HEIGHT}px`,
                }}
            >
                <TalentTree category={category} setDetails={setDetails} />
                {details && <Details data={details} />}
            </div>
        </div>
    );
};

const TalentTree = memo(
    ({
        category,
        setDetails,
    }: {
        category: TalentType;
        setDetails: Dispatch<SetStateAction<DetailsPayload | null>>;
    }) => {
        const tree = TALENT_TREES[category];
        const { aspect } = useContext(AspectsContext);
        const color = aspect ? ICON_COLORS[aspect] : "bg-sea-blue-dark";

        return tree.length === 0 ? (
            <div className="h-full w-full flex justify-center items-center">
                In Progress
            </div>
        ) : (
            <>
                {tree.map((id: number, index: number) => {
                    const talentData = TALENTS[id];
                    return (
                        talentData && (
                            <TalentImage
                                key={index}
                                talent={talentData}
                                color={color}
                                setDetails={setDetails}
                            />
                        )
                    );
                })}
                <Branches tree={tree} />
            </>
        );
    }
);

const TalentImage: React.FC<{
    talent: Talent;
    color: string;
    setDetails: Dispatch<SetStateAction<DetailsPayload | null>>;
}> = ({ talent, color, setDetails }) => {
    const ref = useRef<HTMLDivElement>(null);
    const enter = () => {
        if (ref.current) {
            const bound = ref.current.getBoundingClientRect();
            setDetails({
                talent: talent,
                x: bound.x ?? ref.current.offsetWidth,
                bottom: window.innerHeight - (bound.bottom ?? 0),
            });
        }
    };

    const leave = () => {
        setDetails(null);
    };

    return (
        <div
            className="absolute"
            style={{
                left: `${talent.x * (SIZE + GAP)}px`,
                top: `${talent.y * (SIZE + GAP)}px`,
                width: `${SIZE}px`,
                height: `${SIZE}px`,
            }}
        >
            <div
                className="h-full w-full"
                ref={ref}
                onMouseEnter={enter}
                onMouseLeave={leave}
            >
                <IconImage
                    active={talent.ability.active}
                    taken={talent.rank > 0}
                    icon={talent.icon}
                    color={color}
                />
            </div>
            <div
                className={`${
                    talent.rank
                        ? "text-gold border-gold"
                        : "text-gold-gray border-gold-gray"
                } absolute rounded-semi text-sm/4 -right-5 -bottom-1.5 px-1 z-3 bg-black border-2`}
            >
                {talent.rank}/{talent.maxRank}
            </div>
        </div>
    );
};

const IconImage: React.FC<{
    active: boolean;
    taken: boolean;
    icon: string;
    color: string;
}> = ({ active, taken, icon, color }) => {
    const customData = icon.startsWith("cust")
        ? CUSTOM_ICONS[icon.replace("cust-", "")]
        : null;
    return (
        <div
            className={`${active ? "rounded-[0.375rem]" : "rounded-full"} ${
                taken
                    ? `border-gold ${
                          customData ? customData.background : color
                      }`
                    : "text-[#BFBFBF] bg-sea-blue-gray border-gold-gray"
            } border-2 shadow-[inset_0_0_8px_black] relative z-2 aspect-square overflow-hidden shrink-0 flex items-center justify-center`}
            style={{
                fontSize: `${Math.round(((SIZE * 2) / 3) * 10) / 10}px`,
                height: `${SIZE}px`,
            }}
        >
            {customData ? (
                customData.icon
            ) : icon.startsWith("ri") ? (
                <i className={icon} />
            ) : (
                <i className="ri-question-mark" />
            )}
        </div>
    );
};

const Branches: React.FC<{ tree: number[] }> = ({ tree }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!canvasRef.current) return;
        const context = canvasRef.current.getContext("2d");
        if (!context) return;
        context.clearRect(0, 0, TALENTS_WIDTH, TALENTS_HEIGHT);

        const drawArrow = (
            x1: number,
            y1: number,
            x2: number,
            y2: number,
            taken: boolean
        ) => {
            context.beginPath();
            context.moveTo(x1, y1);
            context.lineTo(x2, y2);
            context.strokeStyle = taken ? "#E5B80B" : "#606060";
            context.lineWidth = 2;
            context.stroke();

            const angle = Math.atan2(y2 - y1, x2 - x1);
            const arrowSize = 10;
            context.beginPath();
            context.moveTo(
                x2 - arrowSize * Math.cos(angle - Math.PI / 6),
                y2 - arrowSize * Math.sin(angle - Math.PI / 6)
            );
            context.lineTo(x2, y2);
            context.lineTo(
                x2 - arrowSize * Math.cos(angle + Math.PI / 6),
                y2 - arrowSize * Math.sin(angle + Math.PI / 6)
            );
            context.fillStyle = taken ? "#E5B80B" : "#606060";
            context.fill();
        };

        tree.forEach((id: number) => {
            const talent = TALENTS[id];

            talent?.children?.forEach((child: string) => {
                const childTalent = TALENTS[child];
                if (!childTalent) return;
                const dir =
                    Math.abs(talent.x - childTalent.x) < 1
                        ? 0
                        : talent.x - childTalent.x > 0
                        ? 1
                        : -1;
                const passivePad =
                    dir !== 0 && !childTalent.ability.active
                        ? (SIZE / 2) * (1 - Math.sin((45 * Math.PI) / 180))
                        : 0;
                drawArrow(
                    talent.x * (SIZE + GAP) + SIZE / 2,
                    talent.y * (SIZE + GAP) + SIZE / 2,
                    childTalent.x * (SIZE + GAP) +
                        SIZE / 2 +
                        dir * (SIZE / 2 - passivePad),
                    childTalent.y * (SIZE + GAP) + passivePad,
                    childTalent.experience > 0 && talent.experience > 0
                );
            });
        });
    }, []);

    return (
        <canvas ref={canvasRef} width={TALENTS_WIDTH} height={TALENTS_HEIGHT} />
    );
};

const Details: React.FC<{ data: DetailsPayload }> = ({ data }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { talent, x, bottom } = data;
    const { p, req } = getExperienceData(
        talent.experience,
        talent.rank,
        talent.maxRank
    );
    const [pos, setPos] = useState<[number, number]>([
        x + OFFSET_IN_PX,
        bottom + OFFSET_IN_PX,
    ]);

    useEffect(() => {
        if (ref.current) {
            const bound = ref.current.getBoundingClientRect();
            if (bound.top < 0 || bound.right > window.innerWidth) {
                setPos((prev) => {
                    const newPos: [number, number] = [
                        bound.right > window.innerWidth
                            ? window.innerWidth - bound.width - 8
                            : prev[0],
                        bound.top < 0 ? prev[1] + bound.top - 8 : prev[1],
                    ];
                    if (checkOverlap(newPos, [x + SIZE, bottom + SIZE]))
                        return [newPos[0], bottom - bound.height - 4];
                    return [newPos[0], newPos[1]];
                });
            }
            return;
        }
    }, []);

    return (
        <div
            ref={ref}
            className="fixed z-[100] font-century-gothic border-gold/75 border-2 rounded-md w-96 select-none bg-black/75 flex flex-col p-3 gap-2"
            style={{
                left: `${pos[0]}px`,
                bottom: `${pos[1]}px`,
            }}
        >
            <div className="flex flex-col w-full">
                <div className="font-market-deco text-lg/5">{talent.name}</div>
                <div className="text-sm">
                    Rank {talent.rank}/{talent.maxRank}
                </div>
            </div>
            <div className="flex flex-col w-full text-sm">
                <AbilityDescription ability={talent.ability} />
            </div>
            <div className="flex flex-col text-sm/4 tracking-wide text-gold">
                <p>
                    {talent.description === ""
                        ? "??????????"
                        : talent.description}
                </p>
            </div>
            <div className="w-full text-sm">
                <div className="flex justify-between">
                    <div>Experience</div>
                    <div>
                        {talent.experience} year{talent.experience > 1 && "s"}
                    </div>
                </div>
                <div
                    className={`w-full rounded-full bg-gold-gray overflow-hidden my-0.5`}
                >
                    <div
                        className={`h-0.5 bg-gold`}
                        style={{ width: `${Math.round(p * 100)}%` }}
                    ></div>
                </div>
                <p className="text-sm tracking-wide">{req}</p>
            </div>
        </div>
    );
};
type AbilityCost = [cost: number, resource: ResourceType];

const AbilityDescription: React.FC<{ ability: TalentAbility }> = ({
    ability,
}) => {
    const abilityCost = ability.cost as AbilityCost[];

    return ability.active ? (
        <>
            <div className="w-full flex justify-between">
                {abilityCost && (
                    <div className="flex gap-2">
                        {abilityCost.map(
                            ([cost, type]: AbilityCost, index: number) => (
                                <span
                                    key={index}
                                    className={RESOURCE_COLORS[type]}
                                >
                                    {cost} {type}
                                    {ability.cast_time?.startsWith("Toggle")
                                        ? "/s"
                                        : ""}
                                </span>
                            )
                        )}
                    </div>
                )}
                {ability.special && <span>{ability.special}</span>}
            </div>
            <div className="w-full flex justify-between">
                {ability.cast_time && <span>{ability.cast_time}</span>}
                {ability.cooldown && <span>{ability.cooldown}s cooldown</span>}
            </div>
        </>
    ) : (
        <div className="flex w-full justify-between">
            <div>Passive</div>
            <div className="flex flex-col">
                {ability.cooldown && <span>{ability.cooldown}s cooldown</span>}
                {ability.special && <span>{ability.special}</span>}
            </div>
        </div>
    );
};

const TreeVersion: React.FC = () => {
    return (
        <div className="fixed whitespace-nowrap bottom-[72px] sm:bottom-12 right-0.5 font-century-gothic text-xs sm:text-sm tracking-wider">
            Tree v{PATCH_NOTES[0].version}
        </div>
    );
};
