import { scrollPercent, scrollerHeightValue } from "@/common/utils/scroller";
import styles from "../animations.module.scss";
import React, { useState, useRef, useEffect, Dispatch, SetStateAction } from "react";
import ControlsDescription from "../controls-description";

interface Journal {
    [key: number]: {
        title: string,
        content: {
            heading: string,
            flavorText: string,
            description: string[],
        }
    }
}

const JOURNALS: Journal = {
    0: {
        title: "Introduction",
        content: {
            heading: "Arts & Music Enthusiast",
            flavorText: "Nothing is more fascinating\u2014than to fully understand the intricacies behind the work of art and music of a game or a piece of cinema.",
            description: [
                "Your journey started off with the classics--Star Wars, Jurassic Park, Terminator, and many more--not exactly old though gold nonetheless. Yet from the start, that enjoyment for them was however a shallow and unappreciative one, ignorant of their real beauty.",
                "And with the years of exposure, stumbling across those which values were burrowed deep within their concepts and designs, the curiosity for their details and techniques grew stronger. Suddenly, the aspiration bloomed: to fully understand the idea behind such celebrated works, and to be able to relish such feelings with the community.",
                "How amazing it is that we were blessed with such magnificence, for there is a whole world of imagination out there waiting to be explored; the works of art that transcend beyond time and space--those that resonate uniquely to their fans--those that can be appreciated by anyone of any background. And so, it was believed that: to truly appreciate their endless creativity, is to really be a human."
            ]
        }
    },
    1: {
        title: "Website",
        content: {
            heading: "Software Engineer - Minor in Maths",
            flavorText: "How long it takes does not matter; what matters is the completion.",
            description: [
                "This personal website was designed and developed as a love-letter for the games and the cinemas. It incorporated a number of different styles and concepts to help enrich the experience it meant to provide.",
                "The rain, bubbles, fishes, and buildings were generated randomly with quadratic equations. Main menu icons, controller buttons, and some of the skill icons were made purely with CSS; the repository stores no .jpg or .png files. Icons in the talent trees are from remixicon, fontawesome, vectorlogo, various other sources, or are self made with SVGs.",
                "All the contents were dynamically rendered from a list of arrays and objects of the contents; all components were rendered through loops and recursion while the contents were passed as lists.",
                "The website uses custom-made libraries with only psbc.js (PimpTrizkit) and js-gradient.ts were outsourced.",
                "Skill trees took elements and inspired from WoW's talent trees."
            ]
        }
    },
    2: {
        title: "Skills",
        content: {
            heading: "Aspects and Talents",
            flavorText: "Form is temporary, class is permanent.",
            description: [
                "Science represents the Mind. Programming and engineering skills and talents can be explored and discovered here.",
                "Arts represents the Soul. Music and arts skills and talents can be explored and discovered here.",
                "Recreation represent the Body. Physical sports and video games skills and talents can be explored and discovered here.",
                "Nature represent the Life. General and life skills and talents can be explored and discovered here."
            ]
        }
    },
    3: {
        title: "Updates",
        content: {
            heading: "Patch Notes History",
            flavorText: "One can always learn something from one's past mistakes.",
            description: [
                "Version 2.0 (Next Goal):",
                "New design for the website and its contents.",
                "Version 1.6.0 - Current:",
                "New website made with React and NextJS. An improved version of the main menu and a full re-design of the content page.",
                "A new skill, map, inventory, and settings sections, as well as a reworked math for the quadratic equations.",
                "Version 1.0:",
                "Personal website (old) launched using github pages with React and NodeJS.",
            ]
        }
    },
    4: {
        title: "Future",
        content: {
            heading: "Upcoming changes and to-do list",
            flavorText: "The best one can do for oneself is to keep learning and improving.",
            description: [
                "Controller supports for website",
                "Mobile supports for website",
                "Design new icons for skills section",
                "Convert into canvas to draw background animations",
                "Compose background music for the website's ambience"
            ]
        }
    },
    ...(Array.from({ length: 17 }).reduce((acc: Journal, _, index) => {
        acc[index + 5] = {
            title: "??????????",
            content: {
                heading: "??????????",
                flavorText: "??????????",
                description: [],
            },
        };
        return acc;
    }, {}))
}

const CodexScroller: React.FC<{ height: string, scroll: number }> = ({ height, scroll }) => {
    return (
        <div className="w-[0.25rem] h-full rounded-full flex justify-center relative">
            <div className="w-[3px] bg-default-white shadow-[0_0_8px_1px_white] rounded-full absolute transition-height duration-500" style={{
                height: height,
                top: `${scroll}%`
            }} />
        </div>
    )
}

