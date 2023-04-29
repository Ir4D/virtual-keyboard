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

const keys = {
  'en': {
    'Backquote': {
      'normal': '`',
      'shift': '~'
    },
    'Digit1': {
      'normal': '1',
      'shift': '!'
    },
    'Digit2': {
      'normal': '2',
      'shift': '@'
    },
    'Digit3': {
      'normal': '3',
      'shift': '#'
    },
    'Digit4': {
      'normal': '4',
      'shift': '$'
    },
    'Digit5': {
      'normal': '5',
      'shift': '%'
    },
    'Digit6': {
      'normal': '6',
      'shift': '^'
    },
    'Digit7': {
      'normal': '7',
      'shift': '&'
    },
    'Digit8': {
      'normal': '8',
      'shift': '*'
    },
    'Digit9': {
      'normal': '9',
      'shift': '('
    },
    'Digit0': {
      'normal': '0',
      'shift': ')'
    },
    'Minus': {
      'normal': '-',
      'shift': '_'
    },
    'Equal': {
      'normal': '=',
      'shift': '+'
    },
    'Backspace': {
      'normal': 'Backspace',
      'shift': 'Backspace'
    },
    'Tab': {
      'normal': 'Tab',
      'shift': 'Tab'
    },
    'KeyQ': {
      'normal': 'q',
      'shift': 'Q'
    },
    'KeyW': {
      'normal': 'w',
      'shift': 'W'
    },
    'KeyE': {
      'normal': 'e',
      'shift': 'E'
    },
    'KeyR': {
      'normal': 'r',
      'shift': 'R'
    },
    'KeyT': {
      'normal': 't',
      'shift': 'T'
    },
    'KeyY': {
      'normal': 'y',
      'shift': 'Y'
    },
    'KeyU': {
      'normal': 'u',
      'shift': 'U'
    },
    'KeyI': {
      'normal': 'i',
      'shift': 'I'
    },
    'KeyO': {
      'normal': 'o',
      'shift': 'O'
    },
    'KeyP': {
      'normal': 'p',
      'shift': 'P'
    },
    'BracketLeft': {
      'normal': '[',
      'shift': '{'
    },
    'BracketRight': {
      'normal': ']',
      'shift': '}'
    },
    'Backslash': {
      'normal': `\\`,
      'shift': '|'
    },
    'Del': {
      'normal': 'Del',
      'shift': 'Del'
    },
    'Capslock': {
      'normal': 'CapsLock',
      'shift': 'CapsLock'
    },
    'KeyA': {
      'normal': 'a',
      'shift': 'A'
    },
    'KeyS': {
      'normal': 's',
      'shift': 'S'
    },
    'KeyD': {
      'normal': 'd',
      'shift': 'D'
    },
    'KeyF': {
      'normal': 'f',
      'shift': 'F'
    },
    'KeyG': {
      'normal': 'g',
      'shift': 'G'
    },
    'KeyH': {
      'normal': 'h',
      'shift': 'H'
    },
    'KeyJ': {
      'normal': 'j',
      'shift': 'J'
    },
    'KeyK': {
      'normal': 'k',
      'shift': 'K'
    },
    'KeyL': {
      'normal': 'l',
      'shift': 'L'
    },
    'Semicolon': {
      'normal': ';',
      'shift': ':'
    },
    'Quote': {
      'normal': `'`,
      'shift': `"`
    },
    'Enter': {
      'normal': 'Enter',
      'shift': 'Enter'
    },
    'ShiftLeft': {
      'normal': 'Shift',
      'shift': 'Shift'
    },
    'KeyZ': {
      'normal': 'z',
      'shift': 'Z'
    },
    'KeyX': {
      'normal': 'x',
      'shift': 'X'
    },
    'KeyC': {
      'normal': 'c',
      'shift': 'C'
    },
    'KeyV': {
      'normal': 'v',
      'shift': 'V'
    },
    'KeyB': {
      'normal': 'b',
      'shift': 'B'
    },
    'KeyN': {
      'normal': 'n',
      'shift': 'N'
    },
    'KeyM': {
      'normal': 'm',
      'shift': 'M'
    },
    'Comma': {
      'normal': ',',
      'shift': `<`
    },
    'Period': {
      'normal': '.',
      'shift': `>`
    },
    'Slash': {
      'normal': '/',
      'shift': '?'
    },
    'ArrowUp': {
      'normal': `&uarr;`,
      'shift': `&uarr;`
    },
    'ShiftRight': {
      'normal': 'Shift',
      'shift': 'Shift'
    },
    'ControlLeft': {
      'normal': 'Ctrl',
      'shift': 'Ctrl'
    },
    'MetaLeft': {
      'normal': 'Cmd',
      'shift': 'Cmd'
    },
    'AltLeft': {
      'normal': 'Alt',
      'shift': 'Alt'
    },
    'Space': {
      'normal': ' ',
      'shift': ' '
    },
    'AltRight': {
      'normal': 'Alt',
      'shift': 'Alt'
    },
    'ArrowLeft': {
      'normal': `&larr;`,
      'shift': `&larr;`
    },
    'ArrowDown': {
      'normal': `&darr;`,
      'shift': `&darr;`
    },
    'ArrowRight': {
      'normal': `&rarr;`,
      'shift': `&rarr;`
    },
    'ControlRight': {
      'normal': 'Ctrl',
      'shift': 'Ctrl'
    },
  },
  'ru': {
    'Backquote': {
      'normal': ']',
      'shift': '['
    },
    'Digit1': {
      'normal': '1',
      'shift': '!'
    },
    'Digit2': {
      'normal': '2',
      'shift': '"'
    },
    'Digit3': {
      'normal': '3',
      'shift': '№'
    },
    'Digit4': {
      'normal': '4',
      'shift': '%'
    },
    'Digit5': {
      'normal': '5',
      'shift': ':'
    },
    'Digit6': {
      'normal': '6',
      'shift': ','
    },
    'Digit7': {
      'normal': '7',
      'shift': '.'
    },
    'Digit8': {
      'normal': '8',
      'shift': ';'
    },
    'Digit9': {
      'normal': '9',
      'shift': '('
    },
    'Digit0': {
      'normal': '0',
      'shift': ')'
    },
    'Minus': {
      'normal': '-',
      'shift': '_'
    },
    'Equal': {
      'normal': '=',
      'shift': '+'
    },
    'KeyQ': {
      'normal': 'й',
      'shift': 'Й'
    },
    'KeyW': {
      'normal': 'ц',
      'shift': 'Ц'
    },
    'KeyE': {
      'normal': 'у',
      'shift': 'У'
    },
    'KeyR': {
      'normal': 'к',
      'shift': 'К'
    },
    'KeyT': {
      'normal': 'е',
      'shift': 'Е'
    },
    'KeyY': {
      'normal': 'н',
      'shift': 'Н'
    },
    'KeyU': {
      'normal': 'г',
      'shift': 'Г'
    },
    'KeyI': {
      'normal': 'ш',
      'shift': 'Ш'
    },
    'KeyO': {
      'normal': 'щ',
      'shift': 'Щ'
    },
    'KeyP': {
      'normal': 'з',
      'shift': 'З'
    },
    'BracketLeft': {
      'normal': 'х',
      'shift': 'Х'
    },
    'BracketRight': {
      'normal': 'ъ',
      'shift': 'Ъ'
    },
    'Backslash': {
      'normal': 'ё',
      'shift': 'Ё'
    },
    'KeyA': {
      'normal': 'ф',
      'shift': 'Ф'
    },
    'KeyS': {
      'normal': 'ы',
      'shift': 'Ы'
    },
    'KeyD': {
      'normal': 'в',
      'shift': 'В'
    },
    'KeyF': {
      'normal': 'а',
      'shift': 'А'
    },
    'KeyG': {
      'normal': 'п',
      'shift': 'П'
    },
    'KeyH': {
      'normal': 'р',
      'shift': 'Р'
    },
    'KeyJ': {
      'normal': 'о',
      'shift': 'О'
    },
    'KeyK': {
      'normal': 'л',
      'shift': 'Л'
    },
    'KeyL': {
      'normal': 'д',
      'shift': 'Д'
    },
    'Semicolon': {
      'normal': 'ж',
      'shift': 'Ж'
    },
    'Quote': {
      'normal': 'э',
      'shift': 'Э'
    },
    'KeyZ': {
      'normal': 'я',
      'shift': 'Я'
    },
    'KeyX': {
      'normal': 'ч',
      'shift': 'Ч'
    },
    'KeyC': {
      'normal': 'с',
      'shift': 'С'
    },
    'KeyV': {
      'normal': 'м',
      'shift': 'М'
    },
    'KeyB': {
      'normal': 'и',
      'shift': 'И'
    },
    'KeyN': {
      'normal': 'т',
      'shift': 'Т'
    },
    'KeyM': {
      'normal': 'ь',
      'shift': 'Ь'
    },
    'Comma': {
      'normal': 'б',
      'shift': 'Б'
    },
    'Period': {
      'normal': 'ю',
      'shift': 'Ю'
    },
    'Slash': {
      'normal': '/',
      'shift': '?'
    }
  }
};

const keysIds = [
  'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Del', 'Capslock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'
]

const specials = [
  'Backspace', 'Tab', 'Del', 'Capslock', 'Enter', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'AltRight', 'ControlRight'
];

for (let i = 0; i < keysIds.length; i++) {
  let keyboardKey = document.createElement('div');
  keyboardKey.className = 'keyboard__key';
  if (specials.includes(keysIds[i])) {
    keyboardKey.classList.add('special');
  } else {
    keyboardKey.classList.add('key');
  }
  keyboardKey.id = keysIds[i];
  keyboardKey.innerHTML = keys['en'][keysIds[i]]['normal'];
  keyboard.appendChild(keyboardKey);
}


