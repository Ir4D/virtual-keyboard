const body = document.querySelector('body');
const main = document.createElement('main');
const heading = document.createElement('h1');
const textarea = document.createElement('textarea');
const keyboard = document.createElement('keyboard');
const description = document.createElement('description');

body.className = 'body';
main.className = 'main';
heading.className = 'heading';
heading.innerHTML = 'Virtual Keyboard';
textarea.className = 'textarea';
textarea.id = 'textarea';
keyboard.className = 'keyboard';
keyboard.id = 'keyboard';
description.className = 'description';
description.innerHTML = `<p>Клавиатура создана в операционной системе MacOS.<br>
Для переключения языка комбинация: левыe ctrl + alt</p>`;

body.appendChild(main);
main.appendChild(heading);
main.appendChild(textarea);
main.appendChild(keyboard);
main.appendChild(description);

let lang = localStorage.getItem('lang') || 'en';

const keys = {
  en: {
    Backquote: {
      normal: '§',
      shift: '±',
    },
    Digit1: {
      normal: '1',
      shift: '!',
    },
    Digit2: {
      normal: '2',
      shift: '@',
    },
    Digit3: {
      normal: '3',
      shift: '#',
    },
    Digit4: {
      normal: '4',
      shift: '$',
    },
    Digit5: {
      normal: '5',
      shift: '%',
    },
    Digit6: {
      normal: '6',
      shift: '^',
    },
    Digit7: {
      normal: '7',
      shift: '&',
    },
    Digit8: {
      normal: '8',
      shift: '*',
    },
    Digit9: {
      normal: '9',
      shift: '(',
    },
    Digit0: {
      normal: '0',
      shift: ')',
    },
    Minus: {
      normal: '-',
      shift: '_',
    },
    Equal: {
      normal: '=',
      shift: '+',
    },
    Backspace: {
      normal: 'Backspace',
      shift: 'Backspace',
    },
    Tab: {
      normal: 'Tab',
      shift: 'Tab',
    },
    KeyQ: {
      normal: 'q',
      shift: 'Q',
    },
    KeyW: {
      normal: 'w',
      shift: 'W',
    },
    KeyE: {
      normal: 'e',
      shift: 'E',
    },
    KeyR: {
      normal: 'r',
      shift: 'R',
    },
    KeyT: {
      normal: 't',
      shift: 'T',
    },
    KeyY: {
      normal: 'y',
      shift: 'Y',
    },
    KeyU: {
      normal: 'u',
      shift: 'U',
    },
    KeyI: {
      normal: 'i',
      shift: 'I',
    },
    KeyO: {
      normal: 'o',
      shift: 'O',
    },
    KeyP: {
      normal: 'p',
      shift: 'P',
    },
    BracketLeft: {
      normal: '[',
      shift: '{',
    },
    BracketRight: {
      normal: ']',
      shift: '}',
    },
    Backslash: {
      normal: '\\',
      shift: '|',
    },
    Del: {
      normal: 'Del',
      shift: 'Del',
    },
    CapsLock: {
      normal: 'CapsLock',
      shift: 'CapsLock',
    },
    KeyA: {
      normal: 'a',
      shift: 'A',
    },
    KeyS: {
      normal: 's',
      shift: 'S',
    },
    KeyD: {
      normal: 'd',
      shift: 'D',
    },
    KeyF: {
      normal: 'f',
      shift: 'F',
    },
    KeyG: {
      normal: 'g',
      shift: 'G',
    },
    KeyH: {
      normal: 'h',
      shift: 'H',
    },
    KeyJ: {
      normal: 'j',
      shift: 'J',
    },
    KeyK: {
      normal: 'k',
      shift: 'K',
    },
    KeyL: {
      normal: 'l',
      shift: 'L',
    },
    Semicolon: {
      normal: ';',
      shift: ':',
    },
    Quote: {
      normal: '\'',
      shift: '"',
    },
    Enter: {
      normal: 'Enter',
      shift: 'Enter',
    },
    ShiftLeft: {
      normal: 'Shift',
      shift: 'Shift',
    },
    IntlBackslash: {
      normal: '`',
      shift: '~',
    },
    KeyZ: {
      normal: 'z',
      shift: 'Z',
    },
    KeyX: {
      normal: 'x',
      shift: 'X',
    },
    KeyC: {
      normal: 'c',
      shift: 'C',
    },
    KeyV: {
      normal: 'v',
      shift: 'V',
    },
    KeyB: {
      normal: 'b',
      shift: 'B',
    },
    KeyN: {
      normal: 'n',
      shift: 'N',
    },
    KeyM: {
      normal: 'm',
      shift: 'M',
    },
    Comma: {
      normal: ',',
      shift: '<',
    },
    Period: {
      normal: '.',
      shift: '>',
    },
    Slash: {
      normal: '/',
      shift: '?',
    },
    ArrowUp: {
      normal: '↑',
      shift: '↑',
    },
    ShiftRight: {
      normal: 'Shift',
      shift: 'Shift',
    },
    ControlLeft: {
      normal: 'Ctrl',
      shift: 'Ctrl',
    },
    MetaLeft: {
      normal: 'Cmd',
      shift: 'Cmd',
    },
    AltLeft: {
      normal: 'Alt',
      shift: 'Alt',
    },
    Space: {
      normal: ' ',
      shift: ' ',
    },
    AltRight: {
      normal: 'Alt',
      shift: 'Alt',
    },
    ArrowLeft: {
      normal: '←',
      shift: '←',
    },
    ArrowDown: {
      normal: '↓',
      shift: '↓',
    },
    ArrowRight: {
      normal: '→',
      shift: '→',
    },
    ControlRight: {
      normal: 'Ctrl',
      shift: 'Ctrl',
    },
  },
  ru: {
    Backquote: {
      normal: '>',
      shift: '<',
    },
    Digit1: {
      normal: '1',
      shift: '!',
    },
    Digit2: {
      normal: '2',
      shift: '"',
    },
    Digit3: {
      normal: '3',
      shift: '№',
    },
    Digit4: {
      normal: '4',
      shift: '%',
    },
    Digit5: {
      normal: '5',
      shift: ':',
    },
    Digit6: {
      normal: '6',
      shift: ',',
    },
    Digit7: {
      normal: '7',
      shift: '.',
    },
    Digit8: {
      normal: '8',
      shift: ';',
    },
    Digit9: {
      normal: '9',
      shift: '(',
    },
    Digit0: {
      normal: '0',
      shift: ')',
    },
    Minus: {
      normal: '-',
      shift: '_',
    },
    Equal: {
      normal: '=',
      shift: '+',
    },
    Backspace: {
      normal: 'Backspace',
      shift: 'Backspace',
    },
    Tab: {
      normal: 'Tab',
      shift: 'Tab',
    },
    KeyQ: {
      normal: 'й',
      shift: 'Й',
    },
    KeyW: {
      normal: 'ц',
      shift: 'Ц',
    },
    KeyE: {
      normal: 'у',
      shift: 'У',
    },
    KeyR: {
      normal: 'к',
      shift: 'К',
    },
    KeyT: {
      normal: 'е',
      shift: 'Е',
    },
    KeyY: {
      normal: 'н',
      shift: 'Н',
    },
    KeyU: {
      normal: 'г',
      shift: 'Г',
    },
    KeyI: {
      normal: 'ш',
      shift: 'Ш',
    },
    KeyO: {
      normal: 'щ',
      shift: 'Щ',
    },
    KeyP: {
      normal: 'з',
      shift: 'З',
    },
    BracketLeft: {
      normal: 'х',
      shift: 'Х',
    },
    BracketRight: {
      normal: 'ъ',
      shift: 'Ъ',
    },
    Backslash: {
      normal: 'ё',
      shift: 'Ё',
    },
    Del: {
      normal: 'Del',
      shift: 'Del',
    },
    CapsLock: {
      normal: 'CapsLock',
      shift: 'CapsLock',
    },
    KeyA: {
      normal: 'ф',
      shift: 'Ф',
    },
    KeyS: {
      normal: 'ы',
      shift: 'Ы',
    },
    KeyD: {
      normal: 'в',
      shift: 'В',
    },
    KeyF: {
      normal: 'а',
      shift: 'А',
    },
    KeyG: {
      normal: 'п',
      shift: 'П',
    },
    KeyH: {
      normal: 'р',
      shift: 'Р',
    },
    KeyJ: {
      normal: 'о',
      shift: 'О',
    },
    KeyK: {
      normal: 'л',
      shift: 'Л',
    },
    KeyL: {
      normal: 'д',
      shift: 'Д',
    },
    Semicolon: {
      normal: 'ж',
      shift: 'Ж',
    },
    Quote: {
      normal: 'э',
      shift: 'Э',
    },
    Enter: {
      normal: 'Enter',
      shift: 'Enter',
    },
    ShiftLeft: {
      normal: 'Shift',
      shift: 'Shift',
    },
    IntlBackslash: {
      normal: ']',
      shift: '[',
    },
    KeyZ: {
      normal: 'я',
      shift: 'Я',
    },
    KeyX: {
      normal: 'ч',
      shift: 'Ч',
    },
    KeyC: {
      normal: 'с',
      shift: 'С',
    },
    KeyV: {
      normal: 'м',
      shift: 'М',
    },
    KeyB: {
      normal: 'и',
      shift: 'И',
    },
    KeyN: {
      normal: 'т',
      shift: 'Т',
    },
    KeyM: {
      normal: 'ь',
      shift: 'Ь',
    },
    Comma: {
      normal: 'б',
      shift: 'Б',
    },
    Period: {
      normal: 'ю',
      shift: 'Ю',
    },
    Slash: {
      normal: '/',
      shift: '?',
    },
    ArrowUp: {
      normal: '↑',
      shift: '↑',
    },
    ShiftRight: {
      normal: 'Shift',
      shift: 'Shift',
    },
    ControlLeft: {
      normal: 'Ctrl',
      shift: 'Ctrl',
    },
    MetaLeft: {
      normal: 'Cmd',
      shift: 'Cmd',
    },
    AltLeft: {
      normal: 'Alt',
      shift: 'Alt',
    },
    Space: {
      normal: ' ',
      shift: ' ',
    },
    AltRight: {
      normal: 'Alt',
      shift: 'Alt',
    },
    ArrowLeft: {
      normal: '←',
      shift: '←',
    },
    ArrowDown: {
      normal: '↓',
      shift: '↓',
    },
    ArrowRight: {
      normal: '→',
      shift: '→',
    },
    ControlRight: {
      normal: 'Ctrl',
      shift: 'Ctrl',
    },
  },
};

