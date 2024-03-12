const PLAYTIME = 495;

export enum ResourceType {
    MANA = "Mana",
    FLAIR = "Flair",
    FOCUS = "Focus",
}

export const RESOURCE_COLORS: { [key in ResourceType]: string } = {
    [ResourceType.MANA]: "text-mana-cost",
    [ResourceType.FLAIR]: "text-flair-cost",
    [ResourceType.FOCUS]: "text-focus-cost"
}