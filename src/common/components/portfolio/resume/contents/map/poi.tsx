import { MutableRefObject, useContext } from "react";
import { Details, POIType } from "./details";
import { SelectionContext } from "./map";

type Location = {
    type: POIType,
    pos: number[],
    location: string,
    explored?: boolean,
    details: Details[]
}

const SIZE = 36;
const LOCATIONS = [
    {
        type: POIType.Education,
        pos: [78.3, 57.2],
        location: "Singapore",
        explored: true,
        details: [
            {
                title: "Catholic Junior College",
                type: POIType.Education,
                description: "MOE-based scholarship."
            },
            {
                title: "Saint Joseph's Institution",
                type: POIType.Education,
                description: "MOE-based scholarship."
            }
        ]
    },
    {
        type: POIType.EduWork,
        pos: [27.8, 30.6],
        location: "United States",
        explored: true,
        details: [
            {
                title: "Autonomy Robotics Cognition Lab",
                type: POIType.Work,
                city: "College Park, Maryland",
                job: "Research Assistant",
                timeStart: "May 2019",
                timeEnd: "Jan 2022"
            },
            {
                title: "Trait's AI",
                type: POIType.Work,
                city: "Remote",
                job: "AI Intern",
                timeStart: "Sep 2018",
                timeEnd: "May 2019"
            },
            {
                title: "Office of Multi-Ethnic Student Education",
                type: POIType.Work,
                city: "College Park, Maryland",
                job: "Tutor",
                timeStart: "Sep 2018",
                timeEnd: "Dec 2019"
            },
            {
                title: "University of Maryland, College Park",
                type: POIType.Education,
                city: "College Park, Maryland",
                job: "Bachelor of science, mathematics minor.",
                timeStart: "Sep 2016",
                timeEnd: "Dec 2019"
            }
        ]
    },
    {
        type: POIType.Work,
        pos: [79.2, 62.2],
        location: "Indonesia",
        explored: true,
        details: [
            {
                title: "Jalinan Interaksi Nusantara",
                type: POIType.Work,
                city: "Tangerang, Banten",
                job: "Fullstack Developer",
                timeStart: "Sep 2023",
                timeEnd: "Current"
            },
            {
                title: "Tokopedia",
                type: POIType.Work,
                city: "Jakarta, DKI Jakarta",
                job: "Backend Engineer (People and Finance team)",
                timeStart: "Jan 2021",
                timeEnd: "Jun 2022"
            }
        ]
    },
    {
        type: POIType.EduWork,
        pos: [17.9, 23.3],
        location: "Canada",
        details: [
            {
                title: "??????????",
                city: "Vancouver, British Columbia"
            }
        ]
    },
    {
        type: POIType.EduWork,
        pos: [48.5, 21.8],
        location: "United Kingdom",
        details: [
            {
                title: "??????????",
                city: "London, England"
            }
        ]
    },
    {
        type: POIType.EduWork,
        pos: [49.8, 21.5],
        location: "Netherlands",
        details: [
            {
                title: "??????????",
                city: "???????, Amsterdam"
            }
        ]
    },
    {
        type: POIType.EduWork,
        pos: [51.5, 21.5],
        location: "Germany",
        details: [
            {
                title: "??????????",
                city: "???????, Berlin"
            }
        ]
    },
    {
        type: POIType.EduWork,
        pos: [49.2, 23.8],
        location: "France",
        details: [
            {
                title: "??????????",
                city: "???????, Paris"
            }
        ]
    },
    {
        type: POIType.EduWork,
        pos: [47.3, 29.8],
        location: "Spain",
        details: [
            {
                title: "??????????",
                city: "???????, Madrid"
            }
        ]
    },
    {
        type: POIType.EduWork,
        pos: [51.9, 28.7],
        location: "Italy",
        details: [
            {
                title: "??????????",
                city: "???????, Rome"
            }
        ]
    },
    {
        type: POIType.EduWork,
        pos: [53.9, 22],
        location: "Poland",
        details: [
            {
                title: "??????????",
                city: "???????, Warsaw"
            }
        ]
    },
    {
        type: POIType.EduWork,
        pos: [52.5, 16.7],
        location: "Sweden",
        details: [
            {
                title: "??????????",
                city: "???????, Stockholm"
            }
        ]
    },
    {
        type: POIType.EduWork,
        pos: [77.7, 55.7],
        location: "Malaysia",
        details: [
            {
                title: "??????????",
                city: "???????, Kuala Lumpur"
            }
        ]
    },
    {
        type: POIType.EduWork,
        pos: [87.2, 83.9],
        location: "Australia",
        details: [
            {
                title: "??????????",
                city: "Melbourne, Victoria"
            }
        ]
    },
    {
        type: POIType.EduWork,
        pos: [95.4, 83.9],
        location: "New Zealand",
        details: [
            {
                title: "??????????",
                city: "???????, Auckland"
            }
        ]
    },
    {
        type: POIType.EduWork,
        pos: [86.1, 32.9],
        location: "Japan",
        details: [
            {
                title: "??????????",
                city: "???????, Tokyo"
            }
        ]
    },
]
const POIs: React.FC<{
    poiRef: MutableRefObject<HTMLDivElement | null>,
}> = ({ poiRef }) => {
    const { selected, setSelected } = useContext(SelectionContext);

    return (
        <div ref={poiRef} className="h-full absolute top-0 left-0 z-[4] aspect-[41/19] transition-[width,height,left,top]">
            {
                LOCATIONS.map((location: Location, i: number) => {
                    const setDetailsTo = () => {
                        setSelected({ location: location.location, details: location.details })
                    }

                    return <div key={i} className={`absolute flex items-center justify-center group/loc text-base cursor-pointer hover:z-[2] ${location.explored ? "text-gold" : "text-white"}`} style={{
                        width: `${SIZE}px`,
                        height: `${SIZE}px`,
                        transform: `translate(-${SIZE / 2}px, -${SIZE / 2}px)`,
                        left: `${location.pos[0]}%`,
                        top: `${location.pos[1]}%`
                    }} onClick={setDetailsTo}>
                        <div className={`h-[2px] transition-width ${selected?.location === location.location ? "w-[300%]" : "w-0 group-hover/loc:w-[300%]"} absolute z-[0] ${location.explored ? "bg-gold" : "bg-white"}`} />
                        <div className={`w-[2px] transition-height  ${selected?.location === location.location ? "h-[300%]" : "h-0 group-hover/loc:h-[300%]"} absolute z-[0] ${location.explored ? "bg-gold" : "bg-white"}`} />
                        <Location xPos={location.pos[0]} location={location.location} explored={location.explored} />
                        <CenterIcon isSelected={selected?.location === location.location} type={location.type} explored={location.explored} />
                    </div>
                })
            }
        </div>
    )
}

