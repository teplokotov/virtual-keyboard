import {  selectAllLangSpan  } from './keyboard.js';
import {  setMode } from './modeSwitcher.js';

// Initial setting language after load page
export let curLang = window.localStorage.getItem('lang') ? window.localStorage.getItem('lang') : 'rus';

// Saving language to local storage
export const saveLang = (curLang) => {
  window.localStorage.setItem('lang', curLang);
}

// Switching language
export const setLang = (lang, curMode) => {
  const allLangSpan = selectAllLangSpan();
  switch (lang) {
    case 'rus':
      allLangSpan.engSpans.forEach(item => item.classList.add('hidden'));
      allLangSpan.rusSpans.forEach(item => item.classList.remove('hidden'));
      break;
    case 'eng':
      allLangSpan.engSpans.forEach(item => item.classList.remove('hidden'));
      allLangSpan.rusSpans.forEach(item => item.classList.add('hidden'));
      break;
  }
  setMode(curMode);
  curLang = lang;
  saveLang(curLang);
}