const keysIds = [
  'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Del', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'IntlBackslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight',
];

const digitsEn = [
  'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'BracketLeft', 'BracketRight', 'Backslash', 'Semicolon', 'Quote', 'IntlBackslash', 'Comma', 'Period', 'Slash', 'ArrowUp', 'Space', 'ArrowLeft', 'ArrowDown', 'ArrowRight',
];

const digitsRu = [
  'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'IntlBackslash', 'Slash', 'ArrowUp', 'Space', 'ArrowLeft', 'ArrowDown', 'ArrowRight',
];

const lettersEn = [
  'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM',
];

const lettersRu = [
  'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period',
];

const specials = [
  'Backspace', 'Tab', 'Del', 'CapsLock', 'Enter', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'AltRight', 'ControlRight',
];

let digits = digitsEn;
let letters = lettersEn;

function initKeyboard() {
  for (let i = 0; i < keysIds.length; i += 1) {
    const keyboardKey = document.createElement('div');
    keyboardKey.className = 'keyboard__key';
    if (specials.includes(keysIds[i])) {
      keyboardKey.classList.add('special');
    } else {
      keyboardKey.classList.add('key-inp');
    }
    keyboardKey.id = keysIds[i];
    keyboardKey.innerHTML = keys[lang][keysIds[i]].normal;
    keyboard.appendChild(keyboardKey);
  }
}

