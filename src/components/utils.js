import { keysObj, specialKeys } from './keys';

export const focusToTextArea = () => {
  const textarea = document.querySelector('.textarea');
  textarea.focus();
};

// Inserting character based on language and mode
export function insertSymbol(key, curLang, curMode) {
  const textarea = document.querySelector('.textarea');
  const charCode = key.classList[1];
  const char = keysObj[charCode][curLang][curMode];
  let { value } = textarea;
  let start;
  let end;
  let replaceLeft;
  let replaceRight;

  if (textarea.selectionStart === textarea.selectionEnd) {
    start = textarea.selectionStart;
    end = textarea.selectionStart;
    replaceLeft = start - 1;
    replaceRight = end + 1;
  } else {
    start = textarea.selectionStart;
    end = textarea.selectionEnd;
    replaceLeft = start;
    replaceRight = end;
  }

  if (specialKeys.includes(charCode)) {
    switch (charCode) {
      case 'Backspace':
        if (start >= 0 && start <= value.length) {
          value = value.slice(0, replaceLeft) + value.slice(end, value.length);
          textarea.value = value;
          textarea.selectionStart = replaceLeft;
          textarea.selectionEnd = replaceLeft;
        }
        break;
      case 'Delete':
        if (start >= 0 && start <= value.length - 1) {
          value = value.slice(0, start) + value.slice(replaceRight, value.length);
          textarea.value = value;
          textarea.selectionStart = start;
          textarea.selectionEnd = start;
        }
        break;
      case 'Enter':
        if (start >= 0 && start <= value.length) {
          value = `${value.slice(0, start)}\n${value.slice(end, value.length)}`;
          textarea.value = value;
          textarea.selectionStart = start + 1;
          textarea.selectionEnd = start + 1;
        } else {
          textarea.value += '\n';
        }
        break;
      case 'Tab':
        if (start >= 0 && start <= value.length) {
          value = `${value.slice(0, start)}    ${value.slice(end, value.length)}`;
          textarea.value = value;
          textarea.selectionStart = start + 4;
          textarea.selectionEnd = start + 4;
        } else {
          textarea.value += '    ';
        }
        break;
        // no default
    }
  } else if (start >= 0 && start <= value.length) {
    textarea.value = value.slice(0, start) + char + value.slice(end, value.length);
    textarea.selectionStart = start + char.length;
    textarea.selectionEnd = start + char.length;
  } else {
    textarea.value += char;
  }
}
