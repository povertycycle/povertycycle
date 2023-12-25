import { useState } from "react";

const JOURNALS : {
    [key: number] : {
        title: string,
        content: {
            heading: string,
            description: string[],
        }
    }
} = {
    0: {
        title: "Introduction",
        content: {
            heading: "Arts, Music & Games Enthusiast",
            description: [
                "A software engineer with a minor in mathematics.",
                "Nothing is more fascinating than the work of art and music in games and cinema. [Their limitless complexity and beauty transcend time and space]; [to truly appreciate their creativity is to really be a human].",
                "This website was designed and developed as a love letter for their [efforts] in [guiding] everyone through the journeys they made\u2014filled with a [range of emotions]. From the rain, the bubbles, the fishes, and the buildings, all were randomly generated with quadratic equations. And all the icons and shapes were made purely from CSS; no image files were stored in repository.",
            ]
        }
    },
    1: {
        title: "??????",
        content: {
            heading: "??????????",
            description: [
                "??????????"
            ]
        }
    },
    2: {
        title: "??????",
        content: {
            heading: "??????????",
            description: [
                "??????????"
            ]
        }
    },
    3: {
        title: "??????",
        content: {
            heading: "??????????",
            description: [
                "??????????"
            ]
        }
    },
    4: {
        title: "??????",
        content: {
            heading: "??????????",
            description: [
                "??????????"
            ]
        }
    },
}

const Codex : React.FC = () => {
    const [active, setActive] = useState<number>(0);

    return (
        <div className="flex w-full h-full gap-2">
            <div className="w-[30%] h-full text-[2rem] flex flex-col gap-2 py-2 px-2 border-sea-green border-2 backdrop-blur-sm rounded-[0.25rem]">
                {
                    Object.values(JOURNALS).map((journal, index: number) => {
                        const handleChangeActive = () => {
                            setActive(index);
                        }

                        return (
                            <div className="flex cursor-pointer gap-2 group/highlight" key={index} onClick={handleChangeActive}>
                                <div className={`${active === index ? 'bg-opacity-100' : 'bg-opacity-30 group-hover/highlight:bg-opacity-80'} bg-sea-green px-4 py-1`}>
                                    {index.toString().padStart(3, "0")}
                                </div>
                                <div className={`${active === index ? 'bg-opacity-100' : 'bg-opacity-30 group-hover/highlight:bg-opacity-80'} w-full bg-sea-green px-4 py-1`}>
                                    {journal.title}
                                </div>    
                            </div>
                            
                        )
                    })
                }
            </div>
            <div className="w-[40%] h-full">

            </div>
            <div className="w-[40%] h-full text-[1rem] flex flex-col gap-2 py-2 px-2 border-sea-green border-2 backdrop-blur-sm rounded-[0.25rem]">
                <span className="text-[2rem] rounded-[0.25rem]">{JOURNALS[active].content.heading}</span>
                {
                    JOURNALS[active].content.description.map((text: string, index: number) => {
                        return (
                            <span className="text-[1.2rem]" key={index}>{text}</span>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Codex;