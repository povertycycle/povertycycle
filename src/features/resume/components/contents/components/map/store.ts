import { createContext, Dispatch, SetStateAction } from "react";
import { Details } from "./interfaces";

export const SelectionContext = createContext<{
    selected: Details | null;
    setSelected: Dispatch<SetStateAction<Details | null>>;
}>({
    selected: null,
    setSelected: () => {},
});