initKeyboard();

let toggleClickShift = false;
let toggleShift = false;
let toggleCapsLock = false;

let lettersState = 'normal';
let digitsState = 'normal';

function setLocalStorage() {
  localStorage.setItem('lang', lang);
}
window.addEventListener('beforeunload', setLocalStorage);

function changeLetters(state) {
  for (let i = 0; i < letters.length; i += 1) {
    const keyCaps = document.querySelectorAll('.key-inp');
    for (let j = 0; j < keyCaps.length; j += 1) {
      if (keyCaps[j].id === letters[i]) {
        keyCaps[j].innerHTML = keys[lang][letters[i]][state];
      }
    }
  }
}

function changeDigits(state) {
  for (let i = 0; i < digits.length; i += 1) {
    const keyCaps = document.querySelectorAll('.key-inp');
    for (let j = 0; j < keyCaps.length; j += 1) {
      if (keyCaps[j].id === digits[i]) {
        keyCaps[j].innerHTML = keys[lang][digits[i]][state];
      }
    }
  }
}

let keyPos = textarea.selectionStart;

textarea.addEventListener('click', () => {
  keyPos = textarea.selectionStart;
});

function clickKey(event) {
  const symbol = event.target;
  if (event.target.className.includes('key-inp')) {
    const text = textarea.value;
    textarea.value = text.slice(0, keyPos) + symbol.innerText + text.slice(keyPos, text.length);
    keyPos += 1;
    textarea.setSelectionRange(keyPos, keyPos);
    if (toggleClickShift) {
      toggleClickShift = false;
      if (toggleCapsLock) {
        toggleShift = false;
        digitsState = 'normal';
        lettersState = 'shift';
        changeDigits(digitsState);
        changeLetters(lettersState);
      } else {
        toggleShift = false;
        digitsState = 'normal';
        lettersState = 'normal';
        changeDigits(digitsState);
        changeLetters(lettersState);
      }
    }
  }
}
document.addEventListener('click', clickKey);

