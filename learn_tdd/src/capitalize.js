const capitalize = (text) => {
  if (text === '') {
    return '';
  }

  const firstChar = text[0].toUpperCase();
  const resSubstring = text.slice(1);

  return `${firstChar}${resSubstring}`;
};

export default capitalize;