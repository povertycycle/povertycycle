/**
 * Quadratic equation formula returning Y from X values
 */
export const quadraticEquation = (
    x: number,
    yAtOffset: number,
    offset: number = 0,
    min_y: number = 0
) => {
    const factor = Math.abs(offset - 50) / Math.sqrt(yAtOffset);
    return min_y + Math.pow((x - 50) / factor, 2);
};

/**
 * Get level
 */
export const getLevel = () => {
    return Math.floor(
        (new Date().getTime() - new Date(1995, 10, 2).getTime()) /
            (1000 * 60 * 60 * 24 * 365.25)
    );
};

export const getExperienceData = (
    experience: number,
    rank: number,
    max: number
) => {
    if (rank === 0)
        return { p: 0, req: "Explore to find more info about the skill" };
    if (rank === max)
        return {
            p: 1,
            req: "Max rank reached. Practice to unlock hidden skills.",
        };
    const epr = Math.ceil(experience / rank);
    const p = epr === 0 ? 0 : (experience / epr) % 1;
    const expReq = experience === 0 ? 1 : Math.round((1 - p) * epr * 10) / 10;
    const req = `${expReq} year${expReq > 1 ? "s" : ""} needed for next rank`;
    return { p, req };
};

export const checkOverlap = (
    detPos: [number, number],
    iPos: [number, number]
) => {
    return detPos[0] <= iPos[0] && detPos[1] <= iPos[1];
};
