import { createContext } from "react";

export const RaptureContext = createContext({
    dive: false,
    setDive: (dive: boolean) => {}
});

export const GamepadContext = createContext<{
    gamepad: Gamepad | null;
    setGamepad: (gamepad: Gamepad | null) => void;
}>({
    gamepad: null,
    setGamepad: (gamepad: Gamepad | null) => {}
})