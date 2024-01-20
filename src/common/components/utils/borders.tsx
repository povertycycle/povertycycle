import styles from "./index.module.scss";

export const LayeredBorder : React.FC<{
    step?: number,
    gap?: string,
    borderColor?: string,
    borderWidth?: string,
    xAxis?: { start: number, step?: number, unit: string },
    yAxis?: { start: number, step?: number, unit: string },
    children?: React.ReactNode,
}> = ({
    step = 1,
    gap = "2px",
    borderColor = "white",
    borderWidth = "3px",
    xAxis = { start: 1, step: 0, unit: "rem" }, 
    yAxis = { start: 1, step: 0, unit: "rem" }, 
    children
}) => {
    let nests = children;
    for (let i = 0; i < step; i++) {
        const customStyles = {
            "--c": borderColor,
            "--x": `${xAxis.start + (xAxis.step ?? 0) * i}${xAxis.unit}`,
            "--y": `${yAxis.start + (yAxis.step ?? 0) * i}${yAxis.unit}`,
            "--b": borderWidth,
            padding: gap,
        } as React.CSSProperties;
        nests = <div className={`${styles.cornerBorder} h-full flex justify-center w-full`} style={customStyles}>{nests}</div>;
    }
    return nests;
}