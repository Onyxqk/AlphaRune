class RuneSet {
    constructor(map) {
        this.conceal = map;
        this.reveal = {};
        for (let key in map) {
            const value = map[key];
            this.reveal[value] = key;
        }
    }
}

function convert(input, runeSet) {
    convertToRunes = input.split('').map(function (letter) {
        return runeSet.conceal[letter.toLowerCase()];
    }).join('');
    convertFromRunes = input.split('').map(function (rune) {
        return runeSet.reveal[rune];
    }).join('');
    output = convertToRunes + convertFromRunes;
    return output;
}