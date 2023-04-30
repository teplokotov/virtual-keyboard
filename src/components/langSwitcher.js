// eslint-disable-next-line import/no-cycle
import { selectAllLangSpan } from './keyboard';
import { setMode } from './modeSwitcher';

// Initial setting language after load page
// eslint-disable-next-line import/no-mutable-exports
export let curLang = window.localStorage.getItem('lang') ? window.localStorage.getItem('lang') : 'rus';

// Saving language to local storage
export const saveLang = (lang) => {
  window.localStorage.setItem('lang', lang);
};

// Switching language
export const setLang = (lang, curMode) => {
  const allLangSpan = selectAllLangSpan();
  switch (lang) {
    case 'rus':
      allLangSpan.engSpans.forEach((item) => item.classList.add('hidden'));
      allLangSpan.rusSpans.forEach((item) => item.classList.remove('hidden'));
      break;
    case 'eng':
      allLangSpan.engSpans.forEach((item) => item.classList.remove('hidden'));
      allLangSpan.rusSpans.forEach((item) => item.classList.add('hidden'));
      break;
    // no default
  }
  setMode(curMode);
  curLang = lang;
  saveLang(curLang);
};
