import { InventoryData } from "./interfaces";

export const INVENTORY: InventoryData[] = [
    {
        name: "FEVA",
        item: (full?: boolean) => <FEVA full={full} />,
        version: "1.0.0",
        redirect: "https://github.com/sneheshs/feva",
        description: [
            "Fast Event Video Annotation, FEVA, is a video annotation tool with streamlined interaction techniques and a dynamic interface that makes labeling tasks easy and fast. FEVA focuses on speed, accuracy, and simplicity to make annotation quick, consistent, and straightforward.",
            "Video Annotation is a crucial process in computer science and social science alike. Many video annotation tools (VATs) offer a wide range of features for making annotation possible. We conducted an extensive survey of over 59 VATs and interviewed interdisciplinary researchers to evaluate the usability of VATs. Our findings suggest that most current VATs have overwhelming user interfaces, poor interaction techniques, and difficult-to-understand features. These often lead to longer annotation time, label inconsistencies, and user fatigue. We introduce FEVA, a video annotation tool with streamlined interaction techniques and a dynamic interface that makes labeling tasks easy and fast. FEVA focuses on speed, accuracy, and simplicity to make annotation quick, consistent, and straightforward. For example, annotators can control the speed and direction of the video and mark the onset and the offset of a label in real time with single key presses. In our user study, FEVA users, on average, require 36% less interaction than the most popular annotation tools (Advene, ANVIL, ELAN, VIA, and VIAN). The participants (N=32) rated FEVA as more intuitive and required less mental demand.",
        ],
        affiliation: {
            name: "Autonomy Robotics Cognition Lab",
            link: "https://robotics.umd.edu/facilities/autonomy-robotics-cognition-lab",
        },
    },
    {
        name: "Pokemon Game & TCG Database",
        item: (full?: boolean) => <Pokemon full={full} />,
        version: "0.4.0",
        redirect: "https://povertycycle.github.io/pokemon/",
        description: [
            "Pokemon game and trading card game database viewer.",
            "v0.4.0 offers pokemons and items database.",
            "Hours played: 249hrs",
        ],
        affiliation: null,
    },
];

const FEVA: React.FC<{ full?: boolean }> = ({ full }) => {
    return (
        <div className={`w-full h-full bg-[#a11515]`}>
            <svg width="100%" height="100%" viewBox="0 0 64 64">
                <path
                    fill="#FEFEFE"
                    d="M52.4 15.2h-6v4.5h7.4v2.7H43.2V6h10.6v2.7h-7.3v4h6.2V15l-.3.2ZM13.8 45.1l2.2 7.3 1.2-4.3 2.2-7.7c.1-.4.3-.5.6-.5h3.2l-5.5 16.6h-3.5L8.8 40h3.6l1.4 5Zm30.4 1.4 2.3-6.6h3l6 16.6h-2.6c-.9 0-.9 0-1.2-.9l-.7-2.2c0-.2-.1-.3-.4-.3h-5.1l-.4.3a59 59 0 0 0-.9 2.7c0 .3-.2.4-.5.4h-3l3.5-10Zm2.8 1-1 2.8h4L48 44a564 564 0 0 0-1 3.4Zm-32.5-25h-3.2V5.8h10.3v2.7h-7V13h6.2v2.7h-6.3v6.9ZM33.3 0v29.7H64v2.7H33.3V64h-2.6V32.4H0v-2.7h30.7V0h2.6Z"
                />
            </svg>
        </div>
    );
};

const Pokemon: React.FC<{ full?: boolean }> = ({ full }) => {
    return (
        <div className="w-full h-full flex flex-col rounded-full items-center justify-center relative">
            <div
                className={`z-[0] relative bg-[#ee1515] w-full h-full ${
                    full ? "border-b-[8px]" : "border-b-2"
                } border-black`}
            />
            <div
                className={`z-[0] relative bg-[#f0f0f0] w-full h-full ${
                    full ? "border-t-[8px]" : "border-t-2"
                } border-black`}
            />
            <div
                className={`absolute z-[1] bg-[#f0f0f0] h-[50%] w-[50%] ${
                    full ? "border-[16px]" : "border-4"
                } border-black rounded-full`}
            />
        </div>
    );
};
