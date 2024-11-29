import { UserSettings } from "../interfaces/user"

export const DEFAULT_MOBILE: UserSettings = {
    graphicOptions: {
        bubbles: true,
        fishes: 4,
        buildings: 10,
        effects: 3,
        overall: 3
    },
    audioOptions: {
        audio: false,
        volume: 0,
    }
}

export const DEFAULT_DESKTOP: UserSettings = {
    graphicOptions: {
        bubbles: true,
        fishes: 10,
        buildings: 20,
        effects: 3,
        overall: 4
    },
    audioOptions: {
        audio: false,
        volume: 0,
    }
}
