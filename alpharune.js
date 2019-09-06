class runeSet {
    constructor(map) {
        this.conceal = map;
        this.reveal = {};
        for (let key in map) {
            const value = map[key];
            this.reveal[value] = key;
        }
    }
}

const elderFuthark = new runeSet({
    'a': 'ᚨ', 'b': 'ᛒ', 'c': 'ᚲ', 'd': 'ᛞ',
    'e': 'ᛖ', 'f': 'ᚠ', 'g': 'ᚷ', 'h': 'ᚺ',
    'i': 'ᛁ', 'y': 'ᛃ', 'q': 'ᚲ', 'l': 'ᛚ',
    'm': 'ᛗ', 'n': 'ᚾ', 'o': 'ᛟ', 'p': 'ᛈ',
    'k': 'ᚲ', 'r': 'ᚱ', 's': 'ᛊ', 't': 'ᛏ',
    'u': 'ᚢ', 'v': 'ᚹ', 'w': 'ᚹ', 'x': 'ᚲᛊ',
    'j': 'ᛃ', 'z': 'ᛉ', 'ng': 'ᛜ', 'th': 'ᚦ',
    'ae': 'ᛇ', ' ': ' '
});

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