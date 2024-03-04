import { createContext, Dispatch, SetStateAction } from "react";
import { ResourceType } from "../constant";

export enum SkillTab {
    ASPECTS = "aspects",
    TALENTS = "talents",
    PATCH_NOTES = "patch-notes",
}

export enum AspectColor {
    GREEN = "green",
    BLUE = "blue",
    RED = "red",
    YELLOW = "yellow",
}

export enum AspectType {
    SCIENCE = "science",
    ARTS = "arts",
    SPORTS = "sports",
    GENERAL = "general",
}

export enum TalentType {
    ENGINEERING = "ENGINEERING",
    STUDY = "STUDY",
    FORM = "FORM",
    THEORY = "THEORY",
    ENTERTAINMENT = "ENTERTAINMENT",
    KNOWLEDGE = "KNOWLEDGE",
    ESSENCE = "ESSENCE",
    APPLICATION = "APPLICATION",
}

export enum ViewMode {
    TREE = "tree_view",
    LIST = "list_view",
}

export interface AspectColorTypes {
    background: string,
    title: string,
}

export interface TalentAbility {
    active: boolean,
    cost?: unknown,
    cooldown?: number,
    cast_time?: string,
    special?: string,
}

export interface Talent {
    name: string,
    ability: TalentAbility,
    rank: number,
    maxRank: number,
    experience: number,
    icon: string,
    description: string,
    x: number,
    y: number,
    children?: string[]
}

export interface TalentIcon {
    id: number,
    x: number,
    y: number,
    children?: (number | null)[],
}

export const AspectsContext = createContext<{
    activeTab: SkillTab,
    setActiveTab: Dispatch<SetStateAction<SkillTab>>,
    aspect: AspectType | undefined,
    setAspect: Dispatch<SetStateAction<AspectType | undefined>>,
}>({
    activeTab: SkillTab.ASPECTS,
    setActiveTab: (aspects: SetStateAction<SkillTab>) => { },
    aspect: undefined,
    setAspect: (aspect: SetStateAction<AspectType | undefined>) => { },
});