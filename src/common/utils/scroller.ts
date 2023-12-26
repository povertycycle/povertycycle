export const scrollPercent = (scroller: HTMLElement) => {
    return Math.floor(scroller.scrollTop / (scroller.scrollHeight - scroller.clientHeight) * 100);
}
