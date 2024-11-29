import { useCopyToClipboard } from "@/common/hooks/useCopyToClipboard";
import { DISPLAY_TEXTS, Menu } from "../constants"
import { useContext } from "react";
import { RaptureContext } from "@/common/contexts/global-context";
import { animateScroll as scroll } from "react-scroll";

export const Email: React.FC = () => {
    const email = DISPLAY_TEXTS[Menu.EMAIL].desktop.join("");
    const { copy } = useCopyToClipboard(email);

    return (
        <a href={`mailto:${email}`} onClick={copy} className="navigation__icon--square flex items-center">
            <svg width="100%" height="70%" preserveAspectRatio="none" fill="#FAFAFA" viewBox="0 0 60 42"><path d="M0 42v-5.4l19.2-19.1L0 4.5V0l27.6 18.8c1.5 1 3.4 1 4.9 0L60 1.3v4.4l-19 12 19 19V42L38.4 19.8l-4.9 2.6c-1 .8-2.2 1.1-3.4 1.1-1.3 0-2.5-.3-3.6-1l-4.7-2.7L0 42Z" /></svg>
        </a>
    )
}

export const Phone: React.FC = () => {
    const phone = DISPLAY_TEXTS[Menu.PHONE].desktop.join("");
    const { copy } = useCopyToClipboard(phone);

    return (
        <a href={`https://api.whatsapp.com/send?phone=${phone.replace("+", "")}`} target="_blank" onClick={copy} className="h-[56px] sm:h-[72px] aspect-square">
            <svg fill="#FAFAFA" viewBox="0 0 20 20"><path d="m5.3 17.5.7.4a8 8 0 0 0 4 1.1 9 9 0 0 0 9-9c0-5.5-4.2-9-9-9s-9 4.6-9 9c0 2 .4 2.8 1 4l.5.7-1 3.8 3.8-1ZM0 20l1.4-5A10 10 0 1 1 5 18.6L0 20ZM6.4 5.3H7a83.3 83.3 0 0 1 1.3 2.3c0 .2 0 .4-.2.5l-.2.4-.4.4v.5l1.1 1.4.4.3c.5.4 1 .8 1.6 1l.5.2.3-.1.8-1 .3-.1 2.2 1c.1 0 .2 0 .2.2v.4l-.2.7-.2.3a2.4 2.4 0 0 1-.5.4l-.4.2a2 2 0 0 1-.8.2h-1.1c-1.4-.4-2.7-1.1-3.9-2.1l-.6-.6a9.5 9.5 0 0 1-2-2.8C5 8.6 5 8.1 5 7.6c0-.6.2-1.2.6-1.7l.2-.3c.2 0 .2-.1.3-.2h.4Z" /></svg>
        </a>
    )
}

export const Resume: React.FC = () => {
    const gDocs = "https://docs.google.com/document/d/1wCx9U0Ecq8Uct1nVCWB16PpNLwkgJvGf";
    return (
        <a href={gDocs} target="_blank" className="h-[56px] sm:h-[72px] aspect-square">
            <svg fill="#FAFAFA" viewBox="0 0 20 20"><path d="M20 5v13c0 1.6-1.1 2-2 2H2c-1 0-2-1-2-2V2C0 .5 1.1 0 2.1 0H15l5 5Zm-1.1 0H16a1 1 0 0 1-1-1V1H2.1c-.8 0-1 .4-1 1v16c0 .5.4 1 .9 1h16c.5 0 1-.2.9-1V5ZM3.5 3.5H13v1H3.5v-1Zm0 4h13v1h-13v-1Zm0 4h13v1h-13v-1Zm0 4h13v1h-13v-1Z" /></svg>
        </a>
    )
}

export const Github: React.FC = () => {
    const github = "https://github.com/povertycycle";
    return (
        <a href={github} target="_blank" className="navigation__icon--circle pt-3">
            <svg fill="#FAFAFA" width="100%" height="100%" viewBox="0 0 13.8 15"><path d="M9.3 12.2c0-1-.3-1.5-.6-1.8 2-.3 4.3-1.1 4.3-5a4 4 0 0 0-1-2.7c.1-.3.5-1.3 0-2.7 0 0-.9-.3-2.7 1a8.3 8.3 0 0 0-4.7 0C2.8-.1 2 0 2 0a3.8 3.8 0 0 0 0 2.7 4 4 0 0 0-1 2.7c0 3.8 2.1 4.7 4.2 5-.2.2-.5.7-.6 1.3-.5.3-1.9.7-2.7-.8-.2-.3-.7-1-1.5-1s-.3.4 0 .6c.4.3 1 1.2 1 1.4.2.6.8 1.7 3.2 1.2V15h4.7v-2.8Z" /></svg>
        </a>
    )
}

export const LinkedIn: React.FC = () => {
    const linkedin = "https://www.linkedin.com/in/william-sentosatio/";
    return (
        <a href={linkedin} target="_blank" className="navigation__icon--square p-2">
            <svg width="100%" height="100%" fill="#FAFAFA" viewBox="0 0 12 12"><path d="M1.57 3.13a1.56 1.56 0 1 1 0-3.13 1.56 1.56 0 0 1 0 3.13ZM.52 4.17h2.09V12H.52V4.17ZM6.24 5a3.08 3.08 0 0 1 2.21-.83c1.68 0 3.55 1.26 3.55 3.45V12H9.91V8.56C9.86 6.74 9.23 6.1 8.26 6.1c-1.45 0-1.99.56-2 2.45V12H4.18V4.17h2.08L6.24 5Z" /></svg>
        </a>
    )
}

export const About: React.FC = () => {
    const { setDive } = useContext(RaptureContext);

    function deepDive() {
        setDive(true);
        scroll.scrollTo(document.body.clientHeight, {
            smooth: "easeInQuad",
            duration: 2000,
        });
    }

    return (
        <div onClick={deepDive} className="border-[3px] sm:border-4 border-[#E5B80B] rounded-full overflow-hidden aspect-square h-[56px] sm:h-[72px] pt-2">
            <svg width="100%" height="100%" fill="#E5B80B" viewBox="0 0 16 21"><path d="M0 21a8 8 0 0 1 16 0H0Zm8-9A6 6 0 1 1 8 0a6 6 0 0 1 0 12Z" /></svg>
        </div>
    )
}
