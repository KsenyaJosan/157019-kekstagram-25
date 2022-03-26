const isEscapeKey = (evt) => evt.key === 'Escape';

const checkDuplicate = (items) => {
  for (let i = 0; i < items.length; i++) {
    if (items.indexOf(items[i], i + 1) !== -1) { // > -1
      return true;
    }
  }

  return false;
};

export { isEscapeKey, checkDuplicate };
