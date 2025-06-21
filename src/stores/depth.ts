import { createContext, Dispatch, SetStateAction } from "react";

type DepthContextProps = {
    dive: boolean;
    setDive: Dispatch<SetStateAction<boolean>>;
};

/**
 * Depth context for playing animations
 */
export const DepthContext = createContext<DepthContextProps>({
    dive: false,
    setDive: () => {},
});