const JournalOptions: React.FC<{ active: number, setActive: Dispatch<SetStateAction<number>> }> = ({ active, setActive }) => {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const [scroll, setScroll] = useState<number>(0);
    const [height, setHeight] = useState<string>("0%");

    const handleScrollHeight = () => {
        if (scrollRef.current) setHeight(scrollerHeightValue(scrollRef.current));
    }

    const handleScroll = (e: any) => {
        setScroll(scrollPercent(e.target));
    };

    return (
        <div className={`${styles.codexAnimation} gap-2 p-8 h-full w-[30%] bg-gradient-to-r from-black flex`} onAnimationEnd={handleScrollHeight}>
            <div ref={scrollRef} className={`flex flex-col gap-2 h-full w-full overflow-y-scroll relative ${styles.overflowContainer}`} onScroll={handleScroll}>
                <div className="w-[90%] h-full absolute flex flex-col gap-[2px] text-[1.25rem]">
                    {
                        Object.values(JOURNALS).map((journal, index: number) => {
                            const handleChangeActive = () => {
                                setActive(index);
                            }
                            return (
                                <div className={`flex select-none cursor-pointer rounded-[0.25rem] gap-4 px-4 py-1 transition-transform from-60% ${active == index ? "skew-x-[-10deg] bg-gradient-to-r from-default-white text-black translate-x-[2rem]" : "bg-gradient-to-r from-sea-blue-dark/35 hover:from-sea-blue-dark/75 hover:skew-x-[-10deg] hover:translate-x-[2rem]"}`} key={index} onClick={handleChangeActive}>
                                    <span className="w-[3rem]">{index.toString().padStart(3, "0")}</span>
                                    <span>{journal.title}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <CodexScroller scroll={scroll} height={height} />
        </div>
    )
}

const JournalDescription: React.FC<{ active: number }> = ({ active }) => {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const [scroll, setScroll] = useState<number>(0);
    const [height, setHeight] = useState<string>("0%");
    const selectedJournal = JOURNALS[active].content;

    useEffect(() => {
        handleScrollHeight();
    }, [active]);

    const handleScrollHeight = () => {
        if (scrollRef.current) setHeight(scrollerHeightValue(scrollRef.current));
    }

    const handleScroll = (e: any) => {
        setScroll(scrollPercent(e.target));
    }

    return (
        <div className={`${styles.codexAnimation} gap-4 px-4 pt-8 pb-4 h-full w-full bg-gradient-to-l from-black/75 flex flex-col select-none`} onAnimationEnd={handleScrollHeight}>
            <div className="w-full items-center text-center text-[2rem] bg-gradient-to-l via-sea-blue-dark/25 flex flex-col gap-2">
                <div className="w-full h-[2px] bg-gradient-to-l via-white/70" />
                {selectedJournal.heading}
                <div className="w-full h-[2px] bg-gradient-to-l via-white/70" />
            </div>
            <div className="flex flex gap-4 h-full w-full">
                <div ref={scrollRef} className={`flex flex-col w-full h-full gap-4 overflow-scroll relative ${styles.overflowContainer}`} onScroll={handleScroll}>
                    <div className="flex flex-col gap-2 tracking-[0px] h-full absolute w-full">
                        <div className="flex w-full bg-gradient-to-l from-sea-blue-dark/35 items-center justify-center">
                            <span className="py-4 px-8 text-center italic font-century-gothic text-gold text-[1.25rem] leading-[2rem] tracking-[1px]">{selectedJournal.flavorText}</span>
                        </div>
                        {
                            selectedJournal.description.map((text: string, index: number) => {
                                return (
                                    <div key={index} className="flex w-full bg-gradient-to-l from-sea-blue-dark/35 justify-end text-end whitespace-preline">
                                        <span className="py-4 text-[1.125rem] px-8">{text}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <CodexScroller scroll={scroll} height={height} />
            </div>
        </div>

    )
}

const Codex: React.FC = () => {
    const [active, setActive] = useState<number>(0);

    return (
        <div className="flex w-full h-full gap-4 justify-between text-[1.5rem]">
            <JournalOptions active={active} setActive={setActive} />
            <div className="flex flex-col gap-2 w-[40%] h-full items-end">
                <JournalDescription active={active} />
                <ControlsDescription tag="codex" />
            </div>
        </div>
    )
}

export default Codex;