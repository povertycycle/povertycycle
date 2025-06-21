export enum ViewMode {
    TREE = "tree_view",
    LIST = "list_view",
}
export interface TalentAbility {
    active: boolean;
    cost?: unknown;
    cooldown?: number;
    cast_time?: string;
    special?: string;
}

export interface Talent {
    name: string;
    ability: TalentAbility;
    rank: number;
    maxRank: number;
    experience: number;
    icon: string;
    description: string;
    x: number;
    y: number;
    children?: string[];
}

export interface TalentIcon {
    id: number;
    x: number;
    y: number;
    children?: (number | null)[];
}
