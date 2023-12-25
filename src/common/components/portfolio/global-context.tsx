import { createContext } from "react";

export const RaptureContext = createContext({
    dive: false,
    setDive: (dive: boolean) => {}
});

export const ControllerContext = createContext({
    controller: Gamepad,
    setController: (controller: Gamepad) => {}
})