function pressLetter(event) {
  event.preventDefault();
  if (letters.includes(event.code)) {
    const keyNew = keys[lang][event.code][lettersState];
    const text = textarea.value;
    textarea.value = text.slice(0, keyPos) + keyNew + text.slice(keyPos, text.length);
    keyPos += 1;
    textarea.setSelectionRange(keyPos, keyPos);
  }
}
document.addEventListener('keydown', pressLetter);

function pressDigit(event) {
  event.preventDefault();
  if (digits.includes(event.code)) {
    const keyNew = keys[lang][event.code][digitsState];
    const text = textarea.value;
    textarea.value = text.slice(0, keyPos) + keyNew + text.slice(keyPos, text.length);
    keyPos += 1;
    textarea.setSelectionRange(keyPos, keyPos);
  }
}
document.addEventListener('keydown', pressDigit);

function pressKey(event) {
  event.preventDefault();
  if (keysIds.includes(event.code)) {
    const key = document.querySelector(`#${event.code}`);
    key.classList.add('click');
  }
}

function unpressKey(event) {
  setTimeout(() => {
    event.preventDefault();
    if (keysIds.includes(event.code)) {
      const key = document.querySelector(`#${event.code}`);
      key.classList.remove('click');
    }
  }, 200);
}
document.addEventListener('keydown', pressKey);
document.addEventListener('keyup', unpressKey);

