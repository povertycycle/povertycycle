import { DEFAULT_DESKTOP } from "@/features/resume/constants/constants";
import { UserSettings } from "@/interfaces/user";
import { createContext } from "react";

type RaptureContextProps = {
    settings: UserSettings;
    updateSettings: (settings: UserSettings) => void;
};

/**
 * Rapture city context state
 */
export const RaptureContext = createContext<RaptureContextProps>({
    settings: DEFAULT_DESKTOP,
    updateSettings: () => {},
});
