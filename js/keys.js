export function keyicon(key) {
  let color = '#aaccee';
  let tooltip = '';
  if (key.startsWith('Numpad')) {
    color='#aaeecc';
    tooltip = 'data-toggle=tooltip data-placement=left title=Numpad';
  }
  return `<span ${tooltip} class='rounded' style='display: inline-flex; align-items: center; justify-content: center; width: 35px; height: 35px; background: ${color}'><i><b>${getKeyImage(key)}</b></i></span>`;
}

function getKeyImage(key) {
  if (key in keyImages) return keyImages[key];
  else return key;
}

export let keyCodes = {
  Backspace: 8,
  Tab: 9,
  Enter: 13,
  Shift: 16,
  Ctrl: 17,
  Alt: 18,
  PauseBreak: 19,
  CapsLock: 20,
  Esc: 27,
  Space: 32,
  Pageup: 33,
  Pagedown: 34,
  End: 35,
  Home: 36,
  LeftArrow: 37,
  UpArrow: 38,
  RightArrow: 39,
  DownArrow: 40,
  Insert: 45,
  Delete: 46,
  0: 48,
  1: 49,
  2: 50,
  3: 51,
  4: 52,
  5: 53,
  6: 54,
  7: 55,
  8: 56,
  9: 57,
  A: 65,
  B: 66,
  C: 67,
  D: 68,
  E: 69,
  F: 70,
  G: 71,
  H: 72,
  I: 73,
  J: 74,
  K: 75,
  L: 76,
  M: 77,
  N: 78,
  O: 79,
  P: 80,
  Q: 81,
  R: 82,
  S: 83,
  T: 84,
  U: 85,
  V: 86,
  W: 87,
  X: 88,
  Y: 89,
  Z: 90,
  LeftWindowKey: 91,
  RightWindowKey: 92,
  SelectKey: 93,
  Numpad0: 96,
  Numpad1: 97,
  Numpad2: 98,
  Numpad3: 99,
  Numpad4: 100,
  Numpad5: 101,
  Numpad6: 102,
  Numpad7: 103,
  Numpad8: 104,
  Numpad9: 105,
  Multiply: 106,
  Add: 107,
  Subtract: 109,
  DecimalPoint: 110,
  Divide: 111,
  F1: 112,
  F2: 113,
  F3: 114,
  F4: 115,
  F5: 116,
  F6: 117,
  F7: 118,
  F8: 119,
  F9: 120,
  F10: 121,
  F11: 122,
  F12: 123,
  NumLock: 144,
  ScrollLock: 145,
  Semicolon: 186,
  EqualSign: 187,
  Comma: 188,
  Dash: 189,
  Period: 190,
  ForwardSlash: 191,
  GraveAccent: 192,
  OpenBracket: 219,
  Backslash: 220,
  CloseBracket: 221,
  SingleQuote: 222
};

let keyImages = {
  Multiply: '*',
  NumpadAdd: '+',
  NumpadSubtract: '-',
  DecimalPoint: '.',
  Divide: '/',
  Semicolon: ';',
  EqualSign: '=',
  Comma: ',',
  Dash: '-',
  Period: '.',
  ForwardSlash: '/',
  GraveAccent: '`',
  OpenBracket: '(',
  Backslash: '\\',
  CloseBracket: ')',
  SingleQuote: "'",
  LeftArrow: '<img src=img/keys/leftArrow.png height=20>',
  RightArrow: '<img src=img/keys/rightArrow.png height=20>',
  UpArrow: '<img src=img/keys/upArrow.png height=20>',
  DownArrow: '<img src=img/keys/downArrow.png height=20>',
};