function pressCapsLock(event) {
  event.preventDefault();
  if (event.getModifierState && event.getModifierState('CapsLock')) {
    toggleCapsLock = true;
    const key = document.querySelector('#CapsLock');
    key.classList.add('click');
    if (toggleShift) {
      lettersState = 'normal';
      changeLetters(lettersState);
    } else {
      lettersState = 'shift';
      changeLetters(lettersState);
    }
  }
}

function unpressCapsLock(event) {
  event.preventDefault();
  if (event.key === 'CapsLock') {
    if (event.getModifierState && !event.getModifierState('CapsLock')) {
      toggleCapsLock = false;
      const key = document.querySelector('#CapsLock');
      key.classList.remove('click');
      lettersState = 'normal';
      changeLetters(lettersState);
      if (toggleShift) {
        lettersState = 'shift';
        changeLetters(lettersState);
      } else {
        lettersState = 'normal';
        changeLetters(lettersState);
      }
    }
  }
}
document.addEventListener('keydown', pressCapsLock);
document.addEventListener('keyup', unpressCapsLock);

const keyCapsLock = document.querySelector('#CapsLock');

function clickCapsLock(event) {
  event.preventDefault();
  if (!toggleCapsLock) {
    toggleCapsLock = true;
    const key = document.querySelector('#CapsLock');
    key.classList.add('click');
    if (toggleShift) {
      lettersState = 'normal';
      changeLetters(lettersState);
    } else {
      lettersState = 'shift';
      changeLetters(lettersState);
    }
  } else {
    toggleCapsLock = false;
    const key = document.querySelector('#CapsLock');
    key.classList.remove('click');
    lettersState = 'normal';
    changeLetters(lettersState);
    if (toggleShift) {
      lettersState = 'shift';
      changeLetters(lettersState);
    } else {
      lettersState = 'normal';
      changeLetters(lettersState);
    }
  }
}
keyCapsLock.addEventListener('click', clickCapsLock);

function pressShift(event) {
  event.preventDefault();
  if (event.code.includes('Shift') && !event.repeat) {
    toggleShift = true;
    if (toggleCapsLock) {
      digitsState = 'shift';
      lettersState = 'normal';
      changeDigits(digitsState);
      changeLetters(lettersState);
    } else {
      digitsState = 'shift';
      lettersState = 'shift';
      changeDigits(digitsState);
      changeLetters(lettersState);
    }
  }
}

function unpressShift(event) {
  event.preventDefault();
  if (event.key === 'Shift') {
    if (!event.shiftKey && toggleCapsLock) {
      toggleShift = false;
      digitsState = 'normal';
      lettersState = 'shift';
      changeDigits(digitsState);
      changeLetters(lettersState);
    } else if (!event.shiftKey) {
      toggleShift = false;
      digitsState = 'normal';
      lettersState = 'normal';
      changeDigits(digitsState);
      changeLetters(lettersState);
    }
  }
}
document.addEventListener('keydown', pressShift);
document.addEventListener('keyup', unpressShift);

const keyShiftLeft = document.querySelector('#ShiftLeft');
const keyShiftRight = document.querySelector('#ShiftRight');

function clickShift(event) {
  event.preventDefault();
  if (!toggleShift) {
    toggleShift = true;
    toggleClickShift = true;
    if (toggleCapsLock) {
      digitsState = 'shift';
      lettersState = 'normal';
      changeDigits(digitsState);
      changeLetters(lettersState);
    } else {
      digitsState = 'shift';
      lettersState = 'shift';
      changeDigits(digitsState);
      changeLetters(lettersState);
    }
  } else {
    toggleShift = false;
    toggleClickShift = false;
    if (toggleCapsLock) {
      toggleShift = false;
      digitsState = 'normal';
      lettersState = 'shift';
      changeDigits(digitsState);
      changeLetters(lettersState);
    } else {
      toggleShift = false;
      digitsState = 'normal';
      lettersState = 'normal';
      changeDigits(digitsState);
      changeLetters(lettersState);
    }
  }
}

