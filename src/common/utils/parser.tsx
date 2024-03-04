export const TextStyleParser = (text: string) => {
    const styling = text.split("/");
    return (
        <>
            -
            {
                styling.map((str: string, index: number) => {
                    const styled = /^[bi]\:\w+/.test(str);
                    if (styled) {
                        const [style, val] = str.split(":");
                        switch (style) {
                            case "b":
                                return <b key={index}>{val}</b>
                            case "i":
                                return <em key={index}>{val}</em>
                            default:
                                return <span key={index}>{val}</span>;
                        }
                    } else {
                        return <span key={index}>{str}</span>;
                    }
                })
            }
        </>
    )
}