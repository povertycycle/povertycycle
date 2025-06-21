import { UserSettings } from "@/interfaces/user";
import jsgradient from "@/features/resume/utils/js-gradient";

export const DEFAULT_MOBILE: UserSettings = {
    graphicOptions: {
        bubbles: 10,
        fishes: 4,
        buildings: 10,
        effects: 3,
        overall: 5,
    },
    audioOptions: {
        audio: false,
        volume: 0,
    },
};

export const DEFAULT_DESKTOP: UserSettings = {
    graphicOptions: {
        bubbles: 20,
        fishes: 10,
        buildings: 20,
        effects: 3,
        overall: 4,
    },
    audioOptions: {
        audio: false,
        volume: 0,
    },
};

export const MAX_Z_INDEX = 10;
export const GRADIENTS = jsgradient.generateGradient(
    "#000000",
    "#136087",
    MAX_Z_INDEX
);
