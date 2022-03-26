import { validateUniqueHashtags, validateSymbolsHashtags, validateTextHashtagsEmpty, validateCountHashtags, validateSpace } from './validators.js';

const form = document.querySelector('.img-upload__form');
const textHashtags = document.querySelector('.text__hashtags');

const pristine = new Pristine(form, {
  classTo: 'text-info',
  errorTextParent: 'text-info',
  errorTextClass: 'error__hash-tag',
});


pristine.addValidator(textHashtags, validateTextHashtagsEmpty, '', 1, true);
pristine.addValidator(textHashtags, validateSpace, 'Забыл о пробелах', 1, true);
pristine.addValidator(textHashtags, validateCountHashtags, 'Не более 5 хештегов', 1, true);
pristine.addValidator(textHashtags, validateUniqueHashtags, 'Все хештеги должны быть разными', 1, true);
pristine.addValidator(textHashtags, validateSymbolsHashtags, 'После # используй буквы и цифры', 1, true);

form.addEventListener('submit', (evt) => {
  const value = textHashtags.value.trim();
  const isValid = pristine.validate();
  if (value === '') {
    pristine.validate();
  } else {
    if (!isValid) {
      evt.preventDefault();
    }
  }
});
