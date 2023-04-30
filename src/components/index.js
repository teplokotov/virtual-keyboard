import '../pages/index.css';
import {  drawKeyboard } from './keyboard.js';
import {  curLang, setLang } from './langSwitcher.js';
import {  curMode } from './modeSwitcher.js';
import {  focusTo } from './utils.js';
import {  handlerMouseDown, handlerMouseUp, handlerKeydown, handlerKeyUp } from './handlers.js';

setLang(curLang, curMode.mode);
drawKeyboard();

document.addEventListener('mouseover', evt => focusTo(textarea));
document.addEventListener('click', evt => focusTo(textarea));
document.addEventListener('mousedown', handlerMouseDown);
document.addEventListener('mouseup', handlerMouseUp);
document.addEventListener('keydown', handlerKeydown);
document.addEventListener('keyup', handlerKeyUp);
