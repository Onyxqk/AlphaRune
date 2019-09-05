class seer {
    constructor(map) {
        this.conceal = map;
        this.reveal = {};
        for (let key in map) {
            const value = map[key];
            this.reveal[value] = key;
        }
    }
}

const runeSeer = new seer({
    'a': 'ᚨ', 'b': 'ᛒ', 'c': 'ᚲ', 'd': 'ᛞ',
    'e': 'ᛖ', 'f': 'ᚠ', 'g': 'ᚷ', 'h': 'ᚺ',
    'i': 'ᛁ', 'j': 'ᛃ', 'l': 'ᛚ',
    'm': 'ᛗ', 'n': 'ᚾ', 'o': 'ᛟ', 'p': 'ᛈ',
    'q': 'ᚲ', 'r': 'ᚱ', 's': 'ᛊ', 't': 'ᛏ',
    'u': 'ᚢ', 'v': 'ᚹ', 'w': 'ᚹ', 'x': 'ᚲᛊ',
    'y': 'ᛃ', 'z': 'ᛉ', 'k': 'ᚲ', 'ng': 'ᛜ', 'th': 'ᚦ',
    'ae': 'ᛇ', ' ': ' '
});

function convert(input) {
    convertToRunes = input.split('').map(function (letter) {
        return runeSeer.conceal[letter.toLowerCase()];
    }).join('');
    convertFromRunes = input.split('').map(function (rune) {
        return runeSeer.reveal[rune];
    }).join('');
    output = convertToRunes + convertFromRunes;
    return output;
}