/**
 * Menu list
 */
export enum Menu {
    ABOUT = "about",
    NAME = "name",
    LINKEDIN = "linkedin",
    GITHUB = "github",
    RESUME = "resume",
    PHONE = "phone",
    EMAIL = "email",
}

/**
 * Texts
 */
export const DISPLAY_TEXTS: {
    [key in Menu]: {
        desktop: string[];
        mobile?: string[];
    };
} = {
    [Menu.ABOUT]: {
        desktop: ["About"],
    },
    [Menu.NAME]: {
        desktop: ["Will", "i", "am", `Sento`, "sa", "tio"],
    },
    [Menu.LINKEDIN]: {
        desktop: ["LinkedIn"],
    },
    [Menu.GITHUB]: {
        desktop: ["GitHub"],
    },
    [Menu.RESUME]: {
        desktop: ["Resume"],
    },
    [Menu.PHONE]: {
        desktop: ["+6281288881024"],
        mobile: ["+6281288881024"],
    },
    [Menu.EMAIL]: {
        desktop: ["william.sentosatio@hotmail.com"],
        mobile: ["william.sentosatio"],
    },
};

/**
 * Blink timer delays
 */
export const BLINK_TIMER = [1.5, 4, 3, 2, 5, 3];
