/**
 * User graphic options
 */
export type GraphicOptions = {
    bubbles: number;
    fishes: number;
    buildings: number;
    effects: number;
    overall: number;
};

/**
 * User audio options
 */
export type AudioOptions = {
    audio: boolean;
    volume: number;
};

/**
 * Generic user settings
 */
export type UserSettings = {
    graphicOptions: GraphicOptions;
    audioOptions: AudioOptions;
};
