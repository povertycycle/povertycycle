export enum ResourceType {
    MANA = "Mana",
    FLAIR = "Flair",
    FOCUS = "Focus",
    LIFE = "Life",
}

export const RESOURCE_COLORS: Record<ResourceType, string> = {
    [ResourceType.LIFE]: "text-life-cost",
    [ResourceType.MANA]: "text-mana-cost",
    [ResourceType.FLAIR]: "text-flair-cost",
    [ResourceType.FOCUS]: "text-focus-cost",
};
