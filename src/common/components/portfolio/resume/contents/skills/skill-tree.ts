export interface TalentIcon {
    id: number,
    x: number,
    y: number,
    children?: (number | null)[],
}

export const TALENT_TREES : { [key: string] : TalentIcon[] } = {
    "engineering": [    ], //mobile-development web-development game-development system-engineering
    "study": [
        { id: 0, x: 4, y: 0, children: [0.2, 0, 0.2] },
        { id: 1, x: 3, y: 1, children: [0.2, 0] }, { id: 2, x: 4, y: 1, children: [0.2, 0] }, { id: 3, x: 5, y: 1, children: [null, 0, 0.2] },
        { id: 4, x: 2, y: 2, children: [0.1, 1, 0.1] }, { id: 5, x: 3, y: 2, children: [null, 0, 0.1] }, { id: 6, x: 4, y: 2, children: [null, 0] }, { id: 7, x: 5, y: 2, children: [0.1, 0] }, { id: 8, x: 6, y: 2, children: [0.1, null, 0.2] },
        { id: 9, x: 1, y: 3, children: [0.1, 0.2, 0.2] }, { id: 10, x: 3, y: 3, children: [0.2, null, 0.1] }, { id: 11, x: 4, y: 3, children: [null, 0] }, { id: 12, x: 5, y: 3, children: [0.1, null, 0.1] }, { id: 13, x: 7, y: 3, children: [0.1, 0, 0.1] },
        { id: 14, x: 0, y: 4, children: [null, 1, 0.1] }, { id: 15, x: 1, y: 4 }, { id: 16, x: 2, y: 4, children: [null, 0] }, { id: 17, x: 4, y: 4, children: [0.1, 0, 0.2] }, { id: 18, x: 6, y: 4, children: [null, 0, 0.1] }, { id: 19, x: 7, y: 4, children: [null, 0] }, { id: 20, x: 8, y: 4, children: [null, 1] },
        { id: 21, x: 1, y: 5 }, { id: 22, x: 2, y: 5, children: [null, 0] }, { id: 23, x: 3, y: 5, children: [0.2, 0] }, { id: 24, x: 4, y: 5, children: [0.2, 0, 0.1] }, { id: 25, x: 5, y: 5, children: [null, 0] }, { id: 26, x: 6, y: 5, children: [0.1, 0] }, { id: 27, x: 7, y: 5, children: [0.2, null, 0.2] },
        { id: 28, x: 0, y: 6 }, { id: 29, x: 2, y: 6, children: [null, 0] }, { id: 30, x: 3, y: 6, children: [null, 0] }, { id: 31, x: 4, y: 6, children: [0.1, 0, 0.1] }, { id: 32, x: 5, y: 6, children: [null, 0] }, { id: 33, x: 6, y: 6, children: [null, 0] }, { id: 34, x: 8, y: 6 },
        { id: 35, x: 2, y: 7, children: [null, 1, 0.2] }, { id: 36, x: 3, y: 7 }, { id: 37, x: 4, y: 7, children: [0.2, 0, 0.2] }, { id: 38, x: 5, y: 7 }, { id: 39, x: 6, y: 7, children: [0.2, 1] }, 
        { id: 40, x: 3, y: 8, children: [null, 0] }, { id: 41, x: 4, y: 8, children: [0.1, 0, 0.1] }, { id: 42, x: 5, y: 8, children: [null, 0, 0.2] },
        { id: 43, x: 2, y: 9 }, { id: 44, x: 3, y: 9 }, { id: 45, x: 4, y: 9 }, { id: 46, x: 5, y: 9 }, { id: 47, x: 6, y: 9 },
    ],
    "forms": [],
    "theory": [], // fine-arts", "music", "writings" "theme", "color", "structure" "documentation" "typography" "markup", "accessibility" "design-hierarchy" "uiux"
    "sports": [], // "strength", "agility", "dexterity" endurance", "motor soccer 
    "knowledge": [],
    "essence": [], // logic", "initiative", "versatility" analysis", "management cross-referencing research
    "application": [],
}