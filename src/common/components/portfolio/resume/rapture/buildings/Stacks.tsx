import { GRADIENTS, MAX_Z_INDEX } from "../constants";

type StacksProps = {
    total: number;
    pos: number;
    factor: number;
    z: number;
}

const Stacks: React.FC<StacksProps> = ({ total, pos, factor, z }) => {
    const width = (80 / (total + 1) / factor) * (total + 1 - pos);
    const height = (factor * 1) + Math.pow((pos - total) / (Math.pow(Math.pow(total, 4) / 4, 1 / 4)), 4);

    return (
        <div className="rounded-t-[2px]" style={{
            width: `${width}%`,
            height: `${height}vh`,
            background: GRADIENTS[z - (2 * (z - MAX_Z_INDEX / 2))],
        }} />
    )
}

export default Stacks;