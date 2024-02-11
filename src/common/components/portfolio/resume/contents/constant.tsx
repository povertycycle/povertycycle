const PLAYTIME = 438;

export enum ResourceType {
    MANA = "Mana",
    FLAIR = "Flair"
}

export const RESOURCE_COLORS: { [key in ResourceType]: string } = {
    [ResourceType.MANA]: "text-mana-cost",
    [ResourceType.FLAIR]: "text-flair-cost",
}