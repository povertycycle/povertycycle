import { FEVA, Pokemon } from "./items";

export type Inventory = {
    name: string,
    item: (full?: boolean) => JSX.Element,
    version: string,
    redirect: string,
    description: string[],
    affiliation: {
        name: string,
        link: string,
    } | null,
}

export const INVENTORY: Inventory[] = [
    {
        name: "FEVA",
        item: (full?: boolean) => (<FEVA full={full} />),
        version: "1.0.0",
        redirect: "https://github.com/sneheshs/feva",
        description: [
            "Fast Event Video Annotation, FEVA, is a video annotation tool with streamlined interaction techniques and a dynamic interface that makes labeling tasks easy and fast. FEVA focuses on speed, accuracy, and simplicity to make annotation quick, consistent, and straightforward.",
            "Video Annotation is a crucial process in computer science and social science alike. Many video annotation tools (VATs) offer a wide range of features for making annotation possible. We conducted an extensive survey of over 59 VATs and interviewed interdisciplinary researchers to evaluate the usability of VATs. Our findings suggest that most current VATs have overwhelming user interfaces, poor interaction techniques, and difficult-to-understand features. These often lead to longer annotation time, label inconsistencies, and user fatigue. We introduce FEVA, a video annotation tool with streamlined interaction techniques and a dynamic interface that makes labeling tasks easy and fast. FEVA focuses on speed, accuracy, and simplicity to make annotation quick, consistent, and straightforward. For example, annotators can control the speed and direction of the video and mark the onset and the offset of a label in real time with single key presses. In our user study, FEVA users, on average, require 36% less interaction than the most popular annotation tools (Advene, ANVIL, ELAN, VIA, and VIAN). The participants (N=32) rated FEVA as more intuitive and required less mental demand."
        ],
        affiliation: {
            name: "Autonomy Robotics Cognition Lab",
            link: "https://robotics.umd.edu/facilities/autonomy-robotics-cognition-lab",
        }
    },
    {
        name: "Pokemon Game & TCG Database",
        item: (full?: boolean) => (<Pokemon full={full} />),
        version: "0.4.0",
        redirect: "https://povertycycle.github.io/pokemon/",
        description: [
            "Pokemon game and trading card game database viewer.",
            "v0.4.0 offers pokemons and items database.",
            "Hours played: 249hrs"
        ],
        affiliation: null,
    }
];