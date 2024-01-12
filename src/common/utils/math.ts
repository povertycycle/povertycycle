export const roundWithDecimals = (value: number, precision: number) => {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

export const quadraticEquationProcessor = (x: number, yAtOffset: number, offset: number = 0, min_y: number = 0) => {
    const factor = Math.abs(offset - 50) / Math.sqrt(yAtOffset)
    return min_y + Math.pow((x - 50) / factor, 2)
}

export const getAge = () => {
    return Math.floor((new Date().getTime() - new Date(1995, 10, 2).getTime()) / (1000 * 60 * 60 * 24 * 365.25));
}