keyShiftLeft.addEventListener('mousedown', clickShift);
keyShiftRight.addEventListener('mousedown', clickShift);
keyShiftLeft.addEventListener('mouseup', clickShift);
keyShiftRight.addEventListener('mouseup', clickShift);

document.addEventListener('keydown', (event) => {
  event.preventDefault();
  if (event.code === 'AltLeft' && event.ctrlKey) {
    if (lang === 'en') {
      lang = 'ru';
      digits = digitsRu;
      letters = lettersRu;
    } else if (lang === 'ru') {
      lang = 'en';
      digits = digitsEn;
      letters = lettersEn;
    }
    changeLetters(lettersState);
    changeDigits(digitsState);
  }
});

const keyTab = document.querySelector('#Tab');

keyTab.addEventListener('click', () => {
  textarea.value = `${textarea.value.slice(0, keyPos)}    ${textarea.value.slice(keyPos, textarea.value.length)}`;
  keyPos += 4;
  textarea.setSelectionRange(keyPos, keyPos);
});

document.addEventListener('keydown', (event) => {
  event.preventDefault();
  if (event.code === 'Tab') {
    textarea.value = `${textarea.value.slice(0, keyPos)}    ${textarea.value.slice(keyPos, textarea.value.length)}`;
    keyPos += 4;
    textarea.setSelectionRange(keyPos, keyPos);
  }
});

const keyEnter = document.querySelector('#Enter');

keyEnter.addEventListener('click', () => {
  const text = textarea.value;
  textarea.value = `${text.slice(0, keyPos)}\n${text.slice(keyPos, text.length)}`;
  keyPos += 1;
  textarea.setSelectionRange(keyPos, keyPos);
});

document.addEventListener('keydown', (event) => {
  event.preventDefault();
  if (event.code === 'Enter') {
    const text = textarea.value;
    textarea.value = `${text.slice(0, keyPos)}\n${text.slice(keyPos, text.length)}`;
    keyPos += 1;
    textarea.setSelectionRange(keyPos, keyPos);
  }
});

const keyBackspace = document.querySelector('#Backspace');

keyBackspace.addEventListener('click', () => {
  if (textarea.selectionStart !== 0) {
    keyPos = textarea.selectionStart;
    const text = textarea.value;
    textarea.value = text.slice(0, keyPos - 1) + text.slice(keyPos, text.length);
    textarea.selectionStart = keyPos - 1;
  }
});

document.addEventListener('keydown', (event) => {
  event.preventDefault();
  if (event.code === 'Backspace') {
    if (textarea.selectionStart !== 0) {
      keyPos = textarea.selectionStart;
      const text = textarea.value;
      textarea.value = text.slice(0, keyPos - 1) + text.slice(keyPos, text.length);
      textarea.selectionStart = keyPos - 1;
    }
  }
});

const keyDel = document.querySelector('#Del');

keyDel.addEventListener('click', () => {
  if (textarea.selectionStart !== textarea.value.length) {
    keyPos = textarea.selectionStart;
    const text = textarea.value;
    textarea.value = text.slice(0, keyPos) + text.slice(keyPos + 1, text.length);
    textarea.selectionStart = keyPos;
  }
});

document.addEventListener('keydown', (event) => {
  event.preventDefault();
  if (event.code === 'Del') {
    if (textarea.selectionStart !== textarea.value.length) {
      keyPos = textarea.selectionStart;
      const text = textarea.value;
      textarea.value = text.slice(0, keyPos) + text.slice(keyPos + 1, text.length);
      textarea.selectionStart = keyPos;
    }
  }
});

const keySpace = document.querySelector('#Space');

keySpace.addEventListener('click', () => {
  textarea.value = `${textarea.value.slice(0, keyPos)} ${textarea.value.slice(keyPos, textarea.value.length)}`;
});

textarea.focus();
textarea.onblur = () => {
  textarea.focus();
};
