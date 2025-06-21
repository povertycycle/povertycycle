interface Journal {
    heading: string;
    flavorText: string;
    description: string[];
}

export const JOURNALS: Record<string, Journal> = {
    Introduction: {
        heading: "Arts & Music Enthusiast",
        flavorText:
            "Nothing is more fascinating\u2014than to fully understand the intricacies behind the work of an art.",
        description: [
            "Your journey started off with the classics--Star Wars, Jurassic Park, Terminator, and many more--not exactly old though gold nonetheless. Yet from the start, that enjoyment for them was however a shallow and unappreciative one, ignorant of their real beauty.",
            "But through years of exposure, the curiosity for those values which were burrowed deep within grew. And, the aspiration bloomed: to fully understand the idea behind such celebrated works, and to be able to relish similar feelings with the community.",
            "How amazing it is that we were blessed with such magnificence, for there is a whole world of imagination out there waiting to be explored; the works of art that transcend beyond time and space--those that resonate uniquely to their fans--those that can be appreciated by anyone of any background.",
            "And so, it is believed that: to truly appreciate their endless creativity, is to really be a human.",
        ],
    },
    Website: {
        heading: "Software Engineer - Minor in Maths",
        flavorText:
            "How long it takes does not matter; what matters is the completion.",
        description: [
            "This personal website was designed and developed as a love-letter for the games and the cinemas. It incorporated a number of different styles and concepts to help enrich the experience it meant to provide.",
            "The rain, bubbles, fishes, and buildings were generated randomly with quadratic equations. Main menu icons, controller buttons, and some of the skill icons were made purely with CSS; the repository stores no .jpg or .png files. Icons in the talent trees are from remixicon, fontawesome, vectorlogo, various other sources, or are self made with SVGs.",
            "All the contents were dynamically rendered from a list of arrays and objects of the contents; all components were rendered through loops and recursion while the contents were passed as lists.",
            "The website uses custom-made libraries with only psbc.js (PimpTrizkit) and js-gradient.ts were outsourced.",
            "Skill trees took elements and inspired from WoW's talent trees.",
        ],
    },
    Skills: {
        heading: "Aspects and Talents",
        flavorText: "Form is temporary, class is permanent.",
        description: [
            "Science represents the Mind. Programming and engineering skills and talents can be explored and discovered here.",
            "Arts represents the Soul. Music and arts skills and talents can be explored and discovered here.",
            "Recreation represent the Body. Physical sports and video games skills and talents can be explored and discovered here.",
            "Nature represent the Life. General and life skills and talents can be explored and discovered here.",
        ],
    },
    Updates: {
        heading: "Patch Notes History",
        flavorText: "One can always learn something from one's past mistakes.",
        description: [
            "Version 2.0 (Next Goal):",
            "New design for the website and its contents.",
            "Version 1.6.1 - Current:",
            "New website made with React and NextJS. An improved version of the main menu and a full re-design of the content page.",
            "A new skill, map, inventory, and settings sections, as well as a reworked math for the quadratic equations.",
            "Version 1.0:",
            "Personal website (old) launched using github pages with React and NodeJS.",
        ],
    },
    Future: {
        heading: "Upcoming changes and to-do list",
        flavorText:
            "The best one can do for oneself is to keep learning and improving.",
        description: [
            "Mobile supports for website",
            "Design new icons for skills section",
            "Convert into canvas to draw background animations",
            "Compose background music for the website's ambience",
        ],
    },
};

export const OPTIONS = Object.keys(JOURNALS).concat(
    Array.from({ length: 12 }, (_) => "??????????")
);

export const MISSING = {
    heading: "??????????",
    flavorText: "??????????",
    description: [],
};
