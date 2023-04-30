// eslint-disable-next-line import/no-cycle
import { selectAllSwitchBtns } from './keyboard';

export const curMode = { mode: 'caseDown' };

// Redrawing button to case down mode (basic mode)
export const setCaseDown = () => {
  const allSwitchBtns = selectAllSwitchBtns();
  allSwitchBtns.capsAll.forEach((item) => item.classList.add('hidden'));
  allSwitchBtns.caseDownAll.forEach((item) => item.classList.remove('hidden'));
  allSwitchBtns.caseUpAll.forEach((item) => item.classList.add('hidden'));
  allSwitchBtns.shiftCapsAll.forEach((item) => item.classList.add('hidden'));
};

// Redrawing button if press/click 'Shift'
export const setCaseUp = () => {
  const allSwitchBtns = selectAllSwitchBtns();
  allSwitchBtns.capsAll.forEach((item) => item.classList.add('hidden'));
  allSwitchBtns.caseDownAll.forEach((item) => item.classList.add('hidden'));
  allSwitchBtns.caseUpAll.forEach((item) => item.classList.remove('hidden'));
  allSwitchBtns.shiftCapsAll.forEach((item) => item.classList.add('hidden'));
};

// Redrawing button if press/click 'CapsLock'
export const setCaps = () => {
  const allSwitchBtns = selectAllSwitchBtns();
  allSwitchBtns.capsAll.forEach((item) => item.classList.remove('hidden'));
  allSwitchBtns.caseDownAll.forEach((item) => item.classList.add('hidden'));
  allSwitchBtns.caseUpAll.forEach((item) => item.classList.add('hidden'));
  allSwitchBtns.shiftCapsAll.forEach((item) => item.classList.add('hidden'));
};

// Redrawing button if press/click 'Shift' + 'CapsLock'
export const setShiftCaps = () => {
  const allSwitchBtns = selectAllSwitchBtns();
  allSwitchBtns.capsAll.forEach((item) => item.classList.add('hidden'));
  allSwitchBtns.caseDownAll.forEach((item) => item.classList.add('hidden'));
  allSwitchBtns.caseUpAll.forEach((item) => item.classList.add('hidden'));
  allSwitchBtns.shiftCapsAll.forEach((item) => item.classList.remove('hidden'));
};

// Setting dafault mode
export const setMode = (mode) => {
  switch (mode.mode) {
    case 'caseDown':
      setCaseDown();
      break;
    case 'caseUp':
      setCaseUp();
      break;
    case 'caps':
      setCaps();
      break;
    case 'shiftCaps':
      setShiftCaps();
      break;
    // no default
  }
};

// Setting mode for CapsLock
export const setModeForCaps = (mode) => {
  switch (mode.mode) {
    case 'caps':
      curMode.mode = 'caseDown';
      setCaseDown();
      break;
    case 'shiftCaps':
      curMode.mode = 'caseUp';
      setCaseUp();
      break;
    default:
      curMode.mode = 'caps';
      setCaps();
  }
};

// Setting mode for Shift
export const setModeForShift = (mode) => {
  switch (mode.mode) {
    case 'caseUp':
      curMode.mode = 'caseDown';
      setCaseDown();
      break;
    case 'shiftCaps':
      curMode.mode = 'caps';
      setCaps();
      break;
    default:
      curMode.mode = 'caseUp';
      setCaseUp();
  }
};
