import { createContext } from "react";

export const RaptureContext = createContext({
    dive: false,
    setDive: (dive: boolean) => {}
});