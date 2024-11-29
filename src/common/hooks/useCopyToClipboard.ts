const useCopyToClipboard = (text: string) => {
    async function copy(): Promise<string | null> {
        return new Promise(result => {
            if (!navigator.clipboard) {
                var textArea = document.createElement("textarea");
                textArea.value = text;
                textArea.style.top = textArea.style.left = "0";
                textArea.style.position = "fixed";
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();

                try {
                    document.execCommand('copy');
                    result(null);
                } catch (err) {
                    result(String(err));
                }

                document.body.removeChild(textArea);
            } else {
                navigator.clipboard.writeText(text).then(() => {
                    result(null);
                }).catch(err => {
                    result(String(err));
                });
            }
        })
    }

    return { copy };
}

export { useCopyToClipboard };