import styles from "./index.module.scss";
import Directory from "./directory";
import Raindrops from "./navigation/raindrops";

const Portfolio : React.FC = () => {

    // const [connectedGamepad, setConnectedGamepad] = useState<Gamepad | null>(null);

    // useEffect(() => {
    //     const interval : NodeJS.Timeout | undefined = !connectedGamepad ? undefined : setInterval(() => {
    //         const gamepad = navigator.getGamepads()[0];
    //         if (!gamepad) return;
    //         const xAxis = gamepad.axes[0];
    //         const yAxis = gamepad.axes[1];
    //         const padButton = gamepad.buttons;
    //         if (padButton[0].pressed) console.log("X");
    //         if (padButton[1].pressed) console.log("O");
    //         if (padButton[2].pressed) console.log("S");
    //         if (padButton[3].pressed) console.log("T");
    //         if (xAxis && (xAxis > 0.8 || xAxis < -0.8)) console.log("AXIS");
    //         if (yAxis && (yAxis > 0.8 || yAxis < -0.8)) console.log("AXIS");
    //     }, 100);

    //     const handleGamepadConnected = (event: GamepadEvent) => {
    //         setConnectedGamepad(event.gamepad);
    //     }

    //     const handleGamepadDisconnected = (event: GamepadEvent) => {
    //         setConnectedGamepad(null);
    //         window.clearInterval(interval);
    //     }
    
    //     window.addEventListener('gamepadconnected', handleGamepadConnected);
    //     window.addEventListener('gamepaddisconnected', handleGamepadDisconnected);

    //     return () => {
    //         window.removeEventListener('gamepadconnected', handleGamepadConnected);
    //         window.removeEventListener('gamepaddisconnected', handleGamepadDisconnected);
    //         window.clearInterval(interval);
    //     };
    // }, [connectedGamepad]);

    return (
        <div className={`${styles.portfolioContainer} w-screen flex flex-col overflow-scroll`}>
            <Raindrops />
            <Directory />
        </div>
    )
}

export default Portfolio;