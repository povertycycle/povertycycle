type Icon  = string | undefined;

export const SKILL_TREE : {
    [key: number] : {
        tag: string,
        skill_trees: {
            [key: number]: {
                title: string,
                tree: Icon[][],
            } 
        }
    }
} = {
    0: {
        tag: "technical",
        skill_trees: {
            0: {
                title: "engineering",
                tree: [
                    [""],
                    [""],
                    [""],
                    [""],
                    [""],
                    [""],
                    ["cloud-computing", "mobile-development"],
                    [""],
                    [""],
                    [""],
                    ["web-development", "game-development", "system-engineering", ],
                ],
            },
            1: {
                title: "science",
                tree: [
                    ["data"],
                    ["algorithm", "systems", "discrete"],
                    ["cleanliness", "efficiency",  "architecture", "pattern", "performance"],
                    ["integration", "dynamic", "optimization", "maintainable", "higher-order"],

                    ["profiling", "responsiveness", "automation", "debugging", "asynchronous", "modular", "version-control"],
                    ["monitoring", "scalability", "scripting", "testing", "cloud-computing", "parallelization", "networking"],
                    ["analysis", "data-handling", "security", "software-development", "distributed-computing", "usability", "ci/cd"],
                    
                    ["big-data", "cryptography", "graphics", "cyber-security", "research"],
                    ["artificial-intelligence", "game-design", "computer-vision"],
                    ["data-science", "deep-learning", "vr/ar"],
                ]
            }
        }
    },
    1: {
        tag: "arts",
        skill_trees: {
            0: {
                title: "forms",
                tree: [
                    [""],
                    [""],
                    [""],
                    [""],
                    [""],
                    [""],
                    [""],
                    [""],
                    [""],
                    [""],
                    [""],
                ],
            },
            1: {
                title: "theory",
                tree: [
                    ["fine-arts", "music", "writings"],
                    ["theme", "color", "structure"],
                    ["documentation"],
                    ["typography"],
                    ["markup", "accessibility"],
                    ["design-hierarchy"],
                    ["uiux"],
                    [],
                    [],
                    [],
                    [],
                ]
            }
        }
    },
    2: {
        tag: "physical",
        skill_trees: {
            0: {
                title: "sports",
                tree: [
                    ["strength", "agility", "dexterity"],
                    ["endurance", "motor"],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                ],
            },
            1: {
                title: "knowledge",
                tree: [
                    [""],
                    [""],
                    [""],
                    [""],
                    [""],
                    [""],
                    [""],
                    [""],
                    [""],
                    [""],
                    [""],
                ],
            }
        }
    },
    3: {
        tag: "general",
        skill_trees: {
            0: {
                title: "essence",
                tree: [
                    ["logic", "initiative", "versatility"],
                    ["analysis", "management"],
                    ["cross-referencing"],
                    ["research"],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                ],
            },
            1: {
                title: "application",
                tree: [
                    [""],
                    [""],
                    [""],
                    [""],
                    [""],
                    [""],
                    [""],
                    [""],
                    [""],
                    [""],
                    [""],
                ],
            }
        }
    }
}