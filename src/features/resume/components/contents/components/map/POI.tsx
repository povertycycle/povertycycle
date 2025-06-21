import { MutableRefObject, useContext, useState } from "react";
import { Details, POIType } from "./interfaces";
import styles from "./map.module.scss";
import { SelectionContext } from "./store";

type Location = {
    type: POIType;
    pos: number[];
    location: string;
    unlocked?: boolean;
    details: Details[];
};

const LOCATIONS = [
    {
        type: POIType.Education,
        pos: [78.3, 57.2],
        location: "Singapore",
        unlocked: true,
        details: [
            {
                title: "Catholic Junior College",
                type: POIType.Education,
                icon: "cjc",
                description: ["MOE-based scholarship"],
            },
            {
                title: "Saint Joseph's Institution",
                type: POIType.Education,
                icon: "sji",
                description: ["MOE-based scholarship"],
            },
        ],
    },
    {
        type: POIType.Exploration,
        pos: [27.8, 30.6],
        location: "United States",
        unlocked: true,
        details: [
            {
                title: "Autonomy Robotics Cognition Lab",
                type: POIType.Work,
                icon: "umd",
                city: "College Park, Maryland",
                job: "Research Assistant",
                timeStart: "May 2019",
                timeEnd: "Jan 2022",
                description: [
                    "Researched, designed, and developed FEVA--Fast Events Video Annotation Tool--for Machine Learning Data Video Editing, Annotation, and Visualization.",
                    "Back-end side processng and the APIs were developed using Python and Flask. It processes user-configuration, projects, editable JSON data labels, keypoints, and assets for the client.",
                    "Front-end side display were developed using JavaScript and React.js, utilizing both public and custom-made libraries. It renders the videos and their frames, as well as their data--labels, keypoints, soundwaves, and configurations--with selectable camera angles.",
                    "FEVA was published in January 2023, and was compared with 59 other annotation tools. It was evaluated to perform better than the top 5 state-of-the-art video annotation tools.",
                ],
                externalLink: "https://www.snehesh.com/feva/",
                stack: [
                    "react",
                    "javascript",
                    "python",
                    "flask",
                    "github",
                    "stackoverflow",
                    "vscode",
                    "windows",
                    "arxiv",
                ],
            },
            {
                title: "Trait's AI",
                type: POIType.Work,
                icon: "traits-ai",
                city: "Remote",
                job: "AI Intern",
                timeStart: "Sep 2018",
                timeEnd: "May 2019",
                description: [
                    "Developed an Alexa skill related to crpytocurrency (Bitcoin) with Javascript and AWS Lambda. The purpose of the skill was to educate people about bitcoins through educational quizzes.",
                ],
                stack: [
                    "slack",
                    "javascript",
                    "aws",
                    "trello",
                    "stackoverflow",
                    "vscode",
                    "windows",
                ],
            },
            {
                title: "Office of Multi-Ethnic Student Education",
                type: POIType.Work,
                icon: "umd",
                city: "College Park, Maryland",
                job: "Tutor",
                timeStart: "Sep 2018",
                timeEnd: "Dec 2019",
                description: [
                    "Helps students with homeworks, exams, and concept problems for specified subject. Regularly meet to discuss events and suggestion for improvements in the Tutoring Center.",
                ],
                stack: [
                    "eng",
                    "vscode",
                    "eclipse",
                    "youtube",
                    "wiki",
                    "desmos",
                    "matlab",
                ],
                externalLink: "https://omse.umd.edu/",
            },
            {
                title: "University of Maryland, College Park",
                type: POIType.Education,
                icon: "umd",
                city: "College Park, Maryland",
                job: "Bachelor of science, mathematics minor.",
                timeStart: "Sep 2016",
                timeEnd: "Dec 2019",
                description: [
                    "Graduated with a bachelor's degree in Computer Science and a minor in Mathematics.",
                ],
                stack: [
                    "python",
                    "ruby",
                    "java",
                    "ocaml",
                    "rust",
                    "windows",
                    "linux",
                    "eclipse",
                    "overleaf",
                    "desmos",
                    "matlab",
                    "wolfram",
                    "scholar",
                    "word",
                ],
                externalLink: "https://umd.edu/",
            },
        ],
    },
    {
        type: POIType.Work,
        pos: [79.2, 62.2],
        location: "Indonesia",
        unlocked: true,
        details: [
            {
                title: "Jalinan Interaksi Nusantara",
                type: POIType.Work,
                icon: "jalin",
                city: "Tangerang, Banten",
                job: "Fullstack Developer",
                timeStart: "Sep 2023",
                timeEnd: "Current",
                description: [
                    "Coordinates the code architecture and development of the front end using React.js (Next.js), Typescript, and pure Javascript.",
                    "Established a code standard and guidelines for the team to ensure maintainability, cleanliness, and optimization.",
                    "Coordinates multiple database designs (MySQL) and RESTful API responses (Spring Boot) for the website in collaboration with the other full-stack developers.",
                    "Develops and performs quality control for UI/UX designs under the guidelines given by the main UI/UX designer.",
                    "Performs quality control on the website and maintains the team’s adherence to the development timeline.",
                    "Chairs core team meetings involving different departments and coordinates sprint plannings with the development team.",
                    "Mentors junior with established standards and guidelines to ensure team's cohesion and peak performances.",
                    "The website serves as a personalized platform for content creators that allows them to express their creativity and share their works with their supporters. The framework comprises of Java (Spring Boot) for the back end server, and Next.js (React.js, SCSS, TailwindCSS) for the front end. Databases used are Firebase and MySQL, while the UI/UX designs are conceptualized in Figma.",
                ],
                stack: [
                    "java",
                    "spring",
                    "react",
                    "nextjs",
                    "javascript",
                    "typescript",
                    "mysql",
                    "git",
                    "gitlab",
                    "github",
                    "css",
                    "sass-scss",
                    "gcp",
                    "jira",
                    "figma",
                    "windows",
                    "vscode",
                    "intellij",
                ],
                externalLink: "https://jalintraksi.com/",
            },
            {
                title: "Tokopedia",
                type: POIType.Work,
                icon: "toped",
                city: "Jakarta, DKI Jakarta",
                job: "Backend Engineer (People and Finance team)",
                timeStart: "Jan 2021",
                timeEnd: "Jun 2022",
                description: [
                    "Developed and designed databases, RESTful API endpoints, unit testing, and integration testing for the internal teams.",
                    "Conformed to AGILE methodology standards through the usage of JIRA ticketing system, CI/CD pipelines, and Confluence documentations.",
                    "Collaborated with front-end team and product managers to deliver and improve upon new and existing features.",
                    "Implemented monitoring systems for the analytics and app’s health with Scalyr, Datadog, and NewRelic.",
                    "Suggested and employed new improvements for the overall development workflow of the internal teams.",
                    "Internally used application was designed and developed using Golang to manage data and responses, from and to MySQL databases. Configuration and secrets were stored within the GSM—Google Secret Manager—and the app's stability and health were monitored through logging via Datadog, Scalyr, and New Relic. Any incoming errors passed the threshold were notified through PagerDuty.",
                    "We, the back-end and front-end teams, implemented new features every month in collaboration with the product managers while still maintaining the stability of the existing products. Any discussions were conducted through Google Meet and Slack channels. The proposed designs in Figma were studied closely and translated for a proper database and RESTful API endpoint designs.",
                    "Day to day discussions includes that of new features to be added, important bugs to be fixed, and existing tools to be tested. Any addition or changes made during the sprint planning were recorded in the 'API and Tech' documentation. Any improvements or suggestions that would be helpful for the whole tribes and teams were placed in a larger biweekly discussions.",
                    "Lastly, my work also includes researches to find improvements on the code algorithms and database structures, and to find methods of implementations on features new to the team.",
                ],
                stack: [
                    "go",
                    "mysql",
                    "git",
                    "gitlab",
                    "github",
                    "gcp",
                    "slack",
                    "confluence",
                    "jira",
                    "figma",
                    "windows",
                    "vscode",
                    "ansible",
                ],
            },
        ],
    },
    {
        type: POIType.Exploration,
        pos: [17.9, 23.3],
        location: "Canada",
        details: [
            {
                title: "??????????",
                city: "Vancouver, British Columbia",
            },
        ],
    },
    {
        type: POIType.Exploration,
        pos: [48.5, 21.8],
        location: "United Kingdom",
        details: [
            {
                title: "??????????",
                city: "London, England",
            },
        ],
    },
    {
        type: POIType.Exploration,
        pos: [49.8, 21.5],
        location: "Netherlands",
        details: [
            {
                title: "??????????",
                city: "???????, Amsterdam",
            },
        ],
    },
    {
        type: POIType.Exploration,
        pos: [51.5, 21.5],
        location: "Germany",
        details: [
            {
                title: "??????????",
                city: "???????, Berlin",
            },
        ],
    },
    {
        type: POIType.Exploration,
        pos: [49.2, 23.8],
        location: "France",
        details: [
            {
                title: "??????????",
                city: "???????, Paris",
            },
        ],
    },
    {
        type: POIType.Exploration,
        pos: [47.3, 29.8],
        location: "Spain",
        details: [
            {
                title: "??????????",
                city: "???????, Madrid",
            },
        ],
    },
    {
        type: POIType.Exploration,
        pos: [51.9, 28.7],
        location: "Italy",
        details: [
            {
                title: "??????????",
                city: "???????, Rome",
            },
        ],
    },
    {
        type: POIType.Exploration,
        pos: [53.9, 22],
        location: "Poland",
        details: [
            {
                title: "??????????",
                city: "???????, Warsaw",
            },
        ],
    },
    {
        type: POIType.Exploration,
        pos: [52.5, 16.7],
        location: "Sweden",
        details: [
            {
                title: "??????????",
                city: "???????, Stockholm",
            },
        ],
    },
    {
        type: POIType.Exploration,
        pos: [77.7, 55.7],
        location: "Malaysia",
        details: [
            {
                title: "??????????",
                city: "???????, Kuala Lumpur",
            },
        ],
    },
    {
        type: POIType.Exploration,
        pos: [87.2, 83.9],
        location: "Australia",
        details: [
            {
                title: "??????????",
                city: "Melbourne, Victoria",
            },
        ],
    },
    {
        type: POIType.Exploration,
        pos: [95.4, 83.9],
        location: "New Zealand",
        details: [
            {
                title: "??????????",
                city: "???????, Auckland",
            },
        ],
    },
    {
        type: POIType.Exploration,
        pos: [86.1, 32.9],
        location: "Japan",
        details: [
            {
                title: "??????????",
                city: "???????, Tokyo",
            },
        ],
    },
];
export const POI: React.FC<{
    poiRef: MutableRefObject<HTMLDivElement | null>;
}> = ({ poiRef }) => {
    const SIZE = 36;
    const [poi, setPOI] = useState<number>(-1);
    const { setSelected } = useContext(SelectionContext);

    return (
        <div
            ref={poiRef}
            className="h-full absolute top-0 left-0 z-[4] aspect-[41/19] transition-[width,height,left,top]"
        >
            {LOCATIONS.map((location: Location, i: number) => {
                const choosePOI = () => {
                    if (i !== poi) {
                        setPOI(i);
                        setSelected(null);
                    }
                };

                return (
                    <div
                        key={i}
                        className={`absolute flex items-center justify-center group/loc text-base cursor-pointer ${
                            poi === i ? "z-[2]" : "hover:z-[3]"
                        } ${location.unlocked ? "text-gold" : "text-white"}`}
                        style={{
                            width: `${SIZE}px`,
                            height: `${SIZE}px`,
                            transform: `translate(-${SIZE / 2}px, -${
                                SIZE / 2
                            }px)`,
                            left: `${location.pos[0]}%`,
                            top: `${location.pos[1]}%`,
                        }}
                        onClick={choosePOI}
                    >
                        <div
                            className={`h-[2px] transition-width ${
                                poi === i
                                    ? "w-[300%]"
                                    : "w-0 group-hover/loc:w-[300%]"
                            } absolute z-[0] ${
                                location.unlocked ? "bg-gold" : "bg-white"
                            }`}
                        />
                        <div
                            className={`w-[2px] transition-height  ${
                                poi === i
                                    ? "h-[300%]"
                                    : "h-0 group-hover/loc:h-[300%]"
                            } absolute z-[0] ${
                                location.unlocked ? "bg-gold" : "bg-white"
                            }`}
                        />
                        <Location
                            xPos={location.pos[0]}
                            isSelected={poi === i}
                            location={location.location}
                            unlocked={location.unlocked}
                        />
                        <CenterIcon
                            isSelected={poi === i}
                            type={location.type}
                            unlocked={location.unlocked}
                        />
                        {poi === i && (
                            <Experiences
                                data={location.details}
                                unlocked={location.unlocked}
                                xPos={location.pos[0]}
                            />
                        )}
                    </div>
                );
            })}
        </div>
    );
};

