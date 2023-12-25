const jsgradient = {
    inputA: '',
    inputB: '',
    inputC: '',
    gradientElement: '',

    // Convert a hex color to an RGB array e.g. [r,g,b]
    // Accepts the following formats: FFF, FFFFFF, #FFF, #FFFFFF
    hexToRgb: function (hex: string) {
        var r, g, b;
        // Remove the hash if given
        hex = hex.replace('#', '');
        // If invalid code given return white
        if (hex.length !== 3 && hex.length !== 6) {
            return [255, 255, 255];
        }
        // Double up charaters if only three suplied
        if (hex.length === 3) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        // Convert to [r,g,b] array
        r = parseInt(hex.substr(0, 2), 16);
        g = parseInt(hex.substr(2, 2), 16);
        b = parseInt(hex.substr(4, 2), 16);

        return [r, g, b];
    },

    // Converts an RGB color array e.g. [255,255,255] into a hexidecimal color value e.g. 'FFFFFF'
    rgbToHex: function (color: number[]) {
        // Set boundries of upper 255 and lower 0
        color[0] = (color[0] > 255) ? 255 : (color[0] < 0) ? 0 : color[0];
        color[1] = (color[1] > 255) ? 255 : (color[1] < 0) ? 0 : color[1];
        color[2] = (color[2] > 255) ? 255 : (color[2] < 0) ? 0 : color[2];

        return this.zeroFill(color[0].toString(16), 2) + this.zeroFill(color[1].toString(16), 2) + this.zeroFill(color[2].toString(16), 2);
    },

    // Pads a number with specified number of leading zeroes
    zeroFill: function (number: string, width: number) {
        width -= number.toString().length;
        if (width > 0) {
            return new Array(width + (/\./.test(number) ? 2 : 1)).join('0') + number;
        }
        return number;
    },

    // Generates an array of color values in sequence from 'colorA' to 'colorB' using the specified number of steps
    generateGradient: function (colorA: string, colorB: string, steps: number) {
        const result: string[] = [];
        let rInterval: number, gInterval: number, bInterval: number;

        const convertedColorA = this.hexToRgb(colorA); // [r,g,b]
        const convertedColorB = this.hexToRgb(colorB); // [r,g,b]
        steps -= 1; // Reduce the steps by one because we're including the first item manually

        // Calculate the intervals for each color
        rInterval = (Math.max(convertedColorA[0], convertedColorB[0]) - Math.min(convertedColorA[0], convertedColorB[0])) / steps;
        gInterval = (Math.max(convertedColorA[1], convertedColorB[1]) - Math.min(convertedColorA[1], convertedColorB[1])) / steps;
        bInterval = (Math.max(convertedColorA[2], convertedColorB[2]) - Math.min(convertedColorA[2], convertedColorB[2])) / steps;

        result.push('#' + this.rgbToHex(convertedColorA));

        // Set the starting value as the first color value
        let rVal = convertedColorA[0];
        let gVal = convertedColorA[1];
        let bVal = convertedColorA[2];

        // Loop over the steps-1 because we're including the last value manually to ensure it's accurate
        for (let i = 0; i < (steps - 1); i++) {
        // If the first value is lower than the last - increment up otherwise increment down
        rVal = (convertedColorA[0] < convertedColorB[0]) ? rVal + Math.round(rInterval) : rVal - Math.round(rInterval);
        gVal = (convertedColorA[1] < convertedColorB[1]) ? gVal + Math.round(gInterval) : gVal - Math.round(gInterval);
        bVal = (convertedColorA[2] < convertedColorB[2]) ? bVal + Math.round(bInterval) : bVal - Math.round(bInterval);
        result.push('#' + this.rgbToHex([rVal, gVal, bVal]));
        }

        result.push('#' + this.rgbToHex(convertedColorB));

        return result;
    },
};

export const jsShade = (hexColor: string, magnitude: number) => {
    hexColor = hexColor.replace(`#`, ``);
    if (hexColor.length === 6) {
        const decimalColor = parseInt(hexColor, 16);
        let r = (decimalColor >> 16) + magnitude;
        r > 255 && (r = 255);
        r < 0 && (r = 0);
        let g = (decimalColor & 0x0000ff) + magnitude;
        g > 255 && (g = 255);
        g < 0 && (g = 0);
        let b = ((decimalColor >> 8) & 0x00ff) + magnitude;
        b > 255 && (b = 255);
        b < 0 && (b = 0);
        return `#${(g | (b << 8) | (r << 16)).toString(16)}`;
    } else {
        return hexColor;
    }
};

export default jsgradient;