const Location: React.FC<{
    xPos: number,
    location: string,
    explored?: boolean,
}> = ({ xPos, location, explored }) => {
    const { selected } = useContext(SelectionContext);

    return (
        <div className={`absolute ${location === selected?.location ? "visible" : "group-hover/loc:visible invisible"} whitespace-nowrap bg-black px-2 border-2 ${explored ? "border-gold" : "border-white"}`} style={{
            top: `-${SIZE / 2}px`,
            ...(xPos >= 90 ? { right: `${SIZE}px` } : { left: `${SIZE}px` })
        }}>
            <div className={`absolute right-0 h-full bg-black ${location === selected?.location ? "w-0" : "w-full group-hover/loc:w-0"} transition-width duration-500`} />
            {location}
        </div>
    )
}

const CenterIcon: React.FC<{ isSelected: boolean, type: POIType, explored?: boolean }> = ({ isSelected, type, explored }) => {
    return (
        <div className={`${isSelected ? "w-full border-2 h-full" : "group-hover/loc:w-full group-hover/loc:h-full h-0 w-0 group-hover/loc:border-2"} transition-[height,width] flex items-center justify-center rounded-full z-[1] bg-black ${explored ? "border-gold" : "border-white"}`}>
            <div className={`${isSelected ? "w-0" : "w-[50%] group-hover/loc:w-0 group-hover/loc:opacity-100 opacity-0"} delay-200 transition-width h-full right-[50%] absolute rounded-l-full bg-black`} />
            <div className={`${isSelected ? "w-0" : "w-[50%] group-hover/loc:w-0 group-hover/loc:opacity-100 opacity-0"} delay-200 transition-width h-full left-[50%] absolute rounded-r-full bg-black`} />
            {
                (() => {
                    switch (type) {
                        case POIType.Education:
                            return <i className="z-[2] ri-school-line" />;
                        case POIType.Work:
                            return <i className="z-[2] ri-briefcase-4-line" />;
                        case POIType.EduWork:
                            return <i className="z-[2] ri-building-line" />;
                    }
                })()
            }
        </div>
    )
}

export default POIs;