const Location: React.FC<{
    xPos: number;
    isSelected: boolean;
    location: string;
    unlocked?: boolean;
}> = ({ xPos, isSelected, location, unlocked }) => {
    return (
        <div
            className={`absolute bottom-full ${
                xPos >= 90 ? "right-full" : "left-full"
            } rounded-sm ${
                isSelected ? "visible" : "group-hover/loc:visible invisible"
            } whitespace-nowrap bg-black px-2 border-2 ${
                unlocked ? "border-gold" : "border-white"
            }`}
        >
            <div
                className={`absolute right-0 h-full bg-black ${
                    isSelected ? "w-0" : "w-full group-hover/loc:w-0"
                } transition-width duration-500`}
            />
            {location}
        </div>
    );
};

const CenterIcon: React.FC<{
    isSelected: boolean;
    type: POIType;
    unlocked?: boolean;
}> = ({ isSelected, type, unlocked }) => {
    return (
        <div
            className={`${
                isSelected
                    ? "w-full border-2 h-full"
                    : "group-hover/loc:w-full group-hover/loc:h-full h-0 w-0 group-hover/loc:border-2"
            } transition-[height,width] flex items-center justify-center rounded-full z-[1] bg-black ${
                unlocked ? "border-gold" : "border-white"
            }`}
        >
            <div
                className={`${
                    isSelected
                        ? "w-0"
                        : "w-[50%] group-hover/loc:w-0 group-hover/loc:opacity-100 opacity-0"
                } delay-200 transition-width h-full right-[50%] absolute rounded-l-full bg-black`}
            />
            <div
                className={`${
                    isSelected
                        ? "w-0"
                        : "w-[50%] group-hover/loc:w-0 group-hover/loc:opacity-100 opacity-0"
                } delay-200 transition-width h-full left-[50%] absolute rounded-r-full bg-black`}
            />
            <div className="z-[2] max-sm:scale-50">{LEGENDS_ICON[type]}</div>
        </div>
    );
};
const LEGENDS_ICON: { [key in POIType]: React.ReactNode } = {
    [POIType.Education]: <i className="ri-school-line" />,
    [POIType.Work]: <i className="ri-briefcase-4-line" />,
    [POIType.Exploration]: <i className="ri-building-line" />,
};
type Grouping = { [key in POIType]: Details[] } | null;

