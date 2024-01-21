import { createContext, Dispatch, SetStateAction } from "react";

export enum AspectColor {
    GREEN = "green",
    BLUE = "blue",
    RED = "red",
    YELLOW = "yellow",
}

export enum AspectType {
    SCIENCE = "science",
    ARTS = "arts",
    PHYSIQUE = "physique",
    GENERAL = "general",
}

export enum ResourceType {
    MANA = "Mana",
}

export enum TalentType {
    ENGINEERING = "engineering",
    STUDY = "study",
    FORM = "form",
    THEORY = "theory",
    SPORT = "sport",
    KNOWLEDGE = "knowledge",
    ESSENCE = "essence",
    APPLICATION = "application",
}

export enum ViewMode {
    TREE = "tree_view",
    LIST = "list_view",
}

export interface AspectColorTypes {
    background: string,
    title: string,
}

export interface Talent {
    name: string,
    ability: { 
        active: boolean, 
        resource: ResourceType,
        cost: string, 
        cooldown: string, 
        cast_time: string 
    },
    rank: number,
    maxRank: number,
    experience: number,
    icon: string,
    description: string,
}

export interface TalentIcon {
    id: number,
    x: number,
    y: number,
    children?: (number | null)[],
}

export const AspectsContext = createContext<{
    isAspects: boolean,
    setIsAspects: Dispatch<SetStateAction<boolean>>,
    aspect: AspectType | undefined,
    setAspect: Dispatch<SetStateAction<AspectType | undefined>>,
}>({
    isAspects: true,
    setIsAspects: (aspects: SetStateAction<boolean>) => {},
    aspect: undefined,
    setAspect: (aspect: SetStateAction<AspectType | undefined>) => {},
});