export const roundWithDecimals = (value: number, precision: number) => {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

export const quadraticEquationProcessor = (x: number, yAtOffset: number, offset: number = 0, min_y: number = 0) => {
    const factor = Math.abs(offset - 50) / Math.sqrt(yAtOffset)
    return min_y + Math.pow((x - 50) / factor, 2)
}