import { Dispatch, SetStateAction, useContext } from "react";
import styles from "./icons.module.scss";
import { DISPLAY_TEXTS, Menu } from "./constants";
import { DepthContext } from "@/stores/depth";
import { animateScroll as scroll } from "react-scroll";

interface IconsProps {
    setText: Dispatch<SetStateAction<Menu>>;
}

/**
 * Directory icons
 */
export const Icons: React.FC<IconsProps> = ({ setText }) => {
    const menu = Object.values(Menu).filter((m) => m !== Menu.NAME);

    return (
        <div
            className={`absolute bottom-8 sm:bottom-64 text-3xl sm:text-4xl lg:text-5xl z-3 text-soft-white ${styles.container}`}
        >
            {menu.map((icon) => (
                <button onMouseEnter={() => setText(icon)} key={icon}>
                    {(() => {
                        switch (icon) {
                            case Menu.ABOUT:
                                return <About />;
                            case Menu.LINKEDIN:
                                return <LinkedIn />;
                            case Menu.GITHUB:
                                return <Github />;
                            case Menu.RESUME:
                                return <Resume />;
                            case Menu.PHONE:
                                return <Phone />;
                            case Menu.EMAIL:
                                return <Email />;
                            default:
                                return null;
                        }
                    })()}
                </button>
            ))}
        </div>
    );
};

const Email: React.FC = () => {
    const email = DISPLAY_TEXTS[Menu.EMAIL].desktop.join("");
    const { copy } = useCopyToClipboard(email);

    return (
        <a href={`mailto:${email}`} onClick={copy}>
            <i className="ri-mail-line" />
        </a>
    );
};

const Phone: React.FC = () => {
    const phone = DISPLAY_TEXTS[Menu.PHONE].desktop.join("");
    const { copy } = useCopyToClipboard(phone);
    const url = `https://api.whatsapp.com/send?phone=${phone.replace("+", "")}`;

    return (
        <a href={url} target="_blank" onClick={copy}>
            <i className="ri-whatsapp-line" />
        </a>
    );
};

const Resume: React.FC = () => {
    const gDocs =
        "https://docs.google.com/document/d/1wCx9U0Ecq8Uct1nVCWB16PpNLwkgJvGf";
    return (
        <a href={gDocs} target="_blank">
            <i className="ri-file-text-line" />
        </a>
    );
};

const Github: React.FC = () => {
    const github = "https://github.com/povertycycle";
    return (
        <a href={github} target="_blank">
            <i className="ri-github-fill" />
        </a>
    );
};

const LinkedIn: React.FC = () => {
    const url = "https://www.linkedin.com/in/william-sentosatio/";
    return (
        <a href={url} target="_blank">
            <i className="ri-linkedin-fill" />
        </a>
    );
};

const About: React.FC = () => {
    const { setDive } = useContext(DepthContext);

    function deepDive() {
        setDive(true);
        scroll.scrollTo(document.body.clientHeight, {
            smooth: "easeInQuad",
            duration: 2000,
        });
    }

    return (
        <div className="text-gold" onClick={deepDive}>
            <i className="ri-user-fill" />
        </div>
    );
};
const useCopyToClipboard = (text: string) => {
    async function copy(): Promise<string | null> {
        return new Promise((result) => {
            if (!navigator.clipboard) {
                var textArea = document.createElement("textarea");
                textArea.value = text;
                textArea.style.top = textArea.style.left = "0";
                textArea.style.position = "fixed";
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();

                try {
                    document.execCommand("copy");
                    result(null);
                } catch (err) {
                    result(String(err));
                }

                document.body.removeChild(textArea);
            } else {
                navigator.clipboard
                    .writeText(text)
                    .then(() => {
                        result(null);
                    })
                    .catch((err) => {
                        result(String(err));
                    });
            }
        });
    }

    return { copy };
};
