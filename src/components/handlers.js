import { curLang, setLang } from './langSwitcher';
import {
  curMode, setShiftCaps, setModeForCaps, setModeForShift,
} from './modeSwitcher';
import { insertSymbol } from './utils';

let pressedKey;

export const handlerMouseDown = (evt) => {
  const key = evt.target.closest('.keyboard__key');
  if (key) {
    pressedKey = key;
    const isCapsLock = pressedKey.classList.contains('CapsLock');
    const isShiftLeft = pressedKey.classList.contains('ShiftLeft');
    const isShiftRight = pressedKey.classList.contains('ShiftRight');
    const isToggleLang = pressedKey.classList.contains('ToggleLang');

    if (isCapsLock && curMode.mode !== 'caseUp') {
      key.classList.toggle('pressed');
      setModeForCaps(curMode);
    } else if ((isShiftLeft || isShiftRight) && curMode.mode !== 'caps') {
      key.classList.toggle('pressed');
      setModeForShift(curMode);
    } else if ((isCapsLock && curMode.mode === 'caseUp') || ((isShiftLeft || isShiftRight) && curMode.mode === 'caps')) {
      key.classList.toggle('pressed');
      curMode.mode = 'shiftCaps';
      setShiftCaps();
    } else if (isToggleLang) {
      // eslint-disable-next-line no-unused-expressions
      curLang === 'rus' ? setLang('eng', curMode.mode) : setLang('rus', curMode.mode);
      key.classList.add('pressed');
    } else {
      key.classList.add('pressed');
    }

    insertSymbol(key, curLang, curMode.mode);
  }
};

export const handlerMouseUp = () => {
  if (typeof pressedKey === 'object' && pressedKey.className.includes('pressed')) {
    if (!pressedKey.classList.contains('CapsLock') && !pressedKey.classList.contains('ShiftLeft') && !pressedKey.classList.contains('ShiftRight')) {
      pressedKey.classList.remove('pressed');
    }
  }
};

export const handlerKeydown = (evt) => {
  // eslint-disable-next-line no-unused-expressions
  if (evt.ctrlKey && evt.key === 'Alt') curLang === 'rus' ? setLang('eng', curMode.mode) : setLang('rus', curMode.mode);

  evt.preventDefault();
  pressedKey = evt.code;
  const key = document.querySelector(`.${evt.code}`);

  const isCapsLock = pressedKey === 'CapsLock';
  const isShiftLeft = pressedKey === 'ShiftLeft';
  const isShiftRight = pressedKey === 'ShiftRight';

  if (isCapsLock && curMode.mode !== 'caseUp') {
    key.classList.toggle('pressed');
    setModeForCaps(curMode);
  } else if ((isShiftLeft || isShiftRight) && curMode.mode !== 'caps') {
    key.classList.toggle('pressed');
    setModeForShift(curMode);
  } else if ((isCapsLock && curMode.mode === 'caseUp') || ((isShiftLeft || isShiftRight) && curMode.mode === 'caps')) {
    key.classList.toggle('pressed');
    curMode.mode = 'shiftCaps';
    setShiftCaps();
  } else {
    key.classList.add('pressed');
  }

  insertSymbol(key, curLang, curMode.mode);
};

export const handlerKeyUp = (evt) => {
  pressedKey = evt.code;
  const key = document.querySelector(`.${evt.code}`);

  const isCapsLock = pressedKey === 'CapsLock';
  const isShiftLeft = pressedKey === 'ShiftLeft';
  const isShiftRight = pressedKey === 'ShiftRight';

  if (!isCapsLock && !isShiftLeft && !isShiftRight) key.classList.remove('pressed');

  if (pressedKey === 'ShiftLeft' || pressedKey === 'ShiftRight') {
    key.classList.remove('pressed');
    setModeForShift(curMode);
  }
};
