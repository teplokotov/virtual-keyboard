import {  keys, keysObj, lang, specialKeys } from './keys.js'

let curLang = 'rus';
let curMode = 'caseDown';

const body = document.querySelector('.body');

// Page
const page = document.createElement('div');
page.className = 'page';
body.prepend(page);

// Header
const header = document.createElement('header');
header.className = 'header';
page.prepend(header);

// Heading
const heading = document.createElement('h1');
heading.className = 'header__heading';
heading.textContent = 'Virtual keyboard';
header.prepend(heading);

// Main
const main = document.createElement('main');
main.className = 'main';
header.after(main);

// Textarea
const textarea = document.createElement('textarea');
textarea.className = 'textarea';
textarea.id = 'textarea';
textarea.setAttribute('cols',50);
textarea.setAttribute('rows',5);
main.append(textarea);

// Keyboard
const keyboard = document.createElement('div');
keyboard.className = 'keyboard';
keyboard.id = 'keyboard';
main.append(keyboard);

for (let i = 0; i < 5; i++) {
  const keyboardRow = document.createElement('div');
  keyboardRow.className = 'keyboard__row';
  keyboard.append(keyboardRow);

  for (let j = 0; j < keys[i].length; j++) {
    // Keyboard key
    const keyboardKey = document.createElement('div');
    keyboardKey.className = 'keyboard__key';
    keyboardKey.classList.add(keys[i][j]);
    keyboardRow.append(keyboardKey);
    // Langs
    for (let k = 0; k < lang.length; k++) {
      const spanLang = document.createElement('span');
      const isHidden = lang[k] === curLang ? '' : ' hidden';
      spanLang.className = lang[k] + isHidden;
      keyboardKey.append(spanLang);
      // caseDown
      const caseDown = document.createElement('span');
      caseDown.className = 'caseDown';
      caseDown.textContent = keysObj[keys[i][j]][lang[k]].caseDown;
      spanLang.append(caseDown);
      // caseUp
      const caseUp = document.createElement('span');
      caseUp.className = 'caseUp hidden';
      caseUp.textContent = keysObj[keys[i][j]][lang[k]].caseUp;
      spanLang.append(caseUp);
      // caseUp
      const caps = document.createElement('span');
      caps.className = 'caps hidden';
      caps.textContent = keysObj[keys[i][j]][lang[k]].caps;
      spanLang.append(caps);
      // shiftCaps
      const shiftCaps = document.createElement('span');
      shiftCaps.className = 'shiftCaps hidden';
      shiftCaps.textContent = keysObj[keys[i][j]][lang[k]].shiftCaps;
      spanLang.append(shiftCaps);
    }
  }
}

// Footer
const footer = document.createElement('footer');
footer.className = 'footer';
main.after(footer);

// Footer text
const p1 = document.createElement('p');
const p2= document.createElement('p');
p1.className = 'footer__text';
p2.className = 'footer__text';
footer.append(p1);
footer.append(p2);
p1.textContent = 'Для смены языка используйте сочетание Left Ctrl + Shift';
p2.textContent = 'Клавиатура создана в операционной системе Windows';


document.addEventListener('mouseover', (evt) => {
  textarea.focus();
});

document.addEventListener('click', (evt) => {
  textarea.focus();
});

keyboard.addEventListener('click', (evt) => {
  textarea.focus();
  if (evt.target.closest('.keyboard__key')) {

    const charCode = evt.target.closest('.keyboard__key').classList[1];
    const char = keysObj[charCode][curLang][curMode];
    let value = textarea.value;
    let start;
    let end;
    let replace;
    if (textarea.selectionStart == textarea.selectionEnd) {
      start = end = textarea.selectionStart;
      replace = start - 1;
    } else {
      start = textarea.selectionStart;
      end = textarea.selectionEnd;
      replace = start;
    }
    if (specialKeys.includes(charCode)) {
      switch (charCode) {
        case "Backspace":
          if (start > 0 && start <= value.length) {
            value = value.slice(0, replace) + value.slice(end, value.length),
            textarea.value = value;
            textarea.selectionStart = replace;
            textarea.selectionEnd = replace;
          };
          break;
      }
    } else {
      if (start >= 0 && start <= value.length) {
        textarea.value = value.slice(0, start) + char + value.slice(end, value.length);
        textarea.selectionStart = start + char.length;
        textarea.selectionEnd = start + char.length;
      } else {
        textarea.value += char;
      }
    }


  }
});

