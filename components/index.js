import {  keys, keysObj } from './keys.js'

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

// const keysObj = {
//   Backquote: {
//     rus: {
//       caseDown: 'ё',
//       caseUp: 'Ё',
//       caps: 'Ё',
//       shiftCaps: 'ё'
//     },
//     eng: {
//       caseDown: '`',
//       caseUp: '~',
//       caps: '`',
//       shiftCaps: '~'
//     }
//   }
// }

// Keyboard row
// x5
const keyboardRow = document.createElement('div');
keyboardRow.className = 'keyboard__row row';
keyboard.append(keyboardRow);
// Keyboard key
const keyboardKey = document.createElement('div');
keyboardKey.className = 'keyboard__key key';
keyboardKey.classList.add('Backquote');
keyboardRow.append(keyboardKey);
// rus / eng
const rus = document.createElement('span');
rus.className = 'rus';
keyboardKey.append(rus);
// caseDown
const caseDown = document.createElement('span');
caseDown.className = 'caseDown';
rus.append(caseDown);
// caseUp
const caseUp = document.createElement('span');
caseUp.className = 'caseUp';
rus.append(caseUp);
// caseUp
const caps = document.createElement('span');
caps.className = 'caps';
rus.append(caps);
// shiftCaps
const shiftCaps = document.createElement('span');
shiftCaps.className = 'shiftCaps';
rus.append(shiftCaps);

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
