const elderFuthark = new RuneSet({
    'a': 'ᚨ', 'b': 'ᛒ', 'c': 'ᚲ', 'd': 'ᛞ',
    'e': 'ᛖ', 'f': 'ᚠ', 'g': 'ᚷ', 'h': 'ᚺ',
    'i': 'ᛁ', 'y': 'ᛃ', 'q': 'ᚲ', 'l': 'ᛚ',
    'm': 'ᛗ', 'n': 'ᚾ', 'o': 'ᛟ', 'p': 'ᛈ',
    'k': 'ᚲ', 'r': 'ᚱ', 's': 'ᛊ', 't': 'ᛏ',
    'u': 'ᚢ', 'v': 'ᚹ', 'w': 'ᚹ', 'x': 'ᚲᛊ',
    'j': 'ᛃ', 'z': 'ᛉ', 'ng': 'ᛜ', 'th': 'ᚦ',
    'ae': 'ᛇ', ' ': ' '
});

const futhorc = new RuneSet({
    'a': 'ᚪ', 'b': 'ᛒ', 'c': 'ᚳ', 'd': 'ᛞ',
    'e': 'ᛖ', 'f': 'ᚠ', 'g': 'ᚷ', 'h': 'ᚻ',
    'i': 'ᛁ', 'j': 'ᛄ', 'k': 'ᛣ', 'l': 'ᛚ',
    'm': 'ᛗ', 'n': 'ᚾ', 'o': 'ᚩ', 'p': 'ᛈ',
    'q': 'ᛢ', 'r': 'ᚱ', 's': 'ᛋ', 't': 'ᛏ',
    'u': 'ᚢ', 'v': 'ᚹ', 'w': 'ᚹ', 'x': 'ᛉ',
    'y': 'ᚣ', 'z': 'ᚴ', 'ng': 'ᛝ', 'th': 'ᚦ',
    'ae': 'ᛇ', 'oe': 'ᛟ', 'io': 'ᛡ', 'ea': 'ᛠ',
    'st': 'ᛥ', ' ': ' '
});

const longBranch = new RuneSet({
    'a': 'ᛅ', 'p': 'ᛒ', 'c': 'ᚴ', 'd': 'ᛏ',
    'e': 'ᛁ', 'v': 'ᚠ', 'g': 'ᚴ', 'h': 'ᚼ',
    'j': 'ᛁ', 'y': 'ᛁ', 'q': 'ᚴ', 'l': 'ᛚ',
    'm': 'ᛘ', 'n': 'ᚾ', 'o': 'ᚢ', 'b': 'ᛒ',
    'k': 'ᚴ', 'r': 'ᚱ', 'z': 'ᛋ', 't': 'ᛏ',
    'w': 'ᚢ', 'f': 'ᚠ', 'u': 'ᚢ', 'x': 'ᚴᛋ',
    'i': 'ᛁ', 's': 'ᛋ', 'ae': 'ᚬ', 'ʀ': 'ᛦ',
    ' ': ' '
});

const shortTwig = new RuneSet({
    'a': 'ᛆ', 'p': 'ᛓ', 'c': 'ᚴ', 'd': 'ᛐ',
    'e': 'ᛁ', 'v': 'ᚠ', 'g': 'ᚴ', 'h': 'ᚽ',
    'j': 'ᛁ', 'y': 'ᛁ', 'q': 'ᚴ', 'l': 'ᛚ',
    'm': 'ᛙ', 'n': 'ᚿ', 'o': 'ᚢ', 'b': 'ᛓ',
    'k': 'ᚴ', 'r': 'ᚱ', 'z': 'ᛌ', 't': 'ᛐ',
    'w': 'ᚢ', 'f': 'ᚠ', 'u': 'ᚢ', 'x': 'ᚴᛌ',
    'i': 'ᛁ', 's': 'ᛌ', 'ae': 'ᚭ', 'ʀ': 'ᛧ',
    ' ': ' '
});

const medieval = new RuneSet({
    'a': 'ᛆ', 'b': 'ᛒ', 'c': 'ᛍ', 'd': 'ᛑ',
    'e': 'ᛂ', 'v': 'ᚠ', 'g': 'ᚵ', 'h': 'ᚼ',
    'j': 'ᛁ', 'i': 'ᛁ', 'k': 'ᚴ', 'l': 'ᛚ',
    'm': 'ᛘ', 'n': 'ᚿ', 'o': 'ᚮ', 'p': 'ᛔ',
    'q': 'ᛩ', 'r': 'ᚱ', 's': 'ᛌ', 't': 'ᛐ',
    'u': 'ᚢ', 'f': 'ᚡ', 'w': 'ᚥ', 'x': 'ᛪ',
    'y': 'ᛦ', 'z': 'ᛎ', 'th': 'ᚦ', 'ae': 'ᛅ',
    'oe': 'ᚬ', ' ': ' '
});

const ogham = new RuneSet({
    'a': 'ᚐ', 'b': 'ᚁ', 'c': 'ᚉ', 'd': 'ᚇ',
    'e': 'ᚓ', 'v': 'ᚃ', 'g': 'ᚌ', 'h': 'ᚆ',
    'y': 'ᚔ', 'j': 'ᚔ', 'k': 'ᚊ', 'l': 'ᚂ',
    'm': 'ᚋ', 'n': 'ᚅ', 'o': 'ᚑ', 'p': 'ᚚ',
    'q': 'ᚊ', 'r': 'ᚏ', 's': 'ᚄ', 't': 'ᚈ',
    'u': 'ᚒ', 'w': 'ᚃ', 'f': 'ᚃ', 'x': 'ᚕ',
    'i': 'ᚔ', 'z': 'ᚎ', 'oi': 'ᚖ', 'ui': 'ᚗ',
    'ia': 'ᚘ', 'ae': 'ᚙ', ' ': ' '
})