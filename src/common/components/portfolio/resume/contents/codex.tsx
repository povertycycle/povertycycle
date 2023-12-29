import { scrollPercent, scrollerHeightValue } from "@/common/utils/scroller";
import styles from "./content.module.scss";
import React, { useState, useRef, useEffect } from "react";
import ControlsDescription from "./controls-description";
import { LayeredBorder } from "@/common/components/utils/borders";

interface Journal {
    [key: number] : {
        title: string,
        content: {
            heading: string,
            description: string[],
        }
    }
} 

const JOURNALS : Journal = {
    0: {
        title: "Introduction",
        content: {
            heading: "Arts & Music Enthusiast",
            description: [
                "Nothing is more fascinating than to fully understand the intricacies behind the work of art and music of a game or a piece of cinema.",
                "Your journey started off with the classics--Star Wars, Jurassic Park, Terminator, and many more--not exactly old though gold nonetheless. Yet from the start, that enjoyment for them was however a shallow and unappreciative one, ignorant of their real beauty.",
                "And with the years of exposure, stumbling across those of which values were burrowed deep within their concepts and designs, the curiosity for their details and techniques grew stronger. Suddenly, the aspiration bloomed, to fully understand the idea behind such celebrated works, and to be able to relish such feelings with the community.",
                "How amazing it is that we were blessed with such magnificence, for there is a whole world of imagination out there waiting to be explored; the works of art that transcend beyond time and space\u2014those that resonate uniquely to their fans\u2014those that can be appreciated by anyone of any background. And so, it was believed that: to truly appreciate their endless creativity, is to really be a human."
            ]
        }
    },
    1 : {
        title: "Website",
        content: {
            heading: "A software engineer with a minor in mathematics.",
            description: [
                "The time does not matter; what matters is the completion.",
                "This personal website was designed and developed as a love letter for the games and the cinemas. It incorporated a number of different styles and concepts to help enrich the experience it meant to provide.",
                "The rain, bubbles, fishes, and buildings were generated randomly with quadratic equations. The icons and shapes were made purely with CSS; no image files were stored in the repository.",
            ]
        }
    },
    ...(Array.from({ length: 20 }).reduce((acc : Journal, _, index) => {
        acc[index + 2] = {
            title: "??????????",
            content: {
                heading: "??????????",
                description: ["??????????"],
            },
        };
        return acc;
    }, {}))
}

const CodexScroller : React.FC<{ height: string, scroll: number }> = ({ height, scroll }) => {
    return (
        <div className="w-[0.25rem] h-full rounded-full flex justify-center relative">
            <div className="w-1 bg-default-white shadow-[0_0_8px_1px_white] rounded-full absolute transition-height duration-500" style={{
                height: height,
                top: `${scroll}%`
            }} />
        </div>
    )
}

const JournalOptions : React.FC<{
    active: number,
    setActive: (active: number) => void
}> = ({
    active,
    setActive
}) => {
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
                <div className="w-[90%] h-full absolute flex flex-col gap-[2px]">
                    {
                        Object.values(JOURNALS).map((journal, index: number) => {
                            const handleChangeActive = () => {
                                setActive(index);
                            }
                            return (
                                <div className={`flex select-none cursor-pointer rounded-[0.25rem] gap-8 px-4 py-1 transition-transform from-60% ${active == index ? "skew-x-[-10deg] bg-gradient-to-r from-default-white text-black translate-x-[2rem]" : "bg-gradient-to-r from-sea-blue-dark/35 from-0% hover:from-sea-blue-dark/75 hover:skew-x-[-10deg] hover:translate-x-[2rem]"}`} key={index} onClick={handleChangeActive}>
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

const JournalDescription : React.FC<{ active: number }> = ({ active }) => {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const [scroll, setScroll] = useState<number>(0);
    const [height, setHeight] = useState<string>("0%");

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
        <div className={`${styles.codexAnimation} gap-4 px-8 pt-8 pb-4 h-full w-full bg-gradient-to-l from-black flex flex-col`} onAnimationEnd={handleScrollHeight}>
            <LayeredBorder gap="4px" step={2} borderColor="white" borderWidth="3px" xAxis={{ start: 1, step: 1, unit: "rem" }} yAxis={{ start: 10, step: -5, unit: "%" }}>
                <div className="bg-gradient-to-l from-transparent via-sea-blue-dark text-center px-8 py-2 text-[2.25rem] w-full">{JOURNALS[active]?.content.heading}</div>
            </LayeredBorder>
            <div className="flex flex gap-4 h-full w-full">
                <LayeredBorder>
                    <div ref={scrollRef} className={`flex flex-col w-full h-full gap-4 overflow-scroll relative bg-gradient-to-l from-sea-blue-dark/35 ${styles.overflowContainer}`} onScroll={handleScroll}>
                        <div className="flex flex-col gap-2 tracking-[0px] h-full absolute">
                            {
                                JOURNALS[active]?.content.description.map((text: string, index: number) => {
                                    return (
                                        <div key={index} className={`flex px-8 py-4  ${index === 0 ? "" : ""}`}>
                                            <span className={`${index === 0 && "text-center italic font-century-gothic text-[1.5rem] tracking-[1px]"} text-[1.25rem]`}>{text}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </LayeredBorder>
                <CodexScroller scroll={scroll} height={height} /> 
            </div>
        </div>

    )
}

const Codex : React.FC = () => {
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