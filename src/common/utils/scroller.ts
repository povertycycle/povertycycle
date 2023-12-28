export const scrollPercent = (scroller: HTMLElement) => {
    return Math.floor(scroller.scrollTop / (scroller.scrollHeight - scroller.clientHeight) * 100 * (1 - (scroller.clientHeight / scroller.scrollHeight)));
}

export const scrollerHeightValue = (scroller: HTMLElement) => {
    const calculatedHeight = Math.floor(scroller.clientHeight / scroller.scrollHeight * 100);
    console.log(calculatedHeight);
    return calculatedHeight * scroller.clientHeight < 32 ? "2rem" : `${calculatedHeight}%`
}