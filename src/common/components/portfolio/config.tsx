export type GraphicOptions = {
    bubbles: boolean,
    fishes: number,
    buildings: number,
    effects: number,
    overall: number,
}

export type AudioOptions = {
    audio: boolean,
    volume: number,
}

export type UserSettings = {
    graphicOptions: GraphicOptions,
    audioOptions: AudioOptions,
}

export const DEFAULT_MOBILE: UserSettings = {
    graphicOptions: {
        bubbles: true,
        fishes: 4,
        buildings: 10,
        effects: 2,
        overall: 2
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