const Experiences: React.FC<{
    data: Details[];
    unlocked?: boolean;
    xPos: number;
}> = ({ data, unlocked, xPos }) => {
    const { selected, setSelected } = useContext(SelectionContext);

    const grouping: Grouping = data.reduce((acc: any, curr: Details) => {
        const type = curr.type ?? POIType.Exploration;
        if (acc[type]) {
            acc[type].push(curr);
        } else {
            acc[type] = [curr];
        }
        return acc;
    }, {});

    return (
        <div
            className={`${
                styles.expOptions
            } absolute z-20 top-full flex flex-col bg-black rounded-[2px] text-xs sm:text-sm ${
                unlocked ? "border-gold" : "border-white"
            } border-2 ${xPos >= 90 ? "right-full" : "left-full"}`}
        >
            {grouping &&
                Object.entries(grouping).map(
                    (entries: [string, Details[]], i: number) => (
                        <div key={i} className="flex flex-col">
                            <span
                                className={`p-1 text-black ${
                                    unlocked ? "bg-gold/75" : "bg-white/75"
                                }`}
                            >
                                {entries[0]}
                            </span>
                            {entries[1].map((loc: Details, i: number) => {
                                const selectLocation = () => {
                                    setSelected(loc);
                                };

                                return (
                                    <div
                                        onClick={selectLocation}
                                        className={`px-2 py-1 ${
                                            selected?.title === loc.title
                                                ? "bg-sea-green text-neon"
                                                : "hover:bg-sea-green/75 hover:text-neon"
                                        } transition-colors whitespace-nowrap`}
                                        key={i}
                                    >
                                        {loc.title}
                                    </div>
                                );
                            })}
                        </div>
                    )
                )}
        </div>
    );
};
