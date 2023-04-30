import '../pages/index.css';
import { drawKeyboard } from './keyboard';
import { curLang, setLang } from './langSwitcher';
import { curMode } from './modeSwitcher';
import { focusToTextArea } from './utils';
import {
  handlerMouseDown, handlerMouseUp, handlerKeydown, handlerKeyUp,
} from './handlers';

setLang(curLang, curMode.mode);
drawKeyboard();

document.addEventListener('mouseover', focusToTextArea);
document.addEventListener('click', focusToTextArea);
document.addEventListener('mousedown', handlerMouseDown);
document.addEventListener('mouseup', handlerMouseUp);
document.addEventListener('keydown', handlerKeydown);
document.addEventListener('keyup', handlerKeyUp);
