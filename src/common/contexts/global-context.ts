import { createContext, Dispatch, SetStateAction } from "react";
import { UserSettings } from "../interfaces/user";
import { DEFAULT_DESKTOP } from "../constants/configs";

type RaptureContextProps = {
    dive: boolean,
    setDive: Dispatch<SetStateAction<boolean>>,
    userSettings: UserSettings,
    setUserSettings: Dispatch<SetStateAction<UserSettings>>
}

export const RaptureContext = createContext<RaptureContextProps>({
    dive: false,
    setDive: () => { },
    userSettings: DEFAULT_DESKTOP,
    setUserSettings: () => { },
});

export const GamepadContext = createContext<{
    gamepad: Gamepad | null;
    setGamepad: (gamepad: Gamepad | null) => void;
}>({
    gamepad: null,
    setGamepad: (gamepad: Gamepad | null) => { }
})