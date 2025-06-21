import { AspectType, SkillTab } from "./constants";
import { createContext, Dispatch, SetStateAction } from "react";

export const AspectsContext = createContext<{
    activeTab: SkillTab;
    setActiveTab: Dispatch<SetStateAction<SkillTab>>;
    aspect: AspectType | undefined;
    setAspect: Dispatch<SetStateAction<AspectType | undefined>>;
}>({
    activeTab: SkillTab.ASPECTS,
    setActiveTab: (aspects) => {},
    aspect: undefined,
    setAspect: (aspect) => {},
});
