import React from "react";

/**
 * SVGs compressed with jakearchibald.github.io/svgomg
 */
export const CUSTOM_ICONS: {
    [key: string]: { background: string; icon: JSX.Element };
} = {
    html5: {
        background: "bg-[#F06529]",
        icon: <i className="ri-html5-fill" />,
    },
    php: {
        background: "bg-[#777BB3]",
        icon: (
            <div className="font-mono text-[1.25rem] skew-x-[-15deg]">php</div>
        ),
    },
    javascript: {
        background: "bg-[#F0DB4F]",
        icon: (
            <div className="flex items-center justify-center font-sans font-bold text-[1.5rem] text-black">
                JS
            </div>
        ),
    },
    css: {
        background: "bg-[#2965F1]",
        icon: <i className="ri-css3-fill" />,
    },
    mysql: {
        background: "bg-soft-white",
        icon: (
            <div className="flex items-center justify-center font-serif text-[0.75rem]">
                <span className="text-[#00758F]">My</span>
                <span className="text-[#F29111]">SQL</span>
            </div>
        ),
    },
    react: {
        background: "bg-[#333333]",
        icon: <i className="text-[#61DBFB] ri-reactjs-fill" />,
    },
    "vue-js": {
        background: "bg-[#34495E]", // #41B883
        icon: <i className="text-[#BABEC0] ri-vuejs-line" />,
    },
    angular: {
        background: "bg-[#A6120D]",
        icon: <i className="text-[#BABEC0] ri-angularjs-line" />,
    },
    git: {
        background: "bg-[#F03C2E]",
        icon: (
            <svg width="70%" height="70%" viewBox="0 0 90 130">
                <path
                    fill="#FFFEFE"
                    d="m9 0 20 21 3 1c11-2 20 7 18 17l1 3 18 19 3 1c9-2 17 4 18 12s-5 16-14 17-17-9-15-18c1-2 0-3-1-4L42 51v50l1 3c6 3 8 10 6 16-2 7-7 10-14 10a14 14 0 0 1-7-27c1 0 2-1 2-3V52c0-1 0-2-2-3-6-4-8-10-7-17v-3L0 8l9-8Z"
                />
            </svg>
        ),
    },
    typescript: {
        background: "bg-[#007acc]",
        icon: (
            <div className="font-sans text-[1.5rem] text-soft-white font-bold">
                TS
            </div>
        ),
    },
    django: {
        background: "bg-[#092E20]",
        icon: (
            <div className="text-[#BABEC0] font-sans font-bold text-[1.5rem]">
                dj
            </div>
        ),
    },
    gitlab: {
        background: "bg-[#E2432A]",
        icon: <i className="text-[#FCA326] ri-gitlab-fill" />,
    },
    github: {
        background: "bg-black",
        icon: <i className="text-[2.5rem] text-soft-white ri-github-fill" />,
    },
    c: {
        background: "bg-[#283593]",
        icon: <div className="font-mono font-bold text-[2rem]">C</div>,
    },
    csharp: {
        background: "bg-[#682676]",
        icon: <div className="font-mono font-bold text-[2rem]">C#</div>,
    },
    "c++": {
        background: "bg-[#044F88]",
        icon: (
            <div className="font-mono font-bold text-[2rem] flex items-center">
                C<span className="text-[1rem]">++</span>
            </div>
        ),
    },
    "asp-net-core": {
        background: "bg-[#044F88]",
        icon: (
            <div className="flex flex-col items-center font-mono">
                <span className="text-[1rem] leading-[1rem]">.NET</span>
                <span className="text-[0.75rem] leading-[0.75rem]">Core</span>
            </div>
        ),
    },
    tailwind: {
        background: "bg-[#38bdf8]",
        icon: <i className="text-white ri-tailwind-css-fill" />,
    },
    ocaml: {
        background: "bg-[#EC670F]",
        icon: (
            <svg width="80%" height="80%" viewBox="0 10 64 40">
                <path
                    fill="#fff"
                    d="M33 53v-2l-2-4v-6h7l4-2 4-4 1-4 4-1h3v-4l-3-1h-4l-3-1-4 1-1 2v1l-2 5h-4l-5-3-3-6-1-3c-1-1-2-2-3-1h-2l-3 7h-2l-3-6-3-1c-2 0-2 1-3 3l-5 7v17l5-7 9 3h1l3 1-2 2-3 6v3l-1 4h2l2-6 3-6 4-5 3 2 2 3 2 6 2 3v2l1 2h2l-2-7Z"
                />
            </svg>
        ),
    },
    pencil: {
        background: "bg-[#41424C]",
        icon: <i className="ri-pencil-fill" />,
    },
    pen: {
        background: "bg-black",
        icon: <i className="ri-ball-pen-fill" />,
    },
    brush: {
        background: "bg-gradient-to-r from-red-500 via-yellow-500 to-sky-500",
        icon: <i className="ri-brush-fill" />,
    },
    sing: {
        background: "bg-[#d65b5b]",
        icon: <i className="ri-mic-fill" />,
    },
    audacity: {
        background: "bg-[#CD201F]",
        icon: (
            <svg fill="#fafafa" width="80%" height="80%" viewBox="0 0 24 24">
                <path d="M12 2 6 4C4 6 3 7 3 9v1c-2 1-3 3-3 6s2 6 4 6V9l2-4 6-1 6 1 2 4v13c2 0 4-3 4-6s-1-5-3-6V9c0-2-1-3-3-5l-6-2zm0 6-1 9-1-8-1 7v-1l-1-4v5l-1-4v3H6v2-7a1 1 0 0 0-1 0v12l1-1v-3l1 2v-2 3-4l1 1v3-4h1v4l1-5 1 5v-4l1 5 1-5v4l1-4 1 4v-3l1-1v4l1-4 1 2v-2 4l1 1V10h-1v6-3l-1 2v-3l-1 4v-1l-1-6-1 5v2l-1-5v4l-1 1z" />
            </svg>
        ),
    },
    garageband: {
        background: "bg-gradient-to-b from-[#F57A37] to-[#FABF2F]",
        icon: (
            <svg width="70%" height="70%" viewBox="0 0 100 100" fill="#FAFAFA">
                <path d="m90 0-1 1 1 2h-2l-2 1 1 1-1 1-1-1-1 1 1 2-1 3-33 30-1 1-2-2v-3l1-3-3-3h-3c-5 2-8 6-9 11l-2 3-4 1h-4c-7 1-15 4-19 10L0 66c-1 6 1 13 5 18l5 8c5 4 11 7 17 8h7c12-3 21-14 19-27l1-2 2-3 4-2 2-1c4-2 7-6 8-8l-1-4-3-2h-5l-2-1v-2l31-33 2-1 1 1h2l-1-2 1-1 2 1v-1l1-1-2-1 1-1 2 2V8l1-2-2-2c0-1-1-2-3-2l-2-2-2 1-1-1ZM48 45l8 7-3 4-9-8 4-3ZM37 56l8 7-3 4-8-8 3-3ZM26 66c-1-1 1-2 1-2l9 10-1 1-9-9Z" />
            </svg>
        ),
    },
    "adobe-audition": {
        background: "bg-[#00005b]",
        icon: (
            <span className="text-[#BABEC0] text-[1.5rem] font-bold font-mono">
                Au
            </span>
        ), // #9999ff
    },
    "adobe-photoshop": {
        background: "bg-[#18152E]",
        icon: (
            <span className="text-[#40D0FB] text-[1.5rem] font-bold font-mono">
                Ps
            </span>
        ),
    },
    musescore: {
        background: "bg-[#2A567B]",
        icon: (
            <svg width="60%" height="60%" viewBox="0 0 120 100">
                <path
                    fill="#FAFAFA"
                    d="M40 45c-4-5-11-9-18-9-11 0-22 7-22 27v33c0 2 2 4 4 4s4-2 4-4V63c0-15 7-19 14-19s14 6 14 16v36c0 2 2 4 4 4s4-2 4-4V60c0-10 7-16 14-16 5 0 14 3 14 16l1 12c0 22 14 28 24 28 9 0 23-6 23-26V43c0-6-8-6-8 0v31c0 15-11 18-15 18-5 0-16-2-16-20l-1-11c0-17-10-25-22-25-7 0-14 4-18 9Zm40-20c0-8 6-17 16-17s16 9 16 17c0 6 8 6 8 0 0-14-11-25-24-25-14 0-24 11-24 25 0 6 8 6 8 0Zm22 0c1-4-3-8-7-6-3 1-4 3-4 6a5 5 0 0 0 11 0Z"
                />
            </svg>
        ),
    },
    sibelius: {
        background: "bg-[#7826E7]",
        icon: (
            <svg width="80%" height="80%" viewBox="0 0 100 110">
                <path
                    fill="#BABEC0"
                    d="M1 68C-5 39 13 11 42 6l8-2 3-4 5 4c1 2 2 2 3 2 10 2 20 7 27 15l11 21 1 23c0 4-2 7-3 11-3 5-6 11-10 15-7 8-17 13-27 15 0 0-14 4-19 4-3 0-8-6-8-6-10 0-30-23-30-30m38 0c-3-7 1-16 7-18l-1-8-15 12c-7 7-2 16 5 22 2 1 12 3 15 2l-3-20c-4-2-5 11-3 15m-34-1c5 9 13 16 22 20 2-3 5-4 8-3s5 3 5 6h6l-2-14C33 96 6 68 35 46l10-8s-5-20 1-27C22 8-5 46 8 70m75 16c10-10 12-14 12-27a45 45 0 0 0-33-47c0-1 1 12-1 17L51 46l1 9c33 4 12 30 5 31v15c0 1 21-7 26-15M56 9c-3-5-9 5-6 13v12c0 3 8-5 8-16m-5 46 2 19c4-1 8-6 7-11s-5-9-9-8Z"
                />
            </svg>
        ),
    },
    dorico: {
        background: "bg-[#B75C01]",
        icon: (
            <svg width="60%" height="60%" fill="#BABEC0" viewBox="0 0 100 100">
                <path d="M0 3V0h49l15 2 2 1 2 1h1a49 49 0 0 1 28 30l2 8 1 2v13h-1v4l-1 2c-5 21-24 36-45 37H27V69h1l5 1c11 1 21-2 30-9 5-4 8-11 9-17 1-4 0-6-1-9-2-3-5-5-8-6-4-2-8-2-12-2l-5 1-6 2-7 3c-6 3-10 8-13 13v1l-2 4v49H0V3Z" />
            </svg>
        ),
    },
    finale: {
        background:
            "bg-gradient-to-br from-[#215788] via-[#278BAA] to-[#5FB58B]",
        icon: (
            <svg width="70%" height="70%" fill="#BABEC0" viewBox="0 0 100 150">
                <path d="M39 27C45 11 57 2 75 0h25l-3 23-22 1c-5 1-9 4-12 9-2 6-3 11-3 17l30 1-4 21-30 1-4 19-3 21-7 18c-6 11-16 17-29 19H0l5-22c21 2 23-20 26-55 1-3-17-1-17-2l4-21h16l1-6 4-17Z" />
            </svg>
        ),
    },
    brass: {
        background: "bg-[#ffb220]",
        icon: (
            <svg width="80%" height="80%" viewBox="0 0 144 270" fill="#BABEC0">
                <path d="m42 15-7 1v21h4c9 2 11 5 9 13l-1 13v186l2 12c1 4-1 5-5 6-8 2-17 3-25 1-6-2-9-9-5-14l1-6V56l-1-11c-1-4 1-6 5-7l8-1V15h-8V5h25l-2 10z" />
                <path d="M62 12c0-8 0-8 8-8h17v10l-8 2v21h4c9 2 11 6 8 15l-1 7a71725 71725 0 0 0 2 194c3 5 0 13-5 14-8 2-16 3-25 1-5-2-8-10-5-14l2-5V56l-1-10c-1-5 1-7 6-8l6-1V17l-8-5z" />
                <path d="M133 42c-4 67-1 134-2 201 0 4 0 8 2 11 4 6 0 13-6 14l-24-1c-5 0-8-9-4-14l2-6V59l-2-12c-1-8 0-8 7-9l5-1V16l-7-2v-1c-1-8-1-9 8-9h16v10l-8 2v20c5 2 9 3 13 6z" />
            </svg>
        ),
    },
    woodwinds: {
        background: "bg-[#D1D7D5]",
        icon: <i className="text-black text-[2rem] font-bold ri-more-2-line" />,
    },
    strings: {
        background: "bg-[#744800]",
        icon: (
            <svg width="70%" height="70%" fill="#fafafa" viewBox="0 0 100 125">
                <path d="m13 124-3-3c-6-3-10-10-10-17 0-8 5-12 13-12 5 0 10 4 9 10 0 5-2 9-7 9h-4v1l4 7h1c9 0 15-4 21-11l7-15 5-25c0-2-10-7-12-8 3-1 13-1 14-4l4-21c1-8 4-16 9-23 3-5 8-9 15-11l6-1 4 1h2c6 3 9 8 9 15v3c-1 2-2 4-5 5h-7c-3-1-4-3-4-6l2-6c1-2 3-3 5-3h1l-1-1-1-2c-2-3-3-3-6-3l-7 5c-3 4-6 8-7 13-4 11-7 23-8 35l-1 10c0 2 11 7 13 9-2 1-14-1-15 2l-1 8-7 19c-3 6-7 12-13 16-5 3-10 5-15 5l-10-1Z" />
            </svg>
        ),
    },
    percussion: {
        background: "bg-[#F5F5F5]",
        icon: (
            <svg width="80%" height="80%" fill="#BABEC0" viewBox="0 0 309 309">
                <path d="M13 275c-7 7-8 18-2 25 7 6 18 5 25-2l112-118 131-62c5 2 11 2 17-1 10-4 16-12 13-19s-13-8-23-4c-6 3-11 7-13 12l-90 37L283 38c5 0 10-2 15-7 8-8 10-18 5-23s-16-3-23 5c-5 5-7 11-7 16L130 164 0 217v32l80-37-67 63z" />
            </svg>
        ),
    },
    keyboard: {
        background: "bg-black",
        icon: (
            <svg width="70%" height="70%" fill="#FAFAFA" viewBox="0 0 100 125">
                <path d="M30 0h9v59h8v66H22V59h8V0Zm47 125H53V59h8V0h8v59h8v66Zm7 0V59h8V0h8v125H84ZM8 0v59h7l1 1v65H0V0h8Z" />
            </svg>
        ),
    },
    cubase: {
        background: "bg-[#AF142D]",
        icon: (
            <svg width="80%" height="80%" viewBox="0 0 105 127">
                <path
                    fill="#BABEC0"
                    d="m87 103-24 24L0 63 63 0l21 21a41 41 0 0 0 3 82zm0-58a17 17 0 1 0 0 34 17 17 0 0 0 0-34z"
                />
            </svg>
        ),
    },
    "pro-tools": {
        background: "bg-[#7826E7]",
        icon: (
            <svg width="80%" height="80%" viewBox="0 0 1000 1000">
                <path
                    fill="#BABEC0"
                    d="m947 465-1 85-1 3-2 21-13 63h17v6l-4 4-27 63-22 51c-2 3-3 4-7 3l-16-5-35 44a435 435 0 0 1-67 62 425 425 0 0 1-224 87l-14 2h-62l-31-4-37-7c-26-5-51-13-75-24-17-8-34-15-50-25a643 643 0 0 1-101-81c-16-16-30-33-42-52l-5-1-14 4c-4 1-6 0-7-4l-28-65-17-38-7-12-1-8 18-1c-6-23-12-46-14-69l-3-11v-89l5-34 13-56a425 425 0 0 1 106-180c12-13 27-25 40-37a435 435 0 0 1 236-97l16-2h57l12 1 5 1c18 3 36 4 54 8a421 421 0 0 1 210 112 409 409 0 0 1 58 69 415 415 0 0 1 65 138c6 24 11 48 13 73l2 2m-561 36-19 34a636 636 0 0 1-89 128 344 344 0 0 1-63 53l-38 25a398 398 0 0 0 648-1l-19-10a377 377 0 0 1-119-109c-19-25-35-52-50-80l-31-54a329 329 0 0 0-68-78c-12-9-25-15-40-14-12 1-23 5-32 12-13 8-24 18-33 30l-23 28-24 36m142-251 14 2a231 231 0 0 1 135 81l26 33c16 22 29 46 41 71a565 565 0 0 0 123 166l17 13a398 398 0 0 0-651-404 399 399 0 0 0-117 404l4-3 33-27 25-28 35-45c18-26 34-54 47-83a428 428 0 0 1 100-131 225 225 0 0 1 133-50l35 1z"
                />
            </svg>
        ),
    },
    krita: {
        background: "bg-soft-white",
        icon: (
            <svg width="80%" height="80%" viewBox="0 0 1024 1024">
                <defs>
                    <linearGradient
                        id="e"
                        x1="1142.6"
                        x2="1280.9"
                        y1="62.7"
                        y2="200.9"
                        gradientTransform="rotate(-6 1223 100)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0" stopColor="#343434" />
                        <stop offset="1" stopColor="#4d4d4d" />
                    </linearGradient>
                    <linearGradient
                        id="f"
                        x1="1327.6"
                        x2="1324.9"
                        y1="230.9"
                        y2="89.9"
                        gradientTransform="matrix(0 1 1 0 1078 -1094)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0" stopColor="#5596ea" />
                        <stop offset="1" stopColor="#5596ea" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient
                        id="b"
                        x1="112"
                        x2="711.9"
                        y1="512"
                        y2="512"
                        gradientTransform="translate(-1211 -699)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0" stopColor="#ff0" />
                        <stop offset="1" stopColor="#ff0" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient
                        id="c"
                        x1="112"
                        x2="711.9"
                        y1="512"
                        y2="512"
                        gradientTransform="translate(-325 187)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0" stopColor="#0ff" />
                        <stop offset="1" stopColor="#0ff" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient
                        id="d"
                        x1="112"
                        x2="711.9"
                        y1="512"
                        y2="512"
                        gradientTransform="translate(0 -1024)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0" stopColor="#f0f" />
                        <stop offset="1" stopColor="#f0f" stopOpacity="0" />
                    </linearGradient>
                    <clipPath id="a">
                        <circle cx="532" cy="538" r="400" fillOpacity=".5" />
                    </clipPath>
                </defs>
                <circle
                    cx="532"
                    cy="532"
                    r="406.5"
                    fillOpacity=".5"
                    clipPath="url(#a)"
                    transform="translate(-20)"
                />
                <circle cx="512" cy="512" r="400" fill="#fff" />
                <circle
                    cx="-699.4"
                    cy="-187.4"
                    r="400"
                    fill="url(#b)"
                    transform="rotate(210)"
                />
                <circle
                    cx="187.4"
                    cy="699.4"
                    r="400"
                    fill="url(#c)"
                    transform="rotate(-30)"
                />
                <circle
                    cx="512"
                    cy="-512"
                    r="400"
                    fill="url(#d)"
                    transform="rotate(90)"
                />
                <path
                    fillOpacity=".5"
                    d="M225 234a400 400 0 0 0-60 80c59 57 122 117 147 145 44 47 134 115 200 108 26 18 85 59 105 69 0 9 2 19 5 28 19 52 88 86 48 141 79-48 100-128 66-186-21-35-51-47-77-38-15-18-75-68-98-86-14-64-100-130-155-159-34-17-110-61-181-102z"
                />
                <path
                    fill="url(#e)"
                    d="M1288 192c-18 17-54-10-68-27l-77-81c-4-3-7-8-4-13 4-4 9-2 14 1s74 47 94 58 54 40 41 62z"
                    transform="matrix(3.5 0 0 3.5 -3949 -129)"
                />
                <path
                    fill="url(#f)"
                    d="M1317 209a85 85 0 0 1-139-19c6 37 30 70 68 82 28 10 73 10 93-27z"
                    transform="matrix(3.5 0 0 3.5 -3949 -129)"
                />
                <path
                    fill="#BABEC0"
                    d="M664 623c-21 9-18 16-36 13-13-2-121-84-121-84-6-13 1-31 13-46s28-25 42-22c0 0 103 89 107 101 7 17 0 16-5 38z"
                />
                <path
                    fill="#282828"
                    d="M669 805c81-46 105-125 73-184-25-45-66-53-94-31-28 21-30 47-22 73 17 52 85 88 43 142z"
                />
            </svg>
        ),
    },
    "adobe-pr": {
        background: "bg-[#00005b]",
        icon: (
            <span className="text-[#BABEC0] text-[1.5rem] font-bold font-mono">
                Pr
            </span>
        ), // #9999ff
    },
    "adobe-lr": {
        background: "bg-[#18152E]",
        icon: (
            <span className="text-[#BABEC0] text-[1.5rem] font-bold font-mono">
                Lr
            </span>
        ), // #40D0FB
    },
    "adobe-ae": {
        background: "bg-[#00005b]",
        icon: (
            <span className="text-[#BABEC0] text-[1.5rem] font-bold font-mono">
                Ae
            </span>
        ), // #9999ff
    },
    "adobe-ai": {
        background: "bg-black",
        icon: (
            <span className="text-[#ff9a00] text-[1.5rem] font-bold font-mono">
                Ai
            </span>
        ),
    },
    "adobe-pt": {
        background: "bg-[#1e3201]",
        icon: (
            <span className="text-[#BABEC0] text-[1.5rem] font-bold font-mono">
                Pt
            </span>
        ),
    },
    blender: {
        background: "bg-soft-white",
        icon: (
            <svg width="80%" height="80%" viewBox="0 0 64 64">
                <path
                    fill="#BABEC0"
                    d="M44 57c-13 0-20-4-22-13l-1-5-11 8c-2 2-5 3-6 1-2-3-1-6 2-8l20-15H15c-2 0-4 0-4-2-1-2 1-4 4-4h22l-4-4c-2-1-4-2-2-4 1-3 3-3 5-2l13 9 10 9c4 7 4 13 2 19-3 7-9 11-17 11z"
                />
                <path
                    fill="#8f8f8f"
                    d="M31 43c-3-6-2-11 2-15 4-3 11-4 16-1s7 8 5 13c-1 4-5 7-9 8-5 1-10-1-14-5z"
                />
                <path
                    fill="#BABEC0"
                    d="M42 43c-4 0-7-2-8-5 0-3 1-6 4-8a8 8 0 0 1 8 0c3 2 4 4 4 7-1 4-4 6-8 6z"
                />
            </svg>
        ),
    },
    zbrush: {
        background: "bg-black",
        icon: (
            <svg width="70%" height="70%" viewBox="0 0 512 512">
                <path
                    fill="#FAFAFA"
                    d="M263 83c-2-10 1-20 7-30 8-13 18-20 29-21 14-2 27 6 39 22 11 15 16 29 15 42-1 8-12 13-35 14-18 2-31 0-39-5-9-5-14-12-16-22zm248 396c-2 2-6 2-14-2-13-6-27-15-43-28-18-14-29-25-31-34v-7l4-9c2-9-1-17-9-25l-17-12c-16-8-38-15-68-21-31-6-61-9-89-10l-35 2a1224 1224 0 0 1-47 50c-27 24-53 43-79 55-36 18-62 23-80 15-2-2-3-4-2-8l3-10c12-27 32-51 60-73l7-6a539 539 0 0 1 148-71l15-21 18-20a431 431 0 0 1 43-42l-36-23-32-20c-25-11-50-7-76 10-15 10-23 22-24 34l-1 15c1 5-13 12-41 22l-13 4H59l-2-2c-3-5 9-22 35-51l5-6c47-49 102-68 165-57 17 3 46 14 87 32 4-4 12-10 22-16 13-7 25-11 33-12 18 0 30 7 34 22 3 8-3 21-19 36-16 17-32 28-46 32-19 5-38 2-60-9-9 7-20 17-31 31l-2 1-27 33-1 2h19c14 0 28 2 42 7 38 12 70 27 95 45a276 276 0 0 1 69 69l24 39c9 18 12 31 10 39zM371 167c3 3 11 4 24 3 14 0 24-3 30-8 2-3 2-6-1-8-3-3-9-4-18-3-8 2-16 4-25 8s-12 7-10 8zM177 337h-4a367 367 0 0 0-75 25l-29 16c-27 18-40 35-38 52l3 3c7 5 21 1 43-11a374 374 0 0 0 100-85z"
                />
            </svg>
        ),
    },
    "3ds-max": {
        background: "bg-soft-white",
        icon: (
            <svg
                width="50%"
                height="50%"
                viewBox="140 74.1222 107.204 145.5474"
            >
                <path
                    fill="#BABEC0"
                    d="M154 115h-11l-1-1c0-11 5-20 14-28 19-16 57-16 76 1 6 5 9 12 10 21 2 17-6 27-21 33l-2 1c10 2 19 6 24 15l4 13v5c2 23-11 34-26 39-21 8-42 8-61-3-11-6-20-21-20-33h30l3 3c4 16 26 17 35 8 10-9 5-29-7-32l-24-3v-23h12c4 0 9-1 13-3 6-3 8-11 5-20-1-6-6-9-13-9-12 0-15 2-21 16h-19z"
                />
            </svg>
        ),
    },
    maya: {
        background: "bg-soft-white",
        icon: (
            <svg width="50%" height="50%" viewBox="77 39 100 97">
                <path
                    fill="#BABEC0"
                    d="M77 39h31l19 77 6-23 15-54h29v97h-23V74l-16 62h-23l-13-51-4-14v65H77V39Z"
                />
            </svg>
        ),
    },
    alias: {
        background: "bg-soft-white",
        icon: (
            <svg width="50%" height="50%" viewBox="92 55 97 106">
                <path
                    fill="#BABEC0"
                    d="m116 76 6-21h33l3 2 31 103v1h-27l-6-23h-32l-5 19c0 3-2 4-4 4H92l24-85m26 7-2-9h-1l-10 44h22l-9-35z"
                />
            </svg>
        ),
    },
    "fusion-360": {
        background: "bg-soft-white",
        icon: (
            <svg width="50%" height="50%" viewBox="84 211 35 56">
                <path
                    fill="#BABEC0"
                    d="M84 211h35v10H98v13l18 1v9l-18 1v22H84v-56z"
                />
            </svg>
        ),
    },
    rhino: {
        background: "bg-black",
        icon: (
            <svg width="80%" height="80%" viewBox="0 0 512 512" fill="#BABEC0">
                <path d="M192 354c0 8-6 11-10 2-50-91-115-109-172-91-20-1-4-47 0-60 5-12 51-4 71 4 23-80-5-108-11-115-6-8 2-11 2-11s47-15 67-19 25 3 29 21c16 63-45 143-45 143s6 11 22 16c45-43 58-105 60-147 0 0-1-15 11-8 12 8 56 45 64 100 2 22-17 32-17 32-47 33-91 44-97 48 25 35 27 75 26 85zm14-59c-1 4 2 23 0 39-5 12-7 19 2 26 10 7 79 40 119 83 15 16 23-4 12-13-3-3-18-16-18-21 1-5 9 4 12 7-8-17 10-38 30-14 8 8 2 26-5 31 8-7-5-26-16-15-5 5 10 17 13 19 3 3 15-7 20-13 3-5 7-8 13-36 2-7 5-10 11-16 7-6 100-84 110-117 6-17 3-23-10-11-12 12-83 65-110 73-27 7-32-6-28-9 3-3 62-67-4-33-24 9-48-10-53-28-11-34-10-41-34-20-13 11-36 22-45 25-26 7-36 36-15 39s33-1 27 5c-6 7-15 12-5 17l29 20c1 1 10 2 12-4 3-6 1-8-1-9s0-4 4-3c4 0 14-3 16-5 3-2 30-6 37 3-8 3-10-2-21 1-6 3-20 5-27 20-5 11-7 35-27 28-21-7-42-13-39-34 3-20 2-34-9-35z" />
            </svg>
        ),
    },
    "davinci-resolve": {
        background: "bg-black", // circular gradient
        icon: (
            <svg width="60%" height="60%" viewBox="62 66 379 350">
                <path
                    fill="#BABEC0"
                    d="M252 66c40 0 72 37 72 72 0 36-58 104-72 104-15 1-73-68-73-104 0-35 33-72 73-72Z"
                />
                <path
                    fill="#BABEC0"
                    d="M71 381c-20-35-4-81 26-99 31-18 119-2 127 11 7 12-23 97-54 115-31 17-79 8-99-27Z"
                />
                <path
                    fill="#BABEC0"
                    d="M432 381a75 75 0 0 1-98 27c-31-18-61-102-54-115s95-29 126-11 46 64 26 99Z"
                />
            </svg>
        ),
    },
    "media-composer": {
        background: "bg-[#7B2CE8]",
        icon: (
            <svg width="80%" height="80%" viewBox="0 0 210 200">
                <path
                    fill="#BABEC0"
                    d="M191 93v19a731 731 0 0 0-6 22 672 672 0 0 0-8 16 460 460 0 0 0-8 11l-8 8-8 6-9 6a70 70 0 0 1-35 11 98 98 0 0 1-40-5l-12-6-8-6a380 380 0 0 0-8-5 103 103 0 0 1-26-43 104 104 0 0 1-3-37 89 89 0 0 1 176-7l3 10m-36-23-1-2-9-3H59c-3 0-7 0-10 3l-1 4v54l1 9c0 3 2 5 6 5h92c3 0 5-3 9-5V75l-1-2 1-1-1-2M28 126l5-1 6-3v-12l-1-2-16 1c1 6 0 12 6 17m36 25h-7c-4-2-5 0-6 4a14 14 0 0 0 9 16l21 8c6 2 13 4 19 4 14-2 28-4 41-11 10-6 11-10 9-21H64m76-97h6l4-2c3-4 0-12-3-14a70 70 0 0 0-35-14H87c-9 2-19 7-28 10-6 3-9 7-8 14 0 4 1 6 6 6h83m27 72c12 0 17-8 12-19h-15l-1 14c0 2-1 5 4 5M23 90c0 7 0 7 7 7 9 0 9 0 9-10s2-9-9-9c-4 0-6 4-7 12m140-3c0 9 0 9 10 9h3c3 0 4-1 4-5l-1-3c-1-3-1-8-4-9-2-2-7-1-10 0l-2 8m-1 50-1 16h1l11-15-1-1h-10M41 151l-1-14h-4l-5 2 1 5 7 9 2-2m122-98-1 12 3 2h7a468 468 0 0 0-9-14M40 61l1-9-1-1-10 15 10 1v-6z"
                />
                <path
                    fill="#BABEC0"
                    d="M155 136V73l1 2-1 61zm0-64v-2 2zm0-2-1-1 1 1z"
                />
            </svg>
        ),
    },
    "blackmagic-fusion": {
        background: "bg-soft-white",
        icon: (
            <svg width="80%" height="80%" viewBox="0 0 240 240">
                <path
                    fill="#BABEC0"
                    d="M53 125c-6-6-11-11-12-20-2-16 6-28 21-32 8-2 16 1 23 5 4 3 9 4 13 4h9c11 0 20-7 24-17 3-7 13-16 23-16 13-1 22 4 28 15 10 17-2 36-15 40-8 2-17 2-26-3-7-5-15-6-24-5-10 2-16 8-21 17-5 7-11 13-19 16-9 2-16 0-24-4z"
                />
                <path
                    fill="#BABEC0"
                    d="M165 155c-7 2-13 1-19-3-9-6-23-5-32 7-7 11-18 16-28 12-14-4-19-22-9-33 8-7 17-8 28-3 12 6 23 6 32-5l9-9 6-4c9-2 17 0 23 6 5 5 6 12 3 18-2 6-7 11-13 14z"
                />
                <path
                    fill="#BABEC0"
                    d="M103 197v-8c0-7 6-12 13-12s14 6 14 12v7c-2 7-5 10-12 10-8 1-12-2-15-9z"
                />
            </svg>
        ),
    },
    "foundry-katana": {
        background: "bg-black",
        icon: (
            <svg width="80%" height="80%" viewBox="0 0 364 364">
                <path
                    fill="#BABEC0"
                    d="M121 180c-44 30-15 94 0 108 0 0-78-39-39-102 29-47 83-54 87-58l19-14-14 21c16 4 29 12 41 21 22-87-70-85-95-75 4-8 61-39 102 3 54 55 15 110 15 110 4 10 4 17 4 26l-11-17c-15 13-40 21-40 21 9 13 53 20 72 12 25-11 28-30 43-55 0 0-28 155-153 46l-31-13 24 2c-10-17-11-31-1-46m20-6s-6 31 18 43c0 0 24-12 25-26 0-2-24-28-43-17Zm170 65c-5 16-12 31-22 44-10 15-22 26-37 35 0 0-139 87-223-42-16-25-24-54-25-83 0-58 33-111 84-137 29-16 62-21 95-16 45 6 85 32 109 70 44 69 19 129 19 129m-32 30s70-94-39-187c-25-22-63-25-80-25-75-1-135 59-136 134 3 88 53 118 89 133 8 3 103 28 166-55Z"
                />
            </svg>
        ),
    },
    "foundry-modo": {
        background: "bg-black",
        icon: (
            <svg width="60%" height="60%" viewBox="230 253 560 475">
                <path
                    fill="#BABEC0"
                    d="M639 353s-8-21-8-26c19-46-30-76-24-74 20 4 70 45 69 53-3 14-27 53-27 53-2 2-10-4-10-6Zm30 95c-7 4-27-33-28-40l-8-30c4-5 16-9 22-6 20 10 62 37 59 39-12 10-32 28-45 37Zm-176-69c4-47 30-125 37-110l-2 17c-1 26 4 51 10 75-15 3-40 38-40 38-3-6-6-17-5-20Zm259 62c4 3-32 39-36 37-13-7-42-27-42-27 15-10 28-21 41-33 3-2 28 15 37 23Zm-25-34 32-36c8 8 30 39 30 39 2 6 1 11-4 14l-21 14c-4 1-40-28-37-31Zm60 25c-12 43-51 47-51 47 17-19 44-45 51-47Zm-556 85c4-22 31-181 201-77 21 13 41 30 60 45 0 0 20 27 23 35l28 82-25-97c-7-25-12-51-18-77-3-11-1-23 8-32 14-15 31-26 52-29 0 0 45 0 54 3 8 2 31 80 31 80l16 60s52 170-34 208c-22 10-47-1-66-17-17-14-32-31-48-46l-29-32c-17-19-38-34-57-51-20-16-40-31-62-44-4-2-2-20 2-25-7 2-10 9-12 15s14 166 14 166c-1 10-41 38-57 41-17 4-33 3-45-11-8-10-30-67-33-85-3-17-6-101-3-112Zm394-150c-1 1-34-22-72-8-9 3-14-18-15-27-3-18-17-75 21-78 33-3 72 18 69 57l-3 56Zm31-7c4-9 26-43 27-64 0-5 74 67 69 74-7 12-22 38-43 29-18-8-54-37-53-39Z"
                />
            </svg>
        ),
    },
    opentoonz: {
        background: "bg-[#589C3C]",
        icon: (
            <svg width="80%" height="80%" viewBox="0 0 256 256">
                <path
                    fill="#FDFEFD"
                    d="M47.8 190.2a73.2 73.2 0 0 1-44.8-77 72.5 72.5 0 0 1 57-62.5 71 71 0 0 1 75.1 28 10 10 0 0 0 9 4.4h107.7v21.5h-42.6V181c0 4 0 7.5-3.5 11-5.3 5.2-9.2 11.7-13.8 17.6-1 1.3-2 2.4-4 4.5V105h-40c5.6 32-3.3 58.6-29.9 77.4a71 71 0 0 1-70.2 7.8M31.5 154a54.6 54.6 0 1 0 89.2-63.5A54.6 54.6 0 0 0 31.5 154z"
                />
                <path
                    fill="#599D3E"
                    d="M158 245.9a3 3 0 0 1-1-.9l1.6-.5a5 5 0 0 1-.6 1.4zm-10 6.3a9 9 0 0 1-2.7 1.7 9 9 0 0 1 2.8-1.7zm66.5-59.9c-.2-.3-.2-.6-.2-.9l.9.3c-.2.2-.4.5-.7.6zM175.3 229h-.6.6zm-10.1 9.8c0 .2-.2.3-.4.4l.4-.4zm-2.7 2.2zm49-50.5zm-34 35z"
                />
            </svg>
        ),
    },
    "clip-studio-paint": {
        background: "bg-soft-white",
        icon: (
            <svg width="70%" height="70%" viewBox="0 0 100 100">
                <path
                    fill="#BABEC0"
                    d="M92 18c-23-38-77-4-77-3C2 22-4 34 4 44v1l2 2c15 25 55-2 55-2l2-2 2-2-1-6-2-3-3-1-4-1-3 1c-11 7-34 22-36 2 3-12 40-18 40-19 7-3 19 1 26 21 1 0 7 13-11 21L34 73l14 23 3 2 6 2 6-3 1-3c1-2 0-4-1-6v-1l-5-7 22-10 12-9 3-4 2-5 1-5c1 0 4-9 1-17"
                />
            </svg>
        ),
    },
    "toon-boom": {
        background: "bg-black",
        icon: (
            <svg width="70%" height="70%" viewBox="0 0 90 120">
                <path
                    fill="#BABEC0"
                    d="M0 110V78a40 40 0 0 1 39-32h16c7-2 12-8 12-16V11c0-5 4-10 9-11h5c4 1 8 5 9 8v99c-2 7-10 11-16 7-5-2-7-5-7-10V66h-1l-15 3h-9l-6 1c-8 1-13 7-13 15v25c0 2-1 3-3 3l-2-3V93l-1-2c-2-1-3 0-3 2v10c0 2-1 3-3 3-1 0-2-1-2-3v-6l-2-2c-2 0-3 1-3 2v11l-1 3-3-1ZM14 0c3 1 5 2 7 5l2 6v25c0 5-5 10-10 10-5 1-9-1-12-6l-1-2V8c1-4 5-7 8-8h6Zm5 120-1-3 2-2 2 1v4h-3Zm-6-11v3c-1 1-2 2-3 1l-1-2 1-2h3Z"
                />
            </svg>
        ),
    },
    lego: {
        background: "bg-[#DA291C]",
        icon: (
            <svg width="80%" height="80%" viewBox="0 0 75 30">
                <path
                    fill="#050505"
                    d="M16 26C-12 35 3 6 9 2c3-4 11-2 11 1 2-5 16-6 17-2 12-5 20 0 18 2-1-2 25-12 19 12-6 21-23 12-25 9 1 5-17 6-17 2-2 2-15 3-16 0Z"
                />
                <path
                    fill="#FCFCFC"
                    d="M56 24c-5 0-4-27 14-21 5 10-5 25-14 21Zm-36 1c-3 0-7-6 3-20 3-4 6-3 8-3 7 1 6 6-2 5-2-1-3 3-3 4 7-1 11 5-1 4-2 0-2 3-2 4 11-2 12 6-3 6ZM7 25c-11 0 3-27 9-22 3 0-5 16-6 16 8-2 7 6-3 6ZM36 7c5-8 17-6 17-2-1 11-4 2-8 1-7 3-8 13-6 14 4 1 11-6 3-5 2-6 9-3 9 0-1 5-6 10-12 10-7 0-9-7-3-18Z"
                />
                <path fill="#050505" d="M58 19c-1 0 2-13 7-12s-2 14-7 12Z" />
            </svg>
        ),
    },
    badminton: {
        background: "bg-black",
        icon: (
            <svg width="70%" height="70%" viewBox="0 0 50 50">
                <path
                    fill="#FAFAFA"
                    d="m22 41-7 3-2 2-8-9 1-2 9-24 3-11 3 7-6 13-3 3-2 4 2 3 4-5v-3l6-15 6-2 1 7-10 12-2 1-4 6 2 3 5-5v-4l11-13 7-1 1 8-14 11h-4l-5 5 3 2 6-4 1-2 12-10 7 1c1 2-1 6-2 6l-14 6h-3l-6 4 3 2 5-2 2-2 14-7 6 3-28 9ZM1 41l3-3 8 8-2 3c-2 0-3 2-6 0-3-1-5-5-3-8Z"
                />
            </svg>
        ),
    },
    "table-tennis": {
        background: "bg-[#004D80]",
        icon: <i className="text-[#A4230D] text-[2.25rem] ri-ping-pong-fill" />,
    },
    chess: {
        background: "bg-soft-white",
        icon: (
            <div className="w-full h-full relative">
                <div className="w-1/2 h-1/2 bg-black absolute top-0 right-0" />
                <div className="w-1/2 h-1/2 bg-black absolute bottom-0 left-0" />
            </div>
        ),
    },
    baseball: {
        background: "bg-[#3D4741]",
        icon: (
            <svg width="80%" height="80%" viewBox="0 0 90 125" fill="#FCC998">
                <path d="M40 59 29 78 5 114c-2 0-3 0-4 2-2 1-1 4 1 5l5 3 2 1 3-2v-4l24-36 14-17 12-14 12-17 14-22c3-4 1-7 0-8l-5-4-3-1c-2 0-4 1-6 4L60 25 49 43l-9 16Z" />
            </svg>
        ),
    },
    football: {
        background: "bg-soft-white",
        icon: <i className="text-black text-[2.5rem] ri-football-fill" />,
    },
    dota: {
        background: "bg-[#A4230D]",
        icon: (
            <svg width="70%" height="70%" viewBox="0 0 20 18">
                <path d="m0 17 2 1h2l3-1-5-5M0 1l16 17h2l2-5L2 0m10 2 5 3 1-3-1-1" />
            </svg>
        ),
    },
    cs: {
        background: "bg-soft-white",
        icon: (
            <svg width="80%" height="80%" viewBox="0 0 95 120">
                <path
                    fill="#010101"
                    d="M49 14c1 4 28 6 28-1 0 6 16 3 18 6 1 2-37-2-33 9 0 2-2 1-1 4 2 7-12 14-16 6-1-3-3-1-2 2 4 10-6 15-2 22 3 4 11 17 10 19 0 3-7 30 5 33 7 2 2 4 1 4-3 0-19 2-15-4 1-3-6-13-2-22 3-4-10-24-13-22L16 93c-3 3-7 18-7 17-2-1 2 9-1 10H1c-5-1 6-29 9-35 0-1 0-22 2-25 1-1-4-21 0-24 4-4 6-16 9-19 3-4 10 0 8-4C23 2 44-8 46 9c0 3-3 4-3 7 0 2 5 1 6-2Z"
                />
            </svg>
        ),
    },
    overwatch: {
        background: "bg-[#4A4C4E]",
        icon: (
            <svg width="70%" height="70%" viewBox="0 0 50 50">
                <path
                    fill="#FA9C1E"
                    d="M25 0C19 0 14 2 9 5l5 6a18 18 0 0 1 22 0l5-6c-5-3-11-5-16-5Z"
                />
                <path
                    fill="#FAFAFA"
                    d="M8 7c-5 4-8 11-8 18A25 25 0 1 0 42 7l-5 5a18 18 0 0 1 4 22L31 24l-5-10v16l10 9a18 18 0 0 1-22 0l10-9V14l-5 10-9 10a18 18 0 0 1 3-22L8 7Z"
                />
            </svg>
        ),
    },
    r6: {
        background: "bg-black",
        icon: (
            <svg width="80%" height="80%" viewBox="0 0 63 132">
                <path
                    fill="#FFF"
                    d="M51 3c12 6 12 14 12 34H37V24c-2-4-8-4-10 0v21c16-9 36 3 36 8v55c0 30-62 34-62 0-1-29-2-58-1-88C1 6 12 0 31 0c5 0 16 1 20 3Z"
                />
                <path
                    fill="#010101"
                    d="M21 73s28-7 29-6c2 4 2 10-1 9l-12 4v10s-7-1-8 2l1 21-9 1V73Z"
                />
            </svg>
        ),
    },
    wot: {
        background: "bg-black",
        icon: (
            <svg width="80%" height="80%" fill="#999E98" viewBox="0 0 55 75">
                <path d="M49 16 38 6H17L6 16h16v46l6 5 5-5V16h16Z" />
                <path d="M49 21H39v20l-6 5 8 8 8-8V21ZM17 41V21H6v25l8 8 8-8-5-5Z" />
                <path d="M16 3 3 16v31l25 24 24-24V16L39 3H16Zm-1-3h25l15 14v34L28 75 0 48V14L15 0Z" />
            </svg>
        ),
    },
    hearthstone: {
        background: "bg-[#5A74A5]",
        icon: (
            <svg height="70%" width="70%" viewBox="0 0 25 25">
                <path
                    fill="#62E8F3"
                    d="m7 25-4-2 5-2 10-4c2-2 2-4 1-7 0-2-2-3-4-5-1-1-7 1-8 2-2 1 0 2-1 3-1 2 3 3 4 3v-3c1-1 3 0 4 1s2 3 1 4l-7 2c-1 1-2 1-3-1L0 7l5-5c2-2 5-3 7-2 0 0 7 1 8 3 3 3 5 7 5 11l-3 5c-1 3-4 4-7 5l-8 1Z"
                />
            </svg>
        ),
    },
    warcraft: {
        background: "bg-gradient-to-br from-[#5B779E] to-black",
        icon: (
            <svg width="70%" height="70%" viewBox="11 11 26 26">
                <path
                    fill="#ecd500"
                    d="M24 13v7l-4 15v-7l4-15Zm-13-2 4 3 4 21-3 2v-2l-4-22-1-2Zm16 24-2 2 1-2-2-6v-9l3 15Zm4-22-1-2 3 2-3 22-2-7 3-15Z"
                />
                <path fill="#792100" d="M33 37h-8l2-2h3Zm-13-2 3 2h-7l3-2Z" />
                <path
                    fill="#c67200"
                    d="m32 34 1 3-3-2 3-22 4-2-1 3Zm-2 1h-3l-3-15v-7Zm-7 2-3-2 4-15v9l-2 6Zm-6-24 3 15v7h-1l-5-21 3-3Z"
                />
                <path fill="#fdf8dc" d="m37 11-4 2-3-2Zm-20 0-3 3-3-3Z" />
            </svg>
        ),
    },
    starcraft: {
        background: "bg-[#3969A4]",
        icon: (
            <svg width="70%" height="70%" fill="#ACC3E3" viewBox="0 0 50 50">
                <path d="M28 50V35c4 6 10 4 10 4 0 6-7 10-10 11Zm-5-13v13c-5-1-10-5-10-12l10-1ZM12 16l14 14c0 3-2 4-4 4H0l5-4s12 2 13 1L3 16h9Zm22 0c-7 3-1 22 13 17-5 8-25 0-21-17h8Zm-2-6h18l-6 5c0-3-15-2-16-2l4-3Zm-11 5L3 14c-5 1-2-2 0-3h22s-4 6-4 4Zm2-7H12c1-4-5-6-5-5l9-3 7 3v5ZM7 3H6h1Zm37-1c-4 0-6 6-7 6-5 0-8 0-9 2V3l6-3 10 2Z" />
            </svg>
        ),
    },
    borderlands: {
        background: "bg-[#d0a148]",
        icon: (
            <svg width="90%" height="90%" viewBox="0 0 61 61">
                <path
                    fill="#721E19"
                    fillRule="evenodd"
                    d="M37 6a25 25 0 1 1-13 49A25 25 0 0 1 37 6Zm-1 44a21 21 0 0 1-20-5s16-27 18-26l2 31Zm6-2c4-3 7-7 9-12a21 21 0 1 0-39 3l16-21c1-2 3-5 7-4 3 1 4 4 4 7l3 27"
                />
            </svg>
        ),
    },
    aoe: {
        background: "bg-black",
        icon: (
            <svg width="80%" height="80%" viewBox="0 0 34 48">
                <path
                    fill="#EB0709"
                    d="M7 2c2-1 0-3 12-1 2 0 0 4-1 6l1 4c2 7 4 15 2 21-2 5-15 10-7 14 1 1 3 0 4-1 2-2-1-5-4-2-1-2 1-3 3-3 4 0 5 9-5 8l-4-4c0-3 0-5 2-7-3-1 2-11 3-12 0-2-4-1-7-3-1-1-2-3-6-3-1 0 1-4 4-2 5 3 6-5 4-5-2-3 6-1 6-5h-4C8 7 8 6 9 6c3 0 3-2 3-3H8L7 2Zm17 8c2-1 0-5-1-7 16 2 12 27 4 27 0-4-1-7-4-11-1-2 0-8 1-9Z"
                />
                <path
                    fill="#FEFFFE"
                    d="M3 11h11c1 3-3 1-3 4v18c0 2 3 1 2 3H3c0-1 3-1 3-3V15c0-2-4-1-3-4Zm14 0h11c0 3-3 1-3 4v18c0 2 2 1 2 3H17c0-1 3-1 3-3V15c0-2-4-1-3-4Z"
                />
            </svg>
        ),
    },
    hades: {
        background: "bg-black",
        icon: (
            <svg width="80%" height="80%" viewBox="0 0 50 50">
                <path
                    fill="#AC1E0A"
                    d="M46 31c1 6-11 8-11 5-3-2 0-14 1-13 1 0 4 7 1 11 2-2 9-3 9-3Zm-7-15c4 1 2 14 10 6 1-1 1 0 1 2-1 4-8 6-9 5-4-3-3-13-2-13ZM0 22c1-1 6 1 8 3-1-3 2-9 3-9 2 0 1 12-2 13-5 2-10-6-9-7Zm14 1c3 1 5 15 1 14-3 3-14-3-11-6 1-1 8 2 10 3-3-2-2-11 0-11Zm16 16 3 3-7 7c-1 1-2-1-3-1l2-2c2 0 3-3 1-3v-1c-2-1 3-4 4-3Zm-5-4-3 3-2-2 3-6c0 1 0 5 2 5Zm6 0-5-11 1-18 4 29Z"
                />
                <path
                    fill="#FB0A02"
                    d="m17 42 10-8c0-3-2-16-1-18l5 19-7 7c-2 1 0 3 1 3v4c-1 1-8-7-8-7Zm4-6-2-2c2-2 6-28 4-29 3 2 1 30-2 31Z"
                />
                <path
                    fill="#FEAD03"
                    d="M39 14c5 8 7-7 7-8 0 1 0 13-1 12 0 0 3-6 2-7 2 2 1 12-3 12l-1-1c-1-7-5-8-5-5 0 0 0-4 1-3ZM3 12c-1 2 2 8 2 8C3 16 3 4 5 6c-2 7 1 15 7 7v5-3c-6 3-5 8-5 9-1 0-5-3-6-6 0-3 1-7 2-6Zm6 5Z"
                />
                <path
                    fill="#FBF309"
                    d="M43 16c-3 0-7-8-6-9l4 4-6-10c1-1 8 6 8 8l-1-4 1-3 2 5c2 3-2 9-2 9ZM14 7c1 0-3 9-7 9-1 0-4-8-2-10l2-4v6c0-1 5-7 8-8 0 2-5 10-6 10l5-3Z"
                />
            </svg>
        ),
    },
    hk: {
        background: "bg-black",
        icon: (
            <svg width="90%" height="90%" viewBox="0 0 62 94">
                <path
                    fill="#FCFCFC"
                    d="M34 0c0 1 14 39 13 40-3 0-6 7-4 8 5-1-3 7 0 6 4-1 13-7 6-10 2 0 6-8 3-12-1 1-12-22-10-23 0 0 23 33 20 33-2-1-9 3-5 6 6-1-6 7-5 8-1 1-11 5-12 12-2 0-8 10-4 12 3 1-1 9-5 14-3-4-9-15-4-14 3-2-1-12-5-12 0 0 1-6-12-12 1-1-11-8-4-8 5-2-5-6-6-6-2-3 20-34 21-33 0 1-14 27-12 28-1 1 2 7 5 6-8 5 3 11 6 11 1 0-4-6 0-7 3 0-3-7-4-7-3-1 13-40 14-40l-2 12c-6 11-7 27 0 32-5 3-2 12 3 12s8-8 4-12c5-1 6-26 0-32L34 0Z"
                />
            </svg>
        ),
    },
    ori: {
        background: "bg-gradient-to-bl from-[#0D51B5] to-[#DD86CB]",
        icon: (
            <svg width="70%" height="70%" viewBox="0 0 53 46">
                <path
                    fill="#EEFCFD"
                    d="M20 0c1 5 0 24 3 23h7l2-23c5 4 5 22 3 25 0 0 4 2 4 5 2-9 8-14 14-16l-3 15c-4 9-15 17-23 17-13 0-19-8-24-16-2-4-3-17-3-17 7 5 12 10 12 16 0 1 5-5 6-4-4 1-4-23 2-25Z"
                />
                <path
                    fill="#A5D5E4"
                    d="M19 37c1 0 0-3-2-2l-4 3c-2-5 7-10 7 0l-1-1Zm20-3s-2 3-4 1l-1 2-2 1c0-6 8-6 7-4Z"
                />
                <path
                    fill="#28627F"
                    d="M35 35c3-7 9 2 1 6-4 0-5-1-4-3h2c1 0 3-1 1-3Zm-20 5c-6-4-1-10 3-6l-1 1c-2 2 0 4 2 2 4 1 2 4-1 4l-3-1Z"
                />
                <path
                    fill="#53A4C1"
                    d="M28 44c-1 0-7-1-7-3l4-1c3-1 6 1 6 1l-3 3Z"
                />
            </svg>
        ),
    },
    diablo: {
        background: "bg-black",
        icon: (
            <svg width="80%" height="80%" viewBox="0 -3 50 47">
                <path
                    fill="#FD3107"
                    d="m10 0 5 4c5-3 15-3 20 0l6-4-2 7s9 9 6 19l5 4h-6c-3 6-10 11-16 11l-2 6-3-6c-5 0-14-6-16-11H0l6-5c-2-4 0-14 6-19l-2-6Zm26 8-8 5 5 4 3-9ZM15 8l3 8 4-3-7-5Zm-2 2c-5 3-5 9-5 14l7-6-2-8Zm10 20 2 7 3-7h-5Zm19-3-7-5-2 5h9ZM18 6l7 5 8-5c-5-2-11-2-15 0Zm1 14 3 7h7l3-7-6-5-7 5Zm23 4c1-3-1-12-4-14l-3 8 7 6ZM29 37c4 1 10-4 11-7h-8l-3 7Zm-7 0-3-7h-9c3 4 7 7 12 7ZM9 27h9l-1-6-8 6Z"
                />
            </svg>
        ),
    },
    poe: {
        background: "bg-black",
        icon: (
            <svg width="80%" height="80%" viewBox="0 0 30 50">
                <path
                    fill="#f9d11d"
                    d="M17 22c3 0 8-2 9-5 0-3-6-6-9-6v11Zm0-22v8c4 1 8 4 10 6V4h3v25l-3 1V20c-2 3-8 5-10 4v26h-3V25c-4-1-10-2-11-5v9H0V4h3v9c2-2 7-4 11-4V0h3Zm-3 11c-4 0-10 2-10 6 1 4 7 5 10 5V11Z"
                />
            </svg>
        ),
    },
    ln: {
        background: "bg-black",
        icon: (
            <svg width="80%" height="80%" fill="#FAFAFA" viewBox="0 0 60 37">
                <path d="M30 37c-3 0-2-1-2-4l-6-1c2-3 6-4 5-10l-5-6 8-10 9 10-5 7 1 14-2-1c0-2-2-7-3 1Zm3-21c-2 5-3 4-5 1 3-4 4-2 5-1Zm-2 6 5-6-5-5-5 6 5 5Zm-11 8C17 33 1 18 0 17-2 16 16 0 31 0c16 0 28 16 29 17S45 33 41 31l-2-6c3-2 11-7 0-18-4-4-10-7-18 0-10 10-3 17 1 18l-2 5Z" />
            </svg>
        ),
    },
    sh: {
        background: "bg-soft-white",
        icon: (
            <svg width="70%" height="70%" fill="black" viewBox="0 0 65 48">
                <path d="M41 33c-3 3-2 11-1 14h-9s1-13-1-18c6-1-9-10-8-9 12 7 10-14 9-20h8c2 0 2 14 1 16s9 2 6-1c7 7 5-14 5-15l9 1s-1 12 2 14c-5 5 5 8 3 8-8 0-5 16-3 15 3-2-3 0-2 8l-3 1c1-4-2-7-2 0h-5c0-3 3-22-7-16l5-5c-6-4-15 3-7 7Zm-15 3c-2 8-15 16-25 9V33c10 20 22-7 7-1l1-3C-3 22-5-4 17 0c2 1 4 6 3 7-2 2 1 5 0 5l-4 5c1-1 4-6 1-7 3 0-5-5-7 1-3 5 2 10 6 7-1 5 11 15 8 18-5 5 1 2 2 0Zm23-7c3 3 4-2 2-2-1-1-3 1-2 2Zm4-10c1-1-1-1-1-1-2 2-1 5 1 1Zm2-9c1 4 4 5 3-1-1-3-4-3-3 1Zm-20 2 4-1c0-4-5-3-4 1Z" />
            </svg>
        ),
    },
    re: {
        background: "bg-black",
        icon: (
            <svg width="80%" height="80%" viewBox="0 0 30 30">
                <path
                    fill="#c00"
                    d="M15 13 10 0c1 3 9 4 10 0l-5 13Zm-2 2L0 20c3-2 4-9 0-10l13 5Zm2 2 6 13c-2-3-10-3-11 0l5-13Zm2-2 13-5c-3 1-4 9 0 10l-13-5Z"
                />
                <path
                    fill="#ddd"
                    d="M14 14 1 8c4 1 9-4 7-7l6 13Zm2 0 6-13c-1 3 4 8 7 7l-13 6Zm-2 2L8 29c1-3-4-9-7-7l13-6Zm2 0 13 6c-3-1-8 4-7 7l-6-13Z"
                />
            </svg>
        ),
    },
    "dead-space": {
        background: "bg-black",
        icon: (
            <svg width="80%" height="80%" viewBox="0 0 38 100">
                <path
                    fill="#D60106"
                    d="M31 67c8 14-2 26-3 25-2 0-4-10 3-25ZM5 13c-3 8 1 23 4 27l-6 9c-3 1-6-20 2-36ZM15 1c-2 8-3 24 3 28l-7 9C6 33 7 8 15 1Zm17 6c1-1 3 14-3 24-4 8-28 48-25 52-6-5-3-19-2-23C6 46 36 12 32 7Zm-7 11s4-10 0-18c3 1 5 8 5 9 1 1-3 7-5 9Zm13 19c-2 13-18 40-14 58 1 0-2 5-4 5-1 0-12-6-13-13-4-15 31-58 29-69 3 6 3 15 2 19Zm-4 19c3 4 2 20 2 19l-5-11 3-8Z"
                />
            </svg>
        ),
    },
    mh: {
        background: "bg-black",
        icon: (
            <svg width="80%" height="80%" viewBox="0 0 58 75">
                <path
                    fill="#6FC687"
                    d="M50 75H7l-7-7V25l7-7V5H0V0h12v19l-6 7-1 38 5 4h37l6-5V27l-7-8V0h12v5h-7v13l7 8v39l-8 10ZM22 9c-1 2 1 8 2 9 2 2 9 8 8 14s-5 3-5 1c1-4-5-10-5-10-6-6-5-16-5-16 6-6 6-5 13-6 5 0 8 2 10 5 7 11-8 17-11 13l-3-6c0-2 5-4 5 0 1 3 5 3 5 0 1-5-2-8-6-8s-7 1-8 4ZM11 63V38h37v25H11Z"
                />
            </svg>
        ),
    },
    er: {
        background: "bg-black",
        icon: (
            <svg width="80%" height="80%" viewBox="0 0 80 67">
                <path
                    fill="#CB0101"
                    d="M0 64c5-2 22-18 20-21l-5-6c-4 2-13 3-10 1 5-3 26-28 11-22-6 3-10-9-7-10 0 1 6 2 7 1 1-2 46-11 49-5 4 7-6 9-8 7-6-2-42 2-27 8 3 1-2 6-2 6 8-4 14 7 9 9-2 0-7 9-6 10 4 2 4 9-4 7-2 0-15 19-27 15Zm70-23c0-4 12 15 10 18 0 3-11 8-19 8-11 0-21-5-20-10 0-1 3-33 1-36-1-1-6-4-2-6l5-3c4-1 11 6 6 9-2 2-1 10-1 9 1-2 15-7 17-4 6 2-7 14-12 12l-5-1c-4 11 0 20 3 21 18 3 17-6 17-17ZM26 26l-9 9 7 2c2 1 5-7 4-8 1-1-2-4-2-3Zm1 5Z"
                />
            </svg>
        ),
    },
    gow: {
        background: "bg-black",
        icon: (
            <svg width="80%" height="80%" viewBox="0 0 45 40">
                <path
                    fill="#BC1622"
                    d="M3 16C2 15 8 5 10 6l3 5-4 8c-1 1-6-3-6-3Zm1 1 2 2-3 2 1-4Zm5 5 4 7-4 4c-3-2-6-11-5-11l2-3 3 3Zm1 12 4-5c1 2 6 4 6 4 1 0 2 6 0 6-5-1-15 0-20-3h14l-4-2Zm13-1 1 6-2 1 1-7Zm9 2 13 1c1 0-5 4-7 3H25v-6s5-2 6-4l1 3 3 1-3 2Zm10-14c1 1-6 11-6 11l-4-4c1-1 5-6 4-8l6 1ZM37 5l4 7 1 6-6 1c1-2-1-8-2-9l3-5ZM26 6l-1-5c2-2 12 4 10 5l-3 5-6-5Zm-1-1h-3l2-3 1 3Zm0-5-3 4V0h3ZM10 5c0-1 9-6 10-5l1 4c1 3-8 5-8 5l-3-4Z"
                />
            </svg>
        ),
    },
    "alan-wake": {
        background: "bg-soft-white",
        icon: (
            <svg width="80%" height="80%" viewBox="0 0 79 195">
                <path
                    fill="black"
                    d="M46 59c0-12 14-10 14 0 0 9-13 10-14 0ZM5 195h73c2 1 1-15-1-20l-9-43v-3c2-2-4-25-4-25l4-2c1 0-3-32-6-33 1 3 6 1 11-5 3-2 0-30-9-36-5-3-19 0-15-8 4-7 1-24-12-19-10 4-5 16-2 20 4 4 5 10 1 10-9 1-10 7-10 8-2 3-8 40-6 40-2 1-5 14-5 14-2 2-6 14-6 14H6c-2 1-5 5-4 6l-2 10 4 1 1-4 3-3c1 0 3-1 4-4 0 0 9-1 7-5l3 1c0 4-6 45-2 47-2 2-4 28-4 28 3 5-14 9-15 8 1 3 3 3 4 3Zm57-14c5 8 4 14 2 14H28c6-1 7-38 6-38l11-48c2 0 18 63 17 72Z"
                />
            </svg>
        ),
    },
    "outer-wilds": {
        background: "bg-black",
        icon: (
            <svg width="60%" height="60%" viewBox="0 0 50 50">
                <path
                    fill="#FF7D26"
                    d="M38 38c-4 8-12 13-20 12-9-1-16-7-18-17s6-21 16-23c11-2 22 5 24 16 1 4 0 8-2 12Zm-5-14c-3-7-10-11-18-8-3 1-7 4-7 8 16-9 26 6 18 19 8-4 10-12 7-19Z"
                />
                <path
                    fill="#FF7E28"
                    d="M45 0c2 0 4 1 5 3 0 2 0 4-2 5-6 2-9-6-3-8Z"
                />
            </svg>
        ),
    },
    hl: {
        background: "bg-black",
        icon: (
            <svg width="80%" height="80%" viewBox="0 0 56 56">
                <path
                    fill="#F37B21"
                    d="m35 43-7-16-9 14h-5l12-20-1-4h-5v-5h8l10 25 4-2 2 5-9 3Z"
                />
                <path
                    fill="none"
                    stroke="#F37B21"
                    strokeWidth="5"
                    d="M53 28a25 25 0 1 1-50 0 25 25 0 0 1 50 0Z"
                />
            </svg>
        ),
    },
    undertale: {
        background: "bg-black",
        icon: (
            <svg width="50%" height="50%" viewBox="0 0 16 16">
                <path
                    fill="#fe0000"
                    d="M4 0v1h2v1h1v2h2V2h1V1h2V0h2v1h1v1h1v8h-2v2h-2v2h-2v2H6v-2H4v-2H2v-2H0V2h1V1h1V0Z"
                />
            </svg>
        ),
    },
    "apex-legends": {
        background: "bg-[#CD3334]",
        icon: (
            <svg width="80%" height="80%" viewBox="0 0 50 50">
                <path
                    fill="#FAFAFA"
                    d="M21 40 7 50c-1 1-7-7-7-8L25 0l25 42c1 1-6 8-7 8L29 40h8L25 19 13 40h8Z"
                />
            </svg>
        ),
    },
    bioshock: {
        background: "bg-[#592A13]",
        icon: (
            <svg width="90%" height="90%" viewBox="0 0 100 100">
                <path
                    fill="#D9A066"
                    d="M0 52c-1-6 5-39 36-50l12-2c42-2 57 48 51 59-1 2-21 16-22 15l20-20-22 18 17-23-20 20 15-23c-2 0-16 19-18 21l12-26-16 24 10-28-13 26 7-28-10 25 2-27-3 15c0-3-4-11-3-16l-1 2-1-9c-2-1-2-3-1-5 1-1 4-3 4-5L52 1l-1 16c-1-4-3-4-3 0L46 1l-1 3-2 10 4 6c1 1 0 4-1 4l-1 10-2-2c1 8-3 12-3 16l-3-15c0 1 3 24 2 27l-9-26 7 30-14-27 10 28-15-24 12 26-18-21 15 23L6 49l18 23-4-3-10-8-10-9Zm79 28H68c-1 0-9-12-8-13 0 0 10 4 13 7l6 6ZM39 67l-9 13H20c5-6 11-11 19-13ZM0 53l5 5 16 17L1 61l-1-8Zm98 9-2 7-16 8 18-15ZM18 77 3 69l-2-6 17 14Zm76-4-2 4-9 3 11-7ZM5 73l11 7c-2 0-10-3-10-5l-1-2Z"
                />
            </svg>
        ),
    },
    blasphemous: {
        background: "bg-black",
        icon: (
            <svg width="80%" height="80%" viewBox="0 0 50 100">
                <path
                    fill="#F48937"
                    d="M23 7c-1-2 3-13 4 0-3 1 21 23 23 25L33 48l17 17-24 25c0 8-3 8-2 0-1-3-24-25-24-26l16-15L0 31S27 8 23 7ZM10 26l21 21 14-14-21-21-14 14M5 64l21 21 14-14-21-21"
                />
            </svg>
        ),
    },
    celeste: {
        background: "bg-[#6EC8E4]",
        icon: (
            <svg width="80%" height="80%" viewBox="0 0 50 65">
                <path
                    fill="#DE2A2A"
                    d="M5 25h40c1 20 5 14 0 19-11 12-15 17-20 18-5 0-13-11-20-17V25Z"
                />
                <path d="M5 20H0c0-5 0-5 5-5v5Zm40 5c5-1 5 0 5 5v12c0 2 0 3-5 3V25ZM10 45v5c-5 0-5 0-5-5h5Zm5 5v5c-5 0-5 0-5-5h5Zm5 5v5c-5 0-5 0-5-5h5Zm10 5c0 4 1 5-5 5-5 0-5 0-5-5h10Zm0-6c1-1 5 1 5 1 0 4 0 5-5 5v-6Zm10-4c0 5 0 5-5 5v-5h5Zm0-5h5c0 5 0 5-5 5v-5ZM5 45c-5 0-5 0-5-5V25h5l1 5v10l-1 5Zm0-20V11c2-1 3-2 5-1v15H5Zm40-10h4c1 5 1 5-4 5v-5Zm-5-5c5 0 4 0 5 5 3 19-10 22-5-5ZM25 5V0h10v5H25Zm15 0c2 30 11 18-30 20-5 1-2-13 0-19 1-3 26-1 30-1Z" />
                <path
                    fill="#6ABE30"
                    d="M10 15v-5h9l1 5H10Zm10 0h10v5H20c-2-1-1-3 0-5ZM5 15h5s2 3 1 5H5v-5Zm35 0H25V5h10v5c7 1 5 0 5 5Zm0 0h5v5h-5v-5Z"
                />
                <path
                    fill="#8A0F36"
                    d="M30 20h5v5h-5v-5Zm-15 0h5v5h-5v-5ZM5 25h5l1 5H5v-5Zm40 5h-5v-5h5v5Zm-5 5h5v5c-8 3-6-3-5-5Zm-15 0h5v5c-5 0-5 0-5-5ZM5 40v-5h5v5H5Zm5 0h10c0 5 0 5 5 5 0 0 5 0 5-5h10v5h-1c-4 0-4 0-4 5-6 0-5 0-5 5H20c0-6 0-5-5-5 0-5 0-5-5-5v-5Z"
                />
            </svg>
        ),
    },
    cuphead: {
        background: "bg-black",
        icon: (
            <svg width="80%" height="80%" viewBox="0 0 65 42">
                <path
                    fill="#F64413"
                    d="M57 18c7 2-1 6-4 3-1-2 3-4 4-3ZM43 39c-3 1-12 0-16-4-1-2 4-4 8-2 0 0 11 2 10 4l-2 2ZM15 11l7-6 2 3c-6 2-7 6-7 6l-2-3Zm-1 2-5 2c-2-2-4-4-4-10l5-2c0 4 3 10 4 10Z"
                />
                <path
                    fill="#FBFBFB"
                    d="m65 19-1 5c-1 3-8 15-19 18-10 2-19-5-22-6L13 21c0-1 8-7 8-5 0 1 5 10 11 11l5 2c5 0 13-2 15-8 0 0 2 3 7 1l1-1c1 1 4 0 5-2ZM27 36c5 4 20 7 26-2 1-3-3-6-5-5l-8 2-8-2-4 1c-2 2-2 5-1 6ZM51 5h10c2 0 5 12 4 13 0 2-4 4-5 3 0 0 2-2-1-3v-5l-3-1 2-2c0-1-3-5-5-2l-1-1-1-1V5Zm-2 0c4-1 5 18-3 21-4 2-5 2-10 2-6-1-16-12-14-14s25-8 27-9ZM38 16c1-2-6-9-8-2l2 8c2 4 7 5 8 3v-6l-4-1 2-2ZM18 36h3l4 4c0 2-9 2-14-3-4-6 2-16 2-14l2 5c-1 0-1 6 3 8Zm7-27 2 2-9 5-1-1c1-4 8-7 8-6Zm-4-5s-6 5-6 7c-1-4 1-9 3-11h1l2 4Zm-5-3c0 1-4 4-2 11-1 0-4-8-3-9l5-2ZM4 17C2 17-1 7 0 6l4-1s0 7 4 10l-4 2Z"
                />
            </svg>
        ),
    },
    pokemon: {
        background:
            "bg-gradient-to-b from-[#FF1C1C] from-50% to-50% to-soft-white",
        icon: (
            <div className="w-full h-1 bg-black flex justify-center items-center">
                <div className="border-4 border-black bg-soft-white h-4 w-4 rounded-full" />
            </div>
        ),
    },
    digimon: {
        background: "bg-[#2674AC]",
        icon: (
            <svg width="80%" height="80%" viewBox="0 0 75 65">
                <path
                    fill="#CBF1F5"
                    d="M57 58c0 4-11 7-11 1-3 1-2 1-3 3-4 6-12 2-9-3-1-2-5-1-6 1-5 5-15-3-7-7 1-1 0-8-3-2-2 5-14 3-14 0-3-10-7-11-1-15 5 8 12 3 13 2 4-5 3-9-1-12-3-3-9-3-13 3l-1-4c0-11 6-4 11-14 0-1-8-8-3-9 2-1 11 12 11 12l3-2C12 8 22-2 27 2c4 10 6 2 6 1 3-5 11-3 12 4 6-10 17 0 9 5l2 3 7-5c2 1 9 2 10 4 2 8 1 7 0 9 0-2-9-6-12-4-3 1-13 10 2 11 2 0 10-3 11-2l1 8c-6 3-11-7-18 0-6 7 8 17 14 4l4 1-3 8c1 1-9 6-10 6l-5-5-4 3 4 5M38 18c-21 0-21 30-1 30 19-1 22-30 1-30ZM10 28c8 1 7 9 1 9-7 0-9-8-1-9Zm20 12V25h15v15H30Zm37 2c-6 3-11-1-7-4 3-3 11-1 7 4Zm-9-17c2-5 10-5 11-2 1 4-9 7-11 2Z"
                />
            </svg>
        ),
    },
    l4d: {
        background: "bg-black",
        icon: (
            <svg width="80%" height="80%" viewBox="0 0 100 100">
                <path
                    fill="#EB1C24"
                    d="M66 3s3-4 7-2c2 0 0 5 5 6 0 0 1-5 7-3l1 10 6-2c2-1 4 2 2 7-1 4 5 4 4 10-2 11 3 10 2 15-3 10-1 14-5 18-3 4-7 1-9 3-3 4 3 4 1 7-1 0-10-4-13 4-1 3-3-2-4-1 0 0-6 7-9 4-5-6-19-15-16-4 1 6-8 3-13 7l7 1c-1 3-9 5-12 3L14 71c4-3-1-4-1-4-1-1 3-10 2-12-2-3-5 6-6-3 0-2-8-4-8-5-3-6 1-8 3-9s7-1 9 5c6 2 7-5 12 3l1-4c6 4 8 1 6-1a605 605 0 0 1 10-30L55 0M6 89c3 0 5 2 5 5s-1 5-4 6c-2 1-5-1-6-3-2-3 0-8 5-8Z"
                />
                <path
                    fill="#FFF"
                    d="M74 10s10 10 10 13c-1 7-3 0-3 20 0 6 6 5 6 6 1 4 2 7-3 8-11 2-3 14-15 13-6-1-1-12-6-12-1 0-27 4-27-4 1-10 2-9 7-17 0 0 15-29 20-27m1 21c-1-4-5 2-8 10-1 3 3 5 7 3l8-2c-1-4-6 0-7-11Z"
                />
            </svg>
        ),
    },
    hotd: {
        background: "bg-[#880808]",
        icon: (
            <svg height="80%" width="80%" viewBox="0 0 68 195">
                <path
                    fill="#FAFAFA"
                    d="M38 193c-5-4 1-8 0-11l-26 1h-2l-6-4c2-2 3-5 6-6 8-2 9-3 6-12-2-6-2-12-3-19h1l5 5c2 7 1 7 6 10l9-4c0-2-2-6-1-9 3-7-3-13-1-20l-2-5c-2-4-3-4-6-1l-6 1-1-1v21l-6-1c-4 0-6-3-5-7l4-20-1-8c-1-5-2-9 0-14l1-14c2-15 0-30 5-44l1-2c-6 0-10-4-11-11l-3-6C0 9-2 8 3 5c3-2 5-5 9-5 10-1 15 6 16 14 0 4 3 7 6 9 9 5 12 13 14 23l9 32 9 28 1 12 1 10c0 4-1 6-5 6s-9 1-7 8l-11-4c2 3 3 5 7 6 2 1 5 4 6 7l1 21-3 15c-3 8-9 11-18 6"
                />
            </svg>
        ),
    },
    dnd: {
        background: "bg-soft-white",
        icon: (
            <svg height="70%" width="70%" viewBox="0 0 50 50">
                <path
                    fill="#BABEC0"
                    d="m27 29 4 3 4-7c2-3 12-4 15-3-1-2-4-4-7-4-8 3-4 0-3-1-5-1-14 11-13 12Zm1 11-5-4c-1 2-4 5-7 5-6 0-8-8-2-14-1-2-5 1-5 2l1-4-3 2-3 3 1-6c-2 1-5 3-5 8 3-6-3 6 4 14 0-2 7 2 10 3 5 3 12-5 14-9ZM6 11C5 6 7 4 8 3c2-2 5-3 9-3 6 0 9 5 9 9 0 3-1 6-3 8l-4-5c2-3 1-7-3-7-2 0-4 2-4 4v5c-2 0-4-6-4-6s-2 5-1 6l-1-3M2 22l5-4-2-3 4 1-1-4c2 5 6 6 6-3 1 10 3 3 3 1-1 3 4 5 5 7 1 4 3 8 5 6 0 3-1 5-3 6 1-3-3-3-3-3 1-3-4-2-3-1-2 1-1 3 0 2-1 1-1 3 1 3l-4 2 2-2-2 1c3-3 0-7-4-5 0-2 2-3 3-3-1-2-8 2-8 4v-4l-4-1m46 18c0-4-3-6-7-6 1 0 3 1 3 3 0 3-4 4-6 3 2-1 2-5 0-7 0 3-3 6-4 3-2-2-8-6-10-6l-5-4 2 4c1 1 0 2 3 4l4 4c2 2 1 5 1 7l4 4c-1-1-2-4 0-5 0 2 1 5 5 6 3 1 7-1 8-3-2 1-4 0-5-1 4 1 7-2 7-6m-7-5 1 2-1 2v-4"
                />
            </svg>
        ),
    },
    witcher: {
        background: "bg-soft-white",
        icon: (
            <svg height="80%" width="80%" viewBox="0 0 43 37">
                <path
                    fill="#BABEC0"
                    d="M41 19c4 3-4 13-4 13 3-7-1-6-2-4-1 4-10 6-10 5l6-5c2-4-3-1-3 0 1-1 4-8 1-7 0 0-6 2-6 4-1 2-5 0-4-1h2c2 0 5-6 2-7-1-1-1-2-3-2-2 1-4 2-3 3-2-2-1 1 0 2l-3-2-2-3 5-2 5-3c0-2 7-3 7-4l4-5 2 6c2-2 9 8 8 9 0 0-4-4-4-2 2 1 2 3 3 5h-1ZM8 11c9-6-7-7-8-6 0-2 13-2 13 0l4 1c2-1 2 2 2 3C15 4 6 20 7 21l2-8c-1-3-7 7-7 7 0-2 4-7 6-9Zm16 26c-3 0-12-1-13-3h-1l-7-2h5L4 22c0 1 5 10 8 9l9-4c1 1-5 5-6 5h6l-6 3 9 2Zm3 0Zm0 0 3-3c4 0 7-7 7-6 1 2-7 10-10 9ZM16 1c0-2 10-1 14 1 0 0-4-2-12 0l-2-1Zm-3 2-3-2c1-1 8 2 6 4l-3-2Zm-1 21c0 1 1 7-2 6l2-6ZM7 8l-3 6s2-7 3-6Z"
                />
            </svg>
        ),
    },
    gta: {
        background: "bg-black",
        icon: (
            <svg height="80%" width="80%" viewBox="0 0 80 67">
                <path
                    fill="#fff"
                    d="M19 29v1h6v4h-6v8h1v-7h5v9l-2 3h-7l-2-3V34h-2v-4h2v-1h5m31 0 2 2v9h-6v2h1v-1h5v3l-2 3h-7l-2-3V31l2-2h7m-3 4h-1v2h1v-2m19-4v4h-7v1h7v5h-7v8h-5V31l3-2h9m14 1v4h-7v8h2v-7h5v10l-3 2h-6l-3-3V34h-1v-4h1v-1h5v1h7M5 9v9h2V9H5M1 5l2-1h9v22l-3 2H0v-4h7v-2H3l-3-2V7m34 9h-2v2h2v-2M28 5l2-1h6l3 3v15h-9l-3-2v-7l3-2h4V9h-2v1h-5V7m23-3 2 3v15h-5V9h-1v13h-5V4h5v2l4-2m11 5h-2v9h2V9m-4-5h4V0h5v22h-9l-3-2V7l3-3m-38 7h1V9h-1v2m4-7 2 3v5l-1 1 1 2v9h7v5h4l3 2v16h-5V33h-2v14h-5V28c0 1-7 1-7-2V16h-1v6h-5V4h9m-1 45h5v14h2V49h5v16l-3 2h-6l-3-2V49m14 1v-1h6v1h6v5h-6v8h1v-7h5v9l-2 2h-7l-3-2V55h-1v-5h1M14 60v3h1v-3h-1m1-4v-2h-1v1H8v-4l3-2h7l2 2v16h-9l-3-2v-7l3-2h4m41-2h-1v9h1v-9m3-5 3 2v14l-3 2h-6l-3-2V51l3-2h6"
                />
            </svg>
        ),
    },
    "stardew-valley": {
        background: "bg-[#DDA059]",
        icon: (
            <svg height="70%" width="70%" viewBox="0 0 50 50">
                <path
                    fill="#6B3710"
                    d="M41 47h-7v3H6v-3h3v-3H6v-3H3v-4l-3 1V28h3v-3h3v-3H3v-3h3v-6h3V9h4V6h3V3h3V0h12v6h-3v6l3 1v3h3v-3h13v3h3v6h-3v3h3v6h-3v7h-3v6h-3v3Z"
                />
                <path fill="#FF4F23" d="M19 6V3h9v3h-6v3h-6V6h3Z" />
                <path
                    fill="#FFE1AE"
                    d="m47 19-3 3v15h-6v4l-7 3H16l-4-3-3-3V28h4v-3h3V9h3l3 4v9h3v-3h3a2978 2978 0 0 0 0 15h13v-6h-4v3h-6v-3h-3v-6h6v-3l4-3h9v3Zm-19 6ZM9 38Z"
                />
                <path
                    fill="#DDA059"
                    d="m25 12-6 1V9h6v3h3v7h-3v-7Zm0 19v-3h-3v-3h6v-3h3v-3h3v-3h3l1 3h-3l-1 3h-3v3h-3v6h3v3h-3v-3h-3Zm22-9h-6v-3h6v3Zm0 9h-3v-6h3v6Zm0-6ZM31 44v-3l6-1 1-3h3v4h-3l-1 3h-6Zm-6 0v-3h3v3h-3Zm-6 0v-3h3v3h-3Zm18-19h4v3h-3v3h3v3h-3l-1-3h-3v-3h3v-3ZM16 9v3h-4l1 7h6v3h-3v3h-3v3H9v3h4l-1 3h4v-3h3v3h3v3h-3v-3l-3 1v3h-3v3h3v3h-3l-1-3H9v-3l3-1v-3H9v4H3V28h3v-3h3V13h3V9h4Z"
                />
                <path
                    fill="#FFD921"
                    d="M31 50h-9v-3h9v3Zm-12 0H9v-3h10v3Zm-3-28H6v-3h10v3Z"
                />
                <path
                    fill="#994F16"
                    d="M38 44v-3h3v3h-3Zm-7 3v-3h3v3h-3ZM9 44v-3H6v-3h3v3h4v3H9Zm16 0v3h-9v-3h9Zm16-6v-4h3v3l-3 1ZM9 22h3v3H9v-3Zm3 3h1-1Z"
                />
            </svg>
        ),
    },
    jpog: {
        background: "bg-[#FF2200]",
        icon: (
            <svg viewBox="0 0 50 50">
                <path d="m31 35 1-1-1 1Zm1-3-2 2 2-2Zm5-4-2 2c3-1 2-2 2-2Zm-4 1c2 0 3-2 2-2l-2 2Zm-2 0 2-2s1 1-2 2Zm-3-9v-3c1-2 4 3 3 3 1 1-1 3-1 3l-2-3Zm-3-2 1-4c2 1 1 6 0 5-1 1-2 0-1-1Zm8 28s-1-3-3-3c-9 1-12 7-12 1-3 3-14 5-12-1 5 4 12-9 15-3 0 0 0-2-2-2-1-1 1-2 2 0l-2-2c-2 1-12 9-7 2 6-1 4-6 7-4 0-2-3-1-3 0 0 0 0-3 3-2h-3c-2 1 0 3-1 3-6 6-13 1-4-5l1 3c2-8 4-7 3-3l2-3c2 4 13 14 15 10-8-5-9-10-6-10 0 0-2-4-3-3 1 0 2-2 3 0 0-1 1-1 3 1 1 0 6 3 8 2l1 1c0 1 2-1 1-3 2-2-6-6-10-10-3-3-2-5-4-4-1-3-2 2-9 1-1 9-5 2-4 7 0 3-5 10-7 5 0 3-3 6-5 3v23h40s-2-9-7-4m-5-16-1 2c1 1 1-1 1-2Zm-1 0-1 1 1-1Zm0-2-2 2 2-2Zm3 3-2 2c1 1 2-1 2-2Zm-1-3 2-2-2 2Zm0-1 1-2-1 2Z" />
            </svg>
        ),
    },
    ff: {
        background: "bg-soft-white",
        icon: (
            <svg width="80%" height="80%" viewBox="0 0 60 40">
                <defs>
                    <linearGradient
                        id="a"
                        x1="30"
                        x2="30"
                        y1="0"
                        y2="40"
                        gradientTransform="matrix(-1 -1 1 -1 31 52)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0" stopColor="#9fc8f2" />
                        <stop offset=".3" stopColor="#5499b5" />
                        <stop offset="1" stopColor="#165241" />
                    </linearGradient>
                </defs>
                <path
                    fill="url(#a)"
                    d="m60 0-7 3-1 2c-1 1-15 7-6 5 1 0-18 10-7 7l-7 5-1 1c1 2-4 12-9 14l-9 3c-1 0-5-1-5-3l-2-1c-2 0-3-2-3-3l3-2c3 0 5 0 7-2l1-2c-2 1-4-1-3-1 6-3-2-2-3-2l3-3H7c1-1 0-3 2-3l4-3h-2v-2l-3 1-4 5-2 5c-3 2-2-4 0-6 2-4 5-6 10-7h5l8-3c3-2 11-5 9-3-21 13 5-2 8-3l-12 9L53 0l2 1 5-1ZM17 27c2 0 6-4 4-6-1-1-5 1-6 2h3l-1 4Z"
                />
            </svg>
        ),
    },
    ragnarok: {
        background: "bg-[#9699CD]",
        icon: (
            <svg width="90%" height="90%" viewBox="0 0 50 50">
                <path
                    fill="#97262C"
                    d="M16 24h-6l-11 9L10 9 8 0h42v41c0 1-33-9-34-17Z"
                />
                <path
                    fill="#C55E57"
                    d="M33 12c2 0 10 22 11 22l6-2c0 2-10 4-9 2 2-3-13-23-13-23l5 1Z"
                />
                <path
                    fill="#FED2A5"
                    d="M16 18c6-4 14 1 16 2 0 12-2 18 6 18 2 16-26 14-24-6 3 0 2 0 2-14Z"
                />
                <path
                    fill="#603030"
                    d="M22 50H10v-4c2 0 4-2 4-8 1 2 4 7 8 6v6ZM11 31l-1-7h4l-3 7Z"
                />
                <path
                    fill="#190509"
                    d="M14 26c0-2-1-3 2-3v-3h2c0 6-1 6 2 6v4h-4c0-4 0-4-2-4Zm18-2v8s0 5-4 4c0 2 0 2-2 2v-7l-4-3s8-6 10-4Zm-1 22c3-1 7-5 7-3l-1 7H24v-4h7Z"
                />
                <path
                    fill="#FFF1C2"
                    d="M30 38v-6c4 0 4-1 4 2 2 0 1 0 1 2a475 475 0 0 1-5 2Zm-8-4c0 2-1 2 1 2l1 2h-8v-8h2c0-2 0-2 2-2 0 6 0 6 2 6Zm10-10h-4c0 2 0 2-4 2 0 2 0 2-2 2v-6h2c0-2 0-2 2-2s2 0 2 2h4v2ZM16 13 5 23l7-11 4 1Zm0-5-4-8h2l2 8Zm4-8h2v8l-2-8Zm8 0h2v8l-2-8Zm12 0-6 10c0-6 1-9 2-10h4Zm2 12 4-8h2l-6 8Zm2 16h2v6h-2v-6Z"
                />
                <path
                    fill="#CAAB98"
                    d="M18 40c0-2 0-2 4-2 0 2 0 2-4 2Zm6 10c-5 0-4 0-4-4 5 0 4 0 4 4Z"
                />
            </svg>
        ),
    },
    "zoo-tycoon": {
        background: "bg-[#F89320]",
        icon: (
            <svg width="80%" height="80%" viewBox="0 0 100 40">
                <path
                    fill="#FAFAFA"
                    d="M46 27c14 1 12-13 7-16-9-7-21 10-7 16ZM13 13H1V2h33L20 25h9C27 13 31 5 42 1c8-3 16 0 22 9 0-2 10-20 29-6s-3 46-26 28c-3-3 4-4-2-11 3 12-16 25-29 13-3-3 2-4-1-8 0 1-2 10-13 10H0l13-23m60 7c3 11 19 9 17-3-4-13-20-6-17 3Z"
                />
            </svg>
        ),
    },
    yugioh: {
        background: "bg-[#78432e]",
        icon: <div className="w-[30%] h-[60%] rounded-[100%] bg-black"></div>,
    },
    pvz: {
        background: "bg-[#00570D]",
        icon: (
            <svg width="70%" height="70%" viewBox="0 0 50 50">
                <path
                    fill="#FAFC81"
                    d="M14 17H1l10 9-11 7 13 1-4 12 11-6 6 10 4-11 11 6-3-10 12-2-9-7 9-8H39l3-14-12 8-5-12-4 12L9 5"
                />
                <path
                    fill="#FCE219"
                    d="M15 28c-2-7 8-20 20-9 5 8 1 14-5 17-10 2-13-3-15-8Z"
                />
                <path fill="#FFD301" d="M20 27h12c1 0-1 5-5 5-5 0-7-4-7-5Z" />
                <path fill="#FEFFF2" d="M26 19c5 0 8 6 6 9H20c-1-2 1-9 6-9Z" />
            </svg>
        ),
    },
    bandicoot: {
        background: "bg-[#A1662F]",
        icon: (
            <svg width="90%" height="90%" viewBox="0 0 75 47">
                <path
                    fill="#000008"
                    d="M18 7c3 0 14 3 9 1-1 0-4-6 2-6 7-12 11 17 11 17l-3-6c0-1-11 9-11 11-1 3-8-9-8-17Zm18-5c-2-5 15-1 16 2 3 7 18 4 20-1 3-5 7 10-5 19-4 4-7 17-11 19-12 11-21 2-18 1 1-1-8-40-2-40Zm2 40-5 3c-11 0-9-5-9-6 9-4 2-9-6-7-8 3-18 2-18-4 0-2 7-8 17-3 1 0 24 13 21 17ZM17 25c0-2 7-7 8-2 0 0-7 5-8 2Z"
                />
                <path
                    fill="#F68B94"
                    d="M37 42c-1 2-9 2-11-1-3-4 9-6 5-7-1-5-18 0-14-8l34-11c1 0 16-1 12 6l-6 10c2 16-18 15-20 11Z"
                />
                <path
                    fill="#6A8B8B"
                    d="M52 36c-6 2-21 0-22 0v-4c5 3 20 0 24-9l-2 13Z"
                />
                <path
                    fill="#E00"
                    d="M41 16c2-3-14-11-12-12 1-1 14 1 17-2 0-1 4 8 5 4 4 4-9 7-9 6l-1 4ZM74 5s-16 7-14 11c2 3-3 4-3 4-3 3-9-5-8-6 3 2 24-9 25-9ZM19 26c-1 0 2-3 6-3l7-7s10 2 10 6l-23 4Zm19-12c-3 2-17-4-17-5 0 0 4 3 15 3 1 0 3 1 2 2Z"
                />
                <path
                    fill="#FFF"
                    d="M47 37c-1-13 4-4 4 0h-4Zm-8-1c1-7 5-4 6 1l-6-1Zm-9 0c0-4 7-4 8 0h-8Zm16-21c9 5-9 10-6 4 1-1 5 0 2-4h4Zm-13 6c-5-3 2-10 6-5 4 6-5 6-6 5Z"
                />
                <path fill="#000008" d="M40 20c-3 1-7-4 0-3v3Z" />
            </svg>
        ),
    },
    cyberpunk: {
        background: "bg-black",
        icon: (
            <svg width="70%" height="70%" viewBox="0 0 100 100">
                <path
                    fill="#BABEC0"
                    d="M87 35c8 9 4 22-7 26-6 3-12-1-12-1L54 72v19h-8V73L32 60c-4 4-17 1-21-5-3-7-3-15 2-20 10-11 25-1 27 7 0 5 0 8-2 12l8 8V40a16 16 0 0 1 4-31c8 0 14 5 16 13 1 6-2 14-12 18v22l8-8c-6-4-1-20 7-22 9-3 16 1 18 3ZM19 11c7-6 15-9 24-11a50 50 0 1 1-24 11Zm65 65c8-10 10-21 8-33a43 43 0 1 0-8 33Z"
                />
            </svg>
        ),
    },
    ac: {
        background: "bg-soft-white",
        icon: (
            <svg width="70%" height="70%" viewBox="0 0 100 120">
                <path
                    fill="#c1232c"
                    d="M3 92c2-1 5 0 9 2 12 13 31 16 35 17-2-1-30-7-22-27l23-65 27 64c10 21-18 27-21 28 4-1 22-4 34-16 4-3 7-4 10-3-4-8-1-22 1-22 0 0-17 7-26-13L51 0 27 58C18 81 2 70 2 70c1 0 6 13 1 22m47 18c-3 9-23 10-50-16 0 0 20 27 50 26 30 1 50-26 50-26-22 24-47 25-50 16"
                />
            </svg>
        ),
    },
    dw: {
        background:
            "bg-gradient-to-r from-[#00c01c] via-[#0220c0] to-[#dc0202]",
        icon: (
            <svg width="80%" height="80%" viewBox="0 0 121 68">
                <path
                    fill="#FAFAFA"
                    d="M23 7c5-1 7 2 7 8l-7 11C15 28 7 13 9 10c3-3 11-2 14-3Zm1 35c-6 4-15-1-14-9 4-4 9-1 13-2s5 9 1 11Zm9 10c-5 8-22 11-24 9-9 1-11-9-6-11 14-2 17-2 18-4h6c3-1 6 4 6 6Zm6 8-2 3c-5-3-2-52 5-59 1 0 19-4 28-4 8 0 12 63 6 67 0 2-5 1-5-1 0 0-3-6-1-7l4 3-3-47-4 4c1-2-3-3-5-1l-2 4 4 13c2-1 4-6 2-8 4-4 8 3-1 12-1 1 1 7 4 9 1 1 3 6 2 8-1-2-4-1-3 1l-2-1c0 1-26 6-27 4Zm23-49-1-2c4-1 7 1 9 3 3-3-5-11-16-5 2 2 2 7 6 6l2-2ZM49 7c-9-1-10 20-10 26 1 5-1 19-1 21 5-1 8-4 13-7-4 1-9-8-5-13 1-2 4-7 1-8-1 0 0-5-4-10 7 1 10-3 8-9h-2Zm14 39-3-3c0 1-4 5-6 5-3 0-6 3-8 5 6 1 11-4 18-5l-1-2Zm21-5c3-1 10-13 7-14l4-1-9-10c-1-1 0-3 2-3l6-1c3-1 4-3 4-6V1l7 8 7-1c3-1 5 4 1 7l-9 7s4 0 6 3c1 3-1 4-2 6-4 3-15 6-18 6l-4 4c-1 3 1 4 3 6 2 1 2 6 0 6-3 3-9-4-8-6-2-1 0-7 3-6Zm27-5 9 4c2 3 0 8-4 7-3-2-5-3-8-3-3-1-1-8 3-8Zm-7 22c1 4-5 5-6 3-2-3-5-6-5-10 0-3 6-2 9-3l1 6c2 1 2 2 1 4Z"
                />
            </svg>
        ),
    },
    ina: {
        background:
            "bg-gradient-to-b from-[#ff0000] from-50% to-50% to-[#FFFFFF]",
        icon: <></>,
    },
    mas: {
        background: "bg-soft-white",
        icon: (
            <svg viewBox="0 0 100 100">
                <path fill="#0052B4" d="M0 50V0h50v50H0Z" />
                <path
                    fill="#D80027"
                    d="m0 63 100-1v13H0V62v1Zm0 24h100v13H0V87Zm50-50h50v13H50V37Zm0-25h50v13H50V12Z"
                />
                <path
                    fill="#FBD846"
                    d="m31 29-4 3 1-4-4-1 3-2-2-4 4 1 1-4 2 4 4-1-2 3 3 3-3 1v4l-3-3Zm1 5c-5 4-12 4-16-1-5-4-5-11-1-16 5-5 11-5 17-1-6-2-11 1-13 5-1 4-1 8 2 11 2 3 6 3 10 2h1Z"
                />
            </svg>
        ),
    },
    jpn: {
        background: "bg-soft-white",
        icon: (
            <div className="w-full h-full flex items-center justify-center">
                <div className="w-full h-full shadow-[inset_0_0_8px_black] bg-[#BABEC0]" />
                <div className="absolute w-[40%] h-[40%] bg-[#4a4a4a] rounded-full" />
            </div>
        ),
    },
    chn: {
        background: "bg-[#EE1C25]",
        icon: (
            <svg viewBox="0 0 70 70">
                <path
                    fill="#FF0"
                    d="m39 27-2 1 1 2-2-1-2 1 1-2-2-1h2l1-2 1 2h2Zm-8 4v2l2 1-2 1v2l-1-2-3 1 2-2-1-2 2 1 1-2Zm0-21v2l2 1-2 1v2l-1-2-3 1 2-2-1-2 2 1 1-2Zm7 7-1 2 2 1h-2l-2 2v-2l-2-1 2-1v-2l1 2 2-1Zm-23-4 2 6h7l-6 4 2 6-5-4-5 4 2-6-6-4h7l2-6Z"
                />
            </svg>
        ),
    },
    eng: {
        background: "bg-[#00247D]",
        icon: (
            <div className="w-full h-full">
                <div className="shadow-[inset_0_0_8px_black] absolute w-full h-full z-[1]" />
                <svg viewBox="0 0 100 100">
                    <path
                        stroke="#fff"
                        strokeWidth="15"
                        d="m0 0 100 100m0-100L0 100"
                    />
                    <path
                        stroke="#cf142b"
                        strokeWidth="10"
                        d="m0 0 100 100m0-100L0 100"
                    />
                    <path
                        fill="#fff"
                        d="M50 50V40L10 0H0l50 50Zm0 0h10l40-40V0L50 50Zm0 0v10l40 40h10L50 50Zm0 0H40L0 90v10l50-50Z"
                    />
                    <path
                        stroke="#fff"
                        strokeWidth="20"
                        d="M50 0v100M0 50h100"
                    />
                    <path
                        stroke="#cf142b"
                        strokeWidth="10"
                        d="M50 0v100M0 50h100"
                    />
                </svg>
            </div>
        ),
    },
    ned: {
        background: "bg-soft-white",
        icon: (
            <div className="h-full w-full flex justify-between flex-col">
                <div className="w-full h-[33%] bg-[#C8102E]" />
                <div className="w-full h-[33%] bg-[#003DA5]" />
            </div>
        ),
    },
    fra: {
        background: "bg-soft-white",
        icon: (
            <div className="h-full w-full flex justify-between">
                <div className="w-[33%] h-full bg-[#002654]" />
                <div className="w-[33%] h-full bg-[#ED2939]" />
            </div>
        ),
    },
    ger: {
        background: "bg-[#BABEC0]",
        icon: (
            <div className="w-full h-full flex flex-col">
                <div className="absolute w-full h-full z-[1] shadow-[inset_0_0_8px_black]" />
                <div className="w-full h-full bg-[#3a3a3a]" />
                <div className="w-full h-full bg-[#6a6a6a]" />
                <div className="w-full h-full bg-[#BABEC0]" />
            </div>
        ),
    },
    esp: {
        background: "bg-[#F1BF00]",
        icon: (
            <div className="w-full h-full flex flex-col justify-between">
                <div className="absolute w-full h-full z-[1] shadow-[inset_0_0_8px_black]" />
                <div className="w-full h-[27.5%] bg-[#6a6a6a]" />
                <div className="w-full h-[45%] bg-[#ababab] flex items-center px-2">
                    <div className="w-2 h-2 rounded-[1px] bg-[#6a6a6a]" />{" "}
                </div>
                <div className="w-full h-[27.5%] bg-[#6a6a6a]" />
            </div>
        ),
    },
    por: {
        background: "bg-[#FF0000]",
        icon: (
            <div className="w-full h-full flex items-center">
                <div className="absolute w-full h-full z-[1] shadow-[inset_0_0_8px_black]" />
                <div className="w-4 h-4 left-[20%] rounded-full absolute bg-[#ababab]" />
                <div className="w-[40%] h-full bg-[#3a3a3a]" />
                <div className="w-[60%] h-full bg-[#6a6a6a]" />
            </div>
        ),
    },
    ita: {
        background: "bg-soft-white",
        icon: (
            <div className="w-full h-full flex justify-between">
                <div className="absolute w-full h-full z-[1] shadow-[inset_0_0_8px_black]" />
                <div className="w-[33%] h-full bg-[#008C45]" />
                <div className="w-[34%] h-full bg-[#CD212A]" />
            </div>
        ),
    },
    rus: {
        background: "bg-soft-white",
        icon: (
            <div className="w-full h-full flex flex-col justify-end">
                <div className="absolute w-full h-full z-[1] shadow-[inset_0_0_8px_black]" />
                <div className="w-full h-[33%] bg-[#1C3578]" />
                <div className="w-full h-[33%] bg-[#E4181C]" />
            </div>
        ),
    },
    pol: {
        background: "bg-soft-white",
        icon: (
            <div className="w-full h-full flex flex-col">
                <div className="absolute w-full h-full z-[1] shadow-[inset_0_0_8px_black]" />
                <div className="w-full h-full bg-[#E6E6E6]" />
                <div className="w-full h-full bg-[#BABEC0]" />
            </div>
        ),
    },
    swe: {
        background: "bg-soft-white",
        icon: (
            <div className="w-full h-full grid grid-cols-2 gap-1 bg-[#BABEC0]">
                <div className="absolute w-full h-full z-[1] shadow-[inset_0_0_8px_black]" />
                <div className="w-full h-full bg-[#4A4A4A]" />
                <div className="w-full h-full bg-[#4A4A4A]" />
                <div className="w-full h-full bg-[#4A4A4A]" />
                <div className="w-full h-full bg-[#4A4A4A]" />
            </div>
        ),
    },
    windows: {
        background: "bg-soft-white",
        icon: (
            <div className="w-full h-full grid grid-cols-2 gap-[2px]">
                <div className="absolute w-full h-full z-[1] shadow-[inset_0_0_8px_black]" />
                <div className="w-full h-full bg-[#F25022]" />
                <div className="w-full h-full bg-[#7FBA00]" />
                <div className="w-full h-full bg-[#00A4EF]" />
                <div className="w-full h-full bg-[#FFB900]" />
            </div>
        ),
    },
    mac: {
        background: "bg-soft-white",
        icon: <i className="text-black ri-apple-fill" />,
    },
    linux: {
        background: "bg-[#E95420]",
        icon: <i className="ri-ubuntu-fill" />,
    },
    youtube: {
        background: "bg-[#CD201F]",
        icon: <i className="ri-play-fill" />,
    },
    paper: {
        background: "bg-[#A1662F]",
        icon: <i className="text-[#f6eee3] ri-file-paper-2-fill" />,
    },
    notepad: {
        background: "bg-[#108CC6]",
        icon: <i className="text-[1.75rem] ri-calendar-fill" />,
    },
    excel: {
        background: "bg-[#217346]",
        icon: <i className="text-[1.75rem] ri-file-excel-2-fill" />,
    },
    pp: {
        background: "bg-[#D04423]",
        icon: <i className="text-[1.75rem] ri-file-ppt-2-fill" />,
    },
    word: {
        background: "bg-[#0078D4]",
        icon: <i className="text-[1.75rem] ri-file-word-2-fill" />,
    },
    vscode: {
        background: "bg-black",
        icon: (
            <svg width="70%" height="70%" viewBox="0 0 100 100">
                <path
                    fill="#0065A9"
                    d="M96 11 76 1c-3-2-5-1-7 1L1 64v6l6 5h5s87-63 84-64Z"
                />
                <path
                    fill="#007ACC"
                    d="M96 89 76 99c-3 2-5 1-7-1L1 36v-6l6-5h5s87 63 84 64Z"
                />
                <path
                    fill="#1F9CF0"
                    d="M76 99c-3 1-5 1-7-1 2 2 6 1 6-3V5c0-4-4-5-6-3 2-2 4-2 7-1l20 10c3 1 4 3 4 5v68c0 2-1 4-4 5L76 99Z"
                />
            </svg>
        ),
    },
    eclipse: {
        background: "bg-soft-white",
        icon: (
            <svg width="70%" height="70%" viewBox="0 0 100 100">
                <path
                    fill="#2C2255"
                    d="M12 36c2-7 6-14 12-20C32 7 43 2 55 2c11 0 25 7 32 14 5 6 9 13 11 20H12Zm87 6 1 5H10l1-5h88ZM87 84c-7 7-21 14-32 14-12 0-23-5-31-14-6-6-10-13-12-20h86c-2 7-6 14-11 20Zm13-31-1 5H11l-1-5h90Z"
                />
                <path
                    fill="#F7941E"
                    d="M8 50C8 25 26 4 49 0h-2C21 0 0 22 0 50s21 50 47 50h2C26 96 8 75 8 50Z"
                />
            </svg>
        ),
    },
    intellij: {
        background:
            "bg-[conic-gradient(#087cfa_180deg,#ad4a91,#f97a12,#fe315d,#087cfa)]",
        icon: (
            <svg width="70%" height="70%" viewBox="0 0 45 45">
                <path d="M0 0h45v45H0z" />
                <path
                    fill="#fff"
                    d="M4 37h17v3H4zM16 9V6H7v3h3v12H7v3h9v-3h-2V9zm9 16-3-1-3-2 3-3 1 1 2 1 2-1 1-2V6h4v12l-1 3a6 6 0 0 1-3 3l-3 1"
                />
            </svg>
        ),
    },
    slack: {
        background: "bg-soft-white",
        icon: (
            <svg width="60%" height="60%" viewBox="0 0 100 100">
                <path
                    fill="#E01E5A"
                    d="M21 63a10 10 0 1 1-10-10h10v10Zm5 0a10 10 0 1 1 21 0v26a10 10 0 1 1-21 0V63Z"
                />
                <path
                    fill="#36C5F0"
                    d="M37 21a10 10 0 1 1 10-10v10H37Zm0 5a10 10 0 1 1 0 21H11a10 10 0 1 1 0-21h26Z"
                />
                <path
                    fill="#2EB67D"
                    d="M79 37a10 10 0 1 1 10 10H79V37Zm-5 0a10 10 0 1 1-21 0V11a10 10 0 1 1 21 0v26Z"
                />
                <path
                    fill="#ECB22E"
                    d="M63 79a10 10 0 1 1-10 10V79h10Zm0-5a10 10 0 1 1 0-21h26a10 10 0 1 1 0 21H63Z"
                />
            </svg>
        ),
    },
    trello: {
        background: "bg-[#0079BF]",
        icon: (
            <div className="h-full w-full p-[10px] flex gap-1">
                <div className="h-full w-full rounded-[2px] bg-soft-white" />
                <div className="h-[60%] w-full rounded-[2px] bg-soft-white" />
            </div>
        ),
    },
    loop: {
        background: "bg-gradient-to-r from-[#6d05e8] to-[#51e6ff]",
        icon: <i className="ri-microsoft-loop-line" />,
    },
    jira: {
        background: "bg-soft-white",
        icon: (
            <svg width="60%" height="60%" viewBox="0 0 25 25">
                <path
                    fill="#2684ff"
                    d="M24 0H12c0 3 2 5 5 5h3v3c0 3 2 5 5 5V1l-1-1Z"
                />
                <path
                    fill="#2684ff"
                    d="M18 6H6c0 3 2 5 5 5h3v3c0 3 2 5 5 5V7l-1-1Z"
                />
                <path
                    fill="#2684ff"
                    d="M12 12H0c0 3 2 5 5 5h3v3c0 3 2 5 5 5V13l-1-1Z"
                />
            </svg>
        ),
    },
    confluence: {
        background: "bg-soft-white",
        icon: (
            <svg width="60%" height="60%" viewBox="0 0 50 50">
                <path
                    fill="#0052cc"
                    d="m2 38-2 3 1 2 10 7 2-1 2-2c4-8 8-7 15-3l11 5 2-1 5-11-1-2-10-6c-14-7-26-6-35 9Z"
                />
                <path
                    fill="#0052cc"
                    d="m48 12 2-3-1-2-10-7-2 1-2 2c-4 8-8 7-16 3L9 1 7 2 2 13l1 3 10 5c14 7 26 6 35-9Z"
                />
            </svg>
        ),
    },
    wordpress: {
        background: "bg-soft-white",
        icon: <i className="text-[2.5rem] text-[#BABEC0] ri-wordpress-fill" />,
    },
    wix: {
        background: "bg-soft-white",
        icon: (
            <svg width="80%" height="80%" viewBox="0 0 150 60">
                <path
                    fill="#BABEC0"
                    d="M86 1c-3 2-4 4-4 12l7-5c3-1 3-4 3-8l-6 1Z M92 48c0 7-1 9-4 11l-6 1V19c0-2 0-3 3-4l4-2 3-3v38Zm58 12s-9 1-13-3a225 225 0 0 1-13-18l-2 1s-9 15-12 17c-4 4-13 3-13 3l19-30L98 0s8-1 12 3l12 17 2 1 1-1s10-15 13-17c4-4 12-3 12-3l-20 30 20 30ZM78 0 63 60l-8-1c-3-2-5-3-7-11l-7-30-2-3-2 3-7 30c-2 8-4 9-7 11l-8 1L0 0s6-1 10 3l3 6 8 32 6-27 4-8c3-3 7-3 8-3 0 0 5 0 7 3l4 8 7 27 8-32 3-6c4-4 10-3 10-3Z"
                />
            </svg>
        ),
    },
    figma: {
        background: "bg-soft-white",
        icon: (
            <svg width="80%" height="80%" viewBox="0 0 100 150">
                <path
                    fill="#0acf83"
                    d="M25 150c14 0 25-11 25-25v-25H25a25 25 0 0 0 0 50Z"
                />
                <path
                    fill="#a259ff"
                    d="M0 75c0-14 11-25 25-25h25v50H25C11 100 0 89 0 75Z"
                />
                <path
                    fill="#f24e1e"
                    d="M0 25C0 11 11 0 25 0h25v50H25C11 50 0 39 0 25Z"
                />
                <path fill="#ff7262" d="M50 0h25a25 25 0 0 1 0 50H50V0Z" />
                <path
                    fill="#1abcfe"
                    d="M100 75a25 25 0 1 1-50 0 25 25 0 0 1 50 0Z"
                />
            </svg>
        ),
    },
    overleaf: {
        background: "bg-[#47a141]",
        icon: (
            <svg width="80%" height="80%" viewBox="0 0 58 67">
                <path
                    fill="#fff"
                    d="M58 2c-9-3-42-5-42 15C6 23 0 33 0 44a23 23 0 1 0 23-24c-4 3-9 8-11 14 3-4 9-6 14-6a15 15 0 1 1-14 26c-4-5-6-11-5-16 3-18 25-28 41-32-5 3-15 7-21 12 19 8 22-9 31-16Z"
                />
            </svg>
        ),
    },
    matlab: {
        background: "bg-soft-white",
        icon: (
            <svg width="80%" height="80%" viewBox="0 0 28 25">
                <defs>
                    <linearGradient
                        id="a"
                        x1="16.8"
                        x2="15"
                        y1="16.6"
                        y2="22.4"
                        gradientTransform="matrix(1 0 0 -1 -2 29)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0" stopColor="#512" />
                        <stop offset=".7" stopColor="#568" />
                        <stop offset=".8" stopColor="#29d" />
                    </linearGradient>
                    <linearGradient
                        id="b"
                        x1="29.7"
                        x2="11.7"
                        y1="19"
                        y2="14.6"
                        gradientTransform="translate(-2 -3)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset=".1" stopColor="#c33" />
                        <stop offset=".5" stopColor="#fe8643" />
                        <stop offset=".9" stopColor="#cf3633" />
                    </linearGradient>
                </defs>
                <path fill="#49d" d="m0 14 8-3 3-3s2 0 4-3-5 14-7 13H6l-6-4Z" />
                <path
                    fill="url(#a)"
                    d="m18 1-3 4c-2 3-4 3-4 3l-3 3 3 2c3-3 5-8 6-10l1-2Z"
                />
                <path
                    fill="url(#b)"
                    d="M19 0c-2 0-4 11-12 18 2 0 4 5 5 7 4 0 7-8 11-8l5 4c-4-9-6-21-9-21Z"
                />
            </svg>
        ),
    },
    r: {
        background: "bg-soft-white",
        icon: (
            <svg width="80%" height="80%" viewBox="0 0 72 55">
                <path
                    fill="#BABEC0"
                    d="M36 48C16 48 0 37 0 24S16 0 36 0s36 11 36 24-16 24-36 24Zm6-39c-16 0-28 8-28 17s12 16 28 16c15 0 26-5 26-16C68 14 57 9 42 9Z"
                />
                <path
                    fill="#3e3e3e"
                    d="m55 37 3 1 2 2 9 15H56l-7-12-2-3-2-1h-3v16H30V15h24s12 0 12 11c0 10-11 11-11 11Zm-6-13h-7v6h7s4 0 4-3c0-4-4-3-4-3Z"
                />
            </svg>
        ),
    },
    wiki: {
        background: "bg-soft-white",
        icon: (
            <svg width="80%" height="80%" viewBox="0 0 60 40">
                <path d="M60 0v1l-3 1-3 4-14 34h-1l-7-16-8 16h-1L5 4 3 2 0 1V0h16v1l-4 1v1l13 28 5-10-8-17-2-2-3-1V0h16v1l-3 1-1 1 4 12 5-11-1-2-2-1h-1V0h12v1l-4 2-7 15 6 13L52 4l-1-2-3-1V0h12Z" />
            </svg>
        ),
    },
    scholar: {
        background: "bg-soft-white",
        icon: (
            <svg width="80%" height="80%" viewBox="0 0 50 50">
                <path fill="#4285f4" d="M25 40 0 20 25 0v40Z" />
                <path fill="#356ac3" d="m25 40 25-20L25 0v40Z" />
                <circle
                    cx="256"
                    cy="362.7"
                    r="14.6"
                    fill="#a0c3ff"
                    transform="translate(-231 -327)"
                />
                <path fill="#76a7fa" d="M12 29a15 15 0 0 1 26 0H12Z" />
            </svg>
        ),
    },
    wolfram: {
        background: "bg-[#DD1100]",
        icon: (
            <svg width="80%" height="80%" fill="#FAFAFA" viewBox="0 0 55 57">
                <path d="m47 29 8-9-12-3 1-12-10 5-7-10-6 10-10-5 1 12-12 3 8 8-8 9 12 3-1 12 10-5 6 10 7-10 10 5-1-12 12-3-8-8Zm4 6-7-2-5-6 7 2 5 6ZM32 46l-4 7v-8l5-6-1 7Zm-7-29-7-3-4-5 7 3 4 5Zm9-5 7-3-4 5-7 3 4-5Zm8 6-4 5v-8l4-6v9ZM27 44l-4-8 4-6 5 6-5 8Zm-8-19-1-9 9 3v8l-8-2Zm9-6 9-3-1 9-8 2v-8Zm-15-1V9l4 6v8l-4-5Zm13 11-5 6-8-2 5-7 8 3Zm-4 10 5 6v8l-4-7-1-7Zm7-10 8-3 5 7-8 2-5-6Zm23-8-6 7-8-3 5-6 9 2ZM27 3l5 8-5 6-4-6 4-8ZM3 21l9-2 5 6-8 3-6-7Zm6 8 7-2-5 6-7 2 5-6Zm-5 8 7-3 8 2-6 2-9-1Zm9 3 8-3v8l-9 4 1-9Zm21 5v-8l8 3 1 9-9-4Zm8-7-6-2 8-2 7 3-9 1Z" />
            </svg>
        ),
    },
    arxiv: {
        background: "bg-soft-white",
        icon: (
            <svg width="70%" height="70%" viewBox="0 0 80 110">
                <path
                    fill="#aa142d"
                    d="M40 55 8 93c-1 2-2 4-1 6s2 3 4 3l3-2 39-42v-6l-13 3Z"
                />
                <path
                    fill="#7c7469"
                    d="m40 55 30-38c1-2 2-3 1-5-1-1-2-3-4-3l-3 1-37 42c-2 2-2 4 0 6l46 51 3 1c2 0 3-1 4-3 0-2 0-3-2-5L40 55"
                />
                <path fill="#aa142d" d="M53 52 8 2 4 0 0 3c0 1 0 3 2 5l38 48" />
            </svg>
        ),
    },
    jstor: {
        background: "bg-[#990000]",
        icon: (
            <svg width="80%" height="80%" viewBox="0 0 50 50">
                <path
                    fill="#fff"
                    d="M36 30s-4-2-4 3c0 3 4 3 4 2l-2-4 5 5v1l-2-1c-7 4-7-4-6-5 1-3 5-3 5-1Zm12-8c2 3-2 7-1 7 1-1 0-7-1-7l-1 4-1-9-5-3c-3-3 1-9 3-8l3 3c0 2-2 3-3 2 5-3-4-8-3 0 1 5 10 5 9-2 0-3-1-7-5-7-7-1-12 6-10 8l2 2-4-1c0-1 0-3 3-7 2-4 10-4 12-3 1 0 5 6 4 8-1 4-3 6-4 7-3 2 2 6 4 5l-2 1Zm0 10c2 4-1 5-1 5l1-3c0-4-7-4-6 3 0 3 0 4-5 7-1 2 1 5 2 6 2 1-4-1-3-3-5 4-8-1-7-1 2 3 4-4 4-4 0-1 3 0 5-2l-6 7c0 1 11-7 8-13 0-1-3-7-5-7-3 0-4-2-3-3 0-1 2-2 3-1-1-2 0-8 1-8l1 4 2-3c0-1 0 7 1 6l2-3s-2 10-1 11l-5-9c-1-1 0 6 5 12 0-2 6-3 7-1Zm-6-13Zm-1 11ZM7 37c2 2 0 10-2 10-4 1-6 0-5-1 2-1 5-5 5-8 1 1 0 8-3 8 0 0 4 1 4-3 1-3-1-8-1-9 1 3 9 1 11-1l-2 3h6l-3 5-2 1-4-2c1 1 8-2 7-2L7 37Zm-2-3Zm14-22C0 24-6 3 8 0c1 0 8 4 8 0 1 1 0 4-3 3 1 9-7 8-6 3 0 2 4 5 5 0S5 0 3 4c-7 16 14 9 15 7-3-2 2-7 2-6-1 0-4 6 0 6-1 0-2 7-1 9 0 0-3-6 0-8ZM7 32c-7-4-7-13 1-13 3 0 5 4 4 4 0-2 6-4 7-2-1 0-7 1-6 4 0 2-3 3-5 2-3-1-2-4-2-3s6 5 5-1c-1-7-10-2-8 2 1 4 5 11 11 3 2-3 7-6 7-5l-1 1-3 3 1 2-3-1c0 1-5 6-8 4Zm17 15c-3 2-12 3-12 2l-2-7 3 3c2 1 6 1 7-1l2-4 1-35c0-2-4-3-5-5h15c-1 2-4 3-4 5v35l-5 7Zm20-8s7 4 5 7c-4 8-7 1-6-2 1-1 4-2 2 1-3-5-3 9 3 1 2-3-4-7-6-6 0-2 2-1 2-1Z"
                />
            </svg>
        ),
    },
    desmos: {
        background: "bg-gradient-to-t from-[#0f6733] to-[#158f48]",
        icon: (
            <div className="w-full h-full">
                <div className="w-full h-full absolute z-[1] shadow-[inset_0_0_8px_black]" />
                <svg viewBox="0 0 100 100">
                    <path
                        fill="#fff"
                        d="m85 0 6 3c-3 16-12 45-23 62l-6-4C73 44 84 5 85 0Zm15 52v8c-1-1-3-3-6-3-7 0-15 18-26 18-12 0-19-18-26-18-8 0-15 18-26 18-6 0-11-5-16-10V55c6 4 10 12 16 12 7 0 14-17 26-17s17 17 26 17c8 0 14-17 26-17 2 0 4 0 6 2Zm-69 0-6 6C20 49 10 18 7 5c1-2 4-3 6-4 3 12 11 40 18 51Zm18 20c2 0 4 0 6-2l6 5s-4 5-12 5c-9 0-15-8-18-12l5-5c1 1 7 9 13 9Z"
                    />
                </svg>
            </div>
        ),
    },
    stackoverflow: {
        background: "bg-soft-white",
        icon: <i className="text-[#F47F24] ri-stack-overflow-line" />,
    },
    dribbble: {
        background: "bg-[#ca2e6a]",
        icon: <i className="ri-dribbble-line" />,
    },
    // Courtesy of svgrepo
    ableton: {
        background: "bg-soft-white",
        icon: (
            <svg width="80%" height="80%" viewBox="0 0 24 24" fill="#BABEC0">
                <path d="M0 6v12h2V6zm3 0v12h2V6zm3 0v12h2V6zm4 0v12h1V6zm3 0v2h11V6zm0 4v1h11v-1zm0 3v1h11v-1zm0 3v2h11v-2z" />
            </svg>
        ),
    },
    houdini: {
        background: "bg-black", // #FF6600
        icon: (
            <svg width="70%" height="70%" viewBox="0 0 24 24">
                <path
                    fill="#BABEC0"
                    d="M0 19.64V24h3.82A8.66 8.66 0 0 1 0 19.64zm16.04-4.56a8.24 8.24 0 0 0-8.1-8.09A10.23 10.23 0 0 0 0 10.01v4.2A7.74 7.74 0 0 1 7.42 9.1c3.53.04 6.25 2.7 6.27 5.72 0 2.87-1.18 4.99-4.43 5.51-1.78.3-4.55-.75-4.44-3.43.07-1.38 1.14-2.16 2.37-2.1-1.2 1.61.39 2.8 1.52 2.55a2.51 2.51 0 0 0 1.96-2.5c0-1.02-.95-2.66-3.33-2.6a4.77 4.77 0 0 0-4.85 4.8c-.07 3.28 3 5.46 6.17 5.48 4.64.06 7.4-2.98 7.38-7.44zM0 0v6.9a12.86 12.86 0 0 1 7.93-2.6c6.8 0 11.14 4.76 11.13 10.76 0 4.17-1.94 7.31-5 8.94H24V0H0z"
                />
            </svg>
        ),
    },
    "foundry-nuke": {
        background: "bg-black",
        icon: (
            <svg width="70%" height="70%" viewBox="0 0 24 24" fill="#BABEC0">
                <path d="M12.3 0A12 12 0 1 1 0 11.7v-.02A12 12 0 0 1 12.3 0zm0 1.24A10.76 10.76 0 1 0 22.74 12.3v-.03A10.76 10.76 0 0 0 12.3 1.24zm5.83 8.3h2.4c.98 0 .69-.87.69-.87a9.59 9.59 0 0 0-2.11-3.43v.01a10.05 10.05 0 0 0-3.36-2.33.61.61 0 0 0-.9.62l-.14 2.4s.02.77-.63.77c-.81 0-1.49-.05-1.49-.05a2.31 2.31 0 0 1-1.25-.54l-2.47-2.6a1.09 1.09 0 0 0-1.4-.2A9.76 9.76 0 0 0 2.74 8.7c-.26.71.33.8.73.8h6a2.09 2.09 0 0 1 1.68.63c.78.83 1.33 1.37 1.33 1.37s.48.54 1.26 1.36c.43.46.63 1.09.54 1.71 0 0-.29 5.75-.29 6-.03.4.04 1 .77.78a9.76 9.76 0 0 0 5.62-4.43 1.1 1.1 0 0 0-.12-1.42l-2.47-2.6a2.3 2.3 0 0 1-.5-1.28s-.02-.69.03-1.5c.05-.64.8-.58.8-.58zm-2.36 1.38c-.47.47-1.48.23-2.22-.55-.73-.77-.92-1.8-.45-2.25.48-.45 1.5-.24 2.24.54.74.77.9 1.79.43 2.26z" />
            </svg>
        ),
    },
    mari: {
        background: "bg-black",
        icon: (
            <svg width="70%" height="70%" viewBox="184 25 449 432">
                <path
                    fill="#BABEC0"
                    d="M509 169c-7-3-9-7-8-11 2-2 8-3 12-1 3 2-2 12-4 12Zm29-89c2 11-37 31-43 5-2-11 3-26 11-31 5-3 36 21 32 26Zm78 159c-4 2-19-2-22-5-5-6-3-14 5-17 7-2 13-2 19 3l3 11c0 4-1 7-5 8Zm-68-91c1-7 18-17 22-14 3 2 5 7 4 11-3 20-28 12-26 3Zm59 155s-5-10-1-15c8-7 19-6 25 1 4 4 3 8-1 12-1 1-19 3-23 2ZM396 455s-8-9-8-16c1-9 19-14 25 4 3 11-11 19-17 12ZM312 63s2-21 6-21c4-1 9 2 12 6 7 7-3 23-18 15Zm277 221c-3 3-20-12-15-19 3-4 8-2 12-1 5 0 7 17 3 20ZM358 44c-1 1-15-16-15-16 2-5 19-2 20 2 1 6 1 11-5 14ZM210 174c3 5-24 6-24 6-3-4-2-6 2-9 9-6 18-5 22 3Zm-14 63c-4-2-11-14-7-16 6-3 14-2 20 2 4 3-9 14-13 14Zm43-59c39 27 59-35 12-75 6 1 57 41 60 43 26 23 61-10 48-28 0 0-19-31-16-29 28 18 61 34 64 32 7-7 28-41 10-59 6-6 20-7 25-1 9 3-12 56-12 59 8 9 18 18 29 23 4 2 34-11 36-27 10-14 20-6 31 6-98 53-22 110-16 107 40-20 41-9 58 10-67-11-49 59 6 76 2 3-3 18-6 19-2 1-84-54-60-8-55-10-20 36-22 39-5 10-40-40-75-21-24 17 4 80-12 78-14 9-24-77-34-82-17-10-60 39-51 24 15-24-17-37-52-34 38-52-62-19-74-23-17-6 58-16 87-27s-62-54-48-56c9-1 35 8 41-4 14-25-33-17-29-42Zm50 242s-40-25-39-26c17-22 19-32 45-14 7 5 5 39-6 40Z"
                />
            </svg>
        ),
    },
    // Courtesy of icons8.com
    "fl-studio": {
        background: "bg-soft-white",
        icon: (
            <svg width="80%" height="80%" viewBox="0 0 48 48">
                <path
                    fill="#fe900d"
                    d="M17 10s-6 7-6 19c0 11 4 15 8 15 1 0 7-1 12-11 7-10 6-15 6-15l-20-8z"
                />
                <path
                    fill="#4aae52"
                    d="m33 9-4 1c-2-3-3-5-8-5-8 0-10 6-10 7l4 1h6l-1 3c0 4 2 7 5 7 4 0 6-5 6-5l7 5c2 0 3-2 3-6 0-2-2-8-8-8z"
                />
                <path
                    fill="#4aae52"
                    d="m28 12-1-2 7-8a1 1 0 1 1 1 2l-6 7-1 1z"
                />
                <path
                    fill="#fdc82e"
                    d="m15 32-1-1 1-9a1 1 0 1 1 2 0l-1 9a1 1 0 0 1-1 1z"
                />
            </svg>
        ),
    },
    "cinema-4d": {
        background: "bg-soft-white",
        icon: (
            <svg width="60%" height="60%" viewBox="0 0 24 24" fill="#BABEC0">
                <path d="M12 5.1a14 14 0 0 0-6.7 3 8.3 8.3 0 0 0-.3 2 9 9 0 0 0 9.2 8.7 9 9 0 0 0 2.1-.3 17 17 0 0 0 3-7.7c.3-2.8 1-3.6 1.7-4.2l.9-.4A8.1 8.1 0 0 0 17.5 2v.1c.4 1.6-1.4 2.3-5.5 3zM23.2 8a3 3 0 0 1-.1-.2c-.6-1.5-2-.5-2.4.3-.8 1.7-.6 2.4-1 4.2s-1.3 5-2.8 6.6c-2.1 2.5-4.4 3.5-7.7 3.2s-5.8-3-6.7-5c-.8-1.8-1-3.7 0-6.1s3.7-4.5 6.2-5.5 4.6-1 6-1.5c1.4-.4 2.2-1 2.2-1.7s-.8-1-1.2-1.2A12.2 12.2 0 0 0 12 .4C5.4.4 0 5.6 0 12.1s5.4 11.6 12 11.6 12-5.2 12-11.6a11.4 11.4 0 0 0-.8-4.2z" />
            </svg>
        ),
    },
    // Courtesy of vectorlogo.zone
    python: {
        background: "bg-soft-white",
        icon: (
            <svg width="60%" height="60%" viewBox="0 0 32 32">
                <defs>
                    <linearGradient
                        id="A"
                        x1="811.527"
                        y1="574.895"
                        x2="665.255"
                        y2="573.732"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0" stopColor="#366a96" />
                        <stop offset="1" stopColor="#3679b0" />
                    </linearGradient>
                    <linearGradient
                        id="B"
                        x1="862.824"
                        y1="642.176"
                        x2="573.276"
                        y2="642.176"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0" stopColor="#ffc836" />
                        <stop offset="1" stopColor="#ffe873" />
                    </linearGradient>
                </defs>
                <g transform="matrix(.1617 0 0 .158089 -107.53764 -81.66187)">
                    <path
                        d="M716.255 544.487c0-13.623 3.653-21.034 23.822-24.563 13.693-2.4 31.25-2.7 47.627 0 12.935 2.135 23.822 11.77 23.822 24.563v44.945c0 13.182-10.57 23.98-23.822 23.98h-47.627c-16.164 0-29.787 13.782-29.787 29.363v21.564h-16.376c-13.852 0-21.917-9.988-25.305-23.964-4.57-18.776-4.376-29.963 0-47.945 3.794-15.687 15.917-23.964 29.77-23.964h65.52v-6h-47.645v-17.98z"
                        fill="url(#A)"
                    />
                    <path
                        d="M811.527 688.32c0 13.623-11.823 20.523-23.822 23.964-18.052 5.188-32.54 4.394-47.627 0-12.6-3.67-23.822-11.17-23.822-23.964v-44.945c0-12.935 10.782-23.98 23.822-23.98h47.627c15.864 0 29.787-13.71 29.787-29.963v-20.964h17.858c13.87 0 20.4 10.305 23.822 23.964 4.764 18.97 4.976 33.157 0 47.945-4.817 14.364-9.97 23.964-23.822 23.964H763.9v6h47.627v17.98z"
                        fill="url(#B)"
                    />
                    <path
                        d="M728.166 541.505c0-4.976 3.988-9 8.93-9 4.923 0 8.93 4.023 8.93 9 0 4.96-4.006 8.982-8.93 8.982-4.94 0-8.93-4.023-8.93-8.982zm53.59 149.798c0-4.96 4.006-8.982 8.93-8.982 4.94 0 8.93 4.023 8.93 8.982 0 4.976-3.988 9-8.93 9-4.923 0-8.93-4.023-8.93-9z"
                        fill="#fff"
                    />
                </g>
            </svg>
        ),
    },
    jquery: {
        background: "bg-[#0769AD]",
        icon: (
            <svg width="70%" height="70%" fill="#fff" viewBox="0 0 32 32">
                <path d="M2 8c-3 4-2 9 0 13v1l1 1v1a16 16 0 0 0 1 0v1h1a20 20 0 0 0 0 1h1a17 17 0 0 0 0 1h1v1h1v1a21 21 0 0 0 1 0h1v1h2a22 22 0 0 0 1 1h1c13 2 17-8 17-8-3 4-9 5-15 4h-1a19 19 0 0 1 0-1 21 21 0 0 1-1 0h-1a5 5 0 0 1 0-1h-1a22 22 0 0 1-1 0v-1h-1v-1H9v-1H8a8 8 0 0 1 0-1 17 17 0 0 1-1 0l-1-1A14 14 0 0 1 4 5m7-1c-2 3-2 7 0 10a13 13 0 0 0 0 2l2 1v1a13 13 0 0 0 1 0v1a14 14 0 0 0 1 0 12 12 0 0 0 1 1 11 11 0 0 0 1 0 14 14 0 0 0 1 1h1c11 2 13-6 13-6-2 3-6 4-11 3a13 13 0 0 1-1 0 15 15 0 0 1-1 0 13 13 0 0 1 0-1h-1a12 12 0 0 1-1 0v-1a13 13 0 0 1-1 0c-2-2-4-4-4-6V2m6 0a6 6 0 0 0 0 6l4 4h1c6 2 8-3 8-3-1 2-4 2-6 2l-1-1a9 9 0 0 1-1 0 9 9 0 0 1-1-1c-3-2-4-5-3-8" />
            </svg>
        ),
    },
    flask: {
        background: "bg-soft-white",
        icon: (
            <svg width="80%" height="80%" viewBox="0 0 32 32">
                <path d="m10 27-4-3-4-8-2-5c-1-2 0-3 2-4 0 0 2 0 0 0V6l1-1C2 4 5 4 4 3 2 1 6 1 5 3l2 1c1 1 2 0 2 2l3 1 3 1c-1 1-4-1-4 1l2 9c0 2 1 3 3 5l4 3 4 1c1 0 2-2 3-1 0 0-2 1 0 1h2c1 1 3-1 3 1l-3 1-3 1h-5l-8-1-3-2zm2 1 4 1 7 1-3-1h-4l-5-2 2 1-2-1c-1 0-1 0 0 0l1 1zm-3-2v-1l-1-1c-1 1-1-1-1-1l-2-2-1-2-1-1 2 4 3 3 1 1zm-4-4s1 0 0 0zm6 5c0-1-1-1 0 0zm0 0c0-1 0 0 0 0zm1 0c1 0 0 0 0 0zm2 1s-1 0 0 0zm-3-2c1 0-1 0 0 0zm1 0s-1 0 0 0zm3 2c0 1 3 1 1 1 0 0-3-1-1-1zm-5-4s-1 0 0 0zm1 1c1 0-1 0 0 0zm1 1c1 0 0 0 0 0zm-3-2c1 0 3 0 1-1-1 0-2 0-1 1zm4 2c1 0-1 0 0 0zm-1-1c2 1-1-1 0 0zm3 2c1 0-2 0 0 0zm-7-4zm9 5s0 1 0 0zm-6-4s-1 0 0 0zm-2-1s-2-1 0 0zm-3-2c0-1-1-1 0 0zm7 4s0 1 0 0zm5 3s-1 0 0 0zm-5-3s-1 0 0 0zm-4-2c1 0-1 0 0 0zm6 3c1 0-1 0 0 0zm-3-2c1 1-1 0 0 0zm4 3h2c1-1-1 1 0 0l3 1h2l-1-1-3-1-3-2v-1l-2-2c-1-1-1-2-1 0l-1-1v-4h-1v-1c1 0 0 0 0 0v-4s0-3-1-2H8c2 1 0 1 0 1H6c2 0 0 1-1 1v1l-1 1 1 1v2-1H4v1l2 1h1c-1 0-3-1-1-1v-1 1h1c1 1 1 1 0 0l1 2v1l1-1 1 2v-1c1 1 0 1-1 1l2 1v1h-1l4 2 1 1h-2l3 1c-1 0-1 0 0 0v1zm-1-4h-1 1zm4 3zm-5-4c0-1 0 1 0 0zm-1-1h1zm-5-3c1 0 0 0 0 0zm4 2c1-1 1 1 0 0zm-2-2c-1 0 0 0 0 0zm2 1c0-1 0-1 0 0zm-4-3-1-2 1 1 1 1s-1 0 0 0H8zm-2-1c0-1 1 1 0 0zm1 0s0 1 0 0zm-1-1c-1 0-1-1 0 0 0 0-1-1 0 0 0 0 0 1 0 0zm0 0c1 0 0 0 0 0zm1 0c-1-1 0 1 0 0zm-1-1c-2-1 2 1 0 1v-1zm4 3v-1 1zm1 1c1-1 1 0 0 0zm0-1s0 1 0 0zm-5-3h1-1zm3 2c0-2 0 0 0 0zm2 1c0-1 0 0 0 0zm-5-3h1-1zm5 2c0-1 0-1 0 0zm-4-3s-1-1 0 0c0 0 1 0 0 0 1 1 0 0 0 0zm4 3c0-2 0 0 0 0zm-5-4zm1 1c1-1 1 0 0 0zm3 1s0 1 0 0zm0 0c0-1 0 0 0 0zm0-1s0 1 0 0zm0 0 1-2v1l-1 1zm1-3zm-1 14zm1 1h1-1zm-2-2s1 1 0 0v-1c-1 0-1 0 0 0v-1H7v1c1 0 2 1 0 0l2 1zm1 1c2 0-1-1 0 0zm8 5c0-1 0 0 0 0zm1 0h1-1c-1 0-1 0 0 0zM6 20c0-1-1-1 0 0zm1 0c-1 0-1 0 0 0zm5 3c0 1 2 1 0 0 0 0-1 0 0 0zm6 5c1-1 0 0 0 0zm2 1c0-1 0 0 0 0zm0-1c1 0-1 0 0 0zM4 18l-1-2-1-1 2 3zm16 10c1-1-1 0 0 0zm1 1c1-1-1-1 0 0zM6 19c0-1-1 0 0 0zm15 9zm-10-6s-1 0 0 0zm0 0zm11 7c1-1-1-1 0 0zm0-1s-1 1 0 0zm1 2c1-1 0 0 0 0zM6 19h2l-1-2-1 1c-1-1 0 0 0 0v1zm-3-3s-1-3-1-1l1 1zm6 4c-1-1 0 0 0 0zm1 0c0-1-1 0 0 0zm7 5c0-1 0 0 0 0zm1 0c-1 0-1 0 0 0zm3 2s-1 0 0 0zM5 16s-1 0 0 0zm12 8c-1-1-1 0 0 0zM4 16c1-1 0 0 0 0zm2 0zm19 12h2-3 1zM6 17c0-1 0 0 0 0zm-4-3c0-1-1 0 0 0zm1 0s-1 0 0 0zm1 0zm3 2zm-4-2c0-1-1 0 0 0zm-2-2zm1 0s-1 0 0 0zm1 1c1 0-1 0 0 0zm22 14c0-1-1-1 0 0zm3 1c0-1-1 0 0 0zM3 12c1 0 0 0 0 0zm-2-1 1-2 1 1h1l3-1 4-1 1-1H8L4 8C2 8 4 9 4 9v1L3 9c-2 0-3 0-2 2zm3-2h1-1zm1-1s0 1 0 0zm0 0v1-1zm1 0zm0 0h1-1zm3 0c0-2 2 0 0 0zm1-1s1 0 0 0c0 0 0 1 0 0zm-7 5c1-1-1-1 0 0zm1 0s-1 0 0 0zm-2-1c0-1-1-1 0 0zm27 17c0-1 0 0 0 0zm-3-2c1-1 0 0 0 0zm4 2h1-1zM4 12v-1c-1 0 2 1 0 0v1zm1 0zm1-2s-1 0 0 0zM4 7h3C6 6 6 6 7 7V6h1-2L4 7zm0-1c1-1 2 0 1-1L4 6zm2 0 1-1H6v1zM5 4c0-1-1 0 0 0zm0 0c2 0 0 0 0 0zM4 3V2v1zm10 5c1 0-1-1 0 0z" />
            </svg>
        ),
    },
    java: {
        background: "bg-soft-white",
        icon: (
            <svg width="80%" height="80%" viewBox="0 0 32 32">
                <path
                    fill="#4e7896"
                    d="M12 25s-2 0 0 1l7-1a10 10 0 0 0 2 1c-6 3-14 0-9-1zm-1-4s-2 1 1 1h8a3 3 0 0 0 1 1c-7 2-16 0-10-2zm15 6s0 1-1 2H6c-1-1 1-1 2-2h1c-1-1-8 2-3 3 12 2 23-1 20-3zm-14-9s-6 1-2 2l8-1h5l-2 1c-6 1-17 0-14-1 3-2 5-1 5-1zm11 5c6-3 3-6 1-5h-1 1c4-2 7 4-1 6v-1zm-10 9c6 0 14 0 15-3l-5 2H8l5 1z"
                />
                <path
                    fill="#f58219"
                    d="M19 0s3 3-3 8c-5 5-1 7 0 10-3-3-5-6-4-8 2-3 8-5 7-10zm-2 15c2 2 0 4 0 4s4-2 2-5c-2-2-3-3 4-7 0 0-11 2-6 8z"
                />
            </svg>
        ),
    },
    spring: {
        background: "bg-[#68BD45]",
        icon: (
            <svg width="60%" height="60%" viewBox="0 0 64 64">
                <path
                    fill="#fafafa"
                    d="M58 3a30 30 0 0 1-3 6 32 32 0 1 0-45 46l1 1a32 32 0 0 0 53-22c1-8-2-18-6-31zM15 56a3 3 0 1 1-1-4 3 3 0 0 1 1 4zm43-10c-8 10-25 7-36 7l-3 1 1-1 16-5c9-5 17-14 19-25-3 10-13 19-22 22l-18 4c-8-4-8-20 6-26 6-2 12-1 18-2 7-2 16-7 19-14 4 11 8 28 0 39z"
                />
            </svg>
        ),
    },
    firebase: {
        background: "bg-soft-white",
        icon: (
            <svg width="60%" height="60%" viewBox="0 0 32 32">
                <path fill="#ffa000" d="m20 12-4 3-3-6 2-4h1z" />
                <path fill="#f57f17" d="m13 9 3 6L4 26z" />
                <path fill="#ffca28" d="M23 7h1l4 19-11 6h-2L4 26z" />
                <path fill="#ffa000" d="M13 9 4 26 8 1l1-1z" />
            </svg>
        ),
    },
    postgresql: {
        background: "bg-soft-white",
        icon: (
            <svg width="80%" height="80%" viewBox="0 0 25.6 25.6">
                <g fill="none" stroke="#BABEC0">
                    <path
                        fill="gray"
                        stroke="gray"
                        d="m19 19 1-2h3l1-1-4-1c3-4 5-10 4-11-3-4-9-3-9-2l-2-1-3 1S1-2 2 7c0 2 2 14 5 10l2-2h2a2 2 0 0 0 0 1l-2 1v1c1 0 3 1 4-1v6c0 1 1 2 3 1 2 0 3 0 3-5"
                    />
                    <path
                        fill="#969696"
                        stroke="none"
                        d="m24 16-4-1c3-4 5-10 4-11-3-4-9-2-9-2a10 10 0 0 0-2-1l-3 1S1-2 2 7c0 2 2 14 5 10l2-2h2a2 2 0 0 0 0 1l-2 1v1c1 0 3 1 4-1v6c0 1 1 2 3 1 2 0 2-1 3-2v-3l1-2h3l1-1z"
                    />
                    <path d="M13 16v7c0 1 1 2 3 1 2 0 2-1 3-2v-5M10 2S1-2 2 7c0 2 2 14 5 10l2-2m6-13s6-2 9 1c1 2-1 8-4 12" />
                    <path d="m20 15 4 1-1 1h-4c0-2 2-1 1-2l-1-2s-4-7 2-6c0 0-2-6-8-6S8 8 8 8M11 16l-2 1v1c1 0 3 1 4-1l-1-1h-1z" />
                    <path d="m11 16 1-2V8c0-2-4 0-4 0v4c0 2 1 3 3 3" />
                    <g fill="#fff">
                        <path d="m10 8 1 1V8h-1zM19 8c1 0 0 0 0 0h-1 1z" />
                    </g>
                    <path d="m21 7-1 3v4" />
                </g>
            </svg>
        ),
    },
    mongodb: {
        background: "bg-[#00684A]",
        icon: (
            <svg width="40%" height="80%" viewBox="0 0 120 258">
                <path
                    fill="#fff"
                    d="M83 29A458 458 0 0 1 60 0L38 29c-93 118 15 198 15 198l1 1 2 30h8l3-30 1-1s108-80 15-198ZM60 225l-6-6 6-129h1l6 129-7 6Z"
                />
            </svg>
        ),
    },
    gcp: {
        background: "bg-soft-white",
        icon: (
            <svg width="80%" height="80%" viewBox="0 0 64 64">
                <path
                    fill="#ea4335"
                    d="m41 20 2 1 5-6 1-2A25 25 0 0 0 8 25h2l11-2 1-1a14 14 0 0 1 10-5l9 3z"
                />
                <path
                    fill="#4285f4"
                    d="M56 25c-1-5-4-9-7-12l-8 7c3 3 5 7 5 11v2a7 7 0 0 1 0 14H32l-1 1v8l1 2h14a18 18 0 0 0 18-18c0-7-3-12-8-15z"
                />
                <path
                    fill="#34a853"
                    d="M18 58h14V47H18a7 7 0 0 1-3-1l-2 1-5 5-1 2a18 18 0 0 0 11 4z"
                />
                <path
                    fill="#fbbc05"
                    d="M18 22A18 18 0 0 0 0 40c0 6 3 11 7 14l8-8a7 7 0 0 1-4-6 7 7 0 0 1 13-3l8-8c-3-5-8-7-14-7z"
                />
            </svg>
        ),
    },
    datadog: {
        background: "bg-[#632CA6]",
        icon: (
            <svg width="80%" height="80%" viewBox="0 0 800.5 701">
                <path fill="none" d="M546 341z" />
                <path
                    fill="#FFF"
                    d="M349 166c22-15 50-9 46-4-9 8 3 6 4 21 1 12-3 18-6 22a139 139 0 0 0-41 12l-4-3c-15-13-15-37 1-48m131 92c4-3 22-9 38-11h24c5 3 5 12 2 20-6 13-13 26-21 27-14 2-27-6-42-17-5-4-9-13-1-19m25-118c20 10 17 28 18 38v7c-3-2-8-3-15-3l-6 1c-7-4-12-12-16-20l-1-2v-2c-2-7-1-8 0-10 1-3 5-4-1-6l-1-1c3-4 14-5 22-2M394 355c-22-14-44-34-54-45-2-1-2-7-2-7 9 7 46 33 85 46 14 4 35 5 54-5 14-8 31-22 41-36l2 3-7 17 12 4 32-5c12-19 20-49 11-78-5-17-31-49-33-51-7-7 1-31-12-58-14-29-50-59-66-71 5 3 33 14 46 31 2-2 2-11 3-13-11-15-12-42-12-49 0-13-7-28-7-28s12 9 15 25c3 19 11 33 21 45 18 24 35 36 44 27 10-10-11-56-37-82-30-30-39-26-56-20-15 5-23 46-60 45l-31-1 8-10-23 11-1-1 8-13s-10 6-19 14c1-10 7-15 7-15s-12 2-28 20c-19 5-23 8-38 14-23-5-35-13-45-28-8-12-23-14-38-8l-48 21h18c-13 5-25 12-25 12h13l-12 9c-12 8-21 18-21 18l14-5c-4 11-14 19-12 33 1 13 17 39 37 55 2 1 29 26 50 16 20-10 28-20 32-34 4-16 2-28-7-64l-14-47 1-1c7 15 24 52 31 77 11 40 8 60 3 67-15 22-54 25-71 13-3 42 7 61 10 70-2 11 5 31 5 31s1-9 4-14c1 11 6 24 6 24s0-8 3-15c3 6 6 7 9 12 3 11 10 19 10 19l-1-12c16 15 19 38 21 55 4 47-75 85-91 115-11 17-18 45 1 62 48 39 30 50 54 68 32 24 73 13 87-7 20-27 15-52 8-76-6-19-21-50-40-62a83 83 0 0 0-54-13l1-1c23-5 47-2 64 9 20 12 38 34 47 67l22-3-22-172 47-5zm13 215-3-24 50-75 56 16 48-81 58 39 45-93 15 169-269 49zm270-252-177 32c-5 6-16 15-21 18-22 11-37 8-50 5l-21-7-43 6 26 219 304-55-18-218z"
                />
            </svg>
        ),
    },
    pytorch: {
        background: "bg-[#DE3412]",
        icon: (
            <svg width="70%" height="70%" viewBox="0 0 64 64">
                <g
                    transform="matrix(2.21262 0 0 2.21262 -39.453867 -1.770085)"
                    fill="#BABEC0"
                >
                    <path d="M40.8 9.3l-2.1 2.1c3.5 3.5 3.5 9.2 0 12.7s-9.2 3.5-12.7 0-3.5-9.2 0-12.7l5.6-5.6.7-.8V.8l-8.5 8.5a11.89 11.89 0 0 0 0 16.9 11.89 11.89 0 0 0 16.9 0c4.8-4.7 4.8-12.3.1-16.9z" />
                    <circle r="1.6" cy="7.1" cx="36.6" />
                </g>
            </svg>
        ),
    },
    kubernetes: {
        background: "bg-[#3970E4]",
        icon: (
            <svg width="100%" height="100%" viewBox="0 0 32 32">
                <path
                    fill="#BABEC0"
                    stroke="#BABEC0"
                    d="M16 4.5c-.4 0-.7.4-.7.8v.2l.1.6a6.2 6.2 0 0 1 .1 1.2l-.2.4v.2a8.7 8.7 0 0 0-5.6 2.7l-.2-.2H9a6.2 6.2 0 0 1-1-.8 5.5 5.5 0 0 0-.4-.5h-.1a.8.8 0 0 0-.5-.3.6.6 0 0 0-.5.3c-.2.3-.1.7.2 1h.1a5.5 5.5 0 0 0 .6.4l1 .7a.7.7 0 0 1 0 .4l.3.2a8.6 8.6 0 0 0-1.4 6h-.2l-.3.3a6.2 6.2 0 0 1-1.2.2 5.6 5.6 0 0 0-.7 0l-.1.1a.7.7 0 0 0-.4 1.2.7.7 0 0 0 .6.1h.2l.6-.2 1.2-.4.4.2h.3c.6 2 2 3.7 3.8 4.7l-.1.3v.4l-.5 1a5.6 5.6 0 0 0-.4.6v.2a.7.7 0 0 0 .6 1 .7.7 0 0 0 .5-.5l.1-.1.2-.6c.2-.5.3-1 .5-1.2a.5.5 0 0 1 .3-.2l.1-.2a8.6 8.6 0 0 0 6.2 0l.1.2.4.2.4 1.1a5.6 5.6 0 0 0 .2.7l.1.1a.7.7 0 0 0 1.2.2.7.7 0 0 0 0-.7v-.2a5.5 5.5 0 0 0-.4-.6 7 7 0 0 1-.6-1 .5.5 0 0 1 0-.4 2.3 2.3 0 0 1 0-.3c1.7-1 3-2.8 3.7-4.8h.7a7.3 7.3 0 0 1 1.8.5h.1a.7.7 0 0 0 .9-.8.7.7 0 0 0-.6-.5H27a5.6 5.6 0 0 0-.6 0l-1.2-.3a.8.8 0 0 1-.3-.3h-.3a8.7 8.7 0 0 0-1.3-6l.2-.2.1-.4 1-.7a5.6 5.6 0 0 0 .6-.3l.1-.2a.7.7 0 0 0-.1-1.2.7.7 0 0 0-.7.2l-.2.1a5.6 5.6 0 0 0-.4.5l-.9.8a.7.7 0 0 1-.4 0l-.2.2A8.7 8.7 0 0 0 16.7 8v-.3a.5.5 0 0 1-.2-.4 6.2 6.2 0 0 1 0-1.2l.2-.6v-.2c0-.4-.3-.7-.7-.8zm-.8 5.2-.2 3.5c0 .2-.2.4-.4.5s-.4 0-.6 0l-2.8-2a6.9 6.9 0 0 1 3.3-1.9h.7zm1.6 0a7 7 0 0 1 4 2l-2.8 2a.6.6 0 0 1-1-.5zM10.1 13l2.6 2.4a.6.6 0 0 1-.2 1l-3.4 1a6.9 6.9 0 0 1 1-4.4zM22 13a7 7 0 0 1 1 4.4l-3.4-1c-.2 0-.4-.2-.4-.5s0-.4.2-.5l2.6-2.4zm-6.4 2.6h1l.7.8-.2 1-1 .5-1-.5-.2-1zm3.4 2.8h.1l3.5.6a6.8 6.8 0 0 1-2.8 3.5L18.4 19a.6.6 0 0 1 .5-.8zm-5.8 0a.6.6 0 0 1 .5.8l-1.3 3.3c-1.3-.9-2.3-2-2.8-3.5l3.5-.6zm2.9 1.4a.6.6 0 0 1 .5.3l1.7 3-.7.3c-1.2.3-2.5.2-3.7-.2l1.7-3c0-.3.3-.4.5-.4z"
                />
            </svg>
        ),
    },
    rust: {
        background: "bg-soft-white",
        icon: (
            <svg width="90%" height="90%" viewBox="0 0 32 32">
                <path d="M15 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0M4 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0m22 0a1 1 0 0 1 2 0 1 1 0 0 1-2 0M6 14a1 1 0 0 0 1-1l-1-1h2v7H5a12 12 0 0 1-1-4zm7 0v-2h4l2 1-2 1zM8 26a1 1 0 1 1 2 0 1 1 0 0 1-2 0m14 0a1 1 0 0 1 2 0 1 1 0 0 1-2 0m0-2h-1v3a12 12 0 0 1-10 0v-3H8a12 12 0 0 1-1-1h9v-4h-3v-2h3c1 0 2 0 2 2l1 2 1 2h5a12 12 0 0 1-1 1zm6-9a12 12 0 0 1 0 2h-2v1l-1 1h-1l-2-4 2-3c0-2-1-3-2-3l-2-1H7a12 12 0 0 1 7-4l1 2h2l1-2a12 12 0 0 1 8 6l-1 3a1 1 0 0 0 0 1zm2 0v-1l2-1h-1l-1-1 1-2h-1l-1-1V7h-2V5c1 0 0-1 0 0h-2V3h-2l-1-1V1l-2 1-1-1V0l-1 2h-1l-1-2-1 2h-1l-1-2v1l-1 1-2-1v1L9 3H7v2H5c0-1-1 0 0 0v2H3v2l-1 1H1l1 2-1 1H0l2 1v1l-2 1 2 1v1l-2 1h1l1 1-1 2h1l1 1v2h2v2c-1 0 0 1 0 0h2v2h2l1 1v1l2-1 1 1v1l1-2h1l1 2 1-2h1l1 2v-1l1-1 2 1v-1l1-1h2v-2h2c0 1 1 0 0 0v-2h2v-2l1-1h1l-1-2 1-1h1l-2-1v-1l2-1z" />
            </svg>
        ),
    },
    "unreal-engine": {
        background: "bg-black",
        icon: (
            <svg width="80%" height="80%" viewBox="0 0 32 32" fill="#BABEC0">
                <path d="M16 0C7.2 0 .1 7.2.1 16S7.2 32 16 32s15.9-7.2 15.9-16S24.8 0 16 0zm0 .7a15.3 15.3 0 0 1 10.7 26.1 15 15 0 0 1-21.4 0 15.3 15.3 0 0 1 0-21.6A15 15 0 0 1 16 .7zm-.8 5.6c-2.6.7-5 2-8.2 5.7s-2.5 6.7-2.5 6.7.8-2 3-4.3c1-1 1.7-1.4 2.2-1.4.5 0 .9.4.9.8v7.5c0 .7-.5.9-1 .8H9c2.2 3 7.4 3.5 7.4 3.5l2.3-2.4 2.1 1.8c3.9-2.3 5.7-6.5 5.7-6.5-1.7 1.8-2.8 2.2-3.4 2.2-.6 0-.8-.3-.8-.3a113.9 113.9 0 0 1 0-9.4A30 30 0 0 1 25 7.3c-3.9.8-6 3.4-6 3.4-.7-.5-2-.5-2-.5.6.4 1.2 1.3 1.2 2.1v8s-1.3 1.1-2.3 1.1c-.6 0-1-.3-1.2-.6l-.2-.3v-9.8l-.4.2c-.3 0-.5-.1-.6-.5-.2-.2-.2-.6-.2-1 0-1.9 2-3 2-3z" />
            </svg>
        ),
    },
    // Courtesy of FontAwesome.
    laravel: {
        background: "bg-[#F05340]",
        icon: (
            <svg width="70%" height="70%" fill="#BABEC0" viewBox="0 0 512 512">
                <path d="M504 116a6 6 0 0 0 0-1 9 9 0 0 0 0-1 6 6 0 0 0-1-1 9 9 0 0 0-1-1 9 9 0 0 0-1-1l-97-55a8 8 0 0 0-8 0l-96 55a8 8 0 0 0-1 1 8 8 0 0 0-1 0 8 8 0 0 0 0 1l-1 1a10 10 0 0 0 0 1l-1 1a8 8 0 0 0 0 2v105l-80 46V63a8 8 0 0 0 0-2h-1a8 8 0 0 0 0-2h-1a9 9 0 0 0 0-1 10 10 0 0 0-1-1 10 10 0 0 0-1-1L116 1a8 8 0 0 0-8 0L11 57a7 7 0 0 0-1 0 8 8 0 0 0 0 1 8 8 0 0 0-1 1H8a8 8 0 0 0 0 2 7 7 0 0 0-1 0 8 8 0 0 0 0 2v330a8 8 0 0 0 4 7l193 111a9 9 0 0 0 1 0l1 1a8 8 0 0 0 4 0 9 9 0 0 0 2-1l192-111a8 8 0 0 0 4-7V288l93-53a8 8 0 0 0 4-7V118a9 9 0 0 0-1-2zM112 17l80 47-80 46-81-47zm88 60v202l-47 26-33 20V124l46-27zm0 413L23 389V77l34 20 47 27v215a7 7 0 0 0 0 1 8 8 0 0 0 0 1 6 6 0 0 0 0 1 6 6 0 0 0 1 1 8 8 0 0 0 1 1l1 1a9 9 0 0 0 1 1l92 52zm8-106-80-45 84-49 92-53 80 46-58 34zm184 5L216 490v-92l131-75 45-26zm0-120-33-19-47-27v-91l34 19 46 27zm8-105-80-46 80-46 81 46zm8 105v-91l47-27 34-19v91z" />
            </svg>
        ),
    },
    "sass-scss": {
        background: "bg-[#CC6699]",
        icon: (
            <svg width="80%" height="80%" viewBox="0 0 640 512">
                <path
                    fill="#fafafa"
                    d="M302 379s-1 1 0 0zm249-87a131 131 0 0 0-58 13c-6-12-12-22-13-30-1-9-3-14-1-25s7-26 7-27-1-7-14-7-24 3-25 6a123 123 0 0 0-6 19c-2 12-25 54-39 75-4-8-8-16-9-22-1-9-2-14-1-25s8-26 8-27-1-7-14-7-24 3-26 6-2 11-5 19a5298 5298 0 0 1-52 117l-1 2v-1l-3 7-5 6s-2-8 0-20c5-24 16-62 16-63s2-7-7-11c-9-3-13 3-13 3l-2 2s10-43-19-43c-19 0-44 20-57 39l-43 23-20 12-2-2c-36-38-102-65-99-116 1-19 8-68 127-128 98-49 177-35 190-5 19 42-42 121-144 133-38 4-59-11-64-17s-6-6-8-5c-3 2-1 7 0 10 3 8 15 22 37 29 18 6 64 10 119-12 62-23 110-90 96-145-14-57-108-75-196-44-53 19-110 48-151 87C5 163-3 203 1 220c11 58 92 97 125 125l-5 3c-16 8-78 40-93 74-18 39 2 67 16 71 42 11 84-10 107-44s21-79 10-99v-1a1451 1451 0 0 1 36-21c-4 11-7 24-9 43-1 22 8 50 20 61 5 5 11 5 15 5 14 0 20-11 27-25l16-36s-10 53 16 53c10 0 19-12 23-19l1-1 1-2 25-46c16-32 32-72 32-72a201 201 0 0 0 6 26l13 30-6 8-10 13c-12 15-28 32-30 37-2 6-1 11 3 14s10 3 16 3c11-1 19-4 23-6a82 82 0 0 0 21-10c12-10 20-23 19-40 0-10-4-19-7-28l3-5c20-29 35-61 35-61a201 201 0 0 0 6 26l12 26c-19 15-30 32-34 44-8 21-2 31 9 33 5 1 12-2 17-4a80 80 0 0 0 22-11c12-9 24-22 23-39 0-8-2-16-5-24 16-6 36-10 62-7 56 6 67 41 65 56s-14 22-18 25-5 3-5 5c1 2 2 2 6 2 4-1 29-12 30-39 2-34-31-71-89-71zM122 437c-19 20-45 27-56 21-11-7-7-37 16-58 14-13 32-25 43-32l12-7 1-1 3-2c8 31 0 58-19 79zm134-92c-6 16-20 56-28 54-7-2-11-33-1-63 5-15 15-33 22-40 10-11 21-15 23-10 4 6-12 49-16 59zm111 53-6 2c-1-1 1-3 1-3l19-21 11-14v1c0 18-17 30-25 35zm86-19c-2-2-2-6 5-21 2-6 8-15 19-25a36 36 0 0 1 2 11c0 23-17 31-26 35z"
                />
            </svg>
        ),
    },
    "node-js": {
        background: "bg-[#3C873A]",
        icon: <i className="text-white ri-nodejs-fill" />,
    },
    go: {
        background: "bg-[#29BEB0]",
        icon: (
            <svg width="75%" height="75%" viewBox="0 0 640 512">
                <path
                    fill="#fff"
                    d="m400 195-29 7-23 7h-1c-4 1-4 1-8-4-5-5-8-8-15-11-20-10-39-7-56 4a66 66 0 0 0-32 59c0 25 17 46 41 49 22 3 40-4 54-20l6-8 2-4h-60c-6 0-8-4-6-9l16-34c1-2 3-6 7-6h101c5-13 12-27 22-40 23-29 49-45 87-52 32-5 62-2 89 16 25 17 40 40 44 70 5 42-7 76-37 105-20 21-45 34-74 40l-16 2-9 1c-28 0-54-9-76-27a98 98 0 0 1-31-49c-4 8-8 15-14 21-21 30-51 48-88 53-30 4-59-2-84-20a98 98 0 0 1-39-69c-4-34 6-66 26-92 22-29 52-47 88-54a104 104 0 0 1 118 60c2 2 1 4-3 5zm-352 5-1-1 7-9 3-1h112l1 2-6 8-3 2-113-1zM1 229l-1-1 7-9 3-1h142l2 1-3 8-2 2H1zm75 27c-1 1-1 2 1 2h68l2-2v-8l-1-2H83l-3 2-4 8zm501-18v-7c-6-31-34-48-64-41-29 6-48 24-55 54-5 24 7 49 29 59 17 7 34 6 51-2 24-14 38-33 39-60v-3z"
                />
            </svg>
        ),
    },
    docker: {
        background: "bg-[#0DB7ED]",
        icon: (
            <svg width="70%" height="60%" fill="#fff" viewBox="0 0 640 512">
                <path d="M350 236h-66v-59h66v59zm0-204h-66v61h66V32zm78 145h-66v59h66v-59zm-156-72h-66v60h66v-60zm78 0h-66v60h66v-60zm277 100c-15-10-48-13-73-9-4-24-17-45-41-63l-14-10-10 14c-18 28-23 74-4 104-8 5-25 11-48 11H2c-8 51 6 117 44 162 37 44 93 66 166 66 157 0 274-72 328-204 22 0 68 0 91-45l9-17-13-9zm-511-28H50v59h66v-59zm78 0h-66v59h66v-59zm78 0h-66v59h66v-59zm-78-72h-66v60h66v-60z" />
            </svg>
        ),
    },
    aws: {
        background: "bg-soft-white",
        icon: (
            <svg width="80%" height="80%" viewBox="0 0 304 182">
                <path
                    fill="#252F3E"
                    d="m86 66 2 9c0 3 1 5 3 8v2l-1 3-7 4-2 1-3-1-4-5-3-6c-8 9-18 14-29 14-9 0-16-3-20-8-5-4-8-11-8-19s3-15 9-20c6-6 14-8 25-8a79 79 0 0 1 22 3v-7c0-8-2-13-5-16-3-4-8-5-16-5l-11 1a80 80 0 0 0-14 5h-2c-1 0-2-1-2-3v-5l1-3c0-1 1-2 3-2l12-5 16-2c12 0 20 3 26 8 5 6 8 14 8 25v32zM46 82l10-2c4-1 7-4 10-7l3-6 1-9v-4a84 84 0 0 0-19-2c-6 0-11 1-15 4-3 2-4 6-4 11s1 8 3 11c3 2 6 4 11 4zm80 10-4-1-2-3-23-78-1-4 2-2h10l4 1 2 4 17 66 15-66 2-4 4-1h8l4 1 2 4 16 67 17-67 2-4 4-1h9c2 0 3 1 3 2v2l-1 2-24 78-2 4-4 1h-9l-4-1-1-4-16-65-15 64-2 4-4 1h-9zm129 3a66 66 0 0 1-27-6l-3-3-1-2v-5c0-2 1-3 2-3h2l3 1a54 54 0 0 0 23 5c6 0 11-2 14-4 4-2 5-5 5-9l-2-7-10-5-15-5c-7-2-13-6-16-10a24 24 0 0 1 5-34l10-5a44 44 0 0 1 20-2 110 110 0 0 1 12 3l4 2 3 2 1 4v4c0 3-1 4-2 4l-4-2c-6-2-12-3-19-3-6 0-11 0-14 2s-4 5-4 9c0 3 1 5 3 7s5 4 11 6l14 4c7 3 12 6 15 10s5 9 5 14l-3 12-7 8c-3 3-7 5-11 6l-14 2z"
                />
                <g fill="#F90">
                    <path d="M274 144A220 220 0 0 1 4 124c-4-3-1-6 2-4a300 300 0 0 0 263 16c5-2 10 4 5 8z" />
                    <path d="M287 128c-4-5-28-3-38-1-4 0-4-3-1-5 19-13 50-9 53-5 4 5-1 36-18 51-3 2-6 1-5-2 5-10 13-33 9-38z" />
                </g>
            </svg>
        ),
    },
    ansible: {
        background: "bg-black",
        icon: (
            <svg width="70%" height="70%" viewBox="-97.6 -147.2 64 64">
                <path
                    fill="#fafafa"
                    d="M-34-115a32 32 0 1 1-64 0 32 32 0 0 1 64 0"
                />
                <path d="m-65-128 8 21-12-10zm15 25-13-30-2-2-2 2-14 33h5l5-13 17 13 1 1c2 0 3-1 3-3v-1z" />
            </svg>
        ),
    },
    jenkins: {
        background: "bg-[#F0D6B7]",
        icon: (
            <svg width="80%" height="80%" viewBox="0 0 256 256">
                <g fill="#000">
                    <path d="M132 1c-17 2-35 9-56 21-15 9-22 17-25 25 0 2-2 4-4 5-8 6-14 24-11 40 1 7 1 8-2 12-2 4-2 7-3 13-1 21 10 39 25 42 2 1 3 2 4 7l4 12 4 9c0 3 0 3-21 16-37 22-35 20-35 27l4 15 4 11h212a735 735 0 0 1 11-40c0-6-1-7-16-20-6-6-12-11-12-13-1-2-1-3 3-11 9-17 14-40 15-66 1-25-2-44-10-60-4-7-6-10-16-20a64 64 0 0 0-20-16c-9-5-20-8-32-9h-23zm33 11c17 5 30 12 37 21l7 9 4 4h-6c-4 0-5 1-7 3l-4 5v3l3-2c5-2 8-1 13 1 12 5 14 12 15 40 0 21-1 31-4 45-4 16-12 31-22 44-5 6-17 13-28 17-6 2-9 2-17 2-8-1-10-1-17-4-13-6-22-14-33-30-4-5-5-6-5-4 0 7 16 27 27 34l4 3h-5l-8 2-4 2c-2 1-16-1-22-4-3 0-7-3-9-5-6-6-15-26-17-37 0-5 0-5 3-8 3-4 4-8 1-8l-6 3-7 2c-3 0-9-4-12-7-3-4-7-13-8-18-1-12 7-22 18-22 7 0 10 3 13 11l1 6h6c8-1 9-2 6-14s-3-14 1-31c2-13 2-14 1-20-2-6-2-7 1-11 7-11 29-27 44-32 8-3 24-3 36 1zm-60 6-13 9c-7 3-13 7-20 14-3 3-6 6-9 6l-5 1 3-5c6-8 19-18 33-23 8-3 10-4 11-2zM78 54c0 1-1 2-7 4-9 2-15 6-19 12s-5 11-5 20c0 8-1 10-3 3-1-7 1-19 3-25 4-7 15-15 26-16 4-1 5-1 5 2zm24 157c12 1 12 1 11 4l-1 4c-1 2-14-3-17-6-4-3-3-6 0-4l7 2zm79-3c0 1-2 3-6 5-5 4-5 4-10 4l-10-4-3-2 5 1 14-2 10-2zm-1 33 5 2c2 0 2 1 2 3 0 3 0 3-4 3l-4-1-2-1-2 1-6 1c-4 0-5 0-6-3-3-3-2-5 4-7 7-1 9-1 13 2zm25 5 4 3h-9c-9 0-9 0-9-2 0-4 1-4 6-4 4 0 5 1 8 3z" />
                    <path d="M122 53c-9 5-14 15-12 20 1 3 2 3 4-2s8-10 12-12l9-1c4 0 5 0 5-2 0-6-10-8-18-3zM213 79l2 9c2 7 2 8-4 8-5 0-8 1-8 3 0 5 8 6 15 3s7-4 1-15l-6-11v3zM147 78c-1 1 2 10 4 16l2 5-15 1c-2-1-3 0-3 2 0 4 4 6 12 6 6 0 7 0 10-3 4-3 4-7-1-12l-6-10-3-5zM180 85c0 8 6 20 18 34 7 8 8 11 6 14-3 4-18 10-26 11-6 0-6 0-7-3l-2-5c0-2-2-1-3 2 0 3 1 9 3 10 2 2 13 1 20-1l14-6c7-4 7-4 8-9l1-7-6-7c-10-11-20-25-23-32-1-5-3-5-3-1zM50 111c-2 1-4 5-4 7l1-1 3-1c2 0 2 1 1 7l1 9c1 3 1 3 2-4l2-9c3-2 5 0 8 5 2 5 3 5 3 2 0-4-1-8-4-11-4-5-10-6-13-4zM207 149l-13 5h-4v10h4c8-2 15-7 20-16l2-4-9 4zM148 153c5 6 15 10 29 12h9v-10h-13c-11-1-20-2-25-5-2 0-2 0 0 3zM141 160c-1 1 11 16 15 18 8 5 30 3 34-2l2-3h-15c-19-1-23-2-29-9-5-5-6-6-7-4z" />
                </g>
            </svg>
        ),
    },
    unity: {
        background: "bg-black",
        icon: (
            <svg
                width="67.5%"
                height="70%"
                fill="#fafafa"
                viewBox="0 0 448 512"
            >
                <path d="m244 92 80 46c3 2 3 7 0 8l-95 56c-3 2-7 1-9 0l-96-56c-3-1-3-6 0-8l80-46V0L0 119v239l78-45v-94c0-3 4-6 7-4l95 56c3 1 5 4 5 8v111c0 3-4 5-7 4l-80-47-78 46 204 119 204-119-78-46-80 47c-3 1-7-1-7-4V279c0-4 2-7 5-8l95-56c3-2 7 1 7 4v94l78 45V119L244 0v92z" />
            </svg>
        ),
    },
    "unity-inactive": {
        background: "bg-black",
        icon: (
            <svg
                width="67.5%"
                height="70%"
                fill="#BABEC0"
                viewBox="0 0 448 512"
            >
                <path d="m244 92 80 46c3 2 3 7 0 8l-95 56c-3 2-7 1-9 0l-96-56c-3-1-3-6 0-8l80-46V0L0 119v239l78-45v-94c0-3 4-6 7-4l95 56c3 1 5 4 5 8v111c0 3-4 5-7 4l-80-47-78 46 204 119 204-119-78-46-80 47c-3 1-7-1-7-4V279c0-4 2-7 5-8l95-56c3-2 7 1 7 4v94l78 45V119L244 0v92z" />
            </svg>
        ),
    },
    tensorflow: {
        background: "bg-black",
        icon: (
            <svg width="80%" height="80%" viewBox="0 0 64 64">
                <path
                    fill="#cccccc"
                    d="m28 34 8-5 9 5-9 5-8-4zM2 20 36 0l26 15-8 14-18-9-26 14z"
                />
                <path
                    fill="#B3B3B3"
                    d="M28 54V44l8-5 9-5v10l-9 5v10l-8 5zm0-20-9-4-9 4v-9l26-15v19zm25-9v-5l9-5v9l-8 5z"
                />
                <path
                    fill="#BABEC0"
                    d="M19 59V30l9-5v9l8 5v10l-8-4v19zM6 32l-4-3v-9l8 5v9l-4-2zm30-12V10l17 10 1 9-18-9z"
                />
            </svg>
        ),
    },
    symfony: {
        background: "bg-black",
        icon: (
            <svg width="80%" height="80%" fill="#BABEC0" viewBox="0 0 512 512">
                <path d="M256 8a248 248 0 1 0 0 496 248 248 0 0 0 0-496zm134 144c-12 0-20-7-20-17s7-14 6-19c0-7-10-7-13-7-39 1-48 57-58 114 21 3 36-1 45-6 12-8-4-16-2-25 4-18 33-19 32 5 0 18-26 42-77 36-11 60-19 115-58 162-29 34-59 40-72 40-25 1-41-12-42-30 0-17 15-26 25-26 22-1 30 25 15 34-13 9 0 12 2 12 10 0 17-5 22-9 24-20 33-55 45-118 8-50 17-78 18-82-16-13-27-29-49-35-16-4-26 0-32 8-8 10-6 23 2 31l13 14c15 18 24 32 21 50-6 30-41 53-83 40-36-11-43-36-39-50 8-25 43-12 35 13-3 9-5 9-6 13-5 15 41 29 51-1 4-15-6-22-23-40-28-32-16-65 3-80 53-39 101 18 111 26 37-109 101-105 102-105 26-1 45 10 45 29 0 7-4 22-19 23z" />
            </svg>
        ),
    },
    // Courtesy of Icon Mafia
    ruby: {
        background: "bg-[#D91404]",
        icon: (
            <svg width="60%" height="60%" fill="#fafafa" viewBox="0 0 512 512">
                <path d="m365 387 109 96-214-16a631 631 0 0 0 105-80zm121 58 20-262c-10 25-26 54-46 86l26 176zm-113-64 108 96-29-197c-24 36-52 72-79 101zm-127 94c-23 13-47 23-72 31l250-17-178-14zM37 349l66 152 54-178-120 26zm136-35 182 59-47-185-135 126zm145-144 170-11L355 50l-37 120zM415 3 304 2l49 35 62-34zM5 284 1 392l27-48-23-60zm61 43c21 2 42-3 64-12a342 342 0 0 0 110-83c80-78 112-166 77-201-8-8-20-13-35-13-45 0-114 34-172 92-55 55-91 121-92 167 0 16 5 29 14 38 8 8 19 11 34 12zm165 145 8-4-74-141-55 183 4-1a348 348 0 0 0 117-37zm150-117 2-2 3-4 5-6a847 847 0 0 0 55-75l-9-6-115-70 45 179 14-16zM508 68 368 48l134 110a229 229 0 0 0 9-57c1-12 0-23-3-33zm-54 192 1-2 11-17c12-21 26-50 32-72l-174 11 116 71 14 9zM245 466h1c38-21 72-47 110-84l-185-60 74 144zM1 412c0 24 5 44 15 59l8-103-23 44zm33-51L24 480c15 19 34 27 62 27h9l-5-12c-11-27-42-104-56-134zM506 61c-2-7-5-12-8-18-12-21-34-34-65-40l-67 38 140 20z" />
            </svg>
        ),
    },
    // Courtesy of World vector logo
    nextjs: {
        background: "bg-black",
        icon: <i className="text-white ri-nextjs-fill" />,
    },
    // Courtesy of Tech Icons
    jest: {
        background: "bg-[#99425B]",
        icon: (
            <svg width="70%" height="70%" viewBox="0 0 128 128">
                <path
                    fill="#fafafa"
                    d="M124 63c0-8-6-14-14-16l18-47H41l18 47c-8 2-13 9-13 16 0 6 3 11 7 14l-6 6-15 9c-5-3-7-8-5-13 7-2 13-8 13-16 0-9-8-16-18-16-11 0-19 7-19 16 0 5 2 9 6 12l-1 1c-3 5-6 11-7 18-3 13 1 23 11 29 5 3 11 5 17 5 11 0 21-5 32-10 7-3 15-7 23-8l9-2c6-1 12-1 18-4 7-4 12-10 13-17 1-5 0-11-3-15a15 15 0 0 0 3-9zm-8 0c0 5-4 9-10 9s-10-4-10-9a9 9 0 0 1 2-6 9 9 0 0 1 2-1l1-1 1-1h6c5 1 8 5 8 9zM53 8h64l-15 39h-2L85 19 69 47h-2zm29 52c-1-4-3-7-6-9l9-16 8 16c-2 3-4 5-5 9zm-21-6h7v1h2l1 2 1 1 2 5c0 5-5 9-10 9s-10-4-10-9c-1-4 3-8 7-9zm-40 0c6 0 10 4 10 9s-4 9-10 9-10-4-10-9 4-9 10-9zm95 32c-1 4-4 9-9 11l-16 4-9 1c-9 2-17 6-25 10-10 4-19 8-28 8-5 0-9-1-13-3-9-6-8-16-7-22s3-11 6-15v-1h3c-1 8 3 16 12 20l1 1 2-1a57 57 0 0 0 28-20l3 1c8 0 15-6 17-13h7c2 7 9 13 18 13l9-3c1 3 2 6 1 9zm0 0"
                />
            </svg>
        ),
    },
    // Courtesy of GraphQL
    graphql: {
        background: "bg-[#E10098]",
        icon: (
            <svg width="80%" height="80%" viewBox="0 0 100 100" fill="#BABEC0">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M50 6.90308L87.323 28.4515V71.5484L50 93.0968L12.677 71.5484V28.4515L50 6.90308ZM16.8647 30.8693V62.5251L44.2795 15.0414L16.8647 30.8693ZM50 13.5086L18.3975 68.2457H81.6025L50 13.5086ZM77.4148 72.4334H22.5852L50 88.2613L77.4148 72.4334ZM83.1353 62.5251L55.7205 15.0414L83.1353 30.8693V62.5251Z"
                />
                <circle cx="50" cy="9.3209" r="8.82" />
                <circle cx="85.2292" cy="29.6605" r="8.82" />
                <circle cx="85.2292" cy="70.3396" r="8.82" />
                <circle cx="50" cy="90.6791" r="8.82" />
                <circle cx="14.7659" cy="70.3396" r="8.82" />
                <circle cx="14.7659" cy="29.6605" r="8.82" />
            </svg>
        ),
    